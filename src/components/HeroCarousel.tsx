import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { ChevronLeft, ChevronRight, Play, Calendar, Sparkles, ChevronDown } from 'lucide-react';

const SLIDES = [
  {
    id: 'slide-1',
    type: 'image' as const,
    bg: './img/hero.jpg',
    badge: 'PRODUCCIÓN AUDIOVISUAL 4K',
    title: '4KM',
    highlight: 'PRODUCCIONES',
    subtitle: 'Creamos historias cinematográficas que emocionan. Bodas, eventos corporativos y contenido premium con estética de cine.',
    ctaPrimary: { label: 'VER PORTAFOLIO', action: 'portfolio' },
    ctaSecondary: { label: 'COTIZACIÓN GRATIS', action: 'quote' },
    features: ['Filmación 4K/8K', 'Drone Cinematográfico', 'Edición Premium'],
  },
  {
    id: 'slide-2',
    type: 'video' as const,
    bg: './img/YDRAY-COMERCIAL-15-ANOS_web.mp4',
    badge: 'EVENTOS & CELEBRACIONES',
    title: 'MOMENTOS',
    highlight: 'INOLVIDABLES',
    subtitle: 'Quinceañeras, bodas, cumpleanos y eventos especiales capturados con la calidad de una produccion cinematografica profesional.',
    ctaPrimary: { label: 'RESERVAR FECHA', action: 'booking' },
    ctaSecondary: { label: 'VER PAQUETES', action: 'packages' },
    features: ['Cobertura Completa', 'Multicamara 4K', 'Entrega en 15 dias'],
  },
  {
    id: 'slide-3',
    type: 'image' as const,
    bg: './img/mockup.jpg',
    badge: 'BRANDING & MARKETING',
    title: 'ESTRATEGIA',
    highlight: 'DIGITAL',
    subtitle: 'Agencia de marketing integral. Publicidad, automatizaciones IA, redes sociales y diseno que convierte seguidores en clientes.',
    ctaPrimary: { label: 'VER SERVICIOS', action: 'marketing' },
    ctaSecondary: { label: 'SOLICITAR COTIZACION', action: 'quote' },
    features: ['Meta Ads & Google Ads', 'Automatizaciones n8n', 'CRM HubSpot'],
  },
  {
    id: 'slide-4',
    type: 'video' as const,
    bg: './img/YDRAY-PUBLICIDAD-DRONE-OFICIAL_web.mp4',
    badge: 'TECNOLOGIA AEREA',
    title: 'DRONE 4K',
    highlight: 'CINEMA',
    subtitle: 'Pilotos certificados MTC con drones de ultima generacion. Tomas aereas cinematicas para inmobiliarias, eventos y marcas.',
    ctaPrimary: { label: 'VER DRONES', action: 'drone' },
    ctaSecondary: { label: 'SOLICITAR COTIZACION', action: 'quote' },
    features: ['Pilotos Licenciados MTC', 'Video 4K HDR 60fps', 'Seguro Aeronautico'],
  },
  {
    id: 'slide-5',
    type: 'image' as const,
    bg: './img/drone.jpg',
    badge: 'PAQUETES PREMIUM',
    title: 'PAQUETES',
    highlight: 'AUDIOVISUALES',
    subtitle: 'Bodas, corporativos, quinceaneras. Elige tu paquete ideal con los mejores precios y la calidad que nos caracteriza.',
    ctaPrimary: { label: 'VER PAQUETES', action: 'packages' },
    ctaSecondary: { label: 'RESERVAR AHORA', action: 'booking' },
    features: ['Paquetes desde S/.1,800', 'Personalizables', 'Financiamiento disponible'],
  },
  {
    id: 'slide-6',
    type: 'video' as const,
    bg: './img/YDRAY-MANYA-PUBLICIDAD_web.mp4',
    badge: 'PRODUCCION CORPORATIVA',
    title: 'CONTENIDO',
    highlight: 'CORPORATIVO',
    subtitle: 'Videos institucionales, campañas publicitarias y contenido profesional para empresas que buscan destacar.',
    ctaPrimary: { label: 'VER PROYECTOS', action: 'portfolio' },
    ctaSecondary: { label: 'CONTACTAR', action: 'quote' },
    features: ['Videos Institucionales', 'Campanas Publicitarias', 'Contenido para RRSS'],
  },
  {
    id: 'slide-7',
    type: 'image' as const,
    bg: './img/logo.jpg',
    badge: 'SOBRE NOSOTROS',
    title: 'LA',
    highlight: 'EXPERIENCIA 4KM',
    subtitle: 'Mas de 500 proyectos entregados. Somos una productora joven con pasion por el detalle y la innovacion tecnologica.',
    ctaPrimary: { label: 'CONOCER MAS', action: 'about' },
    ctaSecondary: { label: 'VER TRABAJOS', action: 'portfolio' },
    features: ['500+ Proyectos', 'Equipo Profesional', 'Tecnologia 4K/8K'],
  },
];

type SlideType = typeof SLIDES[number];

