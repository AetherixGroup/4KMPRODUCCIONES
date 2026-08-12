export const PROMO_SLIDES = [
  {
    id: "promo-1",
    title: "COBERTURA CINEMATOGRÁFICA DE BODAS 2026",
    subtitle: "Inmortaliza tu día especial con estética 8K y toma aérea en Drone 4K gratis.",
    badge: "OFERTA DE TEMPORADA",
    discount: "20% OFF",
    bgImage: "/img/hero.jpg",
    actionText: "RESERVAR BODA",
    category: "audiovisual"
  },
  {
    id: "promo-2",
    title: "AGENCIA DE MARKETING & META ADS",
    subtitle: "Campañas publicitaria en Facebook & Instagram con embudos y n8n automático.",
    badge: "CRECIMIENTO ACELERADO",
    discount: "PAQUETE VIP",
    bgImage: "/img/hero.jpg",
    actionText: "VER PLANES MARKETING",
    category: "marketing"
  },
  {
    id: "promo-3",
    title: "DRONE 4K & INSPECCIONES AÉREAS",
    subtitle: "Fotografía y video aéreo profesional para inmobiliarias, empresas y eventos masivos.",
    badge: "ULTRA HD 4K",
    discount: "INCLUIDO EN PLANES",
    bgImage: "/img/drone.jpg",
    actionText: "VER SERVICIOS DRONE",
    category: "drone"
  }
];

export const CATEGORIES = [
  { id: "todos", label: "Todos los Servicios" },
  { id: "audiovisual", label: "Producción Audiovisual" },
  { id: "marketing", label: "Agencia de Marketing" },
  { id: "drone", label: "Especial Drone 4K" },
  { id: "diseno", label: "Diseño & Branding" },
  { id: "web", label: "Desarrollo Web & Apps" },
  { id: "automatizacion", label: "IA & Automatizaciones" }
];

