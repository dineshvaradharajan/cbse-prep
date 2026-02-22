// ═══════════════════════════════════════════
// MULTI-TOPIC ENGINE
// ═══════════════════════════════════════════
const letters = ["A","B","C","D"];
const sectionColors = {
  "Conceptual":"conceptual", "Numerical":"numerical", "Torque & Energy":"torque",
  "Mixed":"mixed", "Final Numerical":"final", "Power & Resonance":"torque",
  "Gauss's Law":"torque", "Capacitors":"torque", "Kirchhoff's & Bridges":"torque",
  "Biot-Savart & Ampere":"torque", "Magnetic Materials":"torque",
  "Faraday & Lenz":"torque", "EM Spectrum":"torque",
  "Lenses & Prisms":"torque", "Interference & Diffraction":"torque",
  "Photoelectric Effect":"torque", "Bohr Model":"torque",
  "Radioactivity":"torque", "Diodes & Transistors":"torque"
};

let activeTopic = 'ch1';
let activeView = 'concepts';

// Per-topic state
const topicState = {};
function getState() {
  if (!topicState[activeTopic]) {
    topicState[activeTopic] = {
      currentConcept: 0,
      currentQuestion: 0,
      selections: {},
      submitted: false,
      readConcepts: new Set(JSON.parse(localStorage.getItem(topicData[activeTopic].storageKey + '-concepts-read') || '[]'))
    };
  }
  return topicState[activeTopic];
}

// ═══════════════════════════════════════════
// TOPIC & VIEW SWITCHING
// ═══════════════════════════════════════════
function switchTopic(topic) {
  activeTopic = topic;
  document.querySelectorAll('.tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === topic);
  });
  // Reset to concepts view
  switchView(activeView);
  if (activeView === 'concepts') {
    renderConcept();
  } else {
    buildNav();
    renderQuestion();
    updateProgress();
  }
}

function switchView(view) {
  activeView = view;
  document.querySelectorAll('.section-nav .tab').forEach(t => t.classList.remove('active'));
  document.getElementById('conceptsView').classList.remove('active');
  document.getElementById('questionsView').classList.remove('active');

  if (view === 'concepts') {
    document.querySelector('.section-nav .tab:first-child').classList.add('active');
    document.getElementById('conceptsView').classList.add('active');
    renderConcept();
  } else {
    document.querySelector('.section-nav .tab:last-child').classList.add('active');
    document.getElementById('questionsView').classList.add('active');
    buildNav();
    renderQuestion();
    updateProgress();
  }
}

// ═══════════════════════════════════════════
// CONCEPTS ENGINE
// ═══════════════════════════════════════════
function buildConceptToc() {
  const concepts = topicData[activeTopic].concepts;
  const state = getState();
  const toc = document.getElementById('conceptToc');
  toc.innerHTML = '';
  concepts.forEach((c, i) => {
    const btn = document.createElement('button');
    btn.className = 'tab';
    if (state.readConcepts.has(c.id)) btn.classList.add('read');
    if (i === state.currentConcept) {
      btn.classList.add('active');
    }
    btn.textContent = c.id;
    btn.onclick = () => { state.currentConcept = i; renderConcept(); };
    toc.appendChild(btn);
  });
}

function renderConcept() {
  const concepts = topicData[activeTopic].concepts;
  const state = getState();
  const c = concepts[state.currentConcept];
  const levelLabels = { basic: 'Basic', intermediate: 'Intermediate', advanced: 'Advanced', exam: 'Exam Focus' };

  state.readConcepts.add(c.id);
  localStorage.setItem(topicData[activeTopic].storageKey + '-concepts-read', JSON.stringify([...state.readConcepts]));

  document.getElementById('conceptCardArea').innerHTML = `
    <div class="concept-block">
      <div class="cb-header">
        <span class="cb-title">${c.title}</span>
        <span class="cb-freq">${c.id}</span>
        <span class="cb-years">${levelLabels[c.level]}</span>
      </div>
      <div class="cb-body">${c.body}</div>
    </div>
  `;

  document.getElementById('cPrevBtn').disabled = state.currentConcept === 0;
  document.getElementById('cNextBtn').disabled = state.currentConcept === concepts.length - 1;
  document.getElementById('cPageIndicator').textContent = `${state.currentConcept + 1} / ${concepts.length}`;

  buildConceptToc();
  const navEl = document.querySelector('.section-nav') || document.querySelector('.sub-tabs');
  if (navEl) window.scrollTo({ top: navEl.offsetTop - 20, behavior: 'smooth' });
}

