import React from 'react';
import { Aperture, Eye, HeartHandshake } from 'lucide-react';

const pillars = [
  { icon: Aperture, title: 'Mision', text: 'Convertir cada momento, marca y celebracion en una historia audiovisual autentica y perdurable.' },
  { icon: Eye, title: 'Vision', text: 'Ser el equipo audiovisual de referencia en Peru para producciones que unen sensibilidad creativa, tecnica y confianza.' },
  { icon: HeartHandshake, title: 'Valores', text: 'Escuchamos con cercania, trabajamos con puntualidad y cuidamos cada detalle para entregar imagenes memorables.' },
];

export const About4KM = () => (
  <section id="nosotros" className="section-pad" style={{ background: '#101014', borderTop: '1px solid #1A1A1A', borderBottom: '1px solid #1A1A1A' }}>
    <div className="container-xl">
      <div className="max-w-2xl mb-10 md:mb-12">
        <p className="type-label mb-3" style={{ color: '#C8A44D' }}>LA ESENCIA DE 4KM</p>
        <h2 className="type-heading" style={{ color: '#F7F7F7' }}>Historias que merecen quedarse</h2>
        <div className="divider-gold" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {pillars.map(({ icon: Icon, title, text }) => (
          <article key={title} className="p-6 md:p-7" style={{ background: '#141418', border: '1px solid #2A2A2A', borderRadius: '8px' }}>
            <Icon className="w-6 h-6 mb-6" style={{ color: '#C8A44D' }} aria-hidden="true" />
            <h3 className="font-cinzel text-xl font-bold mb-3" style={{ color: '#F7F7F7' }}>{title}</h3>
            <p className="text-sm leading-7" style={{ color: '#A0A0A8' }}>{text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
