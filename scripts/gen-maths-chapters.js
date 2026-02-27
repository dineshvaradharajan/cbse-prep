const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'maths');
const outPath = path.join(__dirname, '..', 'maths', 'chapters.html');

// ── Load all chapter JSONs in order ──
const files = fs.readdirSync(dataDir)
  .filter(f => f.endsWith('.json'))
  .sort((a, b) => {
    const na = parseInt(a.match(/ch(\d+)/)[1]);
    const nb = parseInt(b.match(/ch(\d+)/)[1]);
    return na - nb;
  });

const chapters = files.map(f =>
  JSON.parse(fs.readFileSync(path.join(dataDir, f), 'utf8'))
);

// ── Helpers ──
function esc(s) {
  if (!s) return '';
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/** Convert ASCII math notation to proper Unicode symbols */
function mathFmt(s) {
  if (!s) return '';
  let t = s;
  // Vectors (before Greek to avoid conflicts)
  t = t.replace(/i_hat/g, 'î'); t = t.replace(/j_hat/g, 'ĵ');
  t = t.replace(/k_hat/g, 'k̂'); t = t.replace(/n_hat/g, 'n̂');
  t = t.replace(/b_hat/g, 'b̂'); t = t.replace(/a_hat/g, 'â');
  t = t.replace(/0_vec/g, '0⃗');
  // Greek letters
  t = t.replace(/\btheta\b/g, 'θ'); t = t.replace(/\balpha\b/g, 'α');
  t = t.replace(/\bbeta\b/g, 'β'); t = t.replace(/\bgamma\b/g, 'γ');
  t = t.replace(/\bdelta\b/g, 'δ'); t = t.replace(/\bDelta\b/g, 'Δ');
  t = t.replace(/\blambda\b/g, 'λ'); t = t.replace(/\bmu\b/g, 'μ');
  t = t.replace(/\bsigma\b/g, 'σ'); t = t.replace(/\bpi\b/g, 'π');
  t = t.replace(/\bphi\b/g, 'φ'); t = t.replace(/\bepsilon\b/g, 'ε');
  t = t.replace(/\bomega\b/g, 'ω');
  // Operators
  t = t.replace(/\bintegral\b/g, '∫'); t = t.replace(/\bsum\b/g, '∑');
  t = t.replace(/\binfinity\b/g, '∞');
  t = t.replace(/!=/g, '≠'); t = t.replace(/>=/g, '≥'); t = t.replace(/<=/g, '≤');
  t = t.replace(/\s=>\s/g, ' ⇒ '); t = t.replace(/\s->\s/g, ' → ');
  t = t.replace(/\(subset of\)/g, '⊂'); t = t.replace(/\biff\b/g, '⟺');
  t = t.replace(/(?<=\s)in(?=\s)/g, '∈');
  t = t.replace(/([A-Z)]) n ([A-Z(])/g, '$1 ∩ $2'); t = t.replace(/([A-Z)]) u ([A-Z(])/g, '$1 ∪ $2');
  // sqrt
  t = t.replace(/sqrt\(([^)]+)\)/g, '√($1)');
  // Superscripts
  const supMap = {'0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹','n':'ⁿ','i':'ⁱ','r':'ʳ','x':'ˣ','+':'⁺','-':'⁻'};
  t = t.replace(/\^\(-1\)/g, '⁻¹');
  t = t.replace(/\^\(([^)]+)\)/g, '<sup>$1</sup>');
  t = t.replace(/\^([0-9a-z])/g, (_, c) => supMap[c] || '<sup>' + c + '</sup>');
  // Subscripts
  const subMap = {'0':'₀','1':'₁','2':'₂','3':'₃','4':'₄','5':'₅','6':'₆','7':'₇','8':'₈','9':'₉','i':'ᵢ','j':'ⱼ','k':'ₖ','n':'ₙ','m':'ₘ','r':'ᵣ','p':'ₚ','a':'ₐ','e':'ₑ','o':'ₒ','x':'ₓ'};
  t = t.replace(/_{([^}]+)}/g, (_, inner) => { let sub=''; for(const c of inner) sub += subMap[c]||c; return sub; });
  t = t.replace(/_([0-9a-z]{2,3})(?=[^a-z0-9_]|$)/g, (_, chars) => { let sub=''; for(const c of chars) sub += subMap[c]||c; return sub; });
  t = t.replace(/_([0-9a-z])(?=[^a-z0-9_]|$)/g, (_, c) => subMap[c] || '_' + c);
  // Matrix semicolons
  if (t.includes(';') && (t.includes('[') || t.includes('|'))) t = t.replace(/;\s*/g, ' ┃ ');
  // Multiplication
  t = t.replace(/\s\*\s/g, ' · '); t = t.replace(/(\w)\*(\w)/g, '$1·$2');
  // HTML escape then restore <sup>
  t = t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  t = t.replace(/&lt;sup&gt;/g, '<sup>').replace(/&lt;\/sup&gt;/g, '</sup>');
  return t;
}

