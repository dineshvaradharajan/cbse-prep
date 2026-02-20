function showCh(id, el) {
  document.querySelectorAll('.ch-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.chapter-bar .tab').forEach(t => t.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('[data-tab="' + id + '"]').forEach(t => t.classList.add('active'));
  layoutChapterTabs();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function layoutChapterTabs() {
  const container = document.getElementById('chapterTabs');
  const moreBtn = document.getElementById('moreBtn');
  const dropdown = document.getElementById('moreDropdown');
  const tabs = Array.from(container.querySelectorAll('.tab'));
  tabs.forEach(t => { t.style.display = ''; t.removeAttribute('data-overflow'); });
  moreBtn.style.display = 'none';
  dropdown.innerHTML = '';
  dropdown.classList.remove('open');
  if (tabs.length === 0) return;
  const containerWidth = container.offsetWidth;
  let usedWidth = 0;
  let overflowStart = -1;
  for (let i = 0; i < tabs.length; i++) {
    usedWidth += tabs[i].offsetWidth + 6;
    if (usedWidth > containerWidth - 80) { overflowStart = i; break; }
  }
  if (overflowStart === -1) return;
  let hasActiveInDropdown = false;
  for (let i = overflowStart; i < tabs.length; i++) {
    tabs[i].style.display = 'none';
    const clone = document.createElement('button');
    clone.className = 'tab' + (tabs[i].classList.contains('active') ? ' active' : '');
    clone.textContent = tabs[i].textContent;
    clone.dataset.tab = tabs[i].dataset.tab;
    clone.onclick = () => { tabs[i].click(); dropdown.classList.remove('open'); };
    dropdown.appendChild(clone);
    if (tabs[i].classList.contains('active')) hasActiveInDropdown = true;
  }
  moreBtn.style.display = 'block';
  moreBtn.classList.toggle('has-active', hasActiveInDropdown);
}
function toggleMoreDropdown() {
  document.getElementById('moreDropdown').classList.toggle('open');
}
document.addEventListener('click', (e) => {
  if (!e.target.closest('.chapter-bar')) document.getElementById('moreDropdown').classList.remove('open');
});
window.addEventListener('load', layoutChapterTabs);
window.addEventListener('resize', layoutChapterTabs);
