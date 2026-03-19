/**
 * Generate all CS pages (formulas, concepts, question-bank)
 * from data/cs/ch*.json
 */
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'cs');
const outDir = path.join(__dirname, '..', 'cs');

// ── Load all chapter JSONs ──
const files = fs.readdirSync(dataDir)
  .filter(f => f.endsWith('.json') && f.startsWith('ch'))
  .sort((a, b) => {
    const na = parseInt(a.match(/ch(\d+)/)[1]);
    const nb = parseInt(b.match(/ch(\d+)/)[1]);
    return na - nb;
  });

const chapters = files.map(f =>
  JSON.parse(fs.readFileSync(path.join(dataDir, f), 'utf8'))
);

function esc(s) {
  if (!s) return '';
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/** Escape HTML and wrap Python/SQL code snippets in <pre><code> blocks */
function escCode(s) {
  if (!s) return '';
  let t = s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  // Detect if text contains code (Python keywords, SQL keywords, indented lines)
  const hasCode = /\b(def |print\(|import |for |while |if |try:|except|SELECT |INSERT |UPDATE |DELETE |CREATE |ALTER |DROP |FROM |WHERE )/i.test(t);
  if (hasCode && t.includes('\n')) {
    // Split into prose and code parts — lines starting with keywords or indentation are code
    const lines = t.split('\n');
    let inCode = false;
    let result = '';
    let codeBlock = '';
    for (const line of lines) {
      const isCodeLine = /^(def |class |print|import |from |for |if |elif |else:|while |try:|except|finally:|return |    |SELECT |INSERT |UPDATE |DELETE |CREATE |ALTER |DROP |SHOW |DESC )/i.test(line.trim()) ||
        (inCode && (line.startsWith('  ') || line.startsWith('\t') || line.trim() === '' || /^[A-Z_]+=/.test(line.trim())));
      if (isCodeLine) {
        if (!inCode) { inCode = true; codeBlock = ''; }
        codeBlock += line + '\n';
      } else {
        if (inCode) {
          result += '<pre class="pyq-code">' + codeBlock.trimEnd() + '</pre>';
          inCode = false;
          codeBlock = '';
        }
        result += line + '\n';
      }
    }
    if (inCode) {
      result += '<pre class="pyq-code">' + codeBlock.trimEnd() + '</pre>';
    }
    return result.trimEnd();
  }
  return t;
}

function fmt(s) {
  if (!s) return '';
  let t = s;
  t = t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  t = t.replace(/`([^`]+)`/g, '<code>$1</code>');
  return t;
}

const chMarks = { 1:8,2:16,3:16,4:0,5:0,6:0,7:0,8:5,9:15,10:5,11:5,12:0,13:0 };
const greenColor = '#059669';

const chColors = [
  '#059669','#10b981','#047857','#34d399','#059669',
  '#047857','#10b981','#34d399','#059669','#047857',
  '#10b981','#34d399','#059669'
];

const fonts = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400&family=Lato:wght@400;700;900&display=swap" rel="stylesheet">`;

const katexCDN = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"
  onload="renderMathInElement(document.body, {
    delimiters: [
      {left: '$$', right: '$$', display: true},
      {left: '$', right: '$', display: false}
    ]
  });"></script>`;

