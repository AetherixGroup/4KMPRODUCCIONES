import React, { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { PORTFOLIO_CATEGORIES } from '../data/portfolioData';
import { AUDIOVISUAL_EVENTS } from '../data/catalog';
import { useApp } from '../context/AppContext';

const SERVICE_TYPES = {
  bodas: 'bodas', corporativos: 'corporativos', quinceanos: 'quinceaneros', cumpleanos: 'cumpleanos',
};

export const PortfolioCategoryPage = ({ categoryId }) => {
  const { portfolioProjects, setSelectedProject } = useApp();
  const [activeSlide, setActiveSlide] = useState(0);
  const category = PORTFOLIO_CATEGORIES.find((item) => item.id === categoryId) || PORTFOLIO_CATEGORIES[0];
  const projects = useMemo(() => portfolioProjects.filter((project) => project.category === category.id), [category.id, portfolioProjects]);
  const slides = projects.length ? projects : portfolioProjects.slice(0, 3);
  const service = AUDIOVISUAL_EVENTS.find((event) => event.type === SERVICE_TYPES[category.id]);
  const moveSlide = (direction) => setActiveSlide((current) => (current + direction + slides.length) % slides.length);

  return (
    <main className="pt-20 min-h-screen" style={{ background: '#0A0A0A' }}>
      <section className="section-pad">
        <div className="container-xl space-y-10">
          <a href="./" className="inline-flex items-center gap-2 text-sm font-bold" style={{ color: '#C8A44D' }}><ArrowLeft className="w-4 h-4" /> Volver al inicio</a>
          <div className="flex flex-wrap gap-2">
            {PORTFOLIO_CATEGORIES.map((item) => <a key={item.id} href={`?portafolio=${item.id}`} className="px-3 py-2 text-xs font-bold whitespace-nowrap" style={{ borderRadius: '6px', background: item.id === category.id ? '#C8A44D' : '#141418', border: '1px solid #2A2A2A', color: item.id === category.id ? '#0A0A0A' : '#A0A0A8' }}>{item.label}</a>)}
          </div>
          <div>
            <p className="type-label mb-3" style={{ color: '#C8A44D' }}>PORTAFOLIO 4KM</p>
            <h1 className="type-heading" style={{ color: '#F7F7F7' }}>{category.label}</h1>
            <div className="divider-gold" />
          </div>
          <div className="relative overflow-hidden" style={{ border: '1px solid #2A2A2A', borderRadius: '8px' }}>
            {slides.length > 0 && <button onClick={() => setSelectedProject(slides[activeSlide])} className="block relative w-full aspect-[16/8] md:aspect-[2/1] text-left bg-black">
              <img src={slides[activeSlide].posterImage} alt={slides[activeSlide].title} className="w-full h-full object-cover opacity-80" />
              <span className="absolute inset-0 flex items-end p-6 md:p-10" style={{ background: 'linear-gradient(0deg, rgba(0,0,0,.86), transparent 70%)' }}><span><span className="type-label" style={{ color: '#C8A44D' }}>{slides[activeSlide].client}</span><strong className="block mt-2 font-cinzel text-xl md:text-3xl text-white">{slides[activeSlide].title}</strong></span></span>
            </button>}
            {slides.length > 1 && <><button onClick={() => moveSlide(-1)} className="absolute left-3 top-1/2 -translate-y-1/2 p-2 text-white" style={{ background: 'rgba(0,0,0,.6)', borderRadius: '6px' }} aria-label="Anterior"><ChevronLeft /></button><button onClick={() => moveSlide(1)} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-white" style={{ background: 'rgba(0,0,0,.6)', borderRadius: '6px' }} aria-label="Siguiente"><ChevronRight /></button></>}
          </div>
          <div>
            <h2 className="font-cinzel text-2xl font-bold text-white mb-6">Paquetes disponibles</h2>
            {service ? <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{service.packages.map((pkg) => <article key={pkg.id} className="p-5" style={{ background: '#141418', border: '1px solid #2A2A2A', borderRadius: '8px' }}><h3 className="font-cinzel font-bold text-white">{pkg.name}</h3><p className="mt-3 text-2xl font-bold" style={{ color: '#C8A44D' }}>S/ {pkg.price}</p><p className="mt-3 text-sm" style={{ color: '#A0A0A8' }}>{pkg.videos}</p></article>)}</div> : <p style={{ color: '#A0A0A8' }}>Consulta nuestras opciones personalizadas para este tipo de producción.</p>}
          </div>
        </div>
      </section>
    </main>
  );
};
