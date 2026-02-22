/* ─── Mobile Dropdowns ─────────────────────────────────────────────────────
   Auto-generates <select> dropdowns from existing tabs/buttons on mobile.
   Include this script at the bottom of any page with tabs.
   ────────────────────────────────────────────────────────────────────────── */

(function() {
  function createSelect(container, buttons, onChangeFn) {
    if (!container || buttons.length === 0) return;
    // Remove any existing mobile-select in this container
    const existing = container.querySelector('.mobile-select');
    if (existing) existing.remove();

    const select = document.createElement('select');
    select.className = 'mobile-select';
    buttons.forEach((btn, i) => {
      const opt = document.createElement('option');
      opt.value = i;
      opt.textContent = btn.textContent.trim();
      if (btn.classList.contains('active')) opt.selected = true;
      select.appendChild(opt);
    });
    select.onchange = () => onChangeFn(parseInt(select.value));
    container.appendChild(select);
    return select;
  }

  // ── .ch-nav (MCQ / Practice pages) ──
  const chNav = document.querySelector('.ch-nav');
  if (chNav) {
    const btns = Array.from(chNav.querySelectorAll('.ch-btn'));
    createSelect(chNav, btns, (i) => btns[i].click());
  }

  // ── .chapter-bar (Chapter pages) ──
  const chapterBar = document.querySelector('.chapter-bar');
  if (chapterBar) {
    const tabs = Array.from(chapterBar.querySelectorAll('.chapter-tabs .tab'));
    createSelect(chapterBar, tabs, (i) => tabs[i].click());
  }

  // ── .section-nav (Concepts/Questions toggle in chapter pages) ──
  const sectionNav = document.querySelector('.section-nav');
  if (sectionNav) {
    const tabs = Array.from(sectionNav.querySelectorAll('.tab'));
    if (tabs.length > 1) {
      createSelect(sectionNav, tabs, (i) => tabs[i].click());
    }
  }

  // Expose helper for dynamic q-dot dropdowns (used by mock test / chapter engines)
  window.buildQDotDropdown = function(container, count, currentIndex, onSelect) {
    let select = container.querySelector('.mobile-select');
    if (!select) {
      select = document.createElement('select');
      select.className = 'mobile-select';
      container.appendChild(select);
    }
    select.innerHTML = '';
    for (let i = 0; i < count; i++) {
      const opt = document.createElement('option');
      opt.value = i;
      opt.textContent = 'Question ' + (i + 1);
      select.appendChild(opt);
    }
    select.value = currentIndex;
    select.onchange = () => onSelect(parseInt(select.value));
    return select;
  };

  window.updateQDotDropdown = function(container, currentIndex, statuses) {
    const select = container.querySelector('.mobile-select');
    if (!select) return;
    select.value = currentIndex;
    // Update option labels with status indicators
    if (statuses) {
      Array.from(select.options).forEach((opt, i) => {
        const s = statuses[i] || '';
        const prefix = s === 'correct' ? '✓ ' : s === 'wrong' ? '✗ ' : s === 'answered' ? '● ' : s === 'skipped' ? '○ ' : '';
        opt.textContent = prefix + 'Question ' + (i + 1);
      });
    }
  };
})();
