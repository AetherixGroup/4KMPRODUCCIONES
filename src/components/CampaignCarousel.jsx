import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Calendar, Gift } from 'lucide-react';
import { useApp } from '../context/AppContext';

const CAMPAIGN_SLIDES = [
  {
    id: 'camp-1',
    badge: 'CAMPAÑA FIN DE AÑO 2026',
    title: '4KM PRODUCCIONES',
    highlight: 'FIN DE AÑO',
    subtitle:
      'Descuentos exclusivos en paquetes audiovisuales para tus celebraciones de cierre de año. Bodas, eventos corporativos y fiestas con estética cinematográfica.',
    note: 'Hasta 20% OFF en paquetes selectos',
    image: './img/hero.jpg',
    ctaText: 'RESERVAR MI EVENTO',
  },
  {
    id: 'camp-2',
    badge: 'RECUERDOS & REGALOS MEMORABLES',
    title: 'CUADROS Y ENMARCADOS',
    highlight: 'PERSONALIZADOS',
    subtitle:
      'Convierte tus mejores momentos en piezas de arte. Cuadros por pedido, enmarcados personalizados y recuerdos memorables para regalar estas fiestas.',
    note: 'Pedidos antes del 15 de diciembre',
    image: './img/drone.jpg',
    ctaText: 'VER PRODUCTOS',
  },
  {
    id: 'camp-3',
    badge: 'CAMPAÑA FIN DE AÑO 2026',
    title: 'AÉREO 4K CINEMA',
    highlight: 'VISIÓN EN ALTURA',
    subtitle:
      'Tomas aéreas cinematográficas con drones certificados para cerrar el año con producciones de nivel internacional en todo el Perú.',
    note: 'Disponibilidad limitada de fechas',
    image: './img/drone.jpg',
    ctaText: 'SOLICITAR COTIZACIÓN',
  },
];

export const CampaignCarousel = () => {
  const { setBookingOpen, setQuoteOpen } = useApp();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % CAMPAIGN_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const move = (dir) => {
    setCurrent((prev) => (prev + dir + CAMPAIGN_SLIDES.length) % CAMPAIGN_SLIDES.length);
  };

  const active = CAMPAIGN_SLIDES[current];

  const handleCta = () => {
    if (current === 1) {
      const el = document.getElementById('enmarcado');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else window.location.href = './?portafolio=reels';
    } else if (current === 2) {
      setQuoteOpen(true);
    } else {
      setBookingOpen(true);
    }
  };

  return (
    <section
      id="campana"
      className="section-pad relative overflow-hidden"
      style={{ background: '#0A0A0A' }}
    >
      <div className="container-xl">
        <div className="section-intro">
          <div className="badge-gold inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Campaña Promocional</span>
          </div>
          <h2 className="type-heading font-cinzel text-3xl sm:text-4xl font-bold text-white mt-4">
            4KM PRODUCCIONES — <span className="text-gold-gradient">CAMPAÑA FIN DE AÑO</span>
          </h2>
          <div className="divider-gold" />
        </div>

        <div className="relative rounded-3xl overflow-hidden bg-[#141418] border border-[rgba(200,164,77,0.25)] shadow-2xl group">
          <div className="relative w-full aspect-[16/9] md:aspect-[2.4/1] overflow-hidden bg-black">
            {/* Optimized / lazy-loaded image */}
            <img
              key={active.id}
              src={active.image}
              alt={active.title}
              loading="lazy"
              className="w-full h-full object-cover transition-opacity duration-700"
              style={{ opacity: 1 }}
              onError={(e) => { e.currentTarget.src = './img/hero.jpg'; }}
            />

            {/* Overlay for legibility */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(90deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.55) 55%, rgba(10,10,10,0.15) 100%)',
              }}
            />

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="w-full max-w-2xl px-6 md:px-12 space-y-4">
                <div className="badge-gold inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.6rem] font-bold tracking-widest">
                  <Gift className="w-3 h-3" /> {active.badge}
                </div>
                <h3 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                  {active.title}{' '}
                  <span className="text-gold-gradient">{active.highlight}</span>
                </h3>
                <p className="text-[#D4D4DC] text-sm sm:text-base font-light max-w-xl leading-relaxed">
                  {active.subtitle}
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(200,164,77,0.12)] border border-[rgba(200,164,77,0.3)] text-[#E8C96A] text-xs font-bold">
                  <Sparkles className="w-3 h-3" /> {active.note}
                </div>
                <div>
                  <button onClick={handleCta} className="btn-gold py-3.5 px-7 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{active.ctaText}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <button
            onClick={() => move(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#141418]/80 hover:bg-[#C8A44D] hover:text-black text-white transition-all backdrop-blur-md border border-white/10 cursor-pointer"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => move(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#141418]/80 hover:bg-[#C8A44D] hover:text-black text-white transition-all backdrop-blur-md border border-white/10 cursor-pointer"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {CAMPAIGN_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  current === idx ? 'bg-[#C8A44D] w-8' : 'bg-white/30 w-2'
                }`}
                aria-label={`Ir a diapositiva ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
