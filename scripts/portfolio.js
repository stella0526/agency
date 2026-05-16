document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      let count = 0;
      document.querySelectorAll('.p-card').forEach(card => {
        if (cat === 'all' || card.dataset.cat === cat) {
          card.classList.remove('hidden');
          count += 1;
        } else {
          card.classList.add('hidden');
        }
      });
      document.getElementById('countDisplay').textContent = count;
    });
  });

  document.querySelectorAll('[data-open-modal]').forEach(button => {
    button.addEventListener('click', openModal);
  });

  const modalOverlay = document.getElementById('modalOverlay');
  modalOverlay?.addEventListener('click', event => {
    if (event.target === modalOverlay) closeModal();
  });

  document.querySelectorAll('[data-modal-close]').forEach(button => {
    button.addEventListener('click', closeModal);
  });
});

function openModal(event) {
  const button = event.currentTarget;
  const card = button.closest('.p-card');
  if (!card) return;
  const id = card.dataset.id;
  document.getElementById('modalCat').textContent = card.dataset.cat;
  document.getElementById('modalTitle').textContent = card.dataset.name;
  document.getElementById('modalDesc').textContent = card.dataset.desc;
  document.getElementById('modalImg').textContent = `📁 images/portfolio/portfolio-${id}.jpg`;
  const tags = card.dataset.tags.split(',');
  document.getElementById('modalTags').innerHTML = tags.map(t => `<span class="tag">${t}</span>`).join('');
  document.getElementById('modalApplyBtn').href = `apply.html?style=${id}&name=${encodeURIComponent(card.dataset.name)}`;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay')?.classList.remove('open');
  document.body.style.overflow = '';
}