function slug(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '').replace(/^-+/, '');
}

// Get subtopics string from sections
function getSubtopics(ch) {
  return ch.sections
    .filter(s => !s.title.toLowerCase().includes('introduction'))
    .map(s => s.title)
    .join(' · ');
}

// Gather all definitions from all sections
function getAllDefinitions(ch) {
  const defs = [];
  ch.sections.forEach(s => {
    (s.definitions || []).forEach(d => {
      const term = d.term || d.name || '';
      const def = d.definition || d.statement || '';
      if (term && def) defs.push({ term, definition: def });
    });
  });
  return defs;
}

// Gather all formulas from all sections
function getAllFormulas(ch) {
  const formulas = [];
  ch.sections.forEach(s => {
    (s.formulas || []).forEach(f => {
      if (typeof f === 'string') {
        formulas.push({ name: '', formula: f, note: '' });
      } else {
        formulas.push({
          name: f.name || '',
          formula: f.formula || '',
          note: f.notes || f.note || f.description || ''
        });
      }
    });
  });
  return formulas;
}

// Gather all theorems from all sections
function getAllTheorems(ch) {
  const thms = [];
  ch.sections.forEach(s => {
    (s.theorems || []).forEach(t => {
      thms.push({
        name: t.name || t.id || '',
        statement: t.statement || ''
      });
    });
  });
  return thms;
}

// Gather all key_points from all sections
function getAllKeyPoints(ch) {
  const pts = [];
  ch.sections.forEach(s => {
    (s.key_points || []).forEach(p => {
      if (typeof p === 'string') pts.push(p);
    });
  });
  return pts;
}

// Count total questions
function getQuestionCount(ch) {
  return (ch.exercises || []).reduce((a, e) => a + e.questions.length, 0);
}

// ── Banner colours (cycle 3 colours within purple palette) ──
const bannerStyles = [
  { bg: '#f5f3ff', color: '#3b0764' },  // light violet
  { bg: '#ede9fe', color: '#4c1d95' },  // medium violet
  { bg: '#e8e0ff', color: '#5b21b6' },  // deeper violet
];

// ── Chapter marks (approximate CBSE 2024-25 weightage) ──
const chapterMarks = {
  1: 3, 2: 3, 3: 5, 4: 5, 5: 8, 6: 8, 7: 8, 8: 5, 9: 5, 10: 5, 11: 5, 12: 5, 13: 8
};

// ── Build must-read section ──
// Top 5 key points per chapter or from summary
function buildMustRead(ch) {
  const keyPts = getAllKeyPoints(ch);
  const summary = ch.summary || [];
  // Use key points first, supplement with summary
  const pool = [...keyPts];
  summary.forEach(s => { if (!pool.includes(s)) pool.push(s); });
  const top5 = pool.slice(0, 5);
  if (top5.length === 0) return '';

  let html = `  <div class="mustread">
    <h4>🎯 Must-Read — Key concepts for this chapter</h4>
    <ol>\n`;
  top5.forEach(p => {
    html += `      <li>${mathFmt(p)}</li>\n`;
  });
  html += `    </ol>
  </div>\n`;
  return html;
}

