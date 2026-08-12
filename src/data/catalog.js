/**
 * EMPRESA 4KM PRODUCCIONES
 * Misión, Visión y Valores
 */
export const COMPANY_INFO = {
  mission: {
    title: "Misión",
    description: "Transformar momentos especiales y marcas en historias cinematográficas de alto impacto que emocionen, inspiren y generen conexiones reales con las audiencias.",
    icon: "Target"
  },
  vision: {
    title: "Visión",
    description: "Ser la productora audiovisual más innovadora de América Latina, reconocida por la excelencia en cinematografía, automatización de marketing y soluciones digitales integradas.",
    icon: "Eye"
  },
  values: [
    {
      id: "val-1",
      title: "Creatividad Cinematográfica",
      description: "Cada proyecto es una obra de arte visual que cuenta historias con emoción y profundidad.",
      icon: "Sparkles"
    },
    {
      id: "val-2",
      title: "Excelencia Técnica",
      description: "Utilizamos tecnología de vanguardia y equipos 4K/8K para garantizar la máxima calidad.",
      icon: "Cpu"
    },
    {
      id: "val-3",
      title: "Transparencia & Confianza",
      description: "Comunicación clara, presupuestos justos y resultados verificables en cada entrega.",
      icon: "Shield"
    },
    {
      id: "val-4",
      title: "Innovación Continua",
      description: "Adaptamos tecnología IA, automatizaciones n8n y estrategias digitales para el futuro.",
      icon: "Zap"
    },
    {
      id: "val-5",
      title: "Pasión por el Detalle",
      description: "Color grading perfecto, audio de estudio y edición cinematográfica sin compromisos.",
      icon: "Heart"
    },
    {
      id: "val-6",
      title: "Equipo Multidisciplinario",
      description: "Directores, productores, fotógrafos, drones pilots y especialistas en marketing integrado.",
      icon: "Users"
    }
  ]
};

