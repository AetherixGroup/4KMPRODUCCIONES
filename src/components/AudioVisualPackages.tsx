import React from 'react';
import { AUDIOVISUAL_PACKAGES, handlePackageContact, PackageItem } from '../data/packagesData';
import { CheckCircle2, Users, Clock, Video, Camera, Sparkles, Send } from 'lucide-react';

export const AudioVisualPackages: React.FC = () => {
  return (
    <section id="paquetes" className="section-pad relative" style={{ background: '#0A0A0A' }}>
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[rgba(200,164,77,0.04)] blur-[120px] rounded-full pointer-events-none" />

      <div className="container-xl relative z-10 space-y-16">

        {/* Section Intro Header */}
        <div className="section-intro text-center max-w-2xl mx-auto space-y-4">
          <div className="badge-gold inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Opciones & Tarifas</span>
          </div>
          <h2 className="type-heading font-cinzel text-3xl sm:text-4xl font-bold text-white">
            PAQUETES <span className="text-gold-gradient">AUDIOVISUALES</span>
          </h2>
          <div className="divider-gold" />
          <p className="subtitle text-[#A0A0A8] text-sm sm:text-base font-light">
            Soluciones audiovisuales adaptadas a diferentes tipos de proyectos, eventos y cobertura comercial.
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {AUDIOVISUAL_PACKAGES.map((pkg: PackageItem) => {
            const isFeatured = pkg.featured;

            return (
              <article
                key={pkg.id}
                className={`relative flex flex-col justify-between rounded-2xl transition-all duration-300 ${
                  isFeatured ? 'md:-translate-y-2 z-10' : ''
                }`}
                style={{
                  background: isFeatured ? '#14141A' : '#111115',
                  border: isFeatured
                    ? '1px solid rgba(200,164,77,0.45)'
                    : '1px solid rgba(255,255,255,0.06)',
                  boxShadow: isFeatured
                    ? '0 0 30px rgba(200,164,77,0.12), 0 20px 40px rgba(0,0,0,0.8)'
                    : '0 10px 30px rgba(0,0,0,0.6)',
                  borderRadius: '18px',
                }}
              >
                {/* Featured Badge Header */}
                {isFeatured && (
                  <div
                    className="w-full py-2.5 px-4 text-center text-xs font-bold tracking-widest uppercase rounded-t-2xl flex items-center justify-center gap-1.5"
                    style={{
                      background: 'linear-gradient(90deg, rgba(200,164,77,0.2) 0%, rgba(200,164,77,0.4) 50%, rgba(200,164,77,0.2) 100%)',
                      color: '#E8C96A',
                      borderBottom: '1px solid rgba(200,164,77,0.3)'
                    }}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{pkg.badge || 'MÁS COMPLETO'}</span>
                  </div>
                )}

                <div className="p-7 space-y-6 flex-1">

                  {/* Header info */}
                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold text-[#A0A0A8] uppercase tracking-wider mb-1">
                      <span>{pkg.option}</span>
                      <span className="flex items-center gap-1 text-[#C8A44D]">
                        <Users className="w-3.5 h-3.5" /> {pkg.people}
                      </span>
                    </div>

                    <h3 className="font-cinzel text-xl font-bold text-white mt-1">
                      {pkg.name}
                    </h3>
                    
                    <div className="flex items-center gap-1.5 text-xs text-[#888892] mt-2">
                      <Clock className="w-3.5 h-3.5 text-[#C8A44D]" />
                      <span>{pkg.duration}</span>
                    </div>
                  </div>

                  <div className="w-full h-px bg-white/5" />

                  {/* Feature checklist */}
                  <div className="space-y-3">
                    <p className="text-xs font-bold text-[#A0A0A8] uppercase tracking-wider">Incluye:</p>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-[#D4D4DC]">
                          <CheckCircle2 className="w-4 h-4 text-[#C8A44D] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Pricing & CTA Section */}
                <div className="p-7 pt-4 space-y-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  
                  {/* Price display */}
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-[#888892] uppercase font-semibold">Desde / Precio</span>
                    <div className="text-right">
                      <span className="text-xs font-semibold text-[#A0A0A8] mr-1">S/</span>
                      <span className="font-cinzel text-3xl font-bold text-white text-gold-gradient">
                        {pkg.price}
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handlePackageContact(pkg)}
                    className={`w-full py-3.5 px-5 rounded-xl font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-200 ${
                      isFeatured ? 'btn-gold' : 'btn-outline-gold'
                    }`}
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>SOLICITAR ESTE PAQUETE</span>
                  </button>

                </div>

              </article>
            );
          })}
        </div>

      </div>

    </section>
  );
};
