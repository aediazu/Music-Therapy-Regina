// ── Language toggle ──────────────────────────────────────────────
let currentLang = 'es';

function toggleLang() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  document.getElementById('langBtn').textContent = currentLang === 'es' ? 'EN' : 'ES';
  document.documentElement.lang = currentLang;

  document.querySelectorAll('[data-es]').forEach(el => {
    const text = el.getAttribute('data-' + currentLang);
    if (text) el.innerHTML = text;
  });
}

// ── Mobile menu ──────────────────────────────────────────────────
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('open');
}

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('open');
  });
});

// ── Navbar shadow on scroll ──────────────────────────────────────
window.addEventListener('scroll', () => {
  document.querySelector('.navbar').style.boxShadow =
    window.scrollY > 20 ? '0 2px 20px rgba(61,35,24,.12)' : 'none';
});