function conceptNav(dir) {
  const concepts = topicData[activeTopic].concepts;
  const state = getState();
  const next = state.currentConcept + dir;
  if (next >= 0 && next < concepts.length) {
    state.currentConcept = next;
    renderConcept();
  }
}

// ═══════════════════════════════════════════
// QUESTIONS ENGINE
// ═══════════════════════════════════════════
function buildNav() {
  const questions = topicData[activeTopic].questions;
  const nav = document.getElementById('qNav');
  nav.innerHTML = '';
  let lastSection = '';
  questions.forEach((q, i) => {
    if (q.section !== lastSection) {
      lastSection = q.section;
      const label = document.createElement('div');
      label.className = 'section-label';
      label.textContent = q.section;
      nav.appendChild(label);
    }
    const dot = document.createElement('button');
    dot.className = 'q-dot';
    dot.textContent = q.id;
    dot.dataset.index = i;
    dot.onclick = () => { getState().currentQuestion = i; renderQuestion(); };
    nav.appendChild(dot);
  });
  // Build mobile dropdown
  if (window.buildQDotDropdown) {
    window.buildQDotDropdown(nav, questions.length, getState().currentQuestion, (i) => { getState().currentQuestion = i; renderQuestion(); });
  }
  updateQNav();
}

function updateQNav() {
  const questions = topicData[activeTopic].questions;
  const state = getState();
  document.querySelectorAll('.q-dot').forEach((dot, i) => {
    dot.className = 'q-dot';
    if (i === state.currentQuestion) dot.classList.add('active');
    else if (state.submitted) {
      const q = questions[i];
      const sel = state.selections[q.id];
      if (sel !== undefined) {
        dot.classList.add(letters[sel] === q.answer ? 'correct' : 'wrong');
      }
    } else if (state.selections[questions[i].id] !== undefined) {
      dot.classList.add('answered');
    }
  });
  // Sync mobile dropdown
  if (window.updateQDotDropdown) {
    const statuses = questions.map((q, i) => {
      if (state.submitted) {
        const sel = state.selections[q.id];
        if (sel === undefined) return '';
        return letters[sel] === q.answer ? 'correct' : 'wrong';
      }
      return state.selections[q.id] !== undefined ? 'answered' : '';
    });
    window.updateQDotDropdown(document.getElementById('qNav'), state.currentQuestion, statuses);
  }
}

function renderQuestion() {
  const questions = topicData[activeTopic].questions;
  const state = getState();
  const q = questions[state.currentQuestion];
  const sectionClass = sectionColors[q.section] || 'conceptual';

  document.getElementById('qNumber').innerHTML =
    `Question ${q.id} of ${questions.length}` +
    `<span class="q-section-tag ${sectionClass}">${q.section}</span>`;

  document.getElementById('qText').innerHTML = q.text;

  const container = document.getElementById('optionsContainer');
  container.innerHTML = '';

  q.options.forEach((opt, i) => {
    const div = document.createElement('div');
    div.className = 'opt';

    if (state.submitted) {
      const correctIdx = letters.indexOf(q.answer);
      if (i === correctIdx) div.classList.add('correct');
      else if (state.selections[q.id] === i) div.classList.add('wrong');
    } else if (state.selections[q.id] === i) {
      div.classList.add('selected');
    }

    if (!state.submitted) {
      div.onclick = () => {
        state.selections[q.id] = i;
        renderQuestion();
        updateQNav();
        updateProgress();
      };
    }

    const letter = document.createElement('div');
    letter.className = 'opt-letter';
    letter.textContent = letters[i];

    const text = document.createElement('div');
    text.className = 'opt-text';
    text.innerHTML = opt;

    const icon = document.createElement('div');
    icon.className = 'result-icon';
    if (state.submitted) {
      const correctIdx = letters.indexOf(q.answer);
      if (i === correctIdx) icon.textContent = '✓';
      else if (state.selections[q.id] === i) icon.textContent = '✗';
    }

    div.appendChild(letter);
    div.appendChild(text);
    div.appendChild(icon);
    container.appendChild(div);
  });

  document.getElementById('prevBtn').disabled = state.currentQuestion === 0;
  document.getElementById('nextBtn').disabled = state.currentQuestion === questions.length - 1;
  document.getElementById('pageIndicator').textContent = `${state.currentQuestion + 1} / ${questions.length}`;

  updateQNav();

  // Show/hide submit vs reset
  document.getElementById('submitBtn').style.display = state.submitted ? 'none' : 'inline-flex';
  document.getElementById('resetBtn').style.display = state.submitted ? 'inline-flex' : 'none';
  if (state.submitted) {
    document.getElementById('scoreCard').classList.add('show');
    document.getElementById('progressStrip').classList.add('submitted');
  } else {
    document.getElementById('scoreCard').classList.remove('show');
    document.getElementById('progressStrip').classList.remove('submitted');
  }
}

