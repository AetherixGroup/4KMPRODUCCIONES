import React from 'react';
import { Aperture, Eye, HeartHandshake, Sparkles, Cpu, Award } from 'lucide-react';
import MetallicCube from './effects/MetallicCube';

const pillars = [
  {
    icon: Aperture,
    title: 'Misión',
    text: 'Transformar momentos especiales y marcas en historias cinematográficas de alto impacto que emocionen, inspiren y generen conexiones reales.'
  },
  {
    icon: Eye,
    title: 'Visión',
    text: 'Ser la productora audiovisual más innovadora y tecnológica, reconocida por la excelencia en cinematografía, 3D y soluciones visuales.'
  },
  {
    icon: HeartHandshake,
    title: 'Valores',
    text: 'Creatividad sin límites, precisión técnica en 4K/8K, puntualidad rigurosa y pasión obsesiva por cada detalle cinematográfico.'
  },
];

export const About4KM: React.FC = () => (
  <section id="nosotros" className="section-pad relative overflow-hidden" style={{ background: '#0D0D10' }}>
    
    {/* Ambient radial glow */}
    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[rgba(200,164,77,0.03)] blur-[100px] rounded-full pointer-events-none" />

    <div className="container-xl relative z-10 space-y-16">
      
      {/* Grid: Left info & 3D Metallic Cube */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Intro */}
        <div className="lg:col-span-7 space-y-6">
          <div className="badge-gold inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXCELENCIA AUDIOVISUAL & 3D</span>
          </div>

          <h2 className="type-heading font-cinzel text-3xl sm:text-5xl font-bold text-white leading-tight">
            SOBRE <span className="text-gold-gradient">4KM PRODUCCIONES</span>
          </h2>
          <div className="divider-gold !mx-0" />

          <p className="text-[#A0A0A8] text-base leading-relaxed font-light">
            Somos una productora audiovisual independiente nacida con el propósito de elevar los estándares visuales de marcas, eventos sociales, producciones corporativas e industriales.
          </p>
          <p className="text-[#888892] text-sm leading-relaxed font-light">
            Fusionamos estética cinematográfica de nivel internacional, cámaras de cine 4K/8K, drones certificados y tecnología 3D/IA para crear experiencias visuales inolvidables.
          </p>

          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/5">
            <div>
              <div className="font-cinzel text-2xl font-bold text-gold-gradient">100%</div>
              <div className="text-[0.7rem] text-[#888892] uppercase font-semibold mt-1">Calidad 4K Cinema</div>
            </div>
            <div>
              <div className="font-cinzel text-2xl font-bold text-gold-gradient">+500</div>
              <div className="text-[0.7rem] text-[#888892] uppercase font-semibold mt-1">Proyectos Exitosos</div>
            </div>
            <div>
              <div className="font-cinzel text-2xl font-bold text-gold-gradient">MTC</div>
              <div className="text-[0.7rem] text-[#888892] uppercase font-semibold mt-1">Pilotos Drone Licenciados</div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive 3D Metallic Cube */}
        <div className="lg:col-span-5 h-[360px] sm:h-[420px] w-full relative rounded-2xl overflow-hidden bg-[#14141A] border border-[rgba(255,255,255,0.06)] shadow-2xl flex items-center justify-center group">
          <MetallicCube sizePercent={85} dragSensitivity={4} />
          
          <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[rgba(10,10,10,0.8)] backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
            <span className="text-[#A0A0A8] flex items-center gap-1.5 font-medium">
              <Cpu className="w-3.5 h-3.5 text-[#C8A44D]" /> Arrastra para girar el cubo 3D
            </span>
            <span className="badge-gold text-[0.6rem]">TECNOLOGÍA 3D</span>
          </div>
        </div>

      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className="p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1"
            style={{
              background: '#141418',
              border: '1px solid rgba(255,255,255,0.06)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            }}
          >
            <div className="w-12 h-12 rounded-xl bg-[rgba(200,164,77,0.1)] border border-[rgba(200,164,77,0.2)] flex items-center justify-center mb-6">
              <Icon className="w-6 h-6 text-[#C8A44D]" />
            </div>
            <h3 className="font-cinzel text-xl font-bold mb-3 text-white">{title}</h3>
            <p className="text-sm text-[#A0A0A8] leading-relaxed font-light">{text}</p>
          </article>
        ))}
      </div>

    </div>
  </section>
);
