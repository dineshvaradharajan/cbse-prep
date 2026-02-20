(function() {
  // State
  let testMode = false;
  let submitted = false;
  let selections = {}; // key: "cs-q" => opt letter
  let answeredInPractice = new Set(); // track practice-mode reveals

  const allBlocks = document.querySelectorAll('.question-block');
  const totalQ = allBlocks.length;

  // --- Practice Mode: Show/Hide Answer ---
  window.toggleAnswer = function(btn) {
    const box = btn.nextElementSibling;
    const isVisible = box.classList.contains('visible');
    box.classList.toggle('visible');
    btn.textContent = isVisible ? 'Show Answer' : 'Hide Answer';

    if (!isVisible) {
      const block = btn.closest('.question-block');
      const key = block.dataset.cs + '-' + block.dataset.q;
      if (!answeredInPractice.has(key)) {
        answeredInPractice.add(key);
        updateProgress();
      }
    }
  };

  // --- Test Mode Toggle ---
  window.toggleTestMode = function() {
    if (submitted) return;
    testMode = !testMode;
    document.body.classList.toggle('test-mode', testMode);
    const btn = document.getElementById('testModeBtn');
    const submitBtn = document.getElementById('submitBtn');
    if (testMode) {
      btn.textContent = 'Exit Test Mode';
      btn.classList.add('active');
      submitBtn.style.display = 'inline-block';
      // hide all practice answers
      document.querySelectorAll('.answer-box').forEach(b => b.classList.remove('visible'));
      document.querySelectorAll('.show-answer-btn').forEach(b => b.textContent = 'Show Answer');
    } else {
      btn.textContent = 'Test Mode';
      btn.classList.remove('active');
      submitBtn.style.display = 'none';
      // clear selections visual
      clearSelections();
    }
    updateProgress();
  };

  // --- Option Click (Test Mode) ---
  document.addEventListener('click', function(e) {
    if (!testMode || submitted) return;
    const li = e.target.closest('.options li');
    if (!li) return;
    const block = li.closest('.question-block');
    const key = block.dataset.cs + '-' + block.dataset.q;
    const opt = li.dataset.opt;

    // deselect siblings
    block.querySelectorAll('.options li').forEach(l => l.classList.remove('selected'));
    li.classList.add('selected');
    selections[key] = opt;
    updateProgress();
  });

  // --- Submit Test ---
  window.submitTest = function() {
    if (!testMode) return;
    submitted = true;

    let score = 0;
    allBlocks.forEach(block => {
      const key = block.dataset.cs + '-' + block.dataset.q;
      const correctOpt = block.dataset.answer;
      const selectedOpt = selections[key];

      // show answer box
      const box = block.querySelector('.answer-box');
      box.classList.add('visible');

      // highlight correct and wrong
      block.querySelectorAll('.options li').forEach(li => {
        if (li.dataset.opt === correctOpt) {
          li.classList.add('correct-answer');
        }
        if (li.dataset.opt === selectedOpt && selectedOpt !== correctOpt) {
          li.classList.add('wrong-answer');
        }
      });

      if (selectedOpt === correctOpt) score++;
    });

    // show results
    document.getElementById('resultsScore').textContent = score + ' / ' + totalQ;
    const pct = Math.round(score / totalQ * 100);
    let msg = '';
    if (pct >= 90) msg = 'Outstanding! You have excellent command of the concepts.';
    else if (pct >= 75) msg = 'Great job! A little more revision and you will ace the exam.';
    else if (pct >= 50) msg = 'Good effort. Review the explanations for the questions you missed.';
    else msg = 'Keep practising. Go through the NCERT chapters and try again.';
    document.getElementById('resultsMsg').textContent = msg + ' (' + pct + '%)';
    document.getElementById('resultsOverlay').classList.add('visible');

    document.getElementById('scoreValue').textContent = score;
    updateProgress();

    // disable test mode button
    document.getElementById('testModeBtn').disabled = true;
    document.getElementById('submitBtn').style.display = 'none';
  };

  // --- Close Results ---
  window.closeResults = function() {
    document.getElementById('resultsOverlay').classList.remove('visible');
  };

  // --- Reset ---
  window.resetAll = function() {
    testMode = false;
    submitted = false;
    selections = {};
    answeredInPractice = new Set();

    document.body.classList.remove('test-mode');
    document.getElementById('testModeBtn').textContent = 'Test Mode';
    document.getElementById('testModeBtn').classList.remove('active');
    document.getElementById('testModeBtn').disabled = false;
    document.getElementById('submitBtn').style.display = 'none';
    document.getElementById('scoreValue').textContent = '0';

    allBlocks.forEach(block => {
      block.querySelectorAll('.options li').forEach(li => {
        li.classList.remove('selected', 'correct-answer', 'wrong-answer');
      });
      block.querySelector('.answer-box').classList.remove('visible');
      block.querySelector('.show-answer-btn').textContent = 'Show Answer';
    });

    updateProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  function clearSelections() {
    selections = {};
    allBlocks.forEach(block => {
      block.querySelectorAll('.options li').forEach(li => li.classList.remove('selected'));
    });
  }

  function updateProgress() {
    let answered = 0;
    if (testMode || submitted) {
      answered = Object.keys(selections).length;
    } else {
      answered = answeredInPractice.size;
    }
    const pct = Math.round(answered / totalQ * 100);
    document.getElementById('progressFill').style.width = pct + '%';
    document.getElementById('progressLabel').textContent = answered + ' / ' + totalQ + ' answered';
  }

  updateProgress();
})();