export const PROMO_SLIDES = [
  {
    id: "promo-1",
    title: "PRODUCCIÓN CINEMATOGRÁFICA 4KM",
    subtitle: "Bodas, eventos corporativos, campañas y contenido premium con estética cinematográfica y ejecución impecable.",
    badge: "ESTILO DE CINE",
    discount: "8K / 4K",
    bgImage: "./img/hero.jpg",
    actionText: "RESERVAR EVENTO",
    category: "audiovisual"
  },
  {
    id: "promo-2",
    title: "BRANDING Y MARKETING DIGITAL",
    subtitle: "Diseño, publicidad, automatizaciones y estrategia de contenido para convertir atención en ventas reales.",
    badge: "ESTRATEGIA & CRECIMIENTO",
    discount: "AUTO-LEADS",
    bgImage: "./img/hero.jpg",
    actionText: "VER PLANES",
    category: "marketing"
  },
  {
    id: "promo-3",
    title: "DRONE 4K Y VISUAL AÉREO",
    subtitle: "Tomas aéreas profesionales para inmobiliarias, eventos y marcas que quieren una mirada distinta y premium.",
    badge: "VISIÓN EN ALTURA",
    discount: "4K HDR",
    bgImage: "./img/drone.jpg",
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
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=500&q=60",
    packages: [
      {
        id: "boda-basico",
        name: "Boda Básico",
        price: 1800,
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=60",
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
        image: "https://images.unsplash.com/photo-1505252585461-04db1267ae5b?auto=format&fit=crop&w=400&q=60",
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
        image: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=400&q=60",
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
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=500&q=60",
    packages: [
      {
        id: "corp-basico",
        name: "Corporativo Básico",
        price: 1500,
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=60",
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
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=60",
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
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=60",
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
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=500&q=60",
    packages: [
      {
        id: "15-basico",
        name: "15 Años Básico",
        price: 1400,
        image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=400&q=60",
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
        image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=400&q=60",
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
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=400&q=60",
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
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=500&q=60",
    packages: [
      {
        id: "cumple-basico",
        name: "Celebración Básico",
        price: 900,
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=60",
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
        image: "https://images.unsplash.com/photo-1543259741-2ea3ebead61f?auto=format&fit=crop&w=400&q=60",
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
        image: "https://images.unsplash.com/photo-1523438097911-512bf489335c?auto=format&fit=crop&w=400&q=60",
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
    image: "https://images.unsplash.com/photo-1460925895917-adf4e565db8d?auto=format&fit=crop&w=400&q=60",
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
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=60",
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
    image: "https://images.unsplash.com/photo-1460925895917-adf4e565db8d?auto=format&fit=crop&w=400&q=60",
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
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=400&q=60",
    category: "Físico",
    description: "Pendrive elegante de cristal con luz LED dorada y grabado en madera de lujo."
  },
  {
    id: "upsell-album-fineart",
    name: "Álbum Fotográfico Fine Art (30x30 cm)",
    price: 450,
    image: "https://images.unsplash.com/photo-1606986628025-35d57a735ae0?auto=format&fit=crop&w=400&q=60",
    category: "Físico",
    description: "Tapa dura de cuero vacuno con hoja rígida fotográfica y caja protectora."
  },
  {
    id: "upsell-cuadro-canvas",
    name: "Cuadro Canvas de Madera 50x70 cm",
    price: 220,
    image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?auto=format&fit=crop&w=400&q=60",
    category: "Físico",
    description: "Lienzo de algodón impreso a 12 colores con bastidor de madera de pino."
  },
  {
    id: "upsell-tiktok-highlights",
    name: "Pack de 3 Videos Verticales (TikTok / Reels)",
    price: 250,
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=400&q=60",
    category: "Digital",
    description: "Edición dinámica con subtítulos animados, música en tendencia y ritmo viral."
  },
  {
    id: "upsell-pendrive-caja",
    name: "Caja de Madera Personalizada + Pendrive 128GB",
    price: 280,
    image: "https://images.unsplash.com/photo-1607974957565-b6f1a63c2b62?auto=format&fit=crop&w=400&q=60",
    category: "Físico",
    description: "Caja de nogal grabado con los nombres de la pareja/empresa."
  },
  {
    id: "upsell-souvenirs-pack",
    name: "Pack 20 Llaveros & Tazas Personalizadas 4KM",
    price: 180,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=60",
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

/**
 * PORTFOLIO_VIDEOS
 * Portafolio de videos con capacidad de embed desde Facebook o URL directa.
 * Formato:
 * - facebookVideoId: ID del video de Facebook (extraído de la URL)
 * - videoUrl: URL alternativa (YouTube, Vimeo, etc.)
 * - type: 'facebook' | 'youtube' | 'vimeo' | 'direct'
 * 
 * Estructura de URLs de Facebook:
 * - Video en perfil: https://www.facebook.com/watch/?v={VIDEO_ID}
 * - Video en reel: https://www.facebook.com/{PAGE}/videos/{VIDEO_ID}/
 * - Embed seguro: https://www.facebook.com/plugins/video.php?href={FULL_URL}&show_text=false&width=500
 */
export const PORTFOLIO_VIDEOS = [
  {
    id: "port-vid-reel",
    title: "Reel Profesional 4KM - Showcase 2024",
    category: "audiovisual",
    description: "Compilation de nuestros mejores trabajos del año en cine digital",
    thumbnail: "https://images.unsplash.com/photo-1485579149c01111?auto=format&fit=crop&w=600&q=60",
    videoUrl: "./reel/4km-reel-profesional.mp4",
    type: "direct",
    facebookVideoId: null,
    duration: "0:30",
    featured: true
  },
  {
    id: "port-vid-fb-1",
    title: "Producción Audiovisual 4KM",
    category: "audiovisual",
    description: "Video profesional de producción 4KM Producciones",
    thumbnail: "https://images.unsplash.com/photo-1485579149c01222?auto=format&fit=crop&w=600&q=60",
    videoUrl: "https://www.facebook.com/watch/?v=1ETJ49ejSE",
    type: "facebook",
    facebookVideoId: "1ETJ49ejSE",
    duration: "video",
    featured: false
  },
  {
    id: "port-vid-fb-2",
    title: "Evento Corporativo - Video 4K",
    category: "corporativos",
    description: "Cobertura profesional de evento empresarial",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=60",
    videoUrl: "https://www.facebook.com/watch/?v=1HPRQZzsj3",
    type: "facebook",
    facebookVideoId: "1HPRQZzsj3",
    duration: "video",
    featured: false
  },
  {
    id: "port-vid-fb-3",
    title: "Boda Cinematográfica - Momento Mágico",
    category: "bodas",
    description: "Captura del momento más importante con cinematografía profesional",
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=60",
    videoUrl: "https://www.facebook.com/watch/?v=1ZjYEsGMWq",
    type: "facebook",
    facebookVideoId: "1ZjYEsGMWq",
    duration: "video",
    featured: false
  },
  {
    id: "port-vid-fb-4",
    title: "Drone 4K - Tomas Aéreas Espectaculares",
    category: "drone",
    description: "Vistas aéreas cinematográficas en 4K HDR con tecnología drone premium",
    thumbnail: "https://images.unsplash.com/photo-1508444845599-5c89863b1c44?auto=format&fit=crop&w=600&q=60",
    videoUrl: "https://www.facebook.com/watch/?v=1EmfeYrG3G",
    type: "facebook",
    facebookVideoId: "1EmfeYrG3G",
    duration: "video",
    featured: false
  },
  {
    id: "port-vid-fb-5",
    title: "Quinceañera VIP - Videoclip Musical",
    category: "quinceaneros",
    description: "Producción audiovisual profesional para una celebración inolvidable",
    thumbnail: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=600&q=60",
    videoUrl: "https://www.facebook.com/watch/?v=19SsoHkcYy",
    type: "facebook",
    facebookVideoId: "19SsoHkcYy",
    duration: "video",
    featured: false
  },
  {
    id: "port-vid-fb-6",
    title: "Producción Comercial - Spot Profesional",
    category: "audiovisual",
    description: "Video publicitario con edición dinámica y color grading profesional",
    thumbnail: "https://images.unsplash.com/photo-1498837167922-b2b27e50b090?auto=format&fit=crop&w=600&q=60",
    videoUrl: "https://www.facebook.com/watch/?v=1EXZw8J4xS",
    type: "facebook",
    facebookVideoId: "1EXZw8J4xS",
    duration: "video",
    featured: false
  },
  {
    id: "port-vid-tiktok-1",
    title: "Contenido Viral - TikTok 4KM",
    category: "reels",
    description: "Reel dinámico con edición viral para redes sociales",
    thumbnail: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=600&q=60",
    videoUrl: "https://www.tiktok.com/@4kmproducciones/video/7602496727928638728",
    type: "tiktok",
    tiktokVideoId: "7602496727928638728",
    duration: "video",
    featured: true
  },
  {
    id: "port-vid-tiktok-2",
    title: "TikTok Viral - Producción 4KM",
    category: "reels",
    description: "Contenido optimizado para TikTok con tendencias y ritmo viral",
    thumbnail: "https://images.unsplash.com/photo-1611162616041-1e4d88f4c3a8?auto=format&fit=crop&w=600&q=60",
    videoUrl: "https://www.tiktok.com/@4kmproducciones/video/7579129135209925895",
    type: "tiktok",
    tiktokVideoId: "7579129135209925895",
    duration: "video",
    featured: false
  },
  {
    id: "port-vid-tiktok-3",
    title: "Reels TikTok - Edición Dinámica",
    category: "reels",
    description: "Video corto con transiciones profesionales y musicalización viral",
    thumbnail: "https://images.unsplash.com/photo-1611162616311-f31b741c8ab3?auto=format&fit=crop&w=600&q=60",
    videoUrl: "https://www.tiktok.com/@4kmproducciones/video/7548975867892878610",
    type: "tiktok",
    tiktokVideoId: "7548975867892878610",
    duration: "video",
    featured: false
  }
];

/**
 * VIDEO_CATEGORIES_PORTFOLIO
 * Filtros para la sección de portafolio de videos
 */
export const VIDEO_CATEGORIES_PORTFOLIO = [
  { id: "todos", label: "Todos los Videos" },
  { id: "bodas", label: "Bodas" },
  { id: "corporativos", label: "Corporativos" },
  { id: "quinceaneros", label: "Quinceañeros" },
  { id: "audiovisual", label: "Audiovisual" },
  { id: "drone", label: "Drone 4K" },
  { id: "reels", label: "Reels & TikTok" }
];

