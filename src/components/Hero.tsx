import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { ChevronDown, Play, Calendar, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const HERO_SLIDES = [
  {
    id: 'slide-1',
    badge: 'PRODUCCIÓN AUDIOVISUAL & TECNOLOGÍA',
    title: '4KM PRODUCCIONES',
    highlightTitle: 'PRODUCCIONES',
    subtitle: 'Producción audiovisual cinematográfica 4K/8K que convierte ideas en experiencias visuales extraordinarias.',
    ctaPrimary: 'VER PORTAFOLIO',
    ctaSecondary: 'SOLICITAR COTIZACIÓN',
    image: './img/hero.jpg',
    features: ['Filmación 4K / 8K', 'Drone Cinematográfico', 'Edición & Color Grading'],
  },
  {
    id: 'slide-2',
    badge: 'ILUMINACIÓN & FOTOGRAFÍA PREMIERE',
    title: 'ARTE & CINEMATOGRAFÍA',
    highlightTitle: 'CINEMATOGRAFÍA',
    subtitle: 'Capturamos emociones, momentos inolvidables y marcas con iluminación de estudio y ópticas cinematográficas.',
    ctaPrimary: 'EXPLORAR PAQUETES',
    ctaSecondary: 'VER SHOWREELS',
    image: './img/mockup.jpg',
    features: ['Fotografía 8K Ilimitada', 'Iluminación Estudiantil', 'Dirección Creativa'],
  },
  {
    id: 'slide-3',
    badge: 'ESTRUCTURA MODULAR & DRONE AÉREO',
    title: 'TECNOLOGÍA AUDIOVISUAL',
    highlightTitle: 'AUDIOVISUAL',
    subtitle: 'Pilotos certificados por la MTC y tecnología para tomas aéreas impresionantes en todo el Perú.',
    ctaPrimary: 'VER COBERTURA DRONE',
    ctaSecondary: 'RESERVAR FECHA',
    image: './img/drone.jpg',
    features: ['Pilotos Licenciados MTC', 'Video 4K HDR 60fps', 'Seguro Aeronáutico'],
  }
];

export const Hero: React.FC = () => {
  const { setQuoteOpen, setBookingOpen } = useApp();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageLoaded, setImageLoaded] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const moveSlide = (dir: number) => {
    setCurrentSlide((prev) => (prev + dir + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const active = HERO_SLIDES[currentSlide];

  return (
    <section className="relative w-full overflow-hidden flex items-center justify-center" style={{ minHeight: '92vh', background: '#0A0A0A' }}>
      
      {/* ── Background Image Carousel ── */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, idx) => (
          <img
            key={slide.id}
            src={slide.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{
              opacity: idx === currentSlide ? 0.45 : 0,
              transform: idx === currentSlide ? 'scale(1.02)' : 'scale(1)',
            }}
            onLoad={() => setImageLoaded(prev => ({ ...prev, [slide.id]: true }))}
            onError={(e) => { (e.target as HTMLImageElement).src = './img/hero.jpg'; }}
          />
        ))}
      </div>

      {/* ── Gradient Masks ── */}
      <div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 40%, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0.7) 70%, rgba(10,10,10,0.95) 100%)'
        }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-40 z-1 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(10,10,10,0.8) 50%, #0A0A0A 100%)'
        }}
      />

      {/* ── Hero Main Content ── */}
      <div className="relative z-10 container-xl px-6 py-20 text-center flex flex-col items-center justify-center space-y-8 max-w-4xl mx-auto">
        
        {/* Badge */}
        <div className="badge-gold inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(200,164,77,0.3)] bg-[rgba(200,164,77,0.1)] text-[#C8A44D] text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{active.badge}</span>
        </div>

        {/* Title */}
        <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
          4KM <span className="text-gold-gradient">{active.highlightTitle}</span>
        </h1>

        {/* Subtitle */}
        <p className="font-montserrat text-lg sm:text-xl text-[#A0A0A8] max-w-2xl font-light leading-relaxed">
          {active.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
          <button
            onClick={() => {
              if (currentSlide === 1) scrollToSection('paquetes');
              else if (currentSlide === 2) scrollToSection('drone');
              else scrollToSection('portafolio');
            }}
            className="btn-gold w-full sm:w-auto py-4 px-8 text-sm flex items-center justify-center gap-2 font-bold tracking-wider"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>{active.ctaPrimary}</span>
          </button>
          
          <button
            onClick={() => {
              if (currentSlide === 2) setBookingOpen(true);
              else setQuoteOpen(true);
            }}
            className="btn-outline-gold w-full sm:w-auto py-4 px-8 text-sm flex items-center justify-center gap-2 font-bold tracking-wider"
          >
            <Calendar className="w-4 h-4" />
            <span>{active.ctaSecondary}</span>
          </button>
        </div>

        {/* Sub-text features */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-medium text-[#A0A0A8]">
          {active.features.map((feat, idx) => (
            <span key={idx} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8A44D]" /> {feat}
            </span>
          ))}
        </div>

      </div>

      {/* Left/Right Carousel Controls */}
      <button
        onClick={() => moveSlide(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#141418]/80 hover:bg-[#C8A44D] hover:text-black text-white transition-all backdrop-blur-md border border-white/10 cursor-pointer"
        aria-label="Diapositiva Anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => moveSlide(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#141418]/80 hover:bg-[#C8A44D] hover:text-black text-white transition-all backdrop-blur-md border border-white/10 cursor-pointer"
        aria-label="Diapositiva Siguiente"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide dots */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              currentSlide === idx ? 'bg-[#C8A44D] w-8' : 'bg-white/30 w-2'
            }`}
            aria-label={`Ir a diapositiva ${idx + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('nosotros')}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-[#666672] hover:text-[#C8A44D] transition-colors p-2 cursor-pointer flex flex-col items-center gap-1"
        aria-label="Desplazarse hacia abajo"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>

    </section>
  );
};
