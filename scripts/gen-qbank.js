const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'grouped');
const m2 = JSON.parse(fs.readFileSync(path.join(dataDir, '2mark_physical.json'), 'utf8'));
const m3 = JSON.parse(fs.readFileSync(path.join(dataDir, '3mark_physical.json'), 'utf8'));
const m4 = JSON.parse(fs.readFileSync(path.join(dataDir, '4mark_physical.json'), 'utf8'));
const m5 = JSON.parse(fs.readFileSync(path.join(dataDir, '5mark_physical.json'), 'utf8'));

const total = m2.length + m3.length + m4.length + m5.length;

function groupByChapter(arr) {
  const g = {};
  arr.forEach(q => {
    const ch = q.chapter || 'Uncategorized';
    if (!g[ch]) g[ch] = [];
    g[ch].push(q);
  });
  return g;
}

function esc(s) {
  // The questions already contain HTML - return as-is
  return s || '';
}

function renderQuestion(q) {
  const badge = q.year + ' &middot; ' + q.marks + ' mark' + (q.marks > 1 ? 's' : '');
  const oos = q.outOfSyllabus ? ' <span class="oos-badge">Out of Syllabus</span>' : '';
  const setInfo = q.set ? ' <span class="set-badge">' + esc(q.set) + '</span>' : '';

  let typeBadge = '<span class="qb-type-badge subj">Subjective</span>';
  if (q.type === 'mcq') typeBadge = '<span class="qb-type-badge mcq">MCQ</span>';
  if (q.type === 'case-based') typeBadge = '<span class="qb-type-badge case">Case Study</span>';

  let optionsHtml = '';
  if (q.type === 'mcq' && q.options && q.options.length) {
    const letters = ['A','B','C','D'];
    optionsHtml = '<div class="qb-options">';
    q.options.forEach((o, i) => {
      optionsHtml += '<div class="qb-opt"><span class="qb-opt-letter">' + letters[i] + '</span>' + esc(o) + '</div>';
    });
    optionsHtml += '</div>';
  }

  return `<div class="qb-card">
<div class="qb-meta"><span class="qb-year-badge">${badge}</span>${typeBadge}${oos}${setInfo}</div>
<div class="qb-question">${esc(q.question)}</div>
${optionsHtml}
<button class="show-ans-btn" onclick="toggleAns(this)">Show Answer</button>
<div class="qb-answer"><span class="ans-label">Answer:</span>${esc(q.answer)}</div>
</div>`;
}

