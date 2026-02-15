export const clinic = {
  name: "MOTIVA Fisioterapia y Salud",
  logo: "/images/logo.png",
  tagline: "Tu recuperación en manos expertas en Toledo",
  description: "MOTIVA Fisioterapia y Salud es tu clínica de confianza en Toledo, con 5 estrellas y 74 reseñas que avalan nuestra excelencia. Dirigidos por Moisés, ofrecemos fisioterapia manual, deportiva, rehabilitación personalizada y tratamientos avanzados. Nuestro equipo combina profesionalidad técnica con un trato cercano que te hace sentir como en casa. Entras con dolor y sales renovado.",
  colors: {
    primary: "#026b92",
    secondary: "#063b55",
    accent: "#063b55",
    neutral: "#ebf3f6"
  },
  phone: "679 35 26 78",
  whatsapp: "+34679352678",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros tratamientos de fisioterapia.",
  email: "",
  address: {
    street: "C. Cristo, 30, 45730 Villafranca de los Caballeros, Toledo, España",
    city: "Toledo",
    province: "Toledo",
    postalCode: "45730",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=3752004689864115060&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=MOTIVA%20Fisioterapia%20y%20Salud%20%4039.4283%2C-3.36005&z=16&output=embed",
  coordinates: {
    lat: 39.4283,
    lng: -3.36005
  },
  schedule: [
    {
      days: "lunes - jueves",
      hours: "9:00–13:00, 17:00–21:00"
    },
    {
      days: "viernes",
      hours: "9:00–13:00"
    },
    {
      days: "sábado - domingo",
      hours: "Cerrado"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 5,
    count: 74,
    url: "https://maps.google.com/?cid=3752004689864115060&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
    featured: [
      {
        author: "Jesús",
        rating: 5,
        text: "Moisés siempre me ha solucionado molestias, lesiones... para mí es mi fisio perfecto desde que le conocí. Se me ha ido algo lejos de Madrid y le he ido persiguiendo y contactando. Solo puedo decir que he hecho 125 kms ida y 125 kms vuelta para que me tratará. Profesional, no deja de crecer... Le deseo lo mejor en su nuevo proyecto.",
        date: "Hace 4 meses"
      },
      {
        author: "Tomas Castañeda Mateos",
        rating: 5,
        text: "A la llegada de a la clínica nos ha recibido Virginia, una chica encantadora, nos ha explicado todo y nos ha hecho sentir como en casa.\nLuego me ha tratado Moi, y genial, un súper profesional. Te explica todo lo que te va haciendo y te ocurre.\nUnos grandes profesionales, sin duda volveré!",
        date: "Hace 4 meses"
      },
      {
        author: "Ana Gomez",
        rating: 5,
        text: "Una clínica inmejorable. Con profesionales de lo mejor, con mucha preparación y experiencia. Moy tiene unas manos de 10, entras a la clínica mal y sales como nueva. Muchas gracias por vuestra profesionalidad y buen trato!!!!",
        date: "Hace 4 meses"
      },
      {
        author: "yunes Lukus",
        rating: 5,
        text: "Un trato excelente desde el primer momento. El fisioterapeuta supo escucharme, hacer una buena valoración y el tratamiento me alivió muchísimo el dolor. Muy profesional y cercano, se nota que domina su trabajo.",
        date: "Hace 5 meses"
      },
      {
        author: "Angel",
        rating: 5,
        text: "Sin lugar a dudas el mejor lugar para tratarte. Aparte de buenos profesionales, demuestran una gran calidad humana y te hacen sentir como en casa. Un 10!",
        date: "Hace 1 mes"
      }
    ]
  },
  services: [
    {
      id: "fisioterapia-manual",
      name: "Fisioterapia Manual",
      description: "Técnicas manuales especializadas que aplica nuestro equipo con años de experiencia. Tratamos contracturas, bloqueos articulares y dolores musculares con manos expertas. Cada sesión está adaptada a tu problema específico para lograr resultados desde la primera visita.",
      benefits: [
        "Alivio inmediato del dolor y las molestias",
        "Mejora de la movilidad articular y muscular",
        "Tratamiento personalizado según tu lesión"
      ],
      icon: "Hand"
    },
    {
      id: "fisioterapia-deportiva",
      name: "Fisioterapia Deportiva",
      description: "Recuperación integral de lesiones deportivas con técnicas avanzadas. Trabajamos con deportistas de todos los niveles, desde amateur hasta profesional. Aceleramos tu vuelta a la actividad física con protocolos específicos para cada deporte y lesión.",
      benefits: [
        "Recuperación más rápida de lesiones deportivas",
        "Prevención de futuras lesiones",
        "Programas adaptados a tu disciplina deportiva"
      ],
      icon: "Dumbbell"
    },
    {
      id: "rehabilitacion",
      name: "Rehabilitación Personalizada",
      description: "Programas de rehabilitación diseñados específicamente para tu caso. Realizamos una valoración completa inicial y seguimiento continuo hasta tu recuperación total. Te explicamos cada paso del proceso para que entiendas tu evolución.",
      benefits: [
        "Plan de tratamiento adaptado a tu ritmo",
        "Seguimiento continuo de tu progreso",
        "Recuperación funcional completa"
      ],
      icon: "Activity"
    },
    {
      id: "puncion-seca",
      name: "Punción Seca",
      description: "Tratamiento efectivo de puntos gatillo miofasciales que causan dolor crónico y contracturas. Técnica avanzada que elimina las bandas tensas musculares de forma precisa. Ideal para dolores persistentes que no responden a otros tratamientos.",
      benefits: [
        "Eliminación de contracturas profundas",
        "Alivio del dolor crónico muscular",
        "Resultados duraderos y efectivos"
      ],
      icon: "Target"
    },
    {
      id: "electroterapia",
      name: "Electroterapia Avanzada",
      description: "Tecnología de vanguardia con corrientes terapéuticas para acelerar tu recuperación. Complementamos el tratamiento manual con equipos de última generación. Reducimos inflamación, aliviamos el dolor y estimulamos la regeneración tisular.",
      benefits: [
        "Aceleración del proceso de curación",
        "Reducción de inflamación y edemas",
        "Tratamiento no invasivo y sin dolor"
      ],
      icon: "Zap"
    },
    {
      id: "suelo-pelvico",
      name: "Suelo Pélvico",
      description: "Tratamiento especializado para disfunciones del suelo pélvico en hombres y mujeres. Abordamos incontinencias, dolor pélvico, postparto y disfunciones sexuales con total profesionalidad y discreción. Terapia en un ambiente de confianza y respeto.",
      benefits: [
        "Mejora de la calidad de vida íntima",
        "Tratamiento discreto y profesional",
        "Resultados efectivos y duraderos"
      ],
      icon: "Heart"
    },
    {
      id: "valoracion-integral",
      name: "Valoración Integral",
      description: "Evaluación completa de tu estado físico antes de comenzar cualquier tratamiento. Escuchamos tu historia, analizamos tu movilidad y diseñamos un plan específico. Te explicamos qué te ocurre y cómo vamos a solucionarlo paso a paso.",
      benefits: [
        "Diagnóstico preciso de tu problema",
        "Plan de tratamiento personalizado",
        "Información clara sobre tu proceso"
      ],
      icon: "Activity"
    },
    {
      id: "tratamiento-dolor-cronico",
      name: "Tratamiento del Dolor Crónico",
      description: "Especialistas en dolores persistentes que llevan tiempo limitando tu vida. Combinamos diferentes técnicas para abordar el dolor desde múltiples ángulos. Nuestros pacientes experimentan alivio significativo incluso en casos complejos.",
      benefits: [
        "Enfoque multidisciplinar del dolor",
        "Técnicas combinadas para mejores resultados",
        "Recuperación de tu calidad de vida"
      ],
      icon: "Target"
    }
  ],
  process: [
    {
      step: 1,
      title: "Contacta con Nosotros",
      description: "Llama al 679 35 26 78 o escríbenos por WhatsApp. Virginia, nuestra recepcionista, te atenderá de forma cercana, resolverá tus dudas y agendará tu cita en el horario que mejor te venga."
    },
    {
      step: 2,
      title: "Valoración Personalizada",
      description: "En tu primera visita realizamos una evaluación completa: escuchamos tu historia, analizamos tu movilidad y diagnosticamos el origen de tu problema. Te explicamos con claridad qué te ocurre y cómo vamos a tratarlo."
    },
    {
      step: 3,
      title: "Tratamiento Especializado",
      description: "Aplicamos las técnicas más adecuadas para tu caso: fisioterapia manual, punción seca, electroterapia o la combinación necesaria. Notarás alivio desde las primeras sesiones mientras trabajamos en la raíz del problema."
    },
    {
      step: 4,
      title: "Recuperación Completa",
      description: "Hacemos seguimiento continuo de tu evolución y ajustamos el tratamiento según tu progreso. No paramos hasta que recuperas tu bienestar total y puedes volver a tu vida sin limitaciones ni dolor."
    }
  ],
  whyUs: [
    {
      title: "5 Estrellas con 74 Reseñas en Google",
      description: "Nuestra valoración perfecta de 5 estrellas no es casualidad. Cada reseña refleja el compromiso de nuestro equipo con tu recuperación, la efectividad de nuestros tratamientos y el trato cercano que nos caracteriza. Tenemos pacientes que recorren más de 100km porque saben que aquí encontrarán solución real a sus problemas.",
      icon: "Award"
    },
    {
      title: "Profesionales Altamente Cualificados",
      description: "Nuestro equipo, liderado por Moisés, cuenta con amplia formación y experiencia en técnicas avanzadas de fisioterapia. Dominamos tanto el tratamiento manual como las últimas tecnologías. Nos mantenemos en constante actualización para ofrecerte siempre las mejores soluciones terapéuticas disponibles.",
      icon: "Users"
    },
    {
      title: "Trato Cercano y Profesional",
      description: "En MOTIVA te sentirás como en casa desde el primer momento. Escuchamos tu problema con atención, te explicamos con claridad qué te ocurre y cómo vamos a solucionarlo. Combinamos excelencia técnica con calidad humana, porque sabemos que la confianza es fundamental para tu recuperación.",
      icon: "Heart"
    },
    {
      title: "Resultados Desde la Primera Sesión",
      description: "Nuestros pacientes destacan que notan alivio desde el primer tratamiento. Aplicamos técnicas efectivas y personalizadas que atacan la raíz del problema, no solo los síntomas. Entras con dolor y molestias, sales renovado y con un plan claro para tu recuperación completa.",
      icon: "TrendingUp"
    }
  ],
  team: [
    {
      name: "Moisés (Moi)",
      role: "Fisioterapeuta Director",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionados por la fisioterapia y la rehabilitación. En MOTIVA Fisioterapia y Salud nos dedicamos a devolver la calidad de vida a nuestros pacientes con tratamientos personalizados y tecnología avanzada."
    },
    {
      name: "Virginia",
      role: "Recepción y Atención al Paciente",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionados por la fisioterapia y la rehabilitación. En MOTIVA Fisioterapia y Salud nos dedicamos a devolver la calidad de vida a nuestros pacientes con tratamientos personalizados y tecnología avanzada."
    }
  ],
  gallery: [
    {
      src: "/images/gallery/1.webp",
      alt: "MOTIVA Fisioterapia y Salud - Imagen 1"
    },
    {
      src: "/images/hero.webp",
      alt: "MOTIVA Fisioterapia y Salud - Imagen 2"
    },
    {
      src: "/images/gallery/3.webp",
      alt: "MOTIVA Fisioterapia y Salud - Imagen 3"
    },
    {
      src: "/images/gallery/4.webp",
      alt: "MOTIVA Fisioterapia y Salud - Imagen 4"
    }
  ],
  faq: [
    {
      question: "¿Qué hace diferente a MOTIVA Fisioterapia y Salud?",
      answer: "Nuestras 74 reseñas con 5 estrellas en Google hablan por sí solas. Combinamos alta cualificación profesional con un trato cercano que te hace sentir como en casa. Tenemos pacientes que recorren más de 100km para tratarse con nosotros porque saben que aquí encontrarán solución. Te explicamos todo el proceso, escuchamos tus necesidades y no descansamos hasta que te recuperas completamente."
    },
    {
      question: "¿Cuándo notaré mejoría en mi dolor o lesión?",
      answer: "Muchos de nuestros pacientes experimentan alivio desde la primera sesión, especialmente en dolores musculares y contracturas. Sin embargo, cada caso es único y depende del tipo de lesión, su antigüedad y tu respuesta al tratamiento. En la valoración inicial te daremos una estimación realista de tiempos según tu situación específica y haremos seguimiento continuo de tu evolución."
    },
    {
      question: "¿Necesito que me derive mi médico para acudir a MOTIVA?",
      answer: "No es necesario tener derivación médica para solicitar cita en MOTIVA Fisioterapia y Salud. Puedes contactarnos directamente llamando al 679 35 26 78 o por WhatsApp. En la primera visita realizamos una valoración completa y, si fuera necesario, te recomendaremos coordinarnos con tu médico para un abordaje integral de tu problema."
    },
    {
      question: "¿Qué debo llevar a mi primera cita en la clínica?",
      answer: "Te recomendamos traer ropa cómoda que permita acceder a la zona a tratar, cualquier informe médico o prueba diagnóstica que tengas relacionada con tu problema, y tu historial de tratamientos previos si los has recibido. Si tomas medicación habitualmente, es útil que nos lo comentes. Lo más importante es que vengas con ganas de recuperarte, nosotros nos encargamos del resto."
    },
    {
      question: "¿Tratáis lesiones deportivas y de alta competición?",
      answer: "Sí, la fisioterapia deportiva es una de nuestras especialidades en MOTIVA. Trabajamos con deportistas de todos los niveles, desde amateur hasta competición. Aplicamos técnicas avanzadas de recuperación, prevención de lesiones y readaptación deportiva. Diseñamos programas específicos según tu deporte y objetivos para que vuelvas a tu actividad en las mejores condiciones."
    },
    {
      question: "¿Ofrecéis tratamiento de suelo pélvico en Toledo?",
      answer: "Sí, en MOTIVA Fisioterapia y Salud contamos con especialistas en suelo pélvico para hombres y mujeres. Tratamos incontinencias, dolor pélvico, recuperación postparto, disfunciones sexuales y otras patologías relacionadas. Realizamos la terapia con total profesionalidad, discreción y en un ambiente de máxima confianza donde te sentirás cómodo y respetado en todo momento."
    },
    {
      question: "¿Cómo solicito cita en MOTIVA Fisioterapia y Salud?",
      answer: "Puedes solicitar tu cita llamando directamente al 679 35 26 78 o escribiéndonos por WhatsApp al mismo número. Virginia te atenderá encantada, resolverá todas tus dudas y agendará tu cita en el horario que mejor se adapte a ti. Nos adaptamos a tu disponibilidad para que tu recuperación no sea un problema añadido a tu día a día."
    },
    {
      question: "¿Cuánto dura una sesión de fisioterapia en MOTIVA?",
      answer: "Las sesiones suelen durar entre 45 y 60 minutos, dependiendo del tipo de tratamiento y tus necesidades específicas. En MOTIVA no trabajamos con sesiones express de 15 minutos. Dedicamos el tiempo necesario para aplicar las técnicas adecuadas, explicarte lo que hacemos y asegurarnos de que sales con mejoría. La calidad del tratamiento es nuestra prioridad, no la cantidad de pacientes."
    }
  ],
  seo: {
    titleTemplate: "%s | MOTIVA Fisioterapia y Salud",
    defaultTitle: "MOTIVA Fisioterapia y Salud - Fisioterapia en Toledo",
    defaultDescription: "Clínica de fisioterapia en Toledo con 5⭐ (74 reseñas). Fisioterapia manual, deportiva, rehabilitación y suelo pélvico. Profesionales expertos. ☎️ 679 35 26 78",
    keywords: [
      "fisioterapia Toledo",
      "MOTIVA Fisioterapia y Salud",
      "fisioterapeuta Toledo",
      "clínica fisioterapia Toledo",
      "fisioterapia deportiva Toledo",
      "rehabilitación Toledo",
      "punción seca Toledo",
      "suelo pélvico Toledo",
      "fisioterapia manual Toledo",
      "tratamiento dolor crónico Toledo",
      "Moisés fisioterapeuta Toledo",
      "mejor fisioterapia Toledo"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "MOTIVA Fisioterapia y Salud",
    cif: "",
    registeredAddress: "C. Cristo, 30, 45730 Villafranca de los Caballeros, Toledo, España, Toledo, Toledo"
  },
  heroHeadline: [
    "Tu Centro de",
    "Fisioterapia",
    "en Toledo"
  ],
  heroDescription: "En MOTIVA Fisioterapia y Salud encontrarás profesionales que escuchan, valoran y tratan con las técnicas más efectivas. Con 5 estrellas en Google y pacientes que recorren más de 100km para tratarse con nosotros, somos tu mejor opción en Toledo para recuperar tu bienestar y movilidad.",
  specialty: "Fisioterapia Manual Avanzada",
  ctaLabel: "Tu Recuperación",
  ctaHeadline: "¿Listo para decir adiós al dolor?",
  ctaDescription: "Solicita tu cita de valoración y descubre por qué nuestros pacientes nos recomiendan con 5 estrellas. Te explicamos todo el proceso y diseñamos un plan personalizado para tu recuperación.",
  statsLabel: "Pacientes",
  schemaType: "PhysicalTherapy",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Soluciones profesionales adaptadas a tus necesidades de salud.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la recuperación en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu salud, nuestra prioridad",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para cuidar de tu salud.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestros pacientes",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestra clínica",
    galleryDescription: "Un espacio diseñado para tu bienestar y recuperación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestros pacientes.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializados",
    teamDescription: "Experiencia y dedicación al servicio de tu salud"
  }
}

export type Clinic = typeof clinic
