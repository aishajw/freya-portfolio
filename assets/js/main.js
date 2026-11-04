// nav background on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.style.borderBottomColor = window.scrollY > 20
    ? 'var(--cream-dark)'
    : 'transparent';
}, { passive: true });