function renderTab(arr) {
  const grouped = groupByChapter(arr);
  const chapters = Object.keys(grouped).sort();
  let html = '';
  chapters.forEach(ch => {
    const qs = grouped[ch];
    html += `<div class="qb-chapter-section">
<button class="qb-chapter-toggle" onclick="toggleChapter(this)">
<span class="qb-ch-name">${ch}</span>
<span class="qb-ch-count">${qs.length} question${qs.length > 1 ? 's' : ''}</span>
<span class="qb-ch-arrow">&#9660;</span>
</button>
<div class="qb-chapter-body open">
${qs.map(q => renderQuestion(q)).join('\n')}
</div>
</div>`;
  });
  return html;
}

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400&family=Lato:wght@400;700;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../../css/base.css">
<link rel="stylesheet" href="../../css/mcq.css">
<style>
:root{--subject-color:#0891b2;--subject-bg:#ecfeff;--subject-border:#67e8f9;--subject-text:#0e7490;}

.qb-tabs{position:sticky;top:0;z-index:100;background:rgba(253,252,250,.94);backdrop-filter:blur(12px);border-bottom:1px solid var(--sand-200);padding:.5rem 0;overflow-x:auto}
.qb-tabs::-webkit-scrollbar{display:none}
.qb-tabs-inner{display:flex;gap:0;max-width:80%;margin:0 auto;padding:0 1.25rem;min-width:max-content}
.qb-tab{padding:.4rem 1rem;font-size:.75rem;font-weight:700;border:none;background:none;cursor:pointer;color:var(--ink-3);border-bottom:2.5px solid transparent;transition:all .18s;white-space:nowrap;font-family:"Lato",sans-serif}
.qb-tab:hover{color:var(--ink)}
.qb-tab.active{color:var(--ink);border-bottom-color:var(--subject-color)}

.qb-panel{display:none;padding:2rem 0 3rem}
.qb-panel.active{display:block}

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
.oos-badge{font-size:.58rem;font-weight:700;color:#dc2626;background:#fef2f2;border:1px solid #fca5a5;border-radius:999px;padding:.1rem .45rem}
.set-badge{font-size:.58rem;font-weight:600;color:var(--ink-3);background:var(--sand-100);border:1px solid var(--sand-200);border-radius:999px;padding:.1rem .45rem}

.qb-question{font-size:.88rem;font-weight:500;color:var(--ink);line-height:1.65;margin-bottom:.75rem}
.qb-question sub,.qb-question sup{font-size:.75em}
.qb-options{display:flex;flex-direction:column;gap:.35rem;margin-bottom:.75rem}
.qb-opt{display:flex;align-items:flex-start;gap:.5rem;padding:.45rem .75rem;border-radius:8px;border:1.5px solid var(--sand-200);background:var(--sand-50);font-size:.8rem;color:var(--ink-2);line-height:1.4}
.qb-opt-letter{font-weight:800;color:var(--ink-3);flex-shrink:0;min-width:16px}

.show-ans-btn{font-size:.7rem;font-weight:700;color:var(--subject-color);background:var(--subject-bg);border:1px solid var(--subject-border);border-radius:6px;padding:.3rem .75rem;cursor:pointer;font-family:"Lato",sans-serif;transition:all .15s}
.show-ans-btn:hover{background:#cffafe;border-color:#22d3ee}

.qb-answer{display:none;margin-top:.65rem;padding:.85rem 1rem;background:var(--sand-50);border:1px solid var(--sand-200);border-left:3px solid var(--subject-color);border-radius:0 8px 8px 0;font-size:.8rem;color:var(--ink-2);line-height:1.7}
.qb-answer.visible{display:block}
.qb-answer .ans-label{font-weight:800;color:var(--subject-color);display:block;margin-bottom:.3rem;font-size:.72rem;text-transform:uppercase;letter-spacing:.04em}
.qb-answer sub,.qb-answer sup{font-size:.75em}

@media(max-width:640px){
  .qb-tabs-inner{display:none}
  .qb-tabs .mobile-select{display:block;margin:0 auto;max-width:95%}
  .qb-tabs{padding:.4rem .5rem}
  .qb-card{padding:.85rem;border-radius:10px;margin-bottom:.6rem}
  .qb-question{font-size:.82rem}
  .qb-ch-name{font-size:.88rem}
  .qb-chapter-toggle{padding:.6rem .75rem}
}
</style>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PYQ Question Bank — Physical Chemistry XII</title>
</head>
<body>
<div class="container">
<a href="../../index.html" class="back-link">&#8592; Back to Home</a>
<div class="hero">
  <div class="badge">Physical Chemistry XII &middot; Question Bank</div>
  <h1>PYQ Question Bank</h1>
  <p class="sub">Previous year questions (2013&ndash;2025) grouped by marks &mdash; 2, 3, 4 &amp; 5 mark questions with answers. ${total} questions total.</p>
</div>

<nav class="qb-tabs">
  <div class="qb-tabs-inner">
    <button class="qb-tab active" onclick="showTab(0,this)">2 Marks (${m2.length})</button>
    <button class="qb-tab" onclick="showTab(1,this)">3 Marks (${m3.length})</button>
    <button class="qb-tab" onclick="showTab(2,this)">4 Marks (${m4.length})</button>
    <button class="qb-tab" onclick="showTab(3,this)">5 Marks (${m5.length})</button>
  </div>
  <select class="mobile-select" onchange="showTab(this.selectedIndex,null)">
    <option>2 Marks (${m2.length})</option>
    <option>3 Marks (${m3.length})</option>
    <option>4 Marks (${m4.length})</option>
    <option>5 Marks (${m5.length})</option>
  </select>
</nav>

<div class="qb-panel active" id="panel-0">
${renderTab(m2)}
</div>

<div class="qb-panel" id="panel-1">
${renderTab(m3)}
</div>

<div class="qb-panel" id="panel-2">
${renderTab(m4)}
</div>

<div class="qb-panel" id="panel-3">
${renderTab(m5)}
</div>

</div>

<footer class="site-footer">Released under the <a href="https://github.com/dineshvaradharajan/cbse-prep/blob/main/LICENSE" target="_blank">MIT License</a> &middot; &copy; 2026 Dinesh Varadharajan &middot; Built for CBSE XII revision</footer>

<script>
function showTab(i, btn) {
  document.querySelectorAll('.qb-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.qb-tab').forEach(b => b.classList.remove('active'));
  document.getElementById('panel-' + i).classList.add('active');
  if (btn) btn.classList.add('active');
  else { var tabs = document.querySelectorAll('.qb-tab'); if (tabs[i]) tabs[i].classList.add('active'); }
  document.querySelector('.qb-tabs .mobile-select').selectedIndex = i;
}

function toggleAns(btn) {
  var box = btn.nextElementSibling;
  if (box.classList.contains('visible')) {
    box.classList.remove('visible');
    btn.textContent = 'Show Answer';
  } else {
    box.classList.add('visible');
    btn.textContent = 'Hide Answer';
  }
}

function toggleChapter(btn) {
  btn.classList.toggle('collapsed');
  var body = btn.nextElementSibling;
  body.classList.toggle('collapsed');
  body.classList.toggle('open');
}
</script>
</body>
</html>`;

const outPath = path.join(__dirname, '..', 'chemistry', 'physical', 'question-bank.html');
fs.writeFileSync(outPath, html, 'utf8');
console.log('Written to', outPath);
console.log('Total:', total, '| 2m:', m2.length, '| 3m:', m3.length, '| 4m:', m4.length, '| 5m:', m5.length);
