function showTab(id, el) {
  document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.section-nav .tab').forEach(a => a.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if (el) el.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function showRxn(id, el) {
  document.querySelectorAll('.rxn-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.rxn-nav .tab').forEach(t => t.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if (el) el.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
