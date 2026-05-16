function toggleMenu() {
  const mobileNav = document.getElementById('mobileNav');
  mobileNav?.classList.toggle('open');
}

function closeMobileNav() {
  const mobileNav = document.getElementById('mobileNav');
  mobileNav?.classList.remove('open');
}

document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(el => observer.observe(el));
  document.querySelectorAll('.hamburger').forEach(btn => btn.addEventListener('click', toggleMenu));
  document.querySelectorAll('.mobile-nav a[data-close-nav]').forEach(link => link.addEventListener('click', closeMobileNav));
});
