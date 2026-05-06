// ── Aplicar contenido al DOM ─────────────────────────────────────
function applyContent(lang) {
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (CONTENT[key]) el.innerHTML = CONTENT[key][lang] ?? CONTENT[key].es;
  });

  document.querySelector('[data-stat="years"]').textContent    = STATS.years;
  document.querySelector('[data-stat="patients"]').textContent = STATS.patients;
  document.querySelector('[data-stat="types"]').textContent    = STATS.types;

  const phoneLink = document.querySelector('[data-contact="phone"]');
  phoneLink.textContent = CONTACT_INFO.phone;
  phoneLink.href        = CONTACT_INFO.phoneTel;

  const emailLink = document.querySelector('[data-contact="email"]');
  emailLink.textContent = CONTACT_INFO.email;
  emailLink.href        = 'mailto:' + CONTACT_INFO.email;

  document.querySelector('[data-contact="location"]').textContent =
    CONTACT_INFO.location[lang] ?? CONTACT_INFO.location.es;

  document.querySelector('[data-contact="hours"]').textContent =
    CONTACT_INFO.hours[lang] ?? CONTACT_INFO.hours.es;

  const calendly = document.querySelector('.calendly-inline-widget');
  if (calendly) calendly.setAttribute('data-url', CALENDLY_URL);
}

// ── Language toggle ──────────────────────────────────────────────
let currentLang = 'es';

function toggleLang() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  document.getElementById('langBtn').textContent = currentLang === 'es' ? 'EN' : 'ES';
  document.documentElement.lang = currentLang;
  applyContent(currentLang);
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

// ── Inicializar contenido ────────────────────────────────────────
applyContent('es');
