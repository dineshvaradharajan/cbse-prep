/* ═══════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════ */
let activeTest = null;       // test object
let currentQ  = 0;           // 0-based question index
let selections = {};         // {qId: 'A'|'B'|'C'|'D'}
let submitted  = false;
let timerSeconds = 0;
let timerInterval = null;
let startTime = null;
const LETTERS = ['A','B','C','D'];

/* ═══════════════════════════════════════════════
   INIT — build test selection cards
═══════════════════════════════════════════════ */
function buildSelectScreen() {
  const grid = document.getElementById('test-grid');
  grid.innerHTML = '';
  MOCK_TESTS.forEach(t => {
    const card = document.createElement('div');
    card.className = 'test-card';
    card.innerHTML = `
      <div class="test-card-header">
        <div class="test-icon">${t.icon}</div>
        <div>
          <h3>${t.name}</h3>
          <div class="test-sub">${t.subtitle}</div>
        </div>
      </div>
      <div class="test-meta">
        <span class="test-badge">16 Questions</span>
        <span class="test-badge time">⏱ 30 min</span>
        <span class="test-badge marks">★ 16 Marks</span>
        <span class="test-badge">All Chapters</span>
      </div>
      <button class="test-start-btn" onclick="startTest(${t.id})">Start Test →</button>
    `;
    grid.appendChild(card);
  });
}

/* ═══════════════════════════════════════════════
   START TEST
═══════════════════════════════════════════════ */
function startTest(testId) {
  activeTest  = MOCK_TESTS.find(t => t.id === testId);
  currentQ    = 0;
  selections  = {};
  submitted   = false;
  startTime   = Date.now();

  document.getElementById('screen-select').style.display = 'none';
  document.getElementById('screen-result').style.display  = 'none';
  document.getElementById('screen-test').style.display    = 'block';

  document.getElementById('topbar-name').textContent = activeTest.name;

  buildQNav();
  renderQuestion();
  startTimer(activeTest.duration);
}

/* ═══════════════════════════════════════════════
   TIMER
═══════════════════════════════════════════════ */
function startTimer(seconds) {
  if (timerInterval) clearInterval(timerInterval);
  timerSeconds = seconds;
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timerSeconds--;
    updateTimerDisplay();
    if (timerSeconds <= 0) {
      clearInterval(timerInterval);
      timerSeconds = 0;
      submitTest(true);
    }
  }, 1000);
}

function updateTimerDisplay() {
  const el  = document.getElementById('timer-display');
  const m   = Math.floor(timerSeconds / 60).toString().padStart(2, '0');
  const s   = (timerSeconds % 60).toString().padStart(2, '0');
  el.textContent = `${m}:${s}`;
  el.className = timerSeconds < 300 ? 'urgent' : timerSeconds < 600 ? 'warn' : '';
}

function elapsedStr() {
  const elapsed = Math.round((Date.now() - startTime) / 1000);
  const m = Math.floor(elapsed / 60);
  const s = elapsed % 60;
  return `${m}m ${s}s`;
}

/* ═══════════════════════════════════════════════
   QUESTION NAV DOTS
═══════════════════════════════════════════════ */
function buildQNav() {
  const bar = document.getElementById('q-nav-bar');
  // Clear existing dots (keep legend)
  const existingDots = bar.querySelectorAll('.q-dot');
  existingDots.forEach(d => d.remove());

  // Insert dots before legend
  const legend = bar.querySelector('.nav-legend');
  activeTest.questions.forEach((q, i) => {
    const dot = document.createElement('div');
    dot.className = 'q-dot';
    dot.id = `dot-${i}`;
    dot.textContent = i + 1;
    dot.onclick = () => { currentQ = i; renderQuestion(); };
    bar.insertBefore(dot, legend);
  });
  // Build mobile dropdown
  if (window.buildQDotDropdown) {
    window.buildQDotDropdown(bar, activeTest.questions.length, currentQ, (i) => { currentQ = i; renderQuestion(); });
  }
  updateQNav();
}

