/**
 * Generate all remaining maths pages (formulas, concepts, derivations,
 * mock-tests, question-bank, case-study) from data/maths/ch*.json
 */
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'maths');
const outDir = path.join(__dirname, '..', 'maths');

// ── Load all chapter JSONs ──
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

function esc(s) {
  if (!s) return '';
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/** Convert ASCII math notation to proper Unicode symbols (used for prose text) */
function mathFmt(s) {
  if (!s) return '';
  let t = s;

  // ── Vectors (hat notation) — do BEFORE Greek to avoid conflicts ──
  t = t.replace(/i_hat/g, 'î'); t = t.replace(/j_hat/g, 'ĵ');
  t = t.replace(/k_hat/g, 'k̂'); t = t.replace(/n_hat/g, 'n̂');
  t = t.replace(/b_hat/g, 'b̂'); t = t.replace(/a_hat/g, 'â');
  t = t.replace(/0_vec/g, '0⃗');

  // ── Greek letters (word boundaries) ──
  t = t.replace(/\btheta\b/g, 'θ');
  t = t.replace(/\balpha\b/g, 'α');
  t = t.replace(/\bbeta\b/g, 'β');
  t = t.replace(/\bgamma\b/g, 'γ');
  t = t.replace(/\bdelta\b/g, 'δ');
  t = t.replace(/\bDelta\b/g, 'Δ');
  t = t.replace(/\blambda\b/g, 'λ');
  t = t.replace(/\bmu\b/g, 'μ');
  t = t.replace(/\bsigma\b/g, 'σ');
  t = t.replace(/\bpi\b/g, 'π');
  t = t.replace(/\bphi\b/g, 'φ');
  t = t.replace(/\bepsilon\b/g, 'ε');
  t = t.replace(/\bomega\b/g, 'ω');

  // ── Operators & relations ──
  t = t.replace(/\bintegral\b/g, '∫');
  t = t.replace(/\bsum\b/g, '∑');
  t = t.replace(/\bproduct\b/g, '∏');
  t = t.replace(/\binfinity\b/g, '∞');
  t = t.replace(/!=/g, '≠');
  t = t.replace(/>=/g, '≥');
  t = t.replace(/<=/g, '≤');
  t = t.replace(/\s=>\s/g, ' ⇒ ');
  t = t.replace(/\s->\s/g, ' → ');
  t = t.replace(/\(subset of\)/g, '⊂');
  // "in" → "∈" only when surrounded by spaces (not inside words like sin, min, int)
  t = t.replace(/(?<=\s)in(?=\s)/g, '∈');
  t = t.replace(/\biff\b/g, '⟺');
  // Intersection/union: "E n F" → "E ∩ F", "A u B" → "A ∪ B"
  // Only match when preceded by ), a capital letter, or set notation
  t = t.replace(/([A-Z)]) n ([A-Z(])/g, '$1 ∩ $2');
  t = t.replace(/([A-Z)]) u ([A-Z(])/g, '$1 ∪ $2');

  // ── sqrt → √ ──
  t = t.replace(/sqrt\(([^)]+)\)/g, '√($1)');

  // ── Superscripts ──
  const supMap = { '0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹',
                   'n':'ⁿ','i':'ⁱ','r':'ʳ','x':'ˣ','+':'⁺','-':'⁻' };
  // ^(-1) → ⁻¹
  t = t.replace(/\^\(-1\)/g, '⁻¹');
  // ^(expression) → <sup>
  t = t.replace(/\^\(([^)]+)\)/g, '<sup>$1</sup>');
  // ^single-char (digit or letter)
  t = t.replace(/\^([0-9a-z])/g, (_, c) => supMap[c] || '<sup>' + c + '</sup>');

  // ── Subscripts ──
  const subMap = { '0':'₀','1':'₁','2':'₂','3':'₃','4':'₄','5':'₅','6':'₆','7':'₇','8':'₈','9':'₉',
                   'i':'ᵢ','j':'ⱼ','k':'ₖ','n':'ₙ','m':'ₘ','r':'ᵣ','p':'ₚ','a':'ₐ','e':'ₑ','o':'ₒ','x':'ₓ' };
  // _{braced expression}
  t = t.replace(/_{([^}]+)}/g, (_, inner) => {
    let sub = '';
    for (const c of inner) sub += subMap[c] || c;
    return sub;
  });
  // _multi-char subscript: a_ij, a_i1, A_1j, x_12, etc. (1-3 chars of digits/letters)
  t = t.replace(/_([0-9a-z]{2,3})(?=[^a-z0-9_]|$)/g, (_, chars) => {
    let sub = '';
    for (const c of chars) sub += subMap[c] || c;
    return sub;
  });
  // _single-char subscript: a_i, x_1, etc.
  t = t.replace(/_([0-9a-z])(?=[^a-z0-9_]|$)/g, (_, c) => subMap[c] || '_' + c);

  // ── Matrix/determinant notation: semicolons → row separator ──
  if (t.includes(';') && (t.includes('[') || t.includes('|'))) {
    t = t.replace(/;\s*/g, ' ┃ ');
  }

  // ── Multiplication: * → · ──
  t = t.replace(/\s\*\s/g, ' · ');
  t = t.replace(/(\w)\*(\w)/g, '$1·$2');

  // HTML escape after symbol conversion
  t = t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  // Restore <sup>/<sub> tags
  t = t.replace(/&lt;sup&gt;/g, '<sup>').replace(/&lt;\/sup&gt;/g, '</sup>');

  return t;
}

