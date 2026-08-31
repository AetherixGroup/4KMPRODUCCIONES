import React from 'react';
import { Sparkles, ArrowRight, Users, Building2, Clapperboard } from 'lucide-react';

const CATEGORY_CARDS = [
  {
    id: 'sociales',
    icon: Users,
    title: 'Sociales',
    description:
      'Fotografía y video para eventos sociales, celebraciones, recuerdos y contenido personal. Bodas, quinceañeros, cumpleaños y fechas memorables con estética cinematográfica.',
    image: './img/hero.jpg',
    cta: 'VER SERVICIOS SOCIALES',
    href: '?portafolio=bodas',
  },
  {
    id: 'corporativos',
    icon: Building2,
    title: 'Corporativos',
    description:
      'Contenido audiovisual para empresas, publicidad, campañas, eventos corporativos y branding. Videos institucionales, spots comerciales y cobertura empresarial 4K.',
    image: './img/mockup.jpg',
    cta: 'VER SERVICIOS CORPORATIVOS',
    href: '?portafolio=corporativos',
  },
  {
    id: 'series-peliculas',
    icon: Clapperboard,
    title: 'Series y Películas',
    description:
      'Producción audiovisual, proyectos cinematográficos, series, cortometrajes y contenido profesional. Dirección, guion, rodaje y postproducción de alto nivel.',
    image: './img/drone.jpg',
    cta: 'VER PRODUCCIÓN AUDIOVISUAL',
    href: '?portafolio=reels',
  },
];

export const CategoryShowcase = () => {
  return (
    <section id="categorias" className="section-pad relative overflow-hidden" style={{ background: '#0D0D10' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[rgba(200,164,77,0.04)] blur-[120px] rounded-full pointer-events-none" />

      <div className="container-xl relative z-10">
        <div className="section-intro">
          <div className="badge-gold inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Categorías Principales</span>
          </div>
          <h2 className="type-heading font-cinzel text-3xl sm:text-4xl font-bold text-white mt-4">
            EXPLORA POR <span className="text-gold-gradient">CATEGORÍA</span>
          </h2>
          <div className="divider-gold" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CATEGORY_CARDS.map((cat) => {
            const Icon = cat.icon;
            return (
              <article
                key={cat.id}
                className="flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 group"
                style={{
                  background: '#141418',
                  border: '1px solid rgba(255,255,255,0.06)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                }}
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-black/40">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                    onError={(e) => { e.currentTarget.src = './img/hero.jpg'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141418] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-[rgba(200,164,77,0.15)] border border-[rgba(200,164,77,0.35)] flex items-center justify-center backdrop-blur-md">
                    <Icon className="w-5 h-5 text-[#C8A44D]" />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="font-cinzel text-xl font-bold text-white">{cat.title}</h3>
                    <p className="text-xs text-[#A0A0A8] leading-relaxed font-light">
                      {cat.description}
                    </p>
                  </div>
                  <a
                    href={cat.href}
                    className="mt-6 inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#C8A44D] hover:text-[#E8C96A] transition-colors group/cta"
                  >
                    <span>{cat.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
