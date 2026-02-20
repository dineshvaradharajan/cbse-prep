function switchSubject(id) {
  document.querySelectorAll('.subject-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.subject-panel').forEach(p => p.classList.remove('active'));
  document.querySelector(`.subject-tab[onclick*="${id}"]`).classList.add('active');
  document.getElementById(id).classList.add('active');
  localStorage.setItem('cbse-subject', id);
}
(function () {
  const saved = localStorage.getItem('cbse-subject');
  if (saved) switchSubject(saved);
})();
function switchChem(id, el) {
  document.querySelectorAll('.chem-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.chem-panel').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('chem-' + id).classList.add('active');
}