const chMarks = { 1:3,2:3,3:5,4:5,5:8,6:8,7:8,8:5,9:5,10:5,11:5,12:5,13:8 };
const purpleColor = '#7c3aed';

// Accent colours that cycle per chapter
const chColors = [
  '#7c3aed','#8b5cf6','#6d28d9','#a855f7','#7c3aed',
  '#6d28d9','#8b5cf6','#a855f7','#7c3aed','#6d28d9',
  '#8b5cf6','#a855f7','#7c3aed'
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
const cssVars = `:root{--subject-color:#7c3aed;--subject-bg:#f5f3ff;--subject-border:#c4b5fd;--subject-text:#6d28d9;}`;
const footer = `<footer class="site-footer">Released under the <a href="https://github.com/dineshvaradharajan/cbse-prep/blob/main/LICENSE" target="_blank">MIT License</a> &middot; &copy; 2026 Dinesh Varadharajan &middot; Built for CBSE XII revision</footer>`;

function getAllFormulas(ch) {
  const formulas = [];
  ch.sections.forEach(s => {
    (s.formulas || []).forEach(f => {
      if (typeof f === 'string') {
        // Try to split string formulas into name + formula
        // Pattern 1: "Name: formula" or "Name = formula"
        let name = '', formula = f, note = '';
        // If it contains an equals sign, try to extract name from before first =
        // But only if the text before = looks like a label (short, no math operators)
        const colonSplit = f.match(/^([^:=]{3,40}):\s*(.+)/);
        if (colonSplit && !colonSplit[1].includes('(') && !colonSplit[1].includes('|')) {
          name = colonSplit[1].trim();
          formula = colonSplit[2].trim();
        } else {
          // If the string is very long (>80 chars) and mostly text, separate the "equation" part
          const eqMatch = f.match(/^(.+?)\s*[=:]\s*(.+)/);
          if (f.length > 100) {
            // Long description — extract first sentence as name, rest as note
            const sentSplit = f.match(/^([^,]+),\s*(.+)/);
            if (sentSplit) {
              formula = sentSplit[1].trim();
              note = sentSplit[2].trim();
            }
          }
        }
        formulas.push({ name, formula, note });
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
// PAGE 1: FORMULAS
// ═══════════════════════════════════════════════════════════════
function genFormulas() {
  // Collect critical formulas (first from high-marks chapters)
  const criticalChapters = [5,6,7,9,13];
  const criticalFormulas = [];
  chapters.forEach(ch => {
    if (criticalChapters.includes(ch.chapter)) {
      getAllFormulas(ch).slice(0, 2).forEach(f => {
        if (f.name && f.formula) criticalFormulas.push(f);
      });
    }
  });
  const quickRef = criticalFormulas.slice(0, 8);

  let chapNav = '<nav class="chapter-nav"><div class="chapter-nav-inner">\n';
  chapters.forEach(ch => {
    chapNav += `    <a href="#ch${ch.chapter}">${ch.chapter}. ${esc(ch.title)}</a>\n`;
  });
  chapNav += '  </div></nav>\n';

  let chapSections = '';
  chapters.forEach((ch, i) => {
    const formulas = getAllFormulas(ch);
    const color = chColors[i % chColors.length];
    const marks = chMarks[ch.chapter] || 5;

    chapSections += `<div class="ch-section" id="ch${ch.chapter}">
  <div class="ch-header" style="border-bottom-color:${color}">
    <span class="ch-number">${String(ch.chapter).padStart(2, '0')}</span>
    <span class="ch-title">${esc(ch.title)}</span>
    <span class="ch-marks">${marks} marks</span>
  </div>
  <div class="formula-grid">\n`;

    if (formulas.length === 0) {
      chapSections += `    <div class="formula-card" style="border-left-color:${color}">
      <div class="fc-name">No standalone formulas</div>
      <div class="fc-note">This chapter focuses on definitions and concepts rather than computation formulas. See Chapters page for key points.</div>
    </div>\n`;
    } else {
      formulas.forEach(f => {
        chapSections += `    <div class="formula-card" style="border-left-color:${color}">\n`;
        if (f.name) chapSections += `      <div class="fc-name">${esc(f.name)}</div>\n`;
        if (f.formula) chapSections += `      <span class="fc-eq">$${f.formula}$</span>\n`;
        if (f.note) chapSections += `      <div class="fc-note">${mathFmt(f.note)}</div>\n`;
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
<style>${cssVars}</style>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="All Mathematics formulas for CBSE Class 12 — 13 chapters with ${totalFormulas}+ formulas organised by topic.">
<meta name="author" content="Dinesh Varadharajan">
<meta name="robots" content="index, follow">
<meta property="og:title" content="Mathematics Formula Reference | CBSE Class 12">
<meta property="og:description" content="All Mathematics formulas for CBSE Class 12 — 13 chapters organised by topic.">
<meta property="og:type" content="website">
<link rel="canonical" href="https://ncert.myailab.space/maths/formulas.html">
<title>Mathematics Formula Reference | CBSE Class 12</title>
</head>
<body>
<div class="container">
<a href="../index.html" class="back-link">← Back to Hub</a>

<div class="hero">
  <div class="badge">Mathematics XII &middot; 13 Chapters &middot; ${totalFormulas}+ formulas</div>
  <h1>Mathematics Formula Reference</h1>
  <p class="sub">Every formula from all 13 chapters — organised by topic for quick revision.</p>
</div>

${chapNav}

<div class="quick-ref">
  <h3>⚡ Critical Formulas — Memorise These First</h3>
  <div class="qr-grid">
${quickRef.map(f => `    <div class="qr-item"><span class="qr-label">${esc(f.name)}</span><span class="qr-val">$${f.formula}$</span></div>`).join('\n')}
  </div>
</div>

<div class="chapters">
${chapSections}
</div>
</div>

${footer}
<script src="../js/mobile-dropdowns.js"></script>
</body>
</html>`;

  fs.writeFileSync(path.join(outDir, 'formulas.html'), html, 'utf8');
  console.log('formulas.html — ' + totalFormulas + ' formulas');
}

// ═══════════════════════════════════════════════════════════════
// PAGE 2: CONCEPTS (5-mark concept guide)
// ═══════════════════════════════════════════════════════════════
function genConcepts() {
  // High-weightage chapters for 5-mark concepts
  const highChapters = chapters.filter(ch => (chMarks[ch.chapter] || 5) >= 5);

  let topicCards = '';
  highChapters.forEach(ch => {
    const keyPts = getAllKeyPoints(ch);
    const thms = getAllTheorems(ch);
    const defs = getAllDefinitions(ch);
    const marks = chMarks[ch.chapter] || 5;

    topicCards += `    <div class="topic-card" style="border-top-color:${purpleColor}">
      <div class="tc-header">
        <div class="tc-title">📝 Ch ${ch.chapter}: ${esc(ch.title)}</div>
        <span class="freq-badge freq-5">${marks} marks</span>
      </div>
      <ul class="concept-list">\n`;

    // Show theorems as high-priority concepts
    thms.slice(0, 3).forEach(t => {
      topicCards += `        <li><span class="bullet" style="background:${purpleColor}"></span><div>
          <div><strong>${esc(t.name)}</strong></div>
          <div class="years-tag">${mathFmt(t.statement).substring(0, 150)}${t.statement.length > 150 ? '…' : ''}</div>
        </div></li>\n`;
    });

    // Show key points
    keyPts.slice(0, 4).forEach(p => {
      topicCards += `        <li><span class="bullet" style="background:${purpleColor}"></span><div>
          <div>${mathFmt(p)}</div>
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
${katexCDN}
<link rel="stylesheet" href="../css/base.css">
<link rel="stylesheet" href="../css/concepts.css">
<style>${cssVars}</style>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="High-priority maths concepts for CBSE Class 12 — 5-mark topics, important proofs, and exam patterns.">
<meta name="author" content="Dinesh Varadharajan">
<meta name="robots" content="index, follow">
<meta property="og:title" content="Maths 5-Mark Concept Guide | CBSE Class 12">
<meta property="og:description" content="Important theorems, proofs, and long-answer patterns for CBSE Class 12 Mathematics.">
<meta property="og:type" content="website">
<link rel="canonical" href="https://ncert.myailab.space/maths/concepts.html">
<title>Maths 5-Mark Concept Guide | CBSE Class 12</title>
</head>
<body>
<div class="container">
<a href="../index.html" class="back-link">← Back to Hub</a>

<div class="hero">
  <div class="badge">Mathematics XII &middot; High-Weightage Topics</div>
  <h1>5-Mark Concept Guide</h1>
  <p class="sub">Important theorems, proofs, and long-answer patterns for CBSE board exam preparation.</p>
  <div class="stat-row">
    <div class="stat-item"><div class="num">13</div><div class="lbl">Chapters</div></div>
    <div class="stat-item"><div class="num">80</div><div class="lbl">Marks total</div></div>
    <div class="stat-item"><div class="num">${highChapters.length}</div><div class="lbl">High-weight chapters</div></div>
  </div>
</div>

<div class="tab-section active" id="overview" style="display:block">
  <h2 class="section-title">High-Weightage Chapters</h2>

  <div class="alert-box">
    <h3>🎯 These chapters carry the most marks — prepare these first:</h3>
    <ol>
${chapters.filter(ch => (chMarks[ch.chapter]||5) >= 8).map(ch =>
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
// PAGE 3: DERIVATIONS / PROOFS
// ═══════════════════════════════════════════════════════════════
function genDerivations() {
  // Collect all theorems across chapters
  let tocChapters = '';
  let derivSections = '';

  chapters.forEach((ch, i) => {
    const thms = getAllTheorems(ch);
    if (thms.length === 0) return;

    const color = chColors[i % chColors.length];

    tocChapters += `    <div class="toc-chapter">
      <div class="toc-chapter-title"><span class="dot" style="background:${color}"></span>Ch ${ch.chapter}: ${esc(ch.title)}</div>
      <ol class="toc-list">\n`;
    thms.forEach(t => {
      tocChapters += `        <li>${esc(t.name)}</li>\n`;
    });
    tocChapters += `      </ol>
    </div>\n`;

    derivSections += `<div class="deriv-chapter" id="ch${ch.chapter}">
  <h2 class="deriv-ch-title" style="border-bottom-color:${color}"><span class="dot" style="background:${color}"></span> Ch ${ch.chapter}: ${esc(ch.title)}</h2>\n`;

    thms.forEach((t, j) => {
      derivSections += `  <div class="deriv-card">
    <div class="deriv-header">
      <span class="deriv-num">${j + 1}</span>
      <h3 class="deriv-name">${esc(t.name)}</h3>
    </div>
    <div class="deriv-statement">${mathFmt(t.statement)}</div>
  </div>\n`;
    });
    derivSections += `</div>\n\n`;
  });

  const totalThms = chapters.reduce((a, ch) => a + getAllTheorems(ch).length, 0);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
${fonts}
${katexCDN}
<link rel="stylesheet" href="../css/base.css">
<style>
${cssVars}
.deriv-chapter { margin-bottom: 2.5rem }
.deriv-ch-title {
  font-family:'Newsreader',serif; font-size:1.15rem; font-weight:700; color:var(--ink);
  display:flex; align-items:center; gap:.6rem; padding-bottom:.5rem; border-bottom:2px solid; margin-bottom:1rem;
}
.deriv-card {
  background:#fff; border:1px solid var(--sand-200); border-radius:12px; padding:1.25rem;
  margin-bottom:.75rem; border-left:4px solid var(--subject-color);
}
.deriv-header { display:flex; align-items:center; gap:.75rem; margin-bottom:.5rem }
.deriv-num {
  font-family:'Lato',sans-serif; font-size:.7rem; font-weight:800; color:#fff; background:var(--subject-color);
  width:24px; height:24px; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0;
}
.deriv-name { font-family:'Newsreader',serif; font-size:1rem; font-weight:600; color:var(--ink) }
.deriv-statement { font-size:.84rem; color:var(--ink-2); line-height:1.7 }
.dot { width:8px; height:8px; border-radius:50%; display:inline-block; flex-shrink:0 }
.page-header { padding:2.5rem 0 1.5rem; border-bottom:1px solid var(--sand-200); margin-bottom:2rem }
.page-header h1 { font-family:'Newsreader',serif; font-size:clamp(1.6rem,3vw,2.2rem); font-weight:700; color:var(--ink); margin-bottom:.35rem }
.page-header .subtitle { font-size:.88rem; color:var(--ink-3) }
</style>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Important mathematical proofs and theorems for CBSE Class 12 — ${totalThms} theorems across 13 chapters.">
<meta name="author" content="Dinesh Varadharajan">
<meta name="robots" content="index, follow">
<meta property="og:title" content="Important Proofs &amp; Theorems | CBSE Class 12 Maths">
<meta property="og:type" content="website">
<link rel="canonical" href="https://ncert.myailab.space/maths/derivations.html">
<title>Important Proofs &amp; Theorems | CBSE Class 12 Maths</title>
</head>
<body>
<div class="container">
<a href="../index.html" class="back-link">← Back to Hub</a>

<div class="page-header">
  <h1>Important Proofs &amp; Theorems</h1>
  <p class="subtitle">${totalThms} key theorems from NCERT — statements and proof outlines for CBSE board exam.</p>
</div>

${derivSections}

</div>
${footer}
</body>
</html>`;

  fs.writeFileSync(path.join(outDir, 'derivations.html'), html, 'utf8');
  console.log('derivations.html — ' + totalThms + ' theorems');
}

// ═══════════════════════════════════════════════════════════════
// PAGE 4: QUESTION BANK (952 exercises by chapter)
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
.qb-type-badge.mcq{color:#7c3aed;background:#f5f3ff;border:1px solid #c4b5fd}
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
<meta name="description" content="NCERT Mathematics Question Bank — ${totalQ} book-back exercises from all 13 chapters for CBSE Class 12.">
<meta name="author" content="Dinesh Varadharajan">
<meta name="robots" content="index, follow">
<meta property="og:title" content="Maths Question Bank | CBSE Class 12">
<meta property="og:type" content="website">
<link rel="canonical" href="https://ncert.myailab.space/maths/question-bank.html">
<title>Maths Question Bank — ${totalQ} NCERT Exercises | CBSE Class 12</title>
</head>
<body>
<div class="container">
<a href="../index.html" class="back-link">← Back to Hub</a>
<div class="hero">
  <div class="badge">Mathematics XII &middot; NCERT Exercises</div>
  <h1>Question Bank</h1>
  <p class="sub">${totalQ} book-back exercises from all 13 chapters — grouped by chapter and exercise number.</p>
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
// PAGE 5: MOCK TESTS (placeholder — needs MCQ data)
// ═══════════════════════════════════════════════════════════════
function genMockTests() {
  // Collect all MCQ questions from exercises
  const mcqs = [];
  chapters.forEach(ch => {
    (ch.exercises || []).forEach(ex => {
      ex.questions.filter(q => q.type === 'mcq').forEach(q => {
        mcqs.push({ chapter: ch.chapter, title: ch.title, qno: q.qno, question: q.question, exercise: ex.title });
      });
    });
  });

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
${fonts}
<link rel="stylesheet" href="../css/base.css">
<link rel="stylesheet" href="../css/mock-tests.css">
<style>${cssVars}</style>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Mathematics MCQ Mock Tests for CBSE Class 12 — timed practice based on NCERT questions.">
<meta name="author" content="Dinesh Varadharajan">
<meta name="robots" content="index, follow">
<meta property="og:title" content="Maths Mock Tests | CBSE Class 12">
<meta property="og:type" content="website">
<link rel="canonical" href="https://ncert.myailab.space/maths/mock-tests.html">
<title>Maths Mock Tests | CBSE Class 12</title>
</head>
<body>
<div class="container">

  <a href="../index.html" class="back-link">← Back to Prep Hub</a>

  <div id="screen-select">
    <div class="page-header">
      <h1>MCQ Mock Tests</h1>
      <p>Timed practice tests based on NCERT MCQs across all 13 chapters.</p>
    </div>

    <div class="info-banner" style="background:var(--subject-bg);border:1.5px solid var(--subject-border);border-radius:12px;padding:1.5rem;margin:1.5rem 0;text-align:center">
      <div style="font-size:2rem;margin-bottom:.5rem">🚧</div>
      <h3 style="font-family:'Newsreader',serif;font-size:1.1rem;color:var(--ink);margin-bottom:.5rem">Mock Tests Coming Soon</h3>
      <p style="font-size:.85rem;color:var(--ink-2);line-height:1.6;max-width:480px;margin:0 auto">
        We're generating MCQ data from NCERT exercises and past papers. There are <strong>${mcqs.length} MCQs</strong> identified from the textbook exercises so far.
      </p>
      <p style="font-size:.8rem;color:var(--ink-3);margin-top:.75rem">In the meantime, practice with the <a href="question-bank.html" style="color:var(--subject-color);font-weight:700">Question Bank</a> which has all 952 NCERT exercises.</p>
    </div>

    <div style="margin-top:2rem">
      <h3 style="font-family:'Newsreader',serif;font-size:1rem;color:var(--ink);margin-bottom:1rem">📋 Available NCERT MCQs by Chapter</h3>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:.6rem">
${chapters.map(ch => {
  const count = (ch.exercises||[]).reduce((a,e) => a + e.questions.filter(q=>q.type==='mcq').length, 0);
  return `        <div style="background:#fff;border:1px solid var(--sand-200);border-radius:10px;padding:.85rem 1rem;display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:.82rem;font-weight:600;color:var(--ink)">Ch ${ch.chapter}: ${esc(ch.title)}</span>
          <span style="font-size:.68rem;font-weight:700;color:var(--subject-color);background:var(--subject-bg);border:1px solid var(--subject-border);border-radius:999px;padding:.15rem .55rem">${count} MCQ${count !== 1 ? 's' : ''}</span>
        </div>`;
}).join('\n')}
      </div>
    </div>
  </div>

</div>
${footer}
</body>
</html>`;

  fs.writeFileSync(path.join(outDir, 'mock-tests.html'), html, 'utf8');
  console.log('mock-tests.html — ' + mcqs.length + ' MCQs identified');
}

// ═══════════════════════════════════════════════════════════════
// PAGE 6: CASE STUDY (placeholder page)
// ═══════════════════════════════════════════════════════════════
function genCaseStudy() {
  // Collect all case studies from chapter JSONs
  const allCases = [];
  chapters.forEach(ch => {
    (ch.case_studies || []).forEach(cs => {
      allCases.push({ chapter: ch.chapter, title: ch.title, ...cs });
    });
  });

  let caseCards = '';
  allCases.forEach((cs, idx) => {
    const color = chColors[(cs.chapter - 1) % chColors.length];
    caseCards += `<div class="cs-card">
  <div class="cs-header" style="border-left-color:${color}">
    <span class="cs-badge">Case ${idx + 1}</span>
    <span class="cs-ch">Ch ${cs.chapter}: ${esc(cs.title)}</span>
    ${cs.source ? `<span class="cs-source">${esc(cs.source)}</span>` : ''}
  </div>
  <div class="cs-passage">${esc(cs.passage)}</div>
  <div class="cs-questions">\n`;

    (cs.questions || []).forEach((q, qi) => {
      caseCards += `    <div class="cs-q">
      <div class="cs-q-text"><strong>(${qi + 1})</strong> ${esc(q.question)}</div>
      <div class="cs-opts">\n`;
      (q.options || []).forEach((opt, oi) => {
        const letter = String.fromCharCode(97 + oi);
        caseCards += `        <div class="cs-opt">(${letter}) ${esc(opt)}</div>\n`;
      });
      caseCards += `      </div>
      <button class="qb-ans-toggle" onclick="toggleAnswer(this)">Show Answer</button>
      <div class="qb-answer hidden"><strong>Answer:</strong> (${String.fromCharCode(97 + q.answer)}) ${esc(q.options[q.answer])}</div>
    </div>\n`;
    });

    caseCards += `  </div>\n</div>\n\n`;
  });

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
${fonts}
<link rel="stylesheet" href="../css/base.css">
<style>
${cssVars}
.cs-card{background:#fff;border:1px solid var(--sand-200);border-radius:14px;margin-bottom:1.5rem;overflow:hidden}
.cs-header{display:flex;flex-wrap:wrap;gap:.5rem;align-items:center;padding:1rem 1.25rem;border-left:5px solid;background:var(--sand-50)}
.cs-badge{font-size:.68rem;font-weight:800;color:#fff;background:var(--subject-color);border-radius:999px;padding:.2rem .65rem;text-transform:uppercase;letter-spacing:.03em}
.cs-ch{font-family:'Newsreader',serif;font-size:.92rem;font-weight:600;color:var(--ink)}
.cs-source{font-size:.65rem;font-weight:700;color:var(--ink-3);background:var(--sand-100);border:1px solid var(--sand-200);border-radius:999px;padding:.15rem .5rem;margin-left:auto}
.cs-passage{padding:1.25rem;font-size:.86rem;color:var(--ink-2);line-height:1.75;border-bottom:1px solid var(--sand-200);white-space:pre-line}
.cs-questions{padding:1rem 1.25rem}
.cs-q{margin-bottom:1rem;padding-bottom:1rem;border-bottom:1px solid var(--sand-100)}
.cs-q:last-child{border-bottom:none;margin-bottom:0;padding-bottom:0}
.cs-q-text{font-size:.86rem;font-weight:500;color:var(--ink);line-height:1.6;margin-bottom:.5rem}
.cs-opts{display:grid;grid-template-columns:1fr 1fr;gap:.3rem .75rem}
.cs-opt{font-size:.82rem;color:var(--ink-2);padding:.25rem 0}
.qb-ans-toggle{display:inline-block;margin-top:.5rem;padding:.25rem .7rem;font-size:.7rem;font-weight:700;color:var(--subject-color);background:var(--subject-bg);border:1px solid var(--subject-border);border-radius:999px;cursor:pointer;transition:all .15s}
.qb-ans-toggle:hover{background:var(--subject-color);color:#fff}
.qb-answer{margin-top:.5rem;padding:.6rem .85rem;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;font-size:.8rem;color:#166534;line-height:1.6}
.qb-answer.hidden{display:none}
@media(max-width:640px){
  .cs-opts{grid-template-columns:1fr}
  .cs-passage{padding:1rem;font-size:.82rem}
  .cs-header{padding:.75rem 1rem}
}
</style>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Case study MCQ practice for CBSE Class 12 Mathematics — ${allCases.length} real-world scenarios with linked questions.">
<meta name="author" content="Dinesh Varadharajan">
<meta name="robots" content="index, follow">
<meta property="og:title" content="Maths Case Study Questions | CBSE Class 12">
<meta property="og:type" content="website">
<link rel="canonical" href="https://ncert.myailab.space/maths/case-study.html">
<title>Maths Case Study Questions | CBSE Class 12</title>
</head>
<body>
<div class="container">
<a href="../index.html" class="back-link">← Back to Hub</a>

<div class="hero">
  <div class="badge">Mathematics XII &middot; ${allCases.length} Case Studies</div>
  <h1>Case Study Questions</h1>
  <p class="sub">Real-world scenario-based MCQs — the CBSE competency-based pattern with 5 linked questions per case.</p>
</div>

${caseCards}

</div>
${footer}
<script>
function toggleAnswer(btn) {
  var ans = btn.nextElementSibling;
  ans.classList.toggle('hidden');
  btn.textContent = ans.classList.contains('hidden') ? 'Show Answer' : 'Hide Answer';
}
</script>
</body>
</html>`;

  fs.writeFileSync(path.join(outDir, 'case-study.html'), html, 'utf8');
  console.log('case-study.html — placeholder with topic preview');
}

// ── Run all generators ──
genFormulas();
genConcepts();
genDerivations();
genQuestionBank();
genMockTests();
genCaseStudy();
console.log('\nAll 6 pages generated in maths/');
