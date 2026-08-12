import React from 'react';
import { useApp } from '../context/AppContext';
import { Youtube, Facebook, Phone, MessageCircle } from 'lucide-react';

const OFFICIAL_SOCIALS = {
  tiktok: 'https://www.tiktok.com/es-419/',
  youtube: 'https://www.youtube.com/@4kmproducciones',
  facebook: 'https://www.facebook.com/profile.php?id=100083404565767&locale=es_LA',
  whatsapp: 'https://wa.me/51994253131',
};

const IconBtn = ({ href, title, children, hoverColor = '#C8A44D' }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    title={title}
    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
    style={{ background: '#1C1C22', border: '1px solid #2A2A2A', color: '#666672' }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = hoverColor;
      e.currentTarget.style.color = hoverColor;
      e.currentTarget.style.transform = 'scale(1.08)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = '#2A2A2A';
      e.currentTarget.style.color = '#666672';
      e.currentTarget.style.transform = 'scale(1)';
    }}
  >
    {children}
  </a>
);

export const Footer = () => {
  const { setLegalOpen, setLegalType, setQuoteOpen, setGameOpen } = useApp();

  const openLegal = (type) => { setLegalType(type); setLegalOpen(true); };

  const linkStyle = { color: '#666672', fontSize: '0.8125rem', cursor: 'pointer', textDecoration: 'none' };
  const linkHover = {
    onMouseEnter: e => { e.currentTarget.style.color = '#C8A44D'; },
    onMouseLeave: e => { e.currentTarget.style.color = '#666672'; },
  };

  return (
    <footer
      className="w-full relative overflow-hidden"
      style={{ background: '#0A0A0A', borderTop: '1px solid #1E1E1E' }}
    >
      {/* Ambient top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(200,164,77,0.35), transparent)' }}
      />

      <div className="container-xl py-16 space-y-12">

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="space-y-5 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0"
                style={{ border: '1px solid rgba(200,164,77,0.35)' }}
              >
                <img src="/img/logo.jpg" alt="4KM Producciones" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-cinzel font-bold tracking-widest text-sm" style={{ color: '#F7F7F7' }}>4KM</div>
                <div className="type-label" style={{ color: '#C8A44D', letterSpacing: '0.18em', fontSize: '0.5rem' }}>PRODUCCIONES</div>
              </div>
            </div>

            <p style={{ color: '#666672', fontSize: '0.8125rem', lineHeight: 1.7, fontWeight: 400 }}>
              Empresa premiere de Producción Audiovisual Cinematográfica, Fotografía 8K, Drones, Marketing Digital y Automatizaciones con IA.
            </p>

            {/* Phone */}
            <a
              href="https://wa.me/51994253131"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors duration-200"
              style={{ color: '#C8A44D', fontSize: '0.8125rem', fontWeight: 700 }}
              onMouseEnter={e => e.currentTarget.style.color = '#D4AF37'}
              onMouseLeave={e => e.currentTarget.style.color = '#C8A44D'}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+51 994 253 131</span>
            </a>

            {/* Socials */}
            <div className="flex items-center gap-2.5 pt-1">
              {/* TikTok */}
              <IconBtn href={OFFICIAL_SOCIALS.tiktok} title="TikTok" hoverColor="#F7F7F7">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V6.01a6.31 6.31 0 0 0-.88-.06 6.34 6.34 0 1 0 6.34 6.34V9a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.00-.43z"/>
                </svg>
              </IconBtn>
              <IconBtn href={OFFICIAL_SOCIALS.youtube} title="YouTube @4kmproducciones" hoverColor="#FF4444">
                <Youtube className="w-3.5 h-3.5" />
              </IconBtn>
              <IconBtn href={OFFICIAL_SOCIALS.facebook} title="Facebook" hoverColor="#4593FF">
                <Facebook className="w-3.5 h-3.5" />
              </IconBtn>
              <IconBtn href={OFFICIAL_SOCIALS.whatsapp} title="WhatsApp Directo" hoverColor="#22C55E">
                <MessageCircle className="w-3.5 h-3.5" />
              </IconBtn>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-cinzel text-xs font-bold tracking-widest" style={{ color: '#F7F7F7' }}>SERVICIOS PREMIERE</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Bodas & Eventos Sociales', href: '#servicios' },
                { label: 'Videos Institucionales', href: '#servicios' },
                { label: 'Drone 4K Aéreo', href: '#drone' },
                { label: 'Meta Ads & Embudos', href: '#servicios' },
                { label: 'Automatizaciones n8n', href: '#servicios' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} style={linkStyle} {...linkHover}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div className="space-y-4">
            <h4 className="font-cinzel text-xs font-bold tracking-widest" style={{ color: '#F7F7F7' }}>HERRAMIENTAS 4KM</h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => setQuoteOpen(true)}
                  style={linkStyle} {...linkHover}
                  className="transition-colors duration-200"
                >
                  Cotizador Inteligente IA
                </button>
              </li>
              <li>
                <button
                  onClick={() => setGameOpen(true)}
                  style={linkStyle} {...linkHover}
                  className="transition-colors duration-200"
                >
                  4KM Rewards (Acumular Puntos)
                </button>
              </li>
              <li>
                <a
                  href={OFFICIAL_SOCIALS.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  style={{ ...linkStyle, color: '#C8A44D', fontWeight: 700 }}
                  onMouseEnter={e => e.currentTarget.style.color = '#D4AF37'}
                  onMouseLeave={e => e.currentTarget.style.color = '#C8A44D'}
                >
                  WhatsApp: 994 253 131
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-cinzel text-xs font-bold tracking-widest" style={{ color: '#F7F7F7' }}>POLÍTICAS & LEGALES</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Política de Privacidad', type: 'privacy' },
                { label: 'Términos y Condiciones', type: 'terms' },
                { label: 'Política de Cookies', type: 'cookies' },
                { label: 'Tratamiento de Datos', type: 'gdpr' },
              ].map(({ label, type }) => (
                <li key={type}>
                  <button
                    onClick={() => openLegal(type)}
                    style={linkStyle} {...linkHover}
                    className="transition-colors duration-200"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Bottom Bar ── */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8"
          style={{ borderTop: '1px solid #1E1E1E' }}
        >
          <p style={{ color: '#444444', fontSize: '0.75rem' }}>
            © 2026 4KM Producciones. Todos los derechos reservados. WhatsApp: +51 994 253 131
          </p>
          <p style={{ color: '#333333', fontSize: '0.75rem' }}>
            Diseñado con estética cinematográfica · 4K Cinema Standard
          </p>
        </div>

      </div>
    </footer>
  );
};
