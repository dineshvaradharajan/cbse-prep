const scores = {};
function getCards(ch) {
  return document.querySelectorAll(`.mcq-card[data-ch="${ch}"]`);
}
function pick(btn) {
  const card = btn.closest('.mcq-card');
  if (card.dataset.answered) return;
  card.dataset.answered = '1';
  const correct = card.dataset.answer;
  const chosen = btn.dataset.opt;
  const ch = card.dataset.ch;
  card.querySelectorAll('.opt').forEach(o => {
    if (o.dataset.opt === correct) o.classList.add('correct');
    else if (o.dataset.opt === chosen && chosen !== correct) o.classList.add('wrong');
    o.disabled = true;
  });
  card.querySelector('.mcq-exp').style.display = 'block';
  if (!scores[ch]) scores[ch] = { correct: 0, total: 0 };
  scores[ch].total++;
  if (chosen === correct) scores[ch].correct++;
  updateScore(ch);
}
function updateScore(ch) {
  const s = scores[ch] || { correct: 0, total: 0 };
  const el = document.getElementById(ch + '-score');
  const fill = document.getElementById(ch + '-fill');
  if (el) el.textContent = s.correct + ' / ' + s.total;
  if (fill) {
    const total = document.querySelectorAll('.mcq-card[data-ch="' + ch + '"]').length;
    fill.style.width = (s.total / total * 100) + '%';
    fill.style.background = s.total > 0 ? (s.correct / s.total >= 0.7 ? '#16a34a' : '#ea580c') : '#5c5347';
  }
}
function resetCh(ch) {
  scores[ch] = { correct: 0, total: 0 };
  document.querySelectorAll('.mcq-card[data-ch="' + ch + '"]').forEach(card => {
    delete card.dataset.answered;
    card.querySelectorAll('.opt').forEach(o => { o.className = 'opt'; o.disabled = false; });
    card.querySelector('.mcq-exp').style.display = 'none';
  });
  updateScore(ch);
}
function showCh(id, btn) {
  document.querySelectorAll('.ch-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.ch-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
