import React from 'react';
import { Sparkles, Play } from 'lucide-react';

export const ReelSection = () => {
  return (
    <section id="reel" className="section-pad relative overflow-hidden" style={{ background: '#0A0A0A' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[rgba(200,164,77,0.04)] blur-[120px] rounded-full pointer-events-none" />

      <div className="container-xl relative z-10 space-y-10">
        <div className="section-intro">
          <div className="badge-gold inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Reel de Presentación</span>
          </div>
          <h2 className="type-heading font-cinzel text-3xl sm:text-4xl font-bold text-white mt-4">
            REEL PROFESIONAL <span className="text-gold-gradient">4KM</span>
          </h2>
          <div className="divider-gold" />
        </div>

        <div className="overflow-hidden rounded-3xl border border-[rgba(200,164,77,0.25)] bg-black shadow-2xl">
          {/* Ligero: poster + preload metadata, sin autoplay ni descarga pesada al inicio */}
          <video
            src="./reel/4km-reel-profesional.mp4"
            controls
            playsInline
            preload="none"
            poster="./img/hero.jpg"
            className="w-full h-auto aspect-video object-contain bg-black"
          />
        </div>

        <div className="flex justify-center">
          <p className="text-xs text-[#666672] font-light max-w-xl text-center">
            Haz clic en reproducir para ver el reel de presentación. Cargado bajo demanda para una navegación rápida incluso con conexión lenta.
          </p>
        </div>
      </div>
    </section>
  );
};