function updateQNav() {
  if (!activeTest) return;
  activeTest.questions.forEach((q, i) => {
    const dot = document.getElementById(`dot-${i}`);
    if (!dot) return;
    dot.className = 'q-dot';
    if (submitted) {
      const sel = selections[q.id];
      if (!sel) dot.classList.add('skipped');
      else if (sel === q.answer) dot.classList.add('correct');
      else dot.classList.add('wrong');
    } else {
      if (selections[q.id]) dot.classList.add('answered');
    }
    if (i === currentQ) dot.classList.add('active');
  });

  // Sync mobile dropdown
  if (window.updateQDotDropdown) {
    const statuses = activeTest.questions.map((q, i) => {
      if (submitted) {
        const sel = selections[q.id];
        if (!sel) return 'skipped';
        return sel === q.answer ? 'correct' : 'wrong';
      }
      return selections[q.id] ? 'answered' : '';
    });
    window.updateQDotDropdown(document.getElementById('q-nav-bar'), currentQ, statuses);
  }

  // progress bar
  const answered = Object.keys(selections).length;
  const pct = (answered / 16) * 100;
  document.getElementById('prog-fill').style.width = pct + '%';
  document.getElementById('prog-label').textContent = `${answered} / 16 answered`;
}

/* ═══════════════════════════════════════════════
   RENDER QUESTION
═══════════════════════════════════════════════ */
function renderQuestion() {
  const q = activeTest.questions[currentQ];

  document.getElementById('q-number-label').textContent = `Question ${currentQ + 1} of ${activeTest.questions.length}`;
  document.getElementById('q-chapter-tag').innerHTML = q.chapter;
  document.getElementById('q-text').innerHTML = q.text;
  document.getElementById('q-counter').textContent = `${currentQ + 1} / ${activeTest.questions.length}`;

  // Options
  const grid = document.getElementById('options-grid');
  grid.innerHTML = '';
  q.options.forEach((opt, i) => {
    const letter = LETTERS[i];
    const btn = document.createElement('button');
    btn.className = 'option-btn';

    const sel = selections[q.id];
    if (submitted) {
      btn.disabled = true;
      if (letter === q.answer) btn.classList.add('correct-ans');
      else if (sel === letter) btn.classList.add('wrong-ans');
    } else {
      if (sel === letter) btn.classList.add('selected');
      btn.onclick = () => selectAnswer(letter);
    }

    btn.innerHTML = `<span class="opt-letter">${letter}</span><span>${opt}</span>`;
    grid.appendChild(btn);
  });

  // Explanation
  const explBox = document.getElementById('expl-box');
  if (submitted) {
    const sel = selections[q.id];
    const isCorrect = sel === q.answer;
    explBox.style.display = 'block';
    explBox.className = 'explanation-box' + (isCorrect ? '' : ' wrong');
    document.getElementById('expl-label').textContent = isCorrect ? 'Correct! Explanation:' : 'Incorrect. Explanation:';
    document.getElementById('expl-text').innerHTML = q.explanation;
  } else {
    explBox.style.display = 'none';
  }

  // Nav buttons
  document.getElementById('btn-prev').disabled = currentQ === 0;
  document.getElementById('btn-next').disabled = currentQ === activeTest.questions.length - 1;
  document.getElementById('btn-submit').style.display = submitted ? 'none' : '';

  updateQNav();
}

/* ═══════════════════════════════════════════════
   SELECT ANSWER
═══════════════════════════════════════════════ */
function selectAnswer(letter) {
  if (submitted) return;
  const qId = activeTest.questions[currentQ].id;
  selections[qId] = letter;
  renderQuestion();
}

/* ═══════════════════════════════════════════════
   NAVIGATION
═══════════════════════════════════════════════ */
function navigate(dir) {
  const newIdx = currentQ + dir;
  if (newIdx < 0 || newIdx >= activeTest.questions.length) return;
  currentQ = newIdx;
  renderQuestion();
}

/* ═══════════════════════════════════════════════
   SUBMIT
═══════════════════════════════════════════════ */
function confirmSubmit() {
  const answered = Object.keys(selections).length;
  const remaining = 16 - answered;
  if (remaining > 0) {
    if (!confirm(`You have ${remaining} unanswered question${remaining > 1 ? 's' : ''}. Submit anyway?`)) return;
  }
  submitTest(false);
}

