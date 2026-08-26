import React from 'react';
import { DRONE_SERVICES } from '../data/catalog';
import { useApp } from '../context/AppContext';
import { Video, ShieldCheck, Camera, Check, ShoppingBag, Calendar, Globe as GlobeIcon } from 'lucide-react';
import Globe from './effects/Globe';

export const DroneShowcase = () => {
  const { addToCart, openBookingWithItem } = useApp();

  return (
    <section
      id="drone"
      className="section-pad relative overflow-hidden"
      style={{ background: '#0A0A0E' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none"
        style={{
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(200,164,77,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="container-xl relative z-10 space-y-16">

        {/* ── Header Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Text */}
          <div className="lg:col-span-7 space-y-7">
            <div className="badge-gold inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
              <Video className="w-3.5 h-3.5 text-[#C8A44D]" />
              <span>TECNOLOGÍA AÉREA DE VANGUARDIA</span>
            </div>

            <h2 className="type-heading font-cinzel text-3xl sm:text-5xl font-bold text-white leading-tight">
              Categoría Exclusiva{' '}
              <span className="text-gold-gradient">Drone 4K Cinema</span>
            </h2>

            <p className="text-[#A0A0A8] text-base leading-relaxed font-light">
              Capturamos la grandeza desde las alturas. Pilotos certificados por la MTC, aeronaves de última generación 4K HDR 60fps y póliza de seguro aeronáutico activa para cualquier localización en el Perú.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: ShieldCheck, label: 'Licencia MTC Oficial' },
                { icon: Camera,      label: 'Video 4K HDR 60fps' },
                { icon: ShieldCheck, label: 'Seguro Aeronáutico' },
                { icon: GlobeIcon,   label: 'Cobertura Nacional' },
              ].map(({ icon: Icon, label }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-[#141418] border border-white/5"
                >
                  <Icon className="w-4 h-4 text-[#C8A44D] shrink-0" />
                  <span className="text-xs font-semibold text-[#D4D4DC]">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Globe / Drone Tech Visual */}
          <div className="lg:col-span-5 relative group">
            <div
              className="relative rounded-2xl overflow-hidden bg-[#141418] h-[360px] sm:h-[400px] flex items-center justify-center border border-[rgba(200,164,77,0.25)] shadow-2xl"
            >
              <Globe scale={9} speed={1.5} outlineColor="#C8A44D" oceanColor="#0A0A0E" />
              <div className="absolute inset-0 pointer-events-none bg-radial-vignette" style={{
                background: 'radial-gradient(circle at 50% 50%, transparent 40%, rgba(10,10,14,0.7) 100%)'
              }} />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end bg-[#0A0A0E]/80 backdrop-blur-md p-3.5 rounded-xl border border-white/10">
                <div>
                  <p className="type-label text-[0.6rem] text-[#C8A44D] mb-0.5">DRONE PILOT CERTIFIED</p>
                  <h4 className="font-cinzel font-bold text-sm text-white">4KM Aerial Systems</h4>
                </div>
                <span className="badge-gold text-[0.6rem]">DISPONIBILIDAD NACIONAL</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Service Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DRONE_SERVICES.map((drone) => (
            <article
              key={drone.id}
              className="flex flex-col justify-between rounded-2xl overflow-hidden transition-all duration-300 bg-[#141418] border border-white/5 hover:border-[rgba(200,164,77,0.4)] hover:-translate-y-1 shadow-lg"
            >
              <div className="p-7 space-y-5 flex-1">
                <h4 className="font-cinzel text-lg font-bold text-[#C8A44D]">{drone.title}</h4>
                <p className="text-xs text-[#A0A0A8] leading-relaxed font-light">{drone.description}</p>

                <div className="flex items-baseline gap-1 pt-2">
                  <span className="text-xs font-semibold text-[#A0A0A8]">S/</span>
                  <span className="font-cinzel text-3xl font-bold text-gold-gradient">{drone.price}</span>
                  <span className="text-xs text-[#666672]">{drone.unit}</span>
                </div>

                <div className="space-y-2.5 pt-5 border-t border-white/5">
                  {drone.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-[#D4D4DC]">
                      <Check className="w-3.5 h-3.5 text-[#C8A44D] shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 space-y-2.5 border-t border-white/5">
                <button
                  onClick={() => addToCart({ ...drone, type: 'drone' })}
                  className="btn-gold w-full py-3 text-xs"
                >
                  <ShoppingBag className="w-3.5 h-3.5" /> CONTRATAR DRONE
                </button>
                <button
                  onClick={() => openBookingWithItem(drone)}
                  className="btn-outline-gold w-full py-2.5 text-xs"
                >
                  <Calendar className="w-3.5 h-3.5" /> RESERVAR FECHA
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
