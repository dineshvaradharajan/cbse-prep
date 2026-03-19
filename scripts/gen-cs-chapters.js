const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'cs');
const outPath = path.join(__dirname, '..', 'cs', 'chapters.html');

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

/** Format code blocks and basic text formatting for CS content */
function fmt(s) {
  if (!s) return '';
  let t = s;
  // HTML escape
  t = t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  // Inline code: `code` → <code>code</code>
  t = t.replace(/`([^`]+)`/g, '<code>$1</code>');
  return t;
}

function slug(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '').replace(/^-+/, '');
}

function getSubtopics(ch) {
  return ch.sections
    .filter(s => !s.title.toLowerCase().includes('introduction'))
    .map(s => s.title)
    .join(' · ');
}

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

function getAllTheorems(ch) {
  const thms = [];
  ch.sections.forEach(s => {
    (s.theorems || []).forEach(t => {
      thms.push({ name: t.name || t.id || '', statement: t.statement || '' });
    });
  });
  return thms;
}

function getAllKeyPoints(ch) {
  const pts = [];
  ch.sections.forEach(s => {
    (s.key_points || []).forEach(p => { if (typeof p === 'string') pts.push(p); });
  });
  return pts;
}

function getQuestionCount(ch) {
  return (ch.exercises || []).reduce((a, e) => a + e.questions.length, 0);
}

// ── Chapter marks (CBSE 2025-26 CS syllabus) ──
const chapterMarks = {
  1: 8, 2: 16, 3: 16, 4: 0, 5: 0, 6: 0, 7: 0, 8: 5, 9: 15, 10: 5, 11: 5, 12: 0, 13: 0
};

// Banner colour cycle (green palette for CS)
const bannerStyles = [
  { bg: '#f0fdf4', color: '#14532d' },
  { bg: '#ecfdf5', color: '#065f46' },
  { bg: '#e6fff0', color: '#166534' },
];

// ── Build must-read section ──
function buildMustRead(ch) {
  const keyPts = getAllKeyPoints(ch);
  const summary = ch.summary || [];
  const pool = [...keyPts];
  summary.forEach(s => { if (!pool.includes(s)) pool.push(s); });
  const top5 = pool.slice(0, 5);
  if (top5.length === 0) return '';
  let html = `  <div class="mustread">
    <h4>🎯 Must-Read — Key concepts for this chapter</h4>
    <ol>\n`;
  top5.forEach(p => { html += `      <li>${fmt(p)}</li>\n`; });
  html += `    </ol>
  </div>\n`;
  return html;
}

// ── Build summary table ──
function buildSummaryTable(ch) {
  const defs = getAllDefinitions(ch);
  const summary = ch.summary || [];
  const rows = [];
  defs.forEach(d => rows.push({ concept: d.term, fact: d.definition }));
  summary.forEach(s => {
    const m = s.match(/^(.+?) is (.+)/);
    if (m) rows.push({ concept: m[1], fact: m[2] });
    else rows.push({ concept: '', fact: s });
  });
  if (rows.length === 0) return '';
  const displayRows = rows.slice(0, 15);
  let html = `  <h3 style="font-family:'Newsreader',serif;font-size:1.1rem;color:var(--ink);margin-bottom:.75rem">📖 Chapter Summary</h3>
  <table class="sum-table">
    <thead><tr style="background:#059669"><th>Concept</th><th>Key Fact</th></tr></thead>
    <tbody>\n`;
  displayRows.forEach(r => {
    const concept = r.concept ? `<strong>${esc(r.concept)}</strong>` : '';
    html += `      <tr><td>${concept}</td><td>${fmt(r.fact)}</td></tr>\n`;
  });
  html += `    </tbody>
  </table>\n`;
  return html;
}

// ── Build formulas block (syntax/commands for CS) ──
function buildFormulasBlock(ch) {
  const formulas = getAllFormulas(ch);
  if (formulas.length === 0) return '';
  const display = formulas.slice(0, 20);
  let html = `    <div class="content-block">
      <div class="block-head" style="background:#f0fdf4;color:#059669">💻 Key Syntax & Commands</div>
      <div class="block-body">
        <ul class="formula-list">\n`;
  display.forEach(f => {
    html += `          <li>\n`;
    if (f.name) html += `            <span class="fl-name">${esc(f.name)}</span>\n`;
    if (f.formula) html += `            <code class="fl-eq">${esc(f.formula)}</code>\n`;
    if (f.note) html += `            <span class="fl-note">${fmt(f.note)}</span>\n`;
    html += `          </li>\n`;
  });
  html += `        </ul>
      </div>
    </div>\n`;
  return html;
}

// ── Build theorems/algorithms block ──
function buildTheoremsBlock(ch) {
  const thms = getAllTheorems(ch);
  if (thms.length === 0) return '';
  let html = `    <div class="content-block">
      <div class="block-head" style="background:#fffbeb;color:#92400e">📜 Important Algorithms & Concepts</div>
      <div class="block-body">
        <ul class="tip-list">\n`;
  thms.forEach(t => {
    html += `          <li><span class="tip-icon">📌</span><div>`;
    if (t.name) html += `<strong>${esc(t.name)}:</strong> `;
    html += `${fmt(t.statement)}</div></li>\n`;
  });
  html += `        </ul>
      </div>
    </div>\n`;
  return html;
}

// ── Build tips box ──
function buildTipsBox(ch) {
  const keyPts = getAllKeyPoints(ch);
  const tips = keyPts.slice(5, 12);
  if (tips.length === 0) return '';
  let html = `  <div class="trick-box">
    <h4>💡 Quick Tips & Memory Aids</h4>
    <ul style="margin-top:.4rem;margin-left:1rem">\n`;
  tips.forEach(t => { html += `      <li>${fmt(t)}</li>\n`; });
  html += `    </ul>
  </div>\n`;
  return html;
}

// ── Build exercise stats ──
function buildExerciseInfo(ch) {
  const exs = ch.exercises || [];
  if (exs.length === 0) return '';
  const totalQ = getQuestionCount(ch);
  const mcqCount = exs.reduce((a, e) => a + e.questions.filter(q => q.type === 'mcq').length, 0);
  const longCount = exs.reduce((a, e) => a + e.questions.filter(q => q.type === 'long').length, 0);
  const shortCount = exs.reduce((a, e) => a + e.questions.filter(q => q.type === 'short').length, 0);
  let html = `  <div class="mistake-box" style="border-left-color:#059669">
    <h4>📝 Exercise Overview</h4>
    <ul>
      <li><strong>${totalQ} total questions</strong> across ${exs.length} exercise${exs.length > 1 ? 's' : ''}</li>\n`;
  if (longCount > 0) html += `      <li>${longCount} long-answer / programming questions</li>\n`;
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
  const marks = chapterMarks[ch.chapter] || 0;
  const marksLabel = marks > 0 ? `${marks}<span>marks</span>` : '<span style="font-size:.6rem">Supplementary</span>';

  let html = `<!-- ${'═'.repeat(30)} ${ch.title.toUpperCase()} ${'═'.repeat(30)} -->