export const AUDIOVISUAL_EVENTS = [
  {
    type: "bodas",
    title: "Paquetes para Bodas",
    description: "Filmación de ceremonia, recepción, trailer de bodas y fotografía artística.",
    packages: [
      {
        id: "boda-basico",
        name: "Boda Básico",
        price: 1800,
        hours: "6 Horas",
        people: "2 Especialistas",
        cameras: "2 Cámaras 4K",
        drone: "No incluye",
        photos: "150 Fotos editadas",
        videos: "Video Highlight 3 min + Video Completo",
        delivery: "USB Personalizado",
        features: ["Filmación ceremonia", "Filmación brindis", "Galería web privada"]
      },
      {
        id: "boda-standard",
        name: "Boda Standard",
        price: 2900,
        hours: "10 Horas",
        people: "4 Especialistas",
        cameras: "3 Cámaras Cinema 4K",
        drone: "1 Sesión Drone 4K",
        photos: "300 Fotos editadas + Retoque Fine Art",
        videos: "Teaser 1 min + Reel Instagram + Film 15 min",
        delivery: "Caja Madera Premium + USB Cristal",
        features: ["Getting ready novios", "Filmación ceremonia y fiesta", "Fotolibro digital", "Audio profesional multicanal"]
      },
      {
        id: "boda-premium",
        name: "Boda Premium VIP",
        price: 4500,
        hours: "Cobertura Ilimitada",
        people: "6 Especialistas",
        cameras: "4 Cámaras Cinema 8K/4K",
        drone: "Drone 4K Ilimitado (Licencia MTC)",
        photos: "Fotos Ilimitadas + 50 Impresiones Fine Art",
        videos: "Cinema Film 30 min + Teaser 4K + 3 Videos TikTok/Reels + Streaming En Vivo",
        delivery: "Caja Lujo Cuero + Pendrive Cristal + Álbum Impreso Cuero",
        features: ["Pre-boda / Save the Date", "Getting ready novios", "Cobertura completa", "Transmisión en vivo YouTube/FB", "Cuadro Canvas de Regalo"]
      }
    ]
  },
  {
    type: "corporativos",
    title: "Eventos Corporativos & Empresas",
    description: "Cobertura empresarial, videos institucionales, conferencias y publicidad digital.",
    packages: [
      {
        id: "corp-basico",
        name: "Corporativo Básico",
        price: 1500,
        hours: "4 Horas",
        people: "2 Especialistas",
        cameras: "2 Cámaras 4K",
        drone: "No incluye",
        photos: "100 Fotos corporativas",
        videos: "Video Resumen 2 min",
        delivery: "Enlace Google Drive / Cloud",
        features: ["Filmación de ponencias", "Fotografía institucional"]
      },
      {
        id: "corp-standard",
        name: "Corporativo Standard",
        price: 2800,
        hours: "8 Horas",
        people: "3 Especialistas",
        cameras: "3 Cámaras 4K",
        drone: "Incluye Drone 4K para toma exterior",
        photos: "250 Fotos retocadas",
        videos: "Video Institucional 5 min + 2 Reels",
        delivery: "USB 4KM Branded + Cloud",
        features: ["Entrevistas a ejecutivos", "Tomas aéreas corporativas", "Edición con motion graphics"]
      },
      {
        id: "corp-premium",
        name: "Corporativo Premium",
        price: 4800,
        hours: "Jornada Completa 12h",
        people: "5 Especialistas",
        cameras: "4 Cámaras 4K Cinema",
        drone: "Drone 4K Ilimitado",
        photos: "Fotos Ilimitadas + Photoshop VIP",
        videos: "Documental Corporativo 10 min + 5 Reels Publicitarios",
        delivery: "Disco SSD Externo + Licencia Comercial",
        features: ["Cobertura multi-cámara", "Streaming en vivo HD", "Derechos comerciales de uso ilimitado"]
      }
    ]
  },
  {
    type: "quinceaneros",
    title: "Quinceañeros",
    description: "Fiesta de 15 años con elegancia cinematográfica, videoclip previo y drone.",
    packages: [
      {
        id: "15-basico",
        name: "15 Años Básico",
        price: 1400,
        hours: "5 Horas",
        people: "2 Especialistas",
        cameras: "2 Cámaras 4K",
        drone: "No",
        photos: "120 Fotos",
        videos: "Video Resumen 10 min",
        delivery: "USB Branded",
        features: ["Fiesta y vals", "Fotos familiares"]
      },
      {
        id: "15-standard",
        name: "15 Años Standard",
        price: 2400,
        hours: "8 Horas",
        people: "3 Especialistas",
        cameras: "3 Cámaras 4K",
        drone: "Drone 4K en fiesta o sesión previa",
        photos: "250 Fotos editadas",
        videos: "Pre-sesión Video + Video 20 min + Reel IG",
        delivery: "Caja Lujo + USB Cristal",
        features: ["Sesión de fotos pre-15", "Entrada triunfal", "Vals y cotillón"]
      },
      {
        id: "15-premium",
        name: "15 Años Premium VIP",
        price: 3800,
        hours: "Cobertura Completa",
        people: "5 Especialistas",
        cameras: "4 Cámaras 4K",
        drone: "Drone 4K Ilimitado",
        photos: "Fotos Ilimitadas + Álbum de Lujo Impreso",
        videos: "Videoclip Musical Pre-15 + Película 30 min + 4 TikTok Highlights",
        delivery: "Álbum Acrílico Gold + Pendrive",
        features: ["Videoclip profesional", "Getting ready", "Photobooth virtual", "Regalo sorpresa 4KM"]
      }
    ]
  },
  {
    type: "cumpleanos",
    title: "Cumpleaños & Baby Shower",
    description: "Recuerdos imborrables para celebraciones infantiles, cumpleaños y baby shower.",
    packages: [
      {
        id: "cumple-basico",
        name: "Celebración Básico",
        price: 900,
        hours: "3 Horas",
        people: "1 Fotógrafo + 1 Videógrafo",
        cameras: "2 Cámaras",
        drone: "No",
        photos: "80 Fotos",
        videos: "Video Resumen 3 min",
        delivery: "Google Drive",
        features: ["Show infantil / Torta", "Fotos familiares"]
      },
      {
        id: "cumple-standard",
        name: "Celebración Standard",
        price: 1600,
        hours: "5 Horas",
        people: "2 Especialistas",
        cameras: "2 Cámaras 4K",
        drone: "Fotos aéreas",
        photos: "180 Fotos",
        videos: "Video Completo 15 min + Reel Instagram",
        delivery: "USB 4KM",
        features: ["Decoración", "Show y piñata", "Sesión familiar pre-evento"]
      },
      {
        id: "cumple-premium",
        name: "Celebración VIP Premium",
        price: 2600,
        hours: "7 Horas",
        people: "3 Especialistas",
        cameras: "3 Cámaras 4K",
        drone: "Drone 4K",
        photos: "Fotos Ilimitadas + Cuadro 30x40cm",
        videos: "Video Highlights + Película Completa + 2 Reels",
        delivery: "Caja Regalo + USB Cristal",
        features: ["Cobertura total", "Cuadro impreso canvas", "Fotolibro digital"]
      }
    ]
  }
];

