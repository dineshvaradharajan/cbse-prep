#!/usr/bin/env node
/**
 * Generate all-chemistry MCQ mock tests from PYQ data.
 * Reads data/pyq/*.json, filters in-syllabus MCQs, distributes into
 * 5 tests of 16 questions each with mixed branches.
 *
 * Usage: node scripts/gen-all-mcq-tests.js
 * Output: data/all-chemistry-mock-tests.js
 */

const fs = require('fs');
const path = require('path');

const PYQ_DIR = path.join(__dirname, '..', 'data', 'pyq');
const OUT_FILE = path.join(__dirname, '..', 'data', 'all-chemistry-mock-tests.js');

// ── Chapter → Branch mapping ──────────────────────────────────────
const BRANCH_MAP = {
  // Physical
  'Solutions':                         'Physical',
  'Electrochemistry':                  'Physical',
  'Chemical Kinetics':                 'Physical',
  'Solid State':                       'Physical',
  'Surface Chemistry':                 'Physical',

  // Organic
  'Haloalkanes':                       'Organic',
  'Haloalkanes and Haloarenes':        'Organic',
  'Alcohols Phenols Ethers':           'Organic',
  'Alcohols Phenols and Ethers':       'Organic',
  'Aldehydes Ketones Carboxylic Acids':'Organic',
  'Aldehydes Ketones and Carboxylic Acids': 'Organic',
  'Amines':                            'Organic',
  'Biomolecules':                      'Organic',
  'Polymers':                          'Organic',
  'Chemistry in Everyday Life':        'Organic',

  // Inorganic
  'd&f Block':                         'Inorganic',
  'd&f Block Elements':                'Inorganic',
  'Coordination Compounds':            'Inorganic',
  'p-Block Elements':                  'Inorganic',
  'General Principles of Isolation of Elements': 'Inorganic',
  'General Principles of Metallurgy':  'Inorganic',
};

// ── Parse answer letter from answer text ──────────────────────────
function parseAnswerLetter(answerText, options) {
  if (!answerText) return null;
  const s = answerText.trim();

  // Match patterns like "Option (A)", "(A)", "(a)"
  const m = s.match(/(?:Option\s*)?\(([A-Da-d])\)/i);
  if (m) return m[1].toUpperCase();

  // Match patterns like "A)", "B)" at start of answer
  const m2 = s.match(/^([A-Da-d])\)/);
  if (m2) return m2[1].toUpperCase();

  // Match patterns like "(i) increase" → map to A
  const romanMatch = s.match(/^\(([iv]+)\)/i);
  if (romanMatch) {
    const map = { 'i': 'A', 'ii': 'B', 'iii': 'C', 'iv': 'D' };
    const letter = map[romanMatch[1].toLowerCase()];
    if (letter) return letter;
  }

  return null;
}

// ── Guess difficulty from marks / year ────────────────────────────
function guessDifficulty(q) {
  if (q.marks >= 3) return 'hard';
  if (q.year >= 2023) return 'medium';
  return 'easy';
}

// ── Strip leading option labels like "(A) ", "(a) ", "(i) " ──────
function stripOptionLabel(opt) {
  return opt.replace(/^\s*\([A-Da-d]\)\s*/, '')
            .replace(/^\s*\([iv]+\)\s*/i, '');
}

// ── Clean question text (remove case-study preambles) ─────────────
function cleanQuestionText(text) {
  // If there's a case-based passage, extract only the actual question
  const caseMatch = text.match(/(?:Case[- ]based\b.*?\.\s*)(.+)/is);
  if (caseMatch) {
    // Find the last sentence that ends with ? — that's the actual question
    const parts = text.split(/\n+/);
    const questionPart = parts.find(p => p.trim().endsWith('?'));
    if (questionPart) return questionPart.trim();
  }
  return text;
}

// ── Main ──────────────────────────────────────────────────────────
const files = fs.readdirSync(PYQ_DIR).filter(f => f.endsWith('.json'));
let allMcqs = [];

