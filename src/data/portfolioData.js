export const PORTFOLIO_CATEGORIES = [
  { id: "todos", label: "Todos los Trabajos" },
  { id: "bodas", label: "Bodas Cinematográficas" },
  { id: "corporativos", label: "Eventos Corporativos" },
  { id: "drone", label: "Tomas Aéreas Drone 4K" },
  { id: "quinceanos", label: "Quinceañeros & 15 Años" },
  { id: "reels", label: "Reels & TikTok Viral" },
  { id: "institucionales", label: "Videos Institucionales" },
  { id: "detras_camaras", label: "Detrás de Cámaras" },
  { id: "cumpleanos", label: "Cumpleaños & Baby Shower" },
  { id: "branding", label: "Branding & Comercial" }
];

export const PORTFOLIO_PROJECTS = [
  {
    id: "proj-1",
    title: "Boda Cinematográfica de Sofía & Alejandro",
    subtitle: "Una historia de amor inigualable en la Casona de Lurín con tomas aéreas 4K.",
    category: "bodas",
    year: 2026,
    client: "Sofía & Alejandro",
    city: "Lima, Perú",
    date: "2026-02-14",
    duration: "18:45 min",
    videoUrl: "https://www.youtube.com/embed/gX72gHnC0C8",
    posterImage: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&auto=format&fit=crop&q=80"
    ],
    featured: true,
    trending: true,
    views: 3420,
    likes: 418,
    linkedServiceId: "boda-premium",
    linkedServiceName: "Boda Premium VIP",
    linkedServicePrice: 4500,
    equipment: {
      cameras: "4 Cámaras RED Digital Cinema 8K",
      drone: "DJI Mavic 3 Cine (ProRes 422)",
      lenses: "Anamorphic Gold Series 35mm, 50mm, 85mm",
      crew: "6 Especialistas (Director, 3 Camarógrafos, Piloto Drone, Sonidista)"
    },
    customerStory: {
      title: "El día más mágico de nuestras vidas",
      quote: "Cuando vimos la película de nuestra boda, nos emocionamos hasta las lágrimas. El trabajo con el drone en el atardecer fue sencillamente cinematográfico.",
      rating: 5
    },
    tags: ["Boda", "Cinematográfico", "Drone 4K", "Fine Art", "8K Cinema"]
  },
  {
    id: "proj-2",
    title: "Documental Institucional TechCorp 2026",
    subtitle: "Cobertura empresarial multi-cámara con entrevistas ejecutivas e historia corporativa.",
    category: "corporativos",
    year: 2026,
    client: "TechCorp International",
    city: "San Isidro, Lima",
    date: "2026-01-20",
    duration: "08:30 min",
    videoUrl: "https://www.youtube.com/embed/gX72gHnC0C8",
    posterImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=900&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=900&auto=format&fit=crop&q=80"
    ],
    featured: true,
    trending: true,
    views: 2890,
    likes: 310,
    linkedServiceId: "corp-premium",
    linkedServiceName: "Corporativo Premium",
    linkedServicePrice: 4800,
    equipment: {
      cameras: "3 Cámaras Sony FX6 Cinema",
      drone: "DJI Inspire 2 CinemaDNG",
      lenses: "Sony G-Master 24-70mm f/2.8 & 70-200mm",
      crew: "4 Especialistas en Grabación e Iluminación"
    },
    customerStory: {
      title: "Transmisión impecable del valor de nuestra marca",
      quote: "El video institucional superó nuestras expectativas corporativas. Lo presentamos en la convención anual con ovaciones.",
      rating: 5
    },
    tags: ["Corporativo", "Institucional", "Empresas", "Sony FX6"]
  },
  {
    id: "proj-3",
    title: "Inspección & Showreel Aéreo Costa Verde 4K",
    subtitle: "Imágenes aéreas ultra nítidas en 4K HDR para turismo e infraestructura hotelera.",
    category: "drone",
    year: 2026,
    client: "Gobierno Regional & Hoteles Luxury",
    city: "Miraflores, Lima",
    date: "2026-03-05",
    duration: "04:15 min",
    videoUrl: "https://www.youtube.com/embed/gX72gHnC0C8",
    posterImage: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=900&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=900&auto=format&fit=crop&q=80"
    ],
    featured: true,
    trending: false,
    views: 5120,
    likes: 670,
    linkedServiceId: "drone-inmobiliario",
    linkedServiceName: "Inspección & Inmobiliaria Drone",
    linkedServicePrice: 850,
    equipment: {
      cameras: "Hasselblad 4K Sensor 4/3",
      drone: "DJI Mavic 3 Enterprise & Mini 4 Pro",
      lenses: "Integrated 24mm equivalent optical lens",
      crew: "Piloto Acreditado MTC + Asistente de Campo"
    },
    customerStory: {
      title: "La mejor perspectiva para nuestro proyecto inmobiliario",
      quote: "Las ortofotos y el reel cinemático ayudaron a vender el 80% de los lotes del proyecto en el primer mes.",
      rating: 5
    },
    tags: ["Drone 4K", "Inmobiliaria", "Turismo", "Fotogrametría", "MTC"]
  },
  {
    id: "proj-4",
    title: "Quinceañero VIP de Mariana - Videoclip & Fiesta",
    subtitle: "Pre-sesión de fotos estilo revista de moda y película de la fiesta principal.",
    category: "quinceanos",
    year: 2025,
    client: "Familia Rivas",
    city: "La Molina, Lima",
    date: "2025-11-12",
    duration: "15:00 min",
    videoUrl: "https://www.youtube.com/embed/gX72gHnC0C8",
    posterImage: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=900&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&auto=format&fit=crop&q=80"
    ],
    featured: false,
    trending: true,
    views: 1980,
    likes: 245,
    linkedServiceId: "15-premium",
    linkedServiceName: "15 Años Premium VIP",
    linkedServicePrice: 3800,
    equipment: {
      cameras: "3 Cámaras Canon Cinema C70",
      drone: "DJI Air 3 Dual Camera",
      lenses: "Canon RF L-Series",
      crew: "5 Especialistas (Fotografía, Video & Edición en Vivo)"
    },
    customerStory: {
      title: "Un recuerdo inolvidable para mi hija",
      quote: "El videoclip pre-15 proyectado en la fiesta dejó a todos los invitados impresionados. Todo con la calidad de 4KM.",
      rating: 5
    },
    tags: ["15 Años", "Quinceañero", "Videoclip", "Photobooth", "Reels"]
  },
  {
    id: "proj-5",
    title: "Campaña Viral Meta Ads - Restaurante Gourmet",
    subtitle: "Pack de 4 Reels dinámicos con ritmo acelerado y corrección de color gastronómica.",
    category: "reels",
    year: 2026,
    client: "Sabor & Fuego Gourmet",
    city: "Miraflores, Lima",
    date: "2026-02-01",
    duration: "01:30 min",
    videoUrl: "https://www.youtube.com/embed/gX72gHnC0C8",
    posterImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=900&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=900&auto=format&fit=crop&q=80"
    ],
    featured: true,
    trending: true,
    views: 8900,
    likes: 1240,
    linkedServiceId: "mkt-standard",
    linkedServiceName: "Marketing Standard Pro",
    linkedServicePrice: 2500,
    equipment: {
      cameras: "Sony A7S III 4K 120fps",
      drone: "No requiere",
      lenses: "Sony 90mm Macro f/2.8 G",
      crew: "2 Especialistas en Redes & Edición Corta"
    },
    customerStory: {
      title: "Triplicamos las reservas en Instagram",
      quote: "Los reels producidos por 4KM convirtieron nuestros platos en virales en TikTok e Instagram en cuestión de días.",
      rating: 5
    },
    tags: ["Reels", "TikTok", "Meta Ads", "Gastronomía", "Viral"]
  },
  {
    id: "proj-6",
    title: "Detrás de Cámaras (Behind The Scenes) 4KM Studio",
    subtitle: "Descubre cómo nuestro equipo cinematográfico graba con gimbals, luces de estudio y drones.",
    category: "detras_camaras",
    year: 2026,
    client: "4KM PRODUCCIONES",
    city: "Lima, Perú",
    date: "2026-03-01",
    duration: "05:40 min",
    videoUrl: "https://www.youtube.com/embed/gX72gHnC0C8",
    posterImage: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=900&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&auto=format&fit=crop&q=80"
    ],
    featured: false,
    trending: false,
    views: 4100,
    likes: 520,
    linkedServiceId: "corp-standard",
    linkedServiceName: "Corporativo Standard",
    linkedServicePrice: 2800,
    equipment: {
      cameras: "Multi-cam setup 8K",
      drone: "FPV Cinema Drone",
      lenses: "Cinema Anamorphic",
      crew: "Equipo Completo 4KM Producciones"
    },
    customerStory: {
      title: "La pasión detrás de cada fotograma",
      quote: "Mostrar el detras de cámaras transmite la transparencia y el estándar profesional de nuestro equipo audiovisual.",
      rating: 5
    },
    tags: ["BTS", "Detrás de Cámaras", "Cine", "Studio", "Equipamiento"]
  }
];