<div class="ch-section${isActive}" id="${id}">

  <div class="ch-banner" style="background:${style.bg};color:${style.color}">
    <div class="ch-banner-left">
      <div class="ch-num">Chapter ${ch.chapter}</div>
      <div class="ch-title">${esc(ch.title)}</div>
      <div class="ch-sub">${esc(getSubtopics(ch))}</div>
    </div>
    <div class="ch-marks-badge" style="color:#059669">${marksLabel}</div>
  </div>

`;

  html += buildMustRead(ch);
  html += '\n';
  html += buildSummaryTable(ch);
  html += '\n';

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
  --subject-color:#059669;--subject-bg:#f0fdf4;--subject-border:#86efac;--subject-text:#065f46;
  --c1:#059669;--c2:#10b981;--c3:#047857;
}
code,.fl-eq{font-family:'Courier New',Courier,monospace;font-size:.82rem;background:#f0fdf4;padding:.1rem .35rem;border-radius:4px;border:1px solid #d1fae5;color:#065f46}
</style>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Chapter notes for Computer Science — all 13 chapters covering Python, Data Structures, SQL, Networks for CBSE Class 12 board exam.">
<meta name="keywords" content="computer science class 12, CBSE XII CS, Python file handling stack SQL networks">
<meta name="author" content="Dinesh Varadharajan">
<meta name="robots" content="index, follow">
<meta property="og:title" content="Computer Science Chapter Notes | CBSE Class 12">
<meta property="og:description" content="Chapter notes for Computer Science — 13 chapters with syntax, algorithms, tips and exercises for CBSE Class 12.">
<meta property="og:type" content="website">
<link rel="canonical" href="https://ncert.myailab.space/cs/chapters.html">
<title>Computer Science Chapter Notes | CBSE Class 12</title>
</head>
<body>
<div class="container">
<a href="../index.html" class="back-link">← Back to Hub</a>

<h1>Computer Science Chapters</h1>
<p class="subtitle">Chapter summaries, key syntax, important algorithms, exam tips and exercise overviews for all 13 chapters — ${totalQuestions} NCERT questions covered.</p>

${buildTabBar()}
${chapters.map((ch, i) => buildChapter(ch, i)).join('')}
</div><!-- /container --><script src="../js/chapter-nav.js"></script><script src="../js/mobile-dropdowns.js"></script>

<footer class="site-footer">Released under the <a href="https://github.com/dineshvaradharajan/cbse-prep/blob/main/LICENSE" target="_blank">MIT License</a> &middot; &copy; 2026 Dinesh Varadharajan &middot; Built for CBSE XII revision</footer>
</body>
</html>`;

fs.writeFileSync(outPath, html, 'utf8');
console.log('Written to', outPath);
console.log('Chapters:', chapters.length, '| Total questions:', totalQuestions);