function isLatex(s) {
  return /\\[a-zA-Z]|\\frac|\\sum|\\sqrt|\^{|_{/.test(s);
}

const cssVars = `:root{--subject-color:#059669;--subject-bg:#f0fdf4;--subject-border:#86efac;--subject-text:#065f46;}`;
const codeStyle = `code,.fl-eq{font-family:'Courier New',Courier,monospace;font-size:.82rem;background:#f0fdf4;padding:.1rem .35rem;border-radius:4px;border:1px solid #d1fae5;color:#065f46}`;
const footer = `<footer class="site-footer">Released under the <a href="https://github.com/dineshvaradharajan/cbse-prep/blob/main/LICENSE" target="_blank">MIT License</a> &middot; &copy; 2026 Dinesh Varadharajan &middot; Built for CBSE XII revision</footer>`;

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

function getAllKeyPoints(ch) {
  const pts = [];
  ch.sections.forEach(s => {
    (s.key_points || []).forEach(p => { if (typeof p === 'string') pts.push(p); });
  });
  return pts;
}

// ═══════════════════════════════════════════════════════════════
// PAGE 1: FORMULAS (Syntax & Commands Reference)
// ═══════════════════════════════════════════════════════════════
function genFormulas() {
  let chapNav = '<nav class="chapter-nav"><div class="chapter-nav-inner">\n';
  chapters.forEach(ch => {
    chapNav += `    <a href="#ch${ch.chapter}">${ch.chapter}. ${esc(ch.title)}</a>\n`;
  });
  chapNav += '  </div></nav>\n';

  let chapSections = '';
  chapters.forEach((ch, i) => {
    const formulas = getAllFormulas(ch);
    const color = chColors[i % chColors.length];
    const marks = chMarks[ch.chapter] || 0;
    const marksLabel = marks > 0 ? `${marks} marks` : 'Supplementary';

    chapSections += `<div class="ch-section" id="ch${ch.chapter}">
  <div class="ch-header" style="border-bottom-color:${color}">
    <span class="ch-number">${String(ch.chapter).padStart(2, '0')}</span>
    <span class="ch-title">${esc(ch.title)}</span>
    <span class="ch-marks">${marksLabel}</span>
  </div>
  <div class="formula-grid">\n`;

    if (formulas.length === 0) {
      chapSections += `    <div class="formula-card" style="border-left-color:${color}">
      <div class="fc-name">No standalone syntax items</div>
      <div class="fc-note">This chapter focuses on conceptual understanding. See Chapters page for key points.</div>
    </div>\n`;
    } else {
      formulas.forEach(f => {
        chapSections += `    <div class="formula-card" style="border-left-color:${color}">\n`;
        if (f.name) chapSections += `      <div class="fc-name">${esc(f.name)}</div>\n`;
        if (f.formula) {
          if (isLatex(f.formula)) {
            chapSections += `      <span class="fc-eq">$${f.formula}$</span>\n`;
          } else {
            chapSections += `      <code class="fc-eq">${esc(f.formula)}</code>\n`;
          }
        }
        if (f.note) chapSections += `      <div class="fc-note">${fmt(f.note)}</div>\n`;
        chapSections += `    </div>\n`;
      });
    }
    chapSections += `  </div>\n</div>\n\n`;
  });

  const totalFormulas = chapters.reduce((a, ch) => a + getAllFormulas(ch).length, 0);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
${fonts}
${katexCDN}
<link rel="stylesheet" href="../css/base.css">
<link rel="stylesheet" href="../css/formulas.css">
<style>${cssVars}
${codeStyle}
</style>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Computer Science syntax & commands reference for CBSE Class 12 — Python, SQL, networking commands across 13 chapters.">
<meta name="author" content="Dinesh Varadharajan">
<meta name="robots" content="index, follow">
<meta property="og:title" content="CS Syntax & Commands Reference | CBSE Class 12">
<meta property="og:type" content="website">
<link rel="canonical" href="https://ncert.myailab.space/cs/formulas.html">
<title>CS Syntax & Commands Reference | CBSE Class 12</title>
</head>
<body>
<div class="container">
<a href="../index.html" class="back-link">← Back to Hub</a>

<div class="hero">
  <div class="badge">Computer Science XII &middot; 13 Chapters &middot; ${totalFormulas}+ syntax items</div>
  <h1>Syntax & Commands Reference</h1>
  <p class="sub">Python syntax, SQL commands, and networking concepts — organised by chapter for quick revision.</p>
</div>

${chapNav}

<div class="chapters">
${chapSections}
</div>
</div>

${footer}
<script src="../js/mobile-dropdowns.js"></script>
</body>
</html>`;

  fs.writeFileSync(path.join(outDir, 'formulas.html'), html, 'utf8');
  console.log('formulas.html — ' + totalFormulas + ' syntax items');
}

// ═══════════════════════════════════════════════════════════════
// PAGE 2: CONCEPTS (High-weightage concept guide)
// ═══════════════════════════════════════════════════════════════
function genConcepts() {
  const highChapters = chapters.filter(ch => (chMarks[ch.chapter] || 0) >= 5);

  let topicCards = '';
  highChapters.forEach(ch => {
    const keyPts = getAllKeyPoints(ch);
    const thms = getAllTheorems(ch);
    const marks = chMarks[ch.chapter] || 5;

    topicCards += `    <div class="topic-card" style="border-top-color:${greenColor}">
      <div class="tc-header">
        <div class="tc-title">📝 Ch ${ch.chapter}: ${esc(ch.title)}</div>
        <span class="freq-badge freq-5">${marks} marks</span>
      </div>
      <ul class="concept-list">\n`;

    thms.slice(0, 3).forEach(t => {
      topicCards += `        <li><span class="bullet" style="background:${greenColor}"></span><div>
          <div><strong>${esc(t.name)}</strong></div>
          <div class="years-tag">${fmt(t.statement).substring(0, 150)}${t.statement.length > 150 ? '…' : ''}</div>
        </div></li>\n`;
    });

    keyPts.slice(0, 4).forEach(p => {
      topicCards += `        <li><span class="bullet" style="background:${greenColor}"></span><div>
          <div>${fmt(p)}</div>
        </div></li>\n`;
    });

    topicCards += `      </ul>
    </div>\n\n`;
  });

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
${fonts}
<link rel="stylesheet" href="../css/base.css">
<link rel="stylesheet" href="../css/concepts.css">
<style>${cssVars}
${codeStyle}
</style>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="High-priority CS concepts for CBSE Class 12 — file handling, stack, SQL, networking exam patterns.">
<meta name="author" content="Dinesh Varadharajan">
<meta name="robots" content="index, follow">
<meta property="og:title" content="CS Important Concepts | CBSE Class 12">
<meta property="og:type" content="website">
<link rel="canonical" href="https://ncert.myailab.space/cs/concepts.html">
<title>CS Important Concepts | CBSE Class 12</title>
</head>
<body>
<div class="container">
<a href="../index.html" class="back-link">← Back to Hub</a>

<div class="hero">
  <div class="badge">Computer Science XII &middot; High-Weightage Topics</div>
  <h1>Important Concepts Guide</h1>
  <p class="sub">Key topics for Python programming, Data Structures, SQL, and Networks — focused on CBSE board exam.</p>
  <div class="stat-row">
    <div class="stat-item"><div class="num">13</div><div class="lbl">Chapters</div></div>
    <div class="stat-item"><div class="num">70</div><div class="lbl">Marks total</div></div>
    <div class="stat-item"><div class="num">${highChapters.length}</div><div class="lbl">Exam chapters</div></div>
  </div>
</div>

<div class="tab-section active" id="overview" style="display:block">
  <h2 class="section-title">High-Weightage Chapters</h2>

  <div class="alert-box">
    <h3>🎯 These chapters carry the most marks — prepare these first:</h3>
    <ol>
${chapters.filter(ch => (chMarks[ch.chapter]||0) >= 8).map(ch =>
  `      <li><span class="hot">Ch ${ch.chapter}: ${esc(ch.title)}</span> — ${chMarks[ch.chapter]} marks</li>`
).join('\n')}
    </ol>
  </div>

  <div class="topic-grid">
${topicCards}
  </div>
</div>

</div>
${footer}
</body>
</html>`;

  fs.writeFileSync(path.join(outDir, 'concepts.html'), html, 'utf8');
  console.log('concepts.html — ' + highChapters.length + ' high-weight chapters');
}

// ═══════════════════════════════════════════════════════════════
// PAGE 3: QUESTION BANK
// ═══════════════════════════════════════════════════════════════
function genQuestionBank() {
  const totalQ = chapters.reduce((a, ch) =>
    a + (ch.exercises || []).reduce((b, e) => b + e.questions.length, 0), 0);

  let chapterSections = '';
  chapters.forEach(ch => {
    const exs = ch.exercises || [];
    if (exs.length === 0) return;

    const qCount = exs.reduce((a, e) => a + e.questions.length, 0);

    chapterSections += `<div class="qb-chapter-section">
<button class="qb-chapter-toggle" onclick="toggleChapter(this)">
<span class="qb-ch-name">Ch ${ch.chapter}: ${esc(ch.title)}</span>
<span class="qb-ch-count">${qCount} question${qCount > 1 ? 's' : ''}</span>
<span class="qb-ch-arrow">&#9660;</span>
</button>
<div class="qb-chapter-body open">\n`;

    exs.forEach(ex => {
      chapterSections += `<h4 style="font-family:'Newsreader',serif;font-size:.95rem;color:var(--ink);margin:1rem 0 .5rem;padding-left:.5rem;border-left:3px solid var(--subject-color)">${esc(ex.title)}</h4>\n`;

      ex.questions.forEach(q => {
        let typeBadge = '<span class="qb-type-badge subj">Long</span>';
        if (q.type === 'mcq') typeBadge = '<span class="qb-type-badge mcq">MCQ</span>';
        if (q.type === 'short') typeBadge = '<span class="qb-type-badge case">Short</span>';

        chapterSections += `<div class="qb-card">
<div class="qb-meta"><span class="qb-year-badge">Q${q.qno}</span>${typeBadge}</div>
<div class="qb-question">${esc(q.question)}</div>`;
        if (q.answer) {
          chapterSections += `\n<button class="qb-ans-toggle" onclick="toggleAnswer(this)">Show Answer</button>
<div class="qb-answer hidden"><strong>Answer:</strong> ${esc(q.answer)}</div>`;
        }
        chapterSections += `\n</div>\n`;
      });
    });

    chapterSections += `</div>
</div>\n\n`;
  });

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
${fonts}
<link rel="stylesheet" href="../css/base.css">
<link rel="stylesheet" href="../css/mcq.css">
<style>
${cssVars}
${codeStyle}

.qb-chapter-section{margin-bottom:.75rem}
.qb-chapter-toggle{display:flex;align-items:center;gap:.75rem;width:100%;padding:.75rem 1rem;background:#fff;border:1px solid var(--sand-200);border-radius:10px;cursor:pointer;font-family:"Lato",sans-serif;transition:all .15s}
.qb-chapter-toggle:hover{border-color:var(--subject-border);background:var(--subject-bg)}
.qb-ch-name{font-family:"Newsreader",serif;font-size:1rem;font-weight:600;color:var(--ink);flex:1;text-align:left}
.qb-ch-count{font-size:.7rem;font-weight:700;color:var(--subject-color);background:var(--subject-bg);border:1px solid var(--subject-border);border-radius:999px;padding:.15rem .6rem}
.qb-ch-arrow{font-size:.6rem;color:var(--ink-3);transition:transform .2s}
.qb-chapter-toggle.collapsed .qb-ch-arrow{transform:rotate(-90deg)}
.qb-chapter-body{padding:.5rem 0 0}
.qb-chapter-body.collapsed{display:none}
.qb-card{background:#fff;border:1px solid var(--sand-200);border-radius:12px;padding:1.25rem;margin-bottom:.75rem;transition:box-shadow .2s}
.qb-card:hover{box-shadow:0 4px 16px rgba(0,0,0,.06)}
.qb-meta{display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:.65rem;align-items:center}
.qb-year-badge{font-size:.68rem;font-weight:700;color:var(--subject-color);background:var(--subject-bg);border:1px solid var(--subject-border);border-radius:999px;padding:.15rem .55rem}
.qb-type-badge{font-size:.6rem;font-weight:800;border-radius:999px;padding:.12rem .5rem;text-transform:uppercase;letter-spacing:.04em}
.qb-type-badge.subj{color:#78716c;background:var(--sand-100);border:1px solid var(--sand-300)}
.qb-type-badge.mcq{color:#059669;background:#f0fdf4;border:1px solid #86efac}
.qb-type-badge.case{color:#ea580c;background:#fff7ed;border:1px solid #fdba74}
.qb-question{font-size:.88rem;font-weight:500;color:var(--ink);line-height:1.65;white-space:pre-line}
.qb-ans-toggle{display:inline-block;margin-top:.6rem;padding:.3rem .8rem;font-size:.72rem;font-weight:700;color:var(--subject-color);background:var(--subject-bg);border:1px solid var(--subject-border);border-radius:999px;cursor:pointer;transition:all .15s}
.qb-ans-toggle:hover{background:var(--subject-color);color:#fff}
.qb-answer{margin-top:.6rem;padding:.75rem 1rem;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;font-size:.84rem;color:#166534;line-height:1.7;white-space:pre-line}
.qb-answer.hidden{display:none}
@media(max-width:640px){
  .qb-card{padding:.85rem;border-radius:10px;margin-bottom:.6rem}
  .qb-question{font-size:.82rem}
  .qb-ch-name{font-size:.88rem}
  .qb-chapter-toggle{padding:.6rem .75rem}
}
</style>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="NCERT Computer Science Question Bank — ${totalQ} exercises from all 13 chapters for CBSE Class 12.">
<meta name="author" content="Dinesh Varadharajan">
<meta name="robots" content="index, follow">
<meta property="og:title" content="CS Question Bank | CBSE Class 12">
<meta property="og:type" content="website">
<link rel="canonical" href="https://ncert.myailab.space/cs/question-bank.html">
<title>CS Question Bank — ${totalQ} NCERT Exercises | CBSE Class 12</title>
</head>
<body>
<div class="container">
<a href="../index.html" class="back-link">← Back to Hub</a>
<div class="hero">
  <div class="badge">Computer Science XII &middot; NCERT Exercises</div>
  <h1>Question Bank</h1>
  <p class="sub">${totalQ} textbook exercises from all 13 chapters — grouped by chapter and exercise number.</p>
</div>

${chapterSections}

</div>

${footer}

<script>
function toggleChapter(btn) {
  btn.classList.toggle('collapsed');
  var body = btn.nextElementSibling;
  body.classList.toggle('collapsed');
  body.classList.toggle('open');
}
function toggleAnswer(btn) {
  var ans = btn.nextElementSibling;
  ans.classList.toggle('hidden');
  btn.textContent = ans.classList.contains('hidden') ? 'Show Answer' : 'Hide Answer';
}
</script>
</body>
</html>`;

  fs.writeFileSync(path.join(outDir, 'question-bank.html'), html, 'utf8');
  console.log('question-bank.html — ' + totalQ + ' questions');
}

// ═══════════════════════════════════════════════════════════════
// PAGE 4: PREVIOUS YEAR QUESTIONS (PYQ)
// ═══════════════════════════════════════════════════════════════
function genPYQ() {
  const pyqPath = path.join(__dirname, '..', 'data', 'pyq', 'cs', 'all-years.json');
  if (!fs.existsSync(pyqPath)) {
    console.log('pyq.html — skipped (no PYQ data)');
    return;
  }
  const pyqData = JSON.parse(fs.readFileSync(pyqPath, 'utf8'));
  const allYears = pyqData.years || [];
  const totalQ = allYears.reduce((a, y) => a + y.questions.length, 0);
  const yearList = allYears.map(y => y.year).sort((a, b) => b - a);

  // Build year sections
  let yearSections = '';
  allYears.sort((a, b) => b.year - a.year).forEach(yr => {
    yearSections += `<div class="qb-chapter-section">
<button class="qb-chapter-toggle" onclick="toggleChapter(this)">
<span class="qb-ch-name">CBSE ${yr.year}</span>
<span class="qb-ch-count">${yr.questions.length} question${yr.questions.length > 1 ? 's' : ''}</span>
<span class="qb-ch-arrow">&#9660;</span>
</button>
<div class="qb-chapter-body open">\n`;

    yr.questions.forEach(q => {
      const marksBadge = `<span class="qb-type-badge case">${q.marks} mark${q.marks > 1 ? 's' : ''}</span>`;
      let typeBadge = '<span class="qb-type-badge subj">Long</span>';
      if (q.type === 'MCQ') typeBadge = '<span class="qb-type-badge mcq">MCQ</span>';
      else if (q.type === 'Short Answer') typeBadge = '<span class="qb-type-badge case">Short</span>';
      const chBadge = q.chapter ? `<span class="qb-type-badge" style="color:#059669;background:#f0fdf4;border:1px solid #86efac">${esc(q.chapter)}</span>` : '';

      yearSections += `<div class="qb-card">
<div class="qb-meta"><span class="qb-year-badge">Q${q.qno}</span>${typeBadge}${marksBadge}${chBadge}</div>
<div class="qb-question">${escCode(q.question)}</div>`;

      if (q.options && q.options.length > 0) {
        yearSections += `\n<div class="pyq-opts">${q.options.map(o => `<div class="pyq-opt">${esc(o)}</div>`).join('')}</div>`;
      }

      if (q.answer) {
        yearSections += `\n<button class="qb-ans-toggle" onclick="toggleAnswer(this)">Show Answer</button>
<div class="qb-answer hidden"><strong>Answer:</strong> ${escCode(q.answer)}</div>`;
      }
      yearSections += `\n</div>\n`;
    });

    yearSections += `</div>\n</div>\n\n`;
  });

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
${fonts}
<link rel="stylesheet" href="../css/base.css">
<style>
${cssVars}
${codeStyle}

.qb-chapter-section{margin-bottom:.75rem}
.qb-chapter-toggle{display:flex;align-items:center;gap:.75rem;width:100%;padding:.75rem 1rem;background:#fff;border:1px solid var(--sand-200);border-radius:10px;cursor:pointer;font-family:"Lato",sans-serif;transition:all .15s}
.qb-chapter-toggle:hover{border-color:var(--subject-border);background:var(--subject-bg)}
.qb-ch-name{font-family:"Newsreader",serif;font-size:1rem;font-weight:600;color:var(--ink);flex:1;text-align:left}
.qb-ch-count{font-size:.7rem;font-weight:700;color:var(--subject-color);background:var(--subject-bg);border:1px solid var(--subject-border);border-radius:999px;padding:.15rem .6rem}
.qb-ch-arrow{font-size:.6rem;color:var(--ink-3);transition:transform .2s}
.qb-chapter-toggle.collapsed .qb-ch-arrow{transform:rotate(-90deg)}
.qb-chapter-body{padding:.5rem 0 0}
.qb-chapter-body.collapsed{display:none}
.qb-card{background:#fff;border:1px solid var(--sand-200);border-radius:12px;padding:1.25rem;margin-bottom:.75rem;transition:box-shadow .2s}
.qb-card:hover{box-shadow:0 4px 16px rgba(0,0,0,.06)}
.qb-meta{display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:.65rem;align-items:center}
.qb-year-badge{font-size:.68rem;font-weight:700;color:var(--subject-color);background:var(--subject-bg);border:1px solid var(--subject-border);border-radius:999px;padding:.15rem .55rem}
.qb-type-badge{font-size:.6rem;font-weight:800;border-radius:999px;padding:.12rem .5rem;text-transform:uppercase;letter-spacing:.04em}
.qb-type-badge.subj{color:#78716c;background:var(--sand-100);border:1px solid var(--sand-300)}
.qb-type-badge.mcq{color:#059669;background:#f0fdf4;border:1px solid #86efac}
.qb-type-badge.case{color:#ea580c;background:#fff7ed;border:1px solid #fdba74}
.qb-question{font-size:.88rem;font-weight:500;color:var(--ink);line-height:1.65;white-space:pre-line}
.pyq-opts{display:grid;grid-template-columns:1fr 1fr;gap:.3rem .75rem;margin-top:.5rem}
.pyq-opt{font-size:.82rem;color:var(--ink-2);padding:.25rem 0}
.qb-ans-toggle{display:inline-block;margin-top:.6rem;padding:.3rem .8rem;font-size:.72rem;font-weight:700;color:var(--subject-color);background:var(--subject-bg);border:1px solid var(--subject-border);border-radius:999px;cursor:pointer;transition:all .15s}
.qb-ans-toggle:hover{background:var(--subject-color);color:#fff}
.qb-answer{margin-top:.6rem;padding:.75rem 1rem;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;font-size:.84rem;color:#166534;line-height:1.7;white-space:pre-line}
.qb-answer.hidden{display:none}
pre.pyq-code{background:#1e293b;color:#e2e8f0;padding:.75rem 1rem;border-radius:8px;font-family:'Courier New',monospace;font-size:.78rem;line-height:1.6;overflow-x:auto;margin:.5rem 0;white-space:pre}
@media(max-width:640px){
  .qb-card{padding:.85rem;border-radius:10px;margin-bottom:.6rem}
  .qb-question{font-size:.82rem}
  .pyq-opts{grid-template-columns:1fr}
}
</style>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="CBSE Class 12 Computer Science Previous Year Questions — ${totalQ} questions from ${yearList.join(', ')} board papers with answers.">
<meta name="author" content="Dinesh Varadharajan">
<meta name="robots" content="index, follow">
<meta property="og:title" content="CS Previous Year Questions | CBSE Class 12">
<meta property="og:type" content="website">
<link rel="canonical" href="https://ncert.myailab.space/cs/pyq.html">
<title>CS Previous Year Questions — ${totalQ} Board Exam Questions | CBSE Class 12</title>
</head>
<body>
<div class="container">
<a href="../index.html" class="back-link">← Back to Hub</a>
<div class="hero">
  <div class="badge">Computer Science XII &middot; Board Papers ${yearList.join(', ')}</div>
  <h1>Previous Year Questions</h1>
  <p class="sub">${totalQ} questions from CBSE board papers (${yearList[yearList.length-1]}–${yearList[0]}) with answers and explanations.</p>
</div>

${yearSections}

</div>

${footer}

<script>
function toggleChapter(btn) {
  btn.classList.toggle('collapsed');
  var body = btn.nextElementSibling;
  body.classList.toggle('collapsed');
  body.classList.toggle('open');
}
function toggleAnswer(btn) {
  var ans = btn.nextElementSibling;
  ans.classList.toggle('hidden');
  btn.textContent = ans.classList.contains('hidden') ? 'Show Answer' : 'Hide Answer';
}
</script>
</body>
</html>`;

  fs.writeFileSync(path.join(outDir, 'pyq.html'), html, 'utf8');
  console.log('pyq.html — ' + totalQ + ' questions from ' + yearList.length + ' years');
}

// ── Run all generators ──
genFormulas();
genConcepts();
genQuestionBank();
genPYQ();
console.log('\nAll pages generated in cs/');