function navigate(dir) {
  const questions = topicData[activeTopic].questions;
  const state = getState();
  const next = state.currentQuestion + dir;
  if (next >= 0 && next < questions.length) {
    state.currentQuestion = next;
    renderQuestion();
  }
}

function updateProgress() {
  const questions = topicData[activeTopic].questions;
  const state = getState();
  const answered = Object.keys(state.selections).length;
  const pct = (answered / questions.length) * 100;
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressLabel').textContent = `${answered} / ${questions.length} answered`;
}

function submitTest() {
  const questions = topicData[activeTopic].questions;
  const state = getState();
  const answered = Object.keys(state.selections).length;
  if (answered === 0) { alert('Answer at least one question before submitting.'); return; }
  if (answered < questions.length) {
    if (!confirm(`You've answered ${answered} of ${questions.length} questions. Submit anyway?`)) return;
  }

  state.submitted = true;

  let correct = 0;
  questions.forEach(q => {
    if (state.selections[q.id] !== undefined && letters[state.selections[q.id]] === q.answer) correct++;
  });

  const pct = Math.round((correct / questions.length) * 100);
  const scoreBig = document.getElementById('scoreBig');
  scoreBig.textContent = `${correct}/${questions.length}`;
  scoreBig.className = 'score-big ' + (pct >= 70 ? 'good' : pct >= 40 ? 'ok' : 'bad');

  document.getElementById('scoreLabel').textContent = `${pct}% — ${answered} attempted`;

  let msg = '';
  if (pct >= 90) msg = 'Excellent! Strong grip on the concepts.';
  else if (pct >= 70) msg = 'Good work! Review the ones you missed.';
  else if (pct >= 40) msg = 'Decent attempt. Go through incorrect answers.';
  else msg = 'Needs improvement. Revisit the chapter thoroughly.';
  document.getElementById('scoreMsg').textContent = msg;

  renderQuestion();
  updateQNav();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetTest() {
  const state = getState();
  state.submitted = false;
  state.selections = {};
  state.currentQuestion = 0;
  buildNav();
  renderQuestion();
  updateQNav();
  updateProgress();
}

// Keyboard navigation
document.addEventListener('keydown', e => {
  if (activeView === 'questions') {
    if (e.key === 'ArrowLeft') navigate(-1);
    else if (e.key === 'ArrowRight') navigate(1);
    else if (!getState().submitted && ['1','2','3','4'].includes(e.key)) {
      const state = getState();
      const questions = topicData[activeTopic].questions;
      const idx = parseInt(e.key) - 1;
      state.selections[questions[state.currentQuestion].id] = idx;
      renderQuestion();
      updateQNav();
      updateProgress();
    }
  } else {
    if (e.key === 'ArrowLeft') conceptNav(-1);
    else if (e.key === 'ArrowRight') conceptNav(1);
  }
});

// Init
renderConcept();
