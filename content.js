// ================================================================
//  CONTENT.JS — Edita aquí todos los textos de la página
// ================================================================
// Formato de cada entrada:
//   "clave": { es: "Texto en español", en: "Text in English" }
// ================================================================

const CONTENT = {

  // ── NAVEGACIÓN ───────────────────────────────────────────────────
  "nav.brand":    { es: "🎷 Regina",  en: "🎷 Regina"   },
  "nav.about":    { es: "Sobre mí",   en: "About"        },
  "nav.services": { es: "Servicios",  en: "Services"     },
  "nav.booking":  { es: "Agendar",    en: "Book"         },
  "nav.contact":  { es: "Contacto",   en: "Contact"      },

  // ── HERO (primera sección) ───────────────────────────────────────
  "hero.eyebrow":    { es: "Bienvenido/a",    en: "Welcome"           },
  "hero.title1":     { es: "Musicoterapia",   en: "Music Therapy"     },
  "hero.title2":     { es: "con Regina",      en: "with Regina"       },
  "hero.desc":       { es: "Sanando cuerpo y mente a través del poder transformador de la música.",
                       en: "Healing body and mind through the transformative power of music."  },
  "hero.btnPrimary": { es: "Agenda tu sesión", en: "Book your session" },
  "hero.btnOutline": { es: "Conoce más",        en: "Learn more"       },

  // ── SOBRE MÍ ─────────────────────────────────────────────────────
  "about.tag":     { es: "Sobre mí",        en: "About me"      },
  "about.heading": { es: "Hola, soy Regina", en: "Hi, I'm Regina" },
  "about.p1": {
    es: "Soy musicoterapeuta certificada con amplia experiencia usando la música como herramienta terapéutica para mejorar el bienestar emocional, físico y mental de mis pacientes.",
    en: "I am a certified music therapist with extensive experience using music as a therapeutic tool to improve the emotional, physical and mental wellbeing of my patients."
  },
  "about.p2": {
    es: "Mi enfoque combina técnicas basadas en evidencia con un trato cálido y personalizado, adaptándome a las necesidades únicas de cada persona.",
    en: "My approach combines evidence-based techniques with warm, personalized care, adapting to the unique needs of each individual."
  },
  "about.stat1Label": { es: "años de experiencia", en: "years experience" },
  "about.stat2Label": { es: "pacientes atendidos",  en: "patients treated" },
  "about.stat3Label": { es: "tipos de terapia",     en: "therapy types"   },

  // ── SERVICIOS ────────────────────────────────────────────────────
  "services.tag":     { es: "Lo que ofrezco", en: "What I offer" },
  "services.heading": { es: "Servicios",      en: "Services"     },
  "services.desc": {
    es: "Cada sesión es un espacio seguro y personalizado donde la música se convierte en herramienta de bienestar.",
    en: "Each session is a safe, personalized space where music becomes a tool for wellbeing."
  },

  "service1.title": { es: "Terapia Individual", en: "Individual Therapy" },
  "service1.desc":  { es: "Sesiones personalizadas enfocadas en tus objetivos. Un espacio privado y de confianza para tu proceso terapéutico.",
                      en: "Personalized sessions focused on your goals. A private, trusting space for your therapeutic journey." },
  "service1.link":  { es: "Agendar →", en: "Book →" },

  "service2.title": { es: "Terapia Grupal", en: "Group Therapy" },
  "service2.desc":  { es: "La música como puente de conexión social. Sesiones donde se trabaja la expresión colectiva y el apoyo mutuo.",
                      en: "Music as a bridge for social connection. Sessions focused on collective expression and mutual support." },
  "service2.link":  { es: "Agendar →", en: "Book →" },

  "service3.title": { es: "Terapia para Niños", en: "Children's Therapy" },
  "service3.desc":  { es: "A través del juego musical, los niños desarrollan habilidades emocionales, cognitivas y sociales de forma divertida.",
                      en: "Through musical play, children develop emotional, cognitive and social skills in a fun and engaging way." },
  "service3.link":  { es: "Agendar →", en: "Book →" },

  "service4.title": { es: "Adultos Mayores", en: "Elderly Care" },
  "service4.desc":  { es: "Programa especializado que usa la música para estimular la memoria, mejorar el estado de ánimo y la calidad de vida.",
                      en: "Specialized program using music to stimulate memory, improve mood and enhance overall quality of life." },
  "service4.link":  { es: "Agendar →", en: "Book →" },

  // ── BENEFICIOS ───────────────────────────────────────────────────
  "benefits.tag":     { es: "¿Por qué la musicoterapia?", en: "Why music therapy?" },
  "benefits.heading": { es: "Beneficios comprobados",      en: "Proven benefits"   },

  "benefit1.title": { es: "Salud Mental",         en: "Mental Health"       },
  "benefit1.desc":  { es: "Reduce la ansiedad, el estrés y la depresión",          en: "Reduces anxiety, stress and depression"         },
  "benefit2.title": { es: "Bienestar Emocional",  en: "Emotional Wellbeing"  },
  "benefit2.desc":  { es: "Mejora el estado de ánimo y la autoestima",             en: "Improves mood and self-esteem"                  },
  "benefit3.title": { es: "Vínculos Sociales",    en: "Social Skills"        },
  "benefit3.desc":  { es: "Fortalece la comunicación y las relaciones",            en: "Strengthens communication and relationships"    },
  "benefit4.title": { es: "Desarrollo Cognitivo", en: "Cognitive Growth"     },
  "benefit4.desc":  { es: "Estimula la memoria, atención y creatividad",           en: "Stimulates memory, attention and creativity"    },
  "benefit5.title": { es: "Rehabilitación",       en: "Rehabilitation"       },
  "benefit5.desc":  { es: "Apoya procesos de recuperación física y neurológica",   en: "Supports physical and neurological recovery"    },
  "benefit6.title": { es: "Calidad de Vida",      en: "Quality of Life"      },
  "benefit6.desc":  { es: "Mejora el bienestar general y el disfrute diario",      en: "Improves overall wellbeing and daily enjoyment" },

  // ── AGENDAR ──────────────────────────────────────────────────────
  "booking.tag":     { es: "¿Listo para comenzar?", en: "Ready to start?"    },
  "booking.heading": { es: "Agenda tu sesión",       en: "Book your session"  },
  "booking.desc":    { es: "Elige el horario que más te acomode. La primera consulta es sin costo.",
                       en: "Choose the time that suits you best. The first consultation is free." },

  // ── CONTACTO ─────────────────────────────────────────────────────
  "contact.tag":          { es: "Contáctame",        en: "Contact me"      },
  "contact.heading":      { es: "¿Tienes preguntas?", en: "Have questions?" },
  "contact.phoneLabel":   { es: "Teléfono",  en: "Phone"    },
  "contact.emailLabel":   { es: "Email",     en: "Email"    },
  "contact.locationLabel":{ es: "Ubicación", en: "Location" },
  "contact.hoursLabel":   { es: "Horario",   en: "Hours"    },

  // ── PIE DE PÁGINA ────────────────────────────────────────────────
  "footer.brand": { es: "🎷 Regina — Musicoterapia",              en: "🎷 Regina — Music Therapy"        },
  "footer.copy":  { es: "© 2025 Regina. Todos los derechos reservados.", en: "© 2025 Regina. All rights reserved." },
};

// ================================================================
//  DATOS DE CONTACTO — Cambia tus datos personales aquí
// ================================================================

const CONTACT_INFO = {
  phone:    "+56 9 1234 5678",       // Tu número de teléfono (visible)
  phoneTel: "tel:+56912345678",      // Mismo número sin espacios, con "tel:"
  email:    "regina@musicoterapia.cl",
  location: { es: "Santiago, Chile",     en: "Santiago, Chile"        },
  hours:    { es: "Lun–Vie: 9:00–18:00", en: "Mon–Fri: 9:00–6:00 pm" },
};

// ================================================================
//  ESTADÍSTICAS (sección Sobre mí)
// ================================================================

const STATS = {
  years:    "+5",
  patients: "+200",
  types:    "4",
};

// ================================================================
//  CALENDLY — Reemplaza con tu enlace de Calendly
//  Ejemplo: https://calendly.com/tu-nombre/sesion-musicoterapia
// ================================================================

const CALENDLY_URL = "https://calendly.com/REEMPLAZA-TU-USUARIO/sesion-musicoterapia";