function submitTest(auto) {
  if (submitted) return;
  submitted = true;
  if (timerInterval) clearInterval(timerInterval);

  const elapsed = elapsedStr();

  // Calculate scores
  let correct = 0, wrong = 0, skipped = 0;
  activeTest.questions.forEach(q => {
    const sel = selections[q.id];
    if (!sel) skipped++;
    else if (sel === q.answer) correct++;
    else wrong++;
  });

  // Update nav (show correct/wrong/skipped)
  updateQNav();

  // Show result screen
  document.getElementById('screen-test').style.display = 'none';
  document.getElementById('screen-result').style.display = 'block';

  const pct = Math.round((correct / 16) * 100);
  document.getElementById('res-score').textContent = correct;
  document.getElementById('res-pct').textContent = `${pct}%`;
  document.getElementById('res-correct').textContent = correct;
  document.getElementById('res-wrong').textContent = wrong;
  document.getElementById('res-skipped').textContent = skipped;
  document.getElementById('res-time').textContent = elapsed;

  // Grade
  let grade, gradeClass, msg;
  if (pct >= 94)      { grade = 'A+  Excellent';    gradeClass = 'grade-a-plus'; }
  else if (pct >= 81) { grade = 'A  Very Good';     gradeClass = 'grade-a'; }
  else if (pct >= 69) { grade = 'B  Good';          gradeClass = 'grade-b'; }
  else if (pct >= 56) { grade = 'C  Average';       gradeClass = 'grade-c'; }
  else                { grade = 'D  Needs Work';    gradeClass = 'grade-d'; }

  const gradeEl = document.getElementById('res-grade');
  gradeEl.textContent = grade;
  gradeEl.className = `result-grade ${gradeClass}`;

  // Set result colour
  const pctEl = document.getElementById('res-pct');
  pctEl.style.color = pct >= 75 ? 'var(--green)' : pct >= 50 ? 'var(--orange)' : 'var(--red)';

  buildReview();
}

/* ═══════════════════════════════════════════════
   REVIEW
═══════════════════════════════════════════════ */
function buildReview() {
  const list = document.getElementById('review-list');
  list.innerHTML = '';

  activeTest.questions.forEach((q, i) => {
    const sel = selections[q.id];
    const isCorrect = sel === q.answer;
    const isSkipped = !sel;

    const cls = isSkipped ? 'r-skipped' : isCorrect ? 'r-correct' : 'r-wrong';
    const item = document.createElement('div');
    item.className = `review-item ${cls}`;

    const yourText = sel ? `Your answer: ${sel} — ${q.options[LETTERS.indexOf(sel)]}` : 'Not attempted';
    const correctText = `Correct: ${q.answer} — ${q.options[LETTERS.indexOf(q.answer)]}`;

    item.innerHTML = `
      <div class="review-header">
        <div class="review-num">${i + 1}</div>
        <div class="review-q-text">${q.text}</div>
      </div>
      <div class="review-answers">
        <span class="review-your">${yourText}</span>
        ${!isCorrect ? `<span class="review-correct-tag">${correctText}</span>` : ''}
      </div>
      <div class="review-expl">${q.explanation}</div>
      <div class="review-chapter">${q.chapter}</div>
    `;
    list.appendChild(item);
  });
}

/* ═══════════════════════════════════════════════
   BACK / RETAKE
═══════════════════════════════════════════════ */
function backToSelect() {
  submitted = false;
  document.getElementById('screen-result').style.display = 'none';
  document.getElementById('screen-select').style.display  = 'block';
  if (timerInterval) clearInterval(timerInterval);
}

function retakeTest() {
  const id = activeTest.id;
  document.getElementById('screen-result').style.display = 'none';
  startTest(id);
}

/* ═══════════════════════════════════════════════
   KEYBOARD SHORTCUTS
═══════════════════════════════════════════════ */
document.addEventListener('keydown', e => {
  if (!activeTest || submitted) return;
  const key = e.key;
  if (key === 'ArrowRight') navigate(1);
  else if (key === 'ArrowLeft') navigate(-1);
  else if (key === '1' || key === 'a' || key === 'A') selectAnswer('A');
  else if (key === '2' || key === 'b' || key === 'B') selectAnswer('B');
  else if (key === '3' || key === 'c' || key === 'C') selectAnswer('C');
  else if (key === '4' || key === 'd' || key === 'D') selectAnswer('D');
});

/* ═══════════════════════════════════════════════
   BOOT
═══════════════════════════════════════════════ */
buildSelectScreen();
document.getElementById('screen-select').classList.add('active');