// ── Build summary table ──
function buildSummaryTable(ch) {
  const defs = getAllDefinitions(ch);
  const keyPts = getAllKeyPoints(ch);
  const summary = ch.summary || [];

  // Build rows from definitions first, then summary items
  const rows = [];
  defs.forEach(d => {
    rows.push({
      concept: d.term,
      fact: d.definition,
      example: ''
    });
  });

  // Add summary items not already covered
  summary.forEach(s => {
    // Extract concept from beginning if possible
    const m = s.match(/^(.+?) is (.+)/);
    if (m) {
      rows.push({ concept: m[1], fact: m[2], example: '' });
    } else {
      rows.push({ concept: '', fact: s, example: '' });
    }
  });

  if (rows.length === 0) return '';

  // Limit to ~15 rows for readability
  const displayRows = rows.slice(0, 15);

  let html = `  <h3 style="font-family:'Newsreader',serif;font-size:1.1rem;color:var(--ink);margin-bottom:.75rem">📖 Chapter Summary</h3>
  <table class="sum-table">
    <thead><tr style="background:#7c3aed"><th>Concept</th><th>Key Fact</th></tr></thead>
    <tbody>\n`;
  displayRows.forEach(r => {
    const concept = r.concept ? `<strong>${esc(r.concept)}</strong>` : '';
    html += `      <tr><td>${concept}</td><td>${mathFmt(r.fact)}</td></tr>\n`;
  });
  html += `    </tbody>
  </table>\n`;
  return html;
}

// ── Build formulas block ──
function buildFormulasBlock(ch) {
  const formulas = getAllFormulas(ch);
  if (formulas.length === 0) return '';

  // Limit display
  const display = formulas.slice(0, 20);

  let html = `    <div class="content-block">
      <div class="block-head" style="background:#f5f3ff;color:#6d28d9">📐 Key Formulas</div>
      <div class="block-body">
        <ul class="formula-list">\n`;
  display.forEach(f => {
    html += `          <li>\n`;
    if (f.name) html += `            <span class="fl-name">${esc(f.name)}</span>\n`;
    html += `            <code class="fl-eq">${mathFmt(f.formula)}</code>\n`;
    if (f.note) html += `            <span class="fl-note">${mathFmt(f.note)}</span>\n`;
    html += `          </li>\n`;
  });
  html += `        </ul>
      </div>
    </div>\n`;
  return html;
}

// ── Build theorems block ──
function buildTheoremsBlock(ch) {
  const thms = getAllTheorems(ch);
  if (thms.length === 0) return '';

  let html = `    <div class="content-block">
      <div class="block-head" style="background:#fffbeb;color:#92400e">📜 Important Theorems</div>
      <div class="block-body">
        <ul class="tip-list">\n`;
  thms.forEach(t => {
    html += `          <li><span class="tip-icon">📌</span><div>`;
    if (t.name) html += `<strong>${esc(t.name)}:</strong> `;
    html += `${mathFmt(t.statement)}</div></li>\n`;
  });
  html += `        </ul>
      </div>
    </div>\n`;
  return html;
}

// ── Build tips box from key points ──
function buildTipsBox(ch) {
  const keyPts = getAllKeyPoints(ch);
  // Use items beyond the first 5 (those go in must-read)
  const tips = keyPts.slice(5, 12);
  if (tips.length === 0) return '';

  let html = `  <div class="trick-box">
    <h4>💡 Quick Tips & Memory Aids</h4>
    <ul style="margin-top:.4rem;margin-left:1rem">\n`;
  tips.forEach(t => {
    html += `      <li>${mathFmt(t)}</li>\n`;
  });
  html += `    </ul>
  </div>\n`;
  return html;
}

// ── Build exercise stats box ──
function buildExerciseInfo(ch) {
  const exs = ch.exercises || [];
  if (exs.length === 0) return '';

  const totalQ = getQuestionCount(ch);
  const mcqCount = exs.reduce((a, e) =>
    a + e.questions.filter(q => q.type === 'mcq').length, 0);
  const longCount = exs.reduce((a, e) =>
    a + e.questions.filter(q => q.type === 'long').length, 0);
  const shortCount = exs.reduce((a, e) =>
    a + e.questions.filter(q => q.type === 'short').length, 0);

  let html = `  <div class="mistake-box" style="border-left-color:#7c3aed">
    <h4>📝 Exercise Overview</h4>
    <ul>
      <li><strong>${totalQ} total questions</strong> across ${exs.length} exercise${exs.length > 1 ? 's' : ''}</li>\n`;
  if (longCount > 0) html += `      <li>${longCount} long-answer questions (proofs, show-that, derivations)</li>\n`;
  if (shortCount > 0) html += `      <li>${shortCount} short-answer questions</li>\n`;
  if (mcqCount > 0) html += `      <li>${mcqCount} multiple-choice questions</li>\n`;
  html += `    </ul>
  </div>\n`;
  return html;
}

