import React from 'react';
import { useApp } from '../context/AppContext';
import { MARKETING_PACKAGES } from '../data/catalog';
import { Bot, Cpu, Check, Sparkles, ShoppingBag, Calendar, BarChart3, Zap, Target, TrendingUp, Shield } from 'lucide-react';

export const MarketingAgencySection: React.FC = () => {
  const { addToCart, openBookingWithItem } = useApp();

  return (
    <section id="marketing" className="section-pad relative overflow-hidden" style={{ background: '#0A0A0A' }}>

      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[rgba(200,164,77,0.04)] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[rgba(200,164,77,0.03)] blur-[120px] rounded-full pointer-events-none" />

      <div className="container-xl relative z-10 space-y-16">

        {/* Header */}
        <div className="section-intro text-center max-w-3xl mx-auto space-y-4">
          <div className="badge-gold inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
            <Bot className="w-3.5 h-3.5" />
            <span>Agencia Digital</span>
          </div>
          <h2 className="type-heading font-cinzel text-3xl sm:text-4xl font-bold text-white">
            AGENCIA DE <span className="text-gold-gradient">MARKETING & AUTOMATIZACIONES</span>
          </h2>
          <div className="divider-gold" />
          <p className="subtitle text-[#A0A0A8] text-sm sm:text-base font-light max-w-2xl mx-auto">
            Publicidad digital, automatizaciones con IA, CRM HubSpot y estrategia de contenido para convertir tu marca en una maquina de ventas.
          </p>
        </div>

        {/* Capabilities */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { icon: Target, label: 'Meta Ads', desc: 'Facebook + Instagram' },
            { icon: TrendingUp, label: 'Google Ads', desc: 'Search & Display' },
            { icon: Bot, label: 'Automatizaciones n8n', desc: 'Chatbots & Flujos IA' },
            { icon: Shield, label: 'CRM HubSpot', desc: 'Gestion de Leads' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-xl border border-[rgba(200,164,77,0.15)] bg-[rgba(20,20,24,0.6)] backdrop-blur-sm text-center hover:border-[rgba(200,164,77,0.35)] transition-all">
              <item.icon className="w-6 h-6 text-[#C8A44D]" />
              <span className="font-montserrat text-xs font-bold text-white">{item.label}</span>
              <span className="font-montserrat text-[0.65rem] text-[#888]">{item.desc}</span>
            </div>
          ))}
        </div>

        {/* Marketing Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {MARKETING_PACKAGES.map((pkg) => (
            <article
              key={pkg.id}
              className={`relative flex flex-col justify-between rounded-2xl overflow-hidden transition-all duration-300 ${
                pkg.recommended ? 'md:-translate-y-2 z-10' : ''
              }`}
              style={{
                background: pkg.recommended ? '#14141A' : '#111115',
                border: pkg.recommended
                  ? '1px solid rgba(200,164,77,0.40)'
                  : '1px solid rgba(255,255,255,0.06)',
                boxShadow: pkg.recommended
                  ? '0 0 30px rgba(200,164,77,0.12), 0 20px 40px rgba(0,0,0,0.8)'
                  : '0 10px 30px rgba(0,0,0,0.6)',
              }}
            >
              {pkg.recommended && (
                <div
                  className="w-full py-2.5 px-4 text-center text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-1.5"
                  style={{
                    background: 'linear-gradient(90deg, rgba(200,164,77,0.2) 0%, rgba(200,164,77,0.4) 50%, rgba(200,164,77,0.2) 100%)',
                    color: '#E8C96A',
                    borderBottom: '1px solid rgba(200,164,77,0.3)',
                  }}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{pkg.badge}</span>
                </div>
              )}

              <div className="p-7 space-y-6 flex-1">
                <div>
                  <div className="type-label mb-2" style={{ color: '#C8A44D', fontSize: '0.6rem' }}>{pkg.badge}</div>
                  <h4 className="font-cinzel text-lg font-bold text-white">{pkg.name}</h4>
                  <div className="flex items-baseline gap-1 mt-3">
                    <span className="text-[#A0A0A8] text-sm font-semibold">S/</span>
                    <span className="text-gold-gradient font-bold text-3xl" style={{ lineHeight: 1 }}>{pkg.price}</span>
                    <span className="text-[#666672] text-sm">{pkg.period}</span>
                  </div>
                </div>

                <div className="space-y-2.5" style={{ borderTop: '1px solid #2A2A2A', paddingTop: '20px' }}>
                  {pkg.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-[#A0A0A8] text-xs">
                      <Check className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-[#C8A44D]" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {pkg.n8n && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[rgba(200,164,77,0.08)] border border-[rgba(200,164,77,0.2)] text-[0.6rem] font-semibold text-[#C8A44D]">
                      <Bot className="w-3 h-3" /> n8n Auto
                    </span>
                  )}
                  {pkg.hubspot && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[rgba(200,164,77,0.08)] border border-[rgba(200,164,77,0.2)] text-[0.6rem] font-semibold text-[#C8A44D]">
                      <Cpu className="w-3 h-3" /> HubSpot CRM
                    </span>
                  )}
                </div>
              </div>

              <div className="p-5 space-y-2.5" style={{ borderTop: '1px solid #2A2A2A' }}>
                <button
                  onClick={() => addToCart({
                    id: pkg.id,
                    name: pkg.name,
                    price: pkg.price,
                    quantity: 1,
                    type: 'marketing',
                  })}
                  className="btn-gold w-full py-3 text-[0.6875rem]"
                >
                  <ShoppingBag className="w-3.5 h-3.5" /> CONTRATAR PLAN
                </button>
                <button
                  onClick={() => openBookingWithItem(pkg.name)}
                  className="btn-outline-gold w-full py-2.5 text-[0.65rem]"
                >
                  <Calendar className="w-3.5 h-3.5" /> Agendar reunion estrategica
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8" style={{ borderTop: '1px solid #2A2A2A' }}>
          {[
            { value: '200+', label: 'Campanas activas' },
            { value: '3.2x', label: 'ROI promedio' },
            { value: '50K+', label: 'Leads generados' },
            { value: '98%', label: 'Clientes satisfechos' },
          ].map((stat, i) => (
            <div key={i} className="text-center py-4">
              <div className="text-gold-gradient font-cinzel text-2xl font-bold">{stat.value}</div>
              <div className="text-[#888] text-xs font-montserrat mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
