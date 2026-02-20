  // ── Toggle individual solution ──
  function toggleSolution(btn) {
    const solutionArea = btn.nextElementSibling;
    const isVisible = solutionArea.classList.contains('visible');
    solutionArea.classList.toggle('visible');
    btn.classList.toggle('open');
    btn.innerHTML = isVisible
      ? '<span class="arrow">&#9654;</span> Solution'
      : '<span class="arrow">&#9654;</span> Hide Solution';
  }

  // ── Toggle all solutions ──
  function toggleAllSolutions(show) {
    document.querySelectorAll('.solution-area').forEach(area => {
      if (show) area.classList.add('visible');
      else area.classList.remove('visible');
    });
    document.querySelectorAll('.toggle-btn').forEach(btn => {
      if (show) {
        btn.classList.add('open');
        btn.innerHTML = '<span class="arrow">&#9654;</span> Hide Solution';
      } else {
        btn.classList.remove('open');
        btn.innerHTML = '<span class="arrow">&#9654;</span> Solution';
      }
    });
  }

  // ── Progress tracking with localStorage ──
  const STORAGE_KEY = 'cbse-numericals-progress';

  function loadProgress() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const completed = JSON.parse(saved);
      completed.forEach(id => {
        const card = document.getElementById('problem-' + id);
        if (card) {
          const cb = card.querySelector('input[type="checkbox"]');
          if (cb) cb.checked = true;
          card.classList.add('completed');
        }
      });
      updateProgressBar();
    }
  }

  function saveProgress() {
    const completed = [];
    document.querySelectorAll('.problem-card input[type="checkbox"]:checked').forEach(cb => {
      const card = cb.closest('.problem-card');
      const id = card.id.replace('problem-', '');
      completed.push(parseInt(id));
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
  }

  function updateProgress(checkbox, id) {
    const card = document.getElementById('problem-' + id);
    if (checkbox.checked) {
      card.classList.add('completed');
    } else {
      card.classList.remove('completed');
    }
    saveProgress();
    updateProgressBar();
  }

  function updateProgressBar() {
    const total = 25;
    const done = document.querySelectorAll('.problem-card input[type="checkbox"]:checked').length;
    document.getElementById('progress-count').textContent = done + ' / ' + total + ' completed';
    document.getElementById('progress-fill').style.width = (done / total * 100) + '%';
  }

  function resetProgress() {
    if (!confirm('Reset all progress? This cannot be undone.')) return;
    localStorage.removeItem(STORAGE_KEY);
    document.querySelectorAll('.problem-card input[type="checkbox"]').forEach(cb => {
      cb.checked = false;
    });
    document.querySelectorAll('.problem-card').forEach(card => {
      card.classList.remove('completed');
    });
    updateProgressBar();
  }

  // ── Initialize ──
  loadProgress();