// ── Build one chapter section ──
function buildChapter(ch, index) {
  const id = slug(ch.title);
  const isActive = index === 0 ? ' active' : '';
  const style = bannerStyles[index % bannerStyles.length];
  const marks = chapterMarks[ch.chapter] || 5;

  let html = `<!-- ${'═'.repeat(30)} ${ch.title.toUpperCase()} ${'═'.repeat(30)} -->
<div class="ch-section${isActive}" id="${id}">

  <div class="ch-banner" style="background:${style.bg};color:${style.color}">
    <div class="ch-banner-left">
      <div class="ch-num">Chapter ${ch.chapter}</div>
      <div class="ch-title">${esc(ch.title)}</div>
      <div class="ch-sub">${esc(getSubtopics(ch))}</div>
    </div>
    <div class="ch-marks-badge" style="color:#6d28d9">${marks}<span>marks</span></div>
  </div>

`;

  html += buildMustRead(ch);
  html += '\n';
  html += buildSummaryTable(ch);
  html += '\n';

  // Block grid: formulas + theorems side by side
  const formulasBlock = buildFormulasBlock(ch);
  const theoremsBlock = buildTheoremsBlock(ch);
  if (formulasBlock || theoremsBlock) {
    html += `  <div class="block-grid">\n`;
    html += formulasBlock;
    html += theoremsBlock;
    html += `  </div>\n\n`;
  }

  html += buildTipsBox(ch);
  html += '\n';
  html += buildExerciseInfo(ch);

  html += `</div>\n\n`;
  return html;
}

// ── Build tab bar ──
function buildTabBar() {
  let html = `<div class="chapter-bar">
  <div class="chapter-tabs" id="chapterTabs">\n`;
  chapters.forEach((ch, i) => {
    const id = slug(ch.title);
    const active = i === 0 ? ' active' : '';
    html += `    <button class="tab${active}" data-tab="${id}" onclick="showCh('${id}',this)">${ch.chapter}. ${esc(ch.title)}</button>\n`;
  });
  html += `  </div>
  <button class="more-btn" id="moreBtn" onclick="toggleMoreDropdown()">More ▾</button>
  <div class="more-dropdown" id="moreDropdown"></div>
</div>\n\n`;
  return html;
}

// ── Assemble full page ──
const allChapterNames = chapters.map(c => c.title).join(', ');
const totalQuestions = chapters.reduce((a, c) => a + getQuestionCount(c), 0);

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400&family=Lato:wght@400;700;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../css/base.css">
<link rel="stylesheet" href="../css/chapter.css">
<style>:root{
  --subject-color:#7c3aed;--subject-bg:#f5f3ff;--subject-border:#c4b5fd;--subject-text:#6d28d9;
  --c1:#7c3aed;--c2:#a855f7;--c3:#6d28d9;
}</style>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Chapter notes for Mathematics — all 13 chapters covering Relations, Calculus, Algebra, Vectors, Probability for CBSE Class 12 board exam.">
<meta name="keywords" content="maths class 12, CBSE XII mathematics, calculus integration derivatives probability">
<meta name="author" content="Dinesh Varadharajan">
<meta name="robots" content="index, follow">
<meta property="og:title" content="Mathematics Chapter Notes | CBSE Class 12">
<meta property="og:description" content="Chapter notes for Mathematics — 13 chapters with formulas, theorems, tips and exercise overviews for CBSE Class 12.">
<meta property="og:type" content="website">
<link rel="canonical" href="https://ncert.myailab.space/maths/chapters.html">
<title>Mathematics Chapter Notes | CBSE Class 12</title>
</head>
<body>
<div class="container">
<a href="../index.html" class="back-link">← Back to Hub</a>

<h1>Mathematics Chapters</h1>
<p class="subtitle">Chapter summaries, key formulas, important theorems, exam tips and exercise overviews for all 13 chapters — ${totalQuestions} NCERT questions covered.</p>

${buildTabBar()}
${chapters.map((ch, i) => buildChapter(ch, i)).join('')}
</div><!-- /container --><script src="../js/chapter-nav.js"></script><script src="../js/mobile-dropdowns.js"></script>

<footer class="site-footer">Released under the <a href="https://github.com/dineshvaradharajan/cbse-prep/blob/main/LICENSE" target="_blank">MIT License</a> &middot; &copy; 2026 Dinesh Varadharajan &middot; Built for CBSE XII revision</footer>
</body>
</html>`;

fs.writeFileSync(outPath, html, 'utf8');
console.log('Written to', outPath);
console.log('Chapters:', chapters.length, '| Total questions:', totalQuestions);
