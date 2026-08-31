import React, { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, Play, Images, Sparkles, Video, Film, CheckCircle2, Send, Tag } from 'lucide-react';
import { PORTFOLIO_CATEGORIES } from '../data/portfolioData';
import { useApp } from '../context/AppContext';
import TwinGalaxyRings from './effects/TwinGalaxyRings';
import Vortex from './effects/Vortex';
import Globe from './effects/Globe';
import DigitalRain from './effects/DigitalRain';
import MetallicCube from './effects/MetallicCube';

const CATEGORY_EFFECTS: Record<string, React.ReactNode> = {
  bodas: <TwinGalaxyRings background="#0A0A0A" colors={["#C8A44D", "#E8C96A", "#9A7020", "#FFF"]} density={65} speed={25} armCount={4} />,
  corporativos: <MetallicCube sizePercent={85} dragSensitivity={3} />,
  drone: <Globe scale={8} speed={1.5} outlineColor="#C8A44D" oceanColor="#0A0A0E" />,
  quinceanos: <Vortex smoke="#C8A44D" deep="#0A0A0A" ember="#E8C96A" speed={6} swirl={6} density={5} />,
  reels: <DigitalRain headColor="#FFF" trailColor="#C8A44D" speed={7} glyphSize={16} density={40} />,
  institucionales: <TwinGalaxyRings background="#0A0A0A" colors={["#C8A44D", "#D4AF37", "#666", "#FFF"]} density={70} speed={30} armCount={5} />,
};