for (const file of files) {
  const data = JSON.parse(fs.readFileSync(path.join(PYQ_DIR, file), 'utf8'));
  for (const q of data) {
    if (q.type !== 'mcq') continue;
    if (q.outOfSyllabus) continue;
    if (!q.options || q.options.length < 4) continue;

    const branch = BRANCH_MAP[q.chapter];
    if (!branch) continue;

    const answerLetter = parseAnswerLetter(q.answer, q.options);
    if (!answerLetter) continue;

    allMcqs.push({
      chapter: q.chapter,
      branch,
      difficulty: guessDifficulty(q),
      text: cleanQuestionText(q.question),
      options: q.options.slice(0, 4).map(stripOptionLabel),
      answer: answerLetter,
      explanation: q.answer,
      year: q.year,
    });
  }
}

console.log(`Found ${allMcqs.length} valid MCQs`);
console.log(`  Physical: ${allMcqs.filter(q => q.branch === 'Physical').length}`);
console.log(`  Organic:  ${allMcqs.filter(q => q.branch === 'Organic').length}`);
console.log(`  Inorganic: ${allMcqs.filter(q => q.branch === 'Inorganic').length}`);

// ── Shuffle helper ────────────────────────────────────────────────
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ── Distribute into 5 tests of 16 ────────────────────────────────
const NUM_TESTS = 8;
const Q_PER_TEST = 16;

// Group by branch and shuffle each group
const byBranch = { Physical: [], Organic: [], Inorganic: [] };
allMcqs.forEach(q => byBranch[q.branch].push(q));
Object.values(byBranch).forEach(arr => shuffle(arr));

// Allocate per-branch quotas: ~5 Inorganic, ~5 Physical, ~6 Organic per test
// Adjust based on available pool sizes
const inorgPerTest = Math.min(5, Math.floor(byBranch.Inorganic.length / NUM_TESTS));
const physPerTest = Math.min(6, Math.floor(byBranch.Physical.length / NUM_TESTS));
const orgPerTest = Q_PER_TEST - inorgPerTest - physPerTest;

const tests = Array.from({ length: NUM_TESTS }, () => []);

for (let t = 0; t < NUM_TESTS; t++) {
  // Take allocated count from each branch
  tests[t].push(...byBranch.Inorganic.splice(0, inorgPerTest));
  tests[t].push(...byBranch.Physical.splice(0, physPerTest));
  tests[t].push(...byBranch.Organic.splice(0, orgPerTest));

  // If still short of 16, fill from any remaining pool
  while (tests[t].length < Q_PER_TEST) {
    const remaining = [...byBranch.Organic, ...byBranch.Physical, ...byBranch.Inorganic];
    if (remaining.length === 0) break;
    for (const branch of ['Organic', 'Physical', 'Inorganic']) {
      if (tests[t].length >= Q_PER_TEST) break;
      if (byBranch[branch].length > 0) {
        tests[t].push(byBranch[branch].splice(0, 1)[0]);
      }
    }
  }
}

// Shuffle questions within each test
tests.forEach(t => shuffle(t));

const ICONS = ['①', '②', '③', '④', '⑤'];
const testObjects = tests.map((questions, i) => {
  const phys = questions.filter(q => q.branch === 'Physical').length;
  const org = questions.filter(q => q.branch === 'Organic').length;
  const inorg = questions.filter(q => q.branch === 'Inorganic').length;

  return {
    id: i + 1,
    name: `Mock Test ${i + 1}`,
    subtitle: `Physical (${phys}) · Organic (${org}) · Inorganic (${inorg})`,
    icon: ICONS[i],
    duration: 1800,
    questions: questions.map((q, j) => ({
      id: (i + 1) * 100 + j + 1,
      chapter: q.chapter,
      branch: q.branch,
      difficulty: q.difficulty,
      text: q.text,
      options: q.options,
      answer: q.answer,
      explanation: q.explanation,
    })),
  };
});

// ── Write output ──────────────────────────────────────────────────
const jsContent = `/* Chemistry MCQ Mock Tests — All Branches (auto-generated)
   ${NUM_TESTS} tests × ${Q_PER_TEST} MCQs each
   Physical + Organic + Inorganic mixed
   1 mark per correct answer | No negative marking | Duration: 30 minutes
   Generated: ${new Date().toISOString().slice(0, 10)}
*/

const ALL_CHEM_MOCK_TESTS = ${JSON.stringify(testObjects, null, 2)};
`;

fs.writeFileSync(OUT_FILE, jsContent, 'utf8');
console.log(`\nWrote ${OUT_FILE}`);
testObjects.forEach((t, i) => {
  console.log(`  Test ${i + 1}: ${t.questions.length} questions — ${t.subtitle}`);
});