export const HeroCarousel: React.FC = () => {
  const { setBookingOpen, setQuoteOpen } = useApp();
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());
  const total = SLIDES.length;

  const goTo = useCallback((idx: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrent(idx);
    setTimeout(() => setTransitioning(false), 500);
  }, [transitioning]);

  const advance = useCallback((dir: number) => {
    goTo((current + dir + total) % total);
  }, [current, total, goTo]);

  useEffect(() => {
    const timer = setInterval(() => advance(1), 3000);
    return () => clearInterval(timer);
  }, [advance]);

  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (idx === current) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [current]);

  const handleCTA = (action: string) => {
    switch (action) {
      case 'booking': setBookingOpen(true); break;
      case 'quote': setQuoteOpen(true); break;
      case 'portfolio': document.getElementById('portafolio')?.scrollIntoView({ behavior: 'smooth' }); break;
      case 'packages': document.getElementById('paquetes')?.scrollIntoView({ behavior: 'smooth' }); break;
      case 'drone': document.getElementById('drone')?.scrollIntoView({ behavior: 'smooth' }); break;
      case 'marketing': document.getElementById('marketing')?.scrollIntoView({ behavior: 'smooth' }); break;
      case 'about': document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' }); break;
      default: break;
    }
  };

  const scrollToContent = () => {
    const firstSection = document.getElementById('campana');
    if (firstSection) firstSection.scrollIntoView({ behavior: 'smooth' });
  };

  const slide = SLIDES[current];

  return (
    <section className="relative w-full overflow-hidden" style={{ height: 'min(90vh, 720px)', minHeight: '520px' }}>

      {/* Background layer */}
      <div className="absolute inset-0">
        {SLIDES.map((s, idx) => {
          if (s.type === 'video') {
            return (
              <video
                key={s.id}
                ref={(el) => { if (el) videoRefs.current.set(idx, el); }}
                src={s.bg}
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  opacity: idx === current ? 1 : 0,
                  transition: 'opacity 600ms cubic-bezier(0.4,0,0.2,1)',
                  transform: idx === current ? 'scale(1.02)' : 'scale(1)',
                }}
                onError={(e) => { (e.target as HTMLVideoElement).poster = './img/hero.jpg'; }}
              />
            );
          }
          return (
            <img
              key={s.id}
              src={s.bg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                opacity: idx === current ? 1 : 0,
                transition: 'opacity 600ms cubic-bezier(0.4,0,0.2,1), transform 800ms cubic-bezier(0.4,0,0.2,1)',
                transform: idx === current ? 'scale(1.02)' : 'scale(1)',
              }}
              onError={(e) => { (e.target as HTMLImageElement).src = './img/hero.jpg'; }}
            />
          );
        })}

        {/* Cinematic vignette */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 60% 50%, transparent 20%, rgba(10,10,10,0.65) 80%)',
        }} />
        {/* Bottom fade */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.0) 30%, rgba(10,10,10,0.75) 80%, rgba(10,10,10,1) 100%)',
        }} />
        {/* Left side fade for text */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(90deg, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.5) 50%, transparent 100%)',
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-xl w-full px-6">
          <div
            key={slide.id}
            className="max-w-xl space-y-5"
            style={{
              opacity: transitioning ? 0 : 1,
              transform: transitioning ? 'translateX(-12px)' : 'translateX(0)',
              transition: 'opacity 400ms cubic-bezier(0.4,0,0.2,1), transform 400ms cubic-bezier(0.4,0,0.2,1)',
            }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(200,164,77,0.3)] bg-[rgba(200,164,77,0.1)] backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8A44D]" style={{ animation: 'pulseGold 2s ease-in-out infinite' }} />
              <span className="text-[#C8A44D] text-[0.65rem] font-bold tracking-[0.2em] uppercase">{slide.badge}</span>
            </div>

            {/* Title */}
            <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[0.95]">
              {slide.title}{' '}
              <span className="text-gold-gradient">{slide.highlight}</span>
            </h1>

            {/* Subtitle */}
            <p className="font-montserrat text-sm sm:text-base text-[#A0A0A8] max-w-md font-light leading-relaxed">
              {slide.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => handleCTA(slide.ctaPrimary.action)}
                className="btn-gold py-3.5 px-7 text-[0.75rem]"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>{slide.ctaPrimary.label}</span>
              </button>
              <button
                onClick={() => handleCTA(slide.ctaSecondary.action)}
                className="btn-outline-gold py-3.5 px-7 text-[0.75rem]"
              >
                <Calendar className="w-4 h-4" />
                <span>{slide.ctaSecondary.label}</span>
              </button>
            </div>

            {/* Features */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {slide.features.map((feat, i) => (
                <span key={i} className="flex items-center gap-1.5 text-[0.7rem] font-medium text-[#888]">
                  <span className="w-1 h-1 rounded-full bg-[#C8A44D]" /> {feat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={() => advance(-1)}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full transition-all duration-200"
        style={{
          background: 'rgba(20,20,24,0.7)',
          border: '1px solid rgba(42,42,42,0.8)',
          backdropFilter: 'blur(12px)',
          color: '#A0A0A8',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(200,164,77,0.5)'; e.currentTarget.style.color = '#C8A44D'; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(42,42,42,0.8)'; e.currentTarget.style.color = '#A0A0A8'; }}
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => advance(1)}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full transition-all duration-200"
        style={{
          background: 'rgba(20,20,24,0.7)',
          border: '1px solid rgba(42,42,42,0.8)',
          backdropFilter: 'blur(12px)',
          color: '#A0A0A8',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(200,164,77,0.5)'; e.currentTarget.style.color = '#C8A44D'; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(42,42,42,0.8)'; e.currentTarget.style.color = '#A0A0A8'; }}
        aria-label="Siguiente"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: current === i ? '28px' : '6px',
              height: '6px',
              background: current === i ? '#C8A44D' : 'rgba(255,255,255,0.25)',
            }}
            aria-label={`Diapositiva ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-4 right-6 z-20 hidden md:flex flex-col items-center gap-1 text-[#555] hover:text-[#C8A44D] transition-colors cursor-pointer"
        aria-label="Desplazarse"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};