// 100% Unique non-repeating images and showreels per category
const CATEGORY_MEDIA: Record<string, Array<{ kind: 'image' | 'video'; src: string; cover?: string; alt?: string; title?: string }>> = {
  bodas: [
    { kind: 'image', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=900&auto=format&fit=crop&q=80', alt: 'Ceremonia Nupcial Cinematográfica' },
    { kind: 'image', src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&auto=format&fit=crop&q=80', alt: 'Recepción y Baile de Novios' },
    { kind: 'image', src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=900&auto=format&fit=crop&q=80', alt: 'Detalles de Argollas y Vestido' },
    { kind: 'video', src: './img/YDRAY-COMERCIAL-15-ANOS_web.mp4', cover: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=900&auto=format&fit=crop&q=80', title: 'Highlight Reel de Boda 4K' },
  ],
  corporativos: [
    { kind: 'image', src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=900&auto=format&fit=crop&q=80', alt: 'Cumbre Empresarial Corporativa' },
    { kind: 'image', src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=900&auto=format&fit=crop&q=80', alt: 'Conferencia de Marca e Innovación' },
    { kind: 'image', src: 'https://images.unsplash.com/photo-1542744094-3a31727202b3?w=900&auto=format&fit=crop&q=80', alt: 'Presentación Ejecutiva de Alto Impacto' },
    { kind: 'video', src: './img/YDRAY-MANYA-PUBLICIDAD_web.mp4', cover: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=900&auto=format&fit=crop&q=80', title: 'Video Corporativo Comercial' },
  ],
  drone: [
    { kind: 'image', src: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=900&auto=format&fit=crop&q=80', alt: 'Toma Aérea Panorámica 4K' },
    { kind: 'image', src: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=900&auto=format&fit=crop&q=80', alt: 'Piloto Profesional MTC' },
    { kind: 'image', src: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=900&auto=format&fit=crop&q=80', alt: 'Inspección & Cobertura Urbana' },
    { kind: 'video', src: './img/YDRAY-PUBLICIDAD-DRONE-OFICIAL_web.mp4', cover: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=900&auto=format&fit=crop&q=80', title: 'Showreel Drone 4K Cinema' },
  ],
  quinceanos: [
    { kind: 'image', src: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=900&auto=format&fit=crop&q=80', alt: 'Fiesta Temática de 15 Años' },
    { kind: 'image', src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&auto=format&fit=crop&q=80', alt: 'Entrada Triunfal de la Quinceañera' },
    { kind: 'image', src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=900&auto=format&fit=crop&q=80', alt: 'Celebración y Baile de Gala' },
    { kind: 'video', src: './img/YDRAY-COMERCIAL-15-ANOS_web.mp4', cover: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=900&auto=format&fit=crop&q=80', title: 'Videoclip Quinceañera 4K' },
  ],
  reels: [
    { kind: 'image', src: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=900&auto=format&fit=crop&q=80', alt: 'Filmación de Contenido Vertical' },
    { kind: 'image', src: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=900&auto=format&fit=crop&q=80', alt: 'Estudio de Producción Creador' },
    { kind: 'image', src: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=900&auto=format&fit=crop&q=80', alt: 'Edición y Transición Dinámica' },
    { kind: 'video', src: './img/YDRAY-REEL-carrera-de-motos_web.mp4', cover: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=900&auto=format&fit=crop&q=80', title: 'Reel Viral TikTok & Instagram' },
  ],
  institucionales: [
    { kind: 'image', src: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=900&auto=format&fit=crop&q=80', alt: 'Filmación Industrial en Planta' },
    { kind: 'image', src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&auto=format&fit=crop&q=80', alt: 'Proyecto de Ingeniería 4K' },
    { kind: 'image', src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&auto=format&fit=crop&q=80', alt: 'Sede Institucional y Corporativa' },
    { kind: 'video', src: './img/YDRAY-PROYECTO-ORTIZ_web.mp4', cover: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=900&auto=format&fit=crop&q=80', title: 'Documental Institucional' },
  ],
};

// Dedicated Tailored Packages Per Category
const CATEGORY_PACKAGES: Record<string, Array<{ name: string; price: number; features: string[]; featured?: boolean }>> = {
  bodas: [
    { name: 'PAQUETE BODA PLATA', price: 650, features: ['Filmación 4K (3h)', 'Edición de Video Highlight 3 min', '1 Fotógrafo Digital'] },
    { name: 'PAQUETE BODA ORO (DESTACADO)', price: 950, features: ['Filmación 4K/8K (5h)', 'Drone Aéreo 4K', 'Edición Completa + Teaser', 'Fotografía Ilimitada'], featured: true },
    { name: 'PAQUETE BODA DIAMANTE', price: 1400, features: ['Filmación Cinematográfica Full Day', '2 Camarógrafos + Drone 4K', 'Álbum Fotográfico Pro', 'Entrega en USB de Lujo'] },
  ],
  corporativos: [
    { name: 'PAQUETE CORPORATIVO EXPRESS', price: 500, features: ['Filmación de Evento (2h)', 'Edición Resumen 2 min', 'Entrega en 48h'] },
    { name: 'PAQUETE CORPORATIVO BUSINESS', price: 850, features: ['Filmación 4K Multi-cámara', 'Microfonía Profesional Solapa', 'Video Resumen + Clips RRSS', 'Fotografía Corporativa'], featured: true },
    { name: 'PAQUETE INSTITUCIONAL PRO', price: 1300, features: ['Video Promocional de Marca', 'Entrevistas en 4K/8K', 'Drone 4K Aéreo', 'Locución Profesional + Subtítulos'] },
  ],
  drone: [
    { name: 'PAQUETE DRONE BÁSICO', price: 350, features: ['1 Vuelo Aéreo 4K', '30 min de Operación', 'Tomas 4K HDR 60fps'] },
    { name: 'PAQUETE DRONE PRO (DESTACADO)', price: 550, features: ['3 Vuelos Aéreos 4K', 'Piloto Licenciado MTC', 'Video + Fotos Aéreas RAW', 'Color Grading Profesional'], featured: true },
    { name: 'PAQUETE DRONE FULL DAY', price: 900, features: ['Jornada Completa Aérea', 'Cobertura de Terrenos / Obras', 'Seguro Aeronáutico Incluido', 'Entrega Imediata de Archivos'] },
  ],
  quinceanos: [
    { name: 'PAQUETE 15 AÑOS SILVER', price: 550, features: ['Filmación de Fiesta (3h)', 'Edición de Video Resumen', 'Fotos Digitales'] },
    { name: 'PAQUETE 15 AÑOS GOLD', price: 850, features: ['Videoclip previo de Sesión', 'Filmación Full Evento 4K', 'Drone Aéreo 4K', 'Fotografía Ilimitada'], featured: true },
    { name: 'PAQUETE 15 AÑOS VIP', price: 1200, features: ['Sesión Exterior + Recepción', '2 Camaras 4K + Drone', 'Álbum Fotográfico Fotobook', '3 Reels para Instagram/TikTok'] },
  ],
  reels: [
    { name: 'PACK 3 REELS VIRALES', price: 300, features: ['Filmación Vertical 4K (1.5h)', 'Edición Dinámica con Subtítulos', 'Formatos 9:16 para TikTok/IG'] },
    { name: 'PACK 6 REELS PRO (DESTACADO)', price: 550, features: ['Filmación Vertical (3h)', 'Efectos Visuales & Sonido', 'Guion y Dirección Creativa', 'Estrategia de Tendencia'], featured: true },
    { name: 'PACK MENSUAL CREADOR', price: 950, features: ['12 Videos Verticales al mes', 'Sesión Quincenal de Grabación', 'Diseño de Portadas Pro', 'Asesoría en Algoritmo'] },
  ],
  institucionales: [
    { name: 'PAQUETE VIDEO MARCA', price: 700, features: ['Guion e Historia Institucional', 'Filmación en Planta/Oficinas 4K', 'Edición 2 a 3 min'] },
    { name: 'PAQUETE DOCUMENTAL PRO', price: 1100, features: ['Filmación 4K Multi-locación', 'Tomas de Drone Aéreo', 'Locución y Subtítulos', 'Fotografía Industrial'], featured: true },
    { name: 'PAQUETE CORPORATIVO FULL', price: 1600, features: ['Producción Integral de Marca', 'Equipo de Cine + Drones', 'Modelos / Actores', 'Entrega Comercial para TV y Web'] },
  ]
};

interface PortfolioCategoryPageProps {
  categoryId: string;
}

export const PortfolioCategoryPage: React.FC<PortfolioCategoryPageProps> = ({ categoryId }) => {
  const { setSelectedProject, setQuoteOpen } = useApp();
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedMedia, setSelectedMedia] = useState<{ kind: 'image' | 'video'; src: string; alt?: string; title?: string } | null>(null);

  // FIX: Scroll to top of window automatically on mount / category change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [categoryId]);

  const category = PORTFOLIO_CATEGORIES.find((item) => item.id === categoryId) || PORTFOLIO_CATEGORIES[0];
  const media = CATEGORY_MEDIA[category.id] || CATEGORY_MEDIA.bodas;
  const packages = CATEGORY_PACKAGES[category.id] || CATEGORY_PACKAGES.bodas;

  const slides = media.map((item, idx) => ({
    id: `slide-${idx}`,
    title: item.title || item.alt || category.label,
    client: '4KM PRODUCCIONES',
    posterImage: item.kind === 'video' ? (item.cover || item.src) : item.src,
    kind: item.kind,
    src: item.src
  }));

  const effectComponent = CATEGORY_EFFECTS[category.id] || CATEGORY_EFFECTS.bodas;

  useEffect(() => {
    setActiveSlide(0);
  }, [category.id]);

  useEffect(() => {
    if (slides.length < 2) return;
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  const moveSlide = (dir: number) => {
    setActiveSlide((current) => (current + dir + slides.length) % slides.length);
  };

  const handleReturnHome = () => {
    window.location.href = './';
  };

  return (
    <main className="pt-24 min-h-screen relative bg-[#0A0A0A] text-white">
      
      <section className="section-pad relative z-10 pb-8">
        <div className="container-xl space-y-12">
          
          {/* Back button reliably returns home and scrolls to top */}
          <button
            onClick={handleReturnHome}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#C8A44D] hover:text-[#E8C96A] transition-colors uppercase tracking-widest cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Volver al Inicio
          </button>

          {/* Category Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="badge-gold inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>PORTAFOLIO EXCLUSIVO</span>
              </div>
              
              <h1 className="font-cinzel text-4xl sm:text-6xl font-extrabold text-white">
                {category.label}
              </h1>
              <div className="divider-gold !mx-0" />
              
              <p className="text-[#A0A0A8] text-base font-light leading-relaxed max-w-2xl">
                {category.description || `Producciones audiovisuales profesionales en 4K/8K para ${category.label}. Cobertura cinematográfica completa en todo el Perú.`}
              </p>
            </div>

            {/* 3D Visual Effect Card for Category */}
            <div className="lg:col-span-4 h-48 sm:h-56 relative rounded-2xl overflow-hidden bg-[#14141A] border border-[rgba(200,164,77,0.3)] shadow-2xl flex items-center justify-center">
              <div className="absolute inset-0 pointer-events-auto opacity-85">
                {effectComponent}
              </div>
              <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 text-center">
                <span className="text-[0.65rem] font-bold text-[#C8A44D] uppercase tracking-wider">
                  MOTOR VISUAL 3D · {category.label}
                </span>
              </div>
            </div>

          </div>

          {/* 100% Unique Image & Video Carousel */}
          {slides.length > 0 && (
            <div className="relative rounded-2xl overflow-hidden bg-[#14141A] border border-white/10 shadow-2xl group">
              <div className="block relative w-full aspect-[16/9] md:aspect-[2.2/1] text-left bg-black overflow-hidden">
                <img
                  src={slides[activeSlide].posterImage}
                  alt={slides[activeSlide].title}
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
                />
                
                <div
                  className="absolute inset-0 flex items-end p-6 md:p-10"
                  style={{ background: 'linear-gradient(0deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.3) 60%, transparent 100%)' }}
                >
                  <div className="space-y-1">
                    <span className="badge-gold text-[0.65rem]">
                      {slides[activeSlide].client}
                    </span>
                    <h2 className="font-cinzel text-2xl md:text-4xl font-bold text-white mt-1">
                      {slides[activeSlide].title}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Prev / Next controls */}
              {slides.length > 1 && (
                <>
                  <button
                    onClick={() => moveSlide(-1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#141418]/80 hover:bg-[#C8A44D] hover:text-black text-white transition-all backdrop-blur-md border border-white/10 cursor-pointer z-20"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => moveSlide(1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#141418]/80 hover:bg-[#C8A44D] hover:text-black text-white transition-all backdrop-blur-md border border-white/10 cursor-pointer z-20"
                    aria-label="Siguiente"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Slide indicators */}
              <div className="absolute bottom-4 right-6 flex gap-2 z-20">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                      activeSlide === idx ? 'bg-[#C8A44D] w-6' : 'bg-white/40'
                    }`}
                    aria-label={`Ir a slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Section: Tailored Pricing Packages per Category */}
          <div className="space-y-8 pt-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="badge-gold inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                  <Tag className="w-3.5 h-3.5" /> Tarifas & Cotización
                </div>
                <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                  PAQUETES DE PRECIOS PARA {category.label.toUpperCase()}
                </h2>
              </div>
              
              <button
                onClick={() => setQuoteOpen(true)}
                className="btn-gold py-3 px-6 text-xs font-bold uppercase"
              >
                COTIZACIÓN PERSONALIZADA
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg, idx) => (
                <article
                  key={idx}
                  className={`p-7 rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                    pkg.featured
                      ? 'bg-[#14141A] border border-[rgba(200,164,77,0.5)] shadow-2xl md:-translate-y-2'
                      : 'bg-[#141418] border border-white/5 shadow-lg'
                  }`}
                >
                  <div className="space-y-5">
                    {pkg.featured && (
                      <span className="badge-gold text-[0.6rem] inline-block font-bold tracking-widest">
                        RECOMENDADO / DESTACADO
                      </span>
                    )}

                    <h3 className="font-cinzel text-xl font-bold text-white">{pkg.name}</h3>
                    
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs text-[#A0A0A8]">S/</span>
                      <span className="font-cinzel text-3xl font-bold text-gold-gradient">{pkg.price}</span>
                    </div>

                    <div className="w-full h-px bg-white/5" />

                    <ul className="space-y-2.5">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-[#D4D4DC]">
                          <CheckCircle2 className="w-4 h-4 text-[#C8A44D] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      const msg = encodeURIComponent(`¡Hola 4KM Producciones! Deseo solicitar información para el *${pkg.name}* (${category.label}) por S/ ${pkg.price}.`);
                      window.open(`https://wa.me/51900000000?text=${msg}`, '_blank');
                    }}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 mt-6 ${
                      pkg.featured ? 'btn-gold' : 'btn-outline-gold'
                    }`}
                  >
                    <Send className="w-3.5 h-3.5" /> SOLICITAR ESTE PAQUETE
                  </button>
                </article>
              ))}
            </div>
          </div>

          {/* Section: Dedicated Video Showcase Gallery */}
          <div className="space-y-6 pt-8">
            <div className="flex items-center gap-3">
              <Video className="w-5 h-5 text-[#C8A44D]" />
              <h2 className="font-cinzel text-2xl font-bold text-white">Showreels & Videos Recomendados</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {media.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedMedia(item)}
                  className="relative aspect-video rounded-2xl overflow-hidden text-left group bg-[#141418] border border-white/10 hover:border-[rgba(200,164,77,0.5)] transition-all duration-300 shadow-lg cursor-pointer"
                >
                  <img
                    src={item.kind === 'video' ? (item.cover || item.src) : item.src}
                    alt={item.alt || item.title || category.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  
                  {item.kind === 'video' && (
                    <div className="absolute inset-0 grid place-items-center bg-black/40 group-hover:bg-black/20 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-[#C8A44D] text-black flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 right-3 p-2 rounded-lg bg-black/70 backdrop-blur-md text-xs font-semibold text-[#D4D4DC]">
                    {item.title || item.alt || `${category.label} #${idx + 1}`}
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Media Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="w-full max-w-5xl space-y-4" onClick={(e) => e.stopPropagation()}>
            {selectedMedia.kind === 'video' ? (
              <video src={selectedMedia.src} controls autoPlay playsInline className="w-full max-h-[80vh] bg-black rounded-2xl object-contain shadow-2xl" />
            ) : (
              <img src={selectedMedia.src} alt={selectedMedia.alt || 'Media 4KM'} className="w-full max-h-[80vh] rounded-2xl object-contain shadow-2xl" />
            )}
            
            <div className="flex justify-end">
              <button
                onClick={() => setSelectedMedia(null)}
                className="btn-gold py-2 px-6 text-xs font-bold"
              >
                CERRAR
              </button>
            </div>
          </div>
        </div>
      )}

    </main>
  );
};