export const MARKETING_PACKAGES = [
  {
    id: "mkt-basic",
    name: "Marketing Basic",
    price: 1200,
    period: "/mes",
    badge: "EMPRENDEDOR",
    features: [
      "Campaña Meta Ads (Facebook + Instagram)",
      "Diseño gráfico básico (6 piezas al mes)",
      "1 Landing Page conversional",
      "Configuración de Pixel y Meta Conversion API",
      "Reporte mensual de rendimiento"
    ],
    n8n: false,
    hubspot: false
  },
  {
    id: "mkt-standard",
    name: "Marketing Standard Pro",
    price: 2500,
    period: "/mes",
    badge: "MÁS POPULAR",
    recommended: true,
    features: [
      "Meta Ads + Google Ads Search & Display",
      "Landing Page de Alta Conversión optimizada SEO",
      "Integración CRM HubSpot / Firebase Leads",
      "Automatización de WhatsApp con n8n & Chatbot IA",
      "12 Piezas gráficas + 4 Reels editados al mes",
      "Reporte mensual y llamada estratégica bi-semanal"
    ],
    n8n: true,
    hubspot: true
  },
  {
    id: "mkt-premium",
    name: "Marketing Agency VIP",
    price: 4500,
    period: "/mes",
    badge: "ESCALABILIDAD TOTAL",
    features: [
      "Meta Ads, Google Ads, TikTok Ads & SEO Avanzado",
      "Embudos de venta automatizados multinivel",
      "CRM Empresarial + Configuración Completa HubSpot",
      "Flujos automatizados en n8n con OpenAI API & Webhooks",
      "Producción audiovisual mensual (1 día de grabación presencial incluido)",
      "Piezas gráficas ilimitadas + 8 Reels/TikToks editados",
      "Consultor Senior asignado 24/7 y Dashboard en vivo"
    ],
    n8n: true,
    hubspot: true
  }
];

export const DRONE_SERVICES = [
  {
    id: "drone-photo",
    title: "Fotografía & Video Aéreo 4K",
    description: "Imágenes aéreas de alta resolución para eventos sociales, corporativos o comerciales.",
    price: 450,
    unit: "/sesión",
    specs: ["Sensor CMOS 1/1.3' 48MP", "Video 4K HDR 60fps", "Piloto acreditado MTC", "Seguro contra accidentes"]
  },
  {
    id: "drone-inmobiliario",
    title: "Inspección & Inmobiliaria",
    description: "Tomas arquitectónicas, modelos 3D, inspección de techos y terrenos de gran extensión.",
    price: 850,
    unit: "/jornada",
    specs: ["Fotogrametría básica", "Ortofotos de alta definición", "Video recorrido inmobiliario", "Entrega RAW o editado"]
  },
  {
    id: "drone-turismo",
    title: "Turismo & Hotelería Cinema",
    description: "Videos cinematográficos de paisajes, resorts, rutas turísticas y promocionales.",
    price: 1200,
    unit: "/proyecto",
    specs: ["Lente Gran Angular 4K", "Color Grading Cinemático", "Música con licencias comerciales", "Licencia de uso global"]
  }
];

export const UPSELL_PRODUCTS = [
  {
    id: "upsell-usb-cristal",
    name: "USB de Cristal 64GB con Grabado Láser 4KM",
    price: 150,
    image: "/img/logo.jpg",
    category: "Físico",
    description: "Pendrive elegante de cristal con luz LED dorada y grabado en madera de lujo."
  },
  {
    id: "upsell-album-fineart",
    name: "Álbum Fotográfico Fine Art (30x30 cm)",
    price: 450,
    image: "/img/hero.jpg",
    category: "Físico",
    description: "Tapa dura de cuero vacuno con hoja rígida fotográfica y caja protectora."
  },
  {
    id: "upsell-cuadro-canvas",
    name: "Cuadro Canvas de Madera 50x70 cm",
    price: 220,
    image: "/img/hero.jpg",
    category: "Físico",
    description: "Lienzo de algodón impreso a 12 colores con bastidor de madera de pino."
  },
  {
    id: "upsell-tiktok-highlights",
    name: "Pack de 3 Videos Verticales (TikTok / Reels)",
    price: 250,
    image: "/img/hero.jpg",
    category: "Digital",
    description: "Edición dinámica con subtítulos animados, música en tendencia y ritmo viral."
  },
  {
    id: "upsell-pendrive-caja",
    name: "Caja de Madera Personalizada + Pendrive 128GB",
    price: 280,
    image: "/img/logo.jpg",
    category: "Físico",
    description: "Caja de nogal grabado con los nombres de la pareja/empresa."
  },
  {
    id: "upsell-souvenirs-pack",
    name: "Pack 20 Llaveros & Tazas Personalizadas 4KM",
    price: 180,
    image: "/img/logo.jpg",
    category: "Físico",
    description: "Recuerdos grabados para invitados de evento."
  }
];

export const TESTIMONIALS = [
  {
    id: "test-1",
    client: "Sofía & Alejandro",
    event: "Boda Cinematográfica en Lima",
    comment: "El video de nuestra boda parece una película de cine. Las tomas con el drone 4K y la edición nos sacaron lágrimas de emoción. ¡Gracias 4KM!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "test-2",
    client: "Carlos Mendoza - CEO TechSolutions",
    event: "Campaña Meta Ads & Video Institucional",
    comment: "La combinación de producción audiovisual de alto nivel con las automatizaciones en n8n duplicó nuestros prospectos en 30 días.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "test-3",
    client: "Mariana Rivas",
    event: "Quinceañero VIP",
    comment: "El videoclip pre-15 superó todas las expectativas de mi familia. Puntuales, profesionales y con un trato super amable.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80"
  }
];
