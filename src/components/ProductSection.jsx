import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Sparkles,
  Camera,
  Frame,
  Image,
  Gift,
  Star,
  ShoppingBag,
  Package,
  Palette,
  BadgeCheck,
} from 'lucide-react';

const PRODUCT_CATEGORIES = [
  {
    id: 'fotograficos',
    icon: Camera,
    title: 'Productos Fotográficos',
    description: 'Fotografía profesional 8K, retratos de estudio, sets temáticos y sesiones personalizadas.',
    image: './img/hero.jpg',
    badge: 'FOTOGRAFÍA 8K',
  },
  {
    id: 'impresiones',
    icon: Image,
    title: 'Impresiones Fine Art',
    description: 'Impresiones de alta calidad en diversos formatos, para álbumes, portafolios y decoración.',
    image: './img/mockup.jpg',
    badge: 'IMPRESIÓN PRO',
  },
  {
    id: 'cuadros',
    icon: Frame,
    title: 'Cuadros Personalizados',
    description: 'Lienzos canvas y cuadros por pedido que convierten tus recuerdos en piezas de arte.',
    image: './img/drone.jpg',
    badge: 'ARTE & RECUERDO',
  },
  {
    id: 'enmarcados',
    icon: Frame,
    title: 'Enmarcados a Medida',
    description: 'Diferentes tipos de enmarcado para fotos y obras, con acabados premium y protección UV.',
    image: './img/hero.jpg',
    badge: 'ACABADOS PREMIUM',
  },
  {
    id: 'recuerdos',
    icon: Gift,
    title: 'Recuerdos Personalizados',
    description: 'Regalos y souvenirs memorables para eventos, corporativos y ocasiones especiales.',
    image: './img/drone.jpg',
    badge: 'REGALO MEMORABLE',
  },
  {
    id: 'bajo-pedido',
    icon: Package,
    title: 'Productos Bajo Pedido',
    description: 'Productos personalizados y por encargo relacionados con fotografía y audiovisual.',
    image: './img/mockup.jpg',
    badge: 'ENCARGO',
  },
];

const FRAMING_ITEMS = [
  {
    icon: Frame,
    title: 'Cuadros por Pedido',
    description: 'Lienzos canvas y cuadros personalizados con tus mejores fotografías.',
  },
  {
    icon: Palette,
    title: 'Enmarcados Personalizados',
    description: 'Varios tipos de molduras, paspartús y acabados para cada estilo.',
  },
  {
    icon: Gift,
    title: 'Recuerdos Memorables',
    description: 'Regalos y piezas significativas para bodas, eventos y empresas.',
  },
  {
    icon: Image,
    title: 'Otros Productos Personalizados',
    description: 'Artículos personalizados relacionados con fotografía y audiovisual.',
  },
];

export const ProductSection = () => {
  const { addToCart, openBookingWithItem, setQuoteOpen } = useApp();

  const handleProductCta = (prod) => {
    const item = {
      id: `product-${prod.id}`,
      name: prod.title,
      price: 0,
      type: 'producto',
      description: prod.description,
    };
    openBookingWithItem(item);
    addToCart(item);
  };

  return (
    <>
      {/* ══════════════ PRODUCTOS ══════════════ */}
      <section id="productos" className="section-pad relative overflow-hidden" style={{ background: '#0A0A0A' }}>
        <div className="container-xl space-y-16">
          <div className="section-intro">
            <div className="badge-gold inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
              <Package className="w-3.5 h-3.5" />
              <span>Productos 4KM</span>
            </div>
            <h2 className="type-heading font-cinzel text-3xl sm:text-4xl font-bold text-white mt-4">
              PRODUCTOS <span className="text-gold-gradient">RELACIONADOS</span>
            </h2>
            <div className="divider-gold" />
            <p className="subtitle mt-4">
              Fotografía, cuadros, impresiones, enmarcados y recuerdos personalizados. Piezas bajo pedido que complementan tu experiencia 4KM.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCT_CATEGORIES.map((prod) => {
              const Icon = prod.icon;
              return (
                <article
                  key={prod.id}
                  className="flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 group"
                  style={{
                    background: '#141418',
                    border: '1px solid rgba(255,255,255,0.06)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                  }}
                >
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-black/40">
                    <img
                      src={prod.image}
                      alt={prod.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                      onError={(e) => { e.currentTarget.src = './img/hero.jpg'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141418] via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[rgba(200,164,77,0.3)] text-[0.6rem] font-bold text-[#E8C96A] tracking-wider">
                      {prod.badge}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-[rgba(200,164,77,0.12)] border border-[rgba(200,164,77,0.25)] flex items-center justify-center">
                          <Icon className="w-4 h-4 text-[#C8A44D]" />
                        </div>
                        <h3 className="font-cinzel text-lg font-bold text-white">{prod.title}</h3>
                      </div>
                      <p className="text-xs text-[#A0A0A8] leading-relaxed font-light">
                        {prod.description}
                      </p>
                    </div>
                    <button
                      onClick={() => handleProductCta(prod)}
                      className="btn-gold w-full mt-6 py-3 text-xs"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" /> SOLICITAR PRODUCTO
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════ ENMARCADO & RECUERDOS PERSONALIZADOS ══════════════ */}
      <section
        id="enmarcado"
        className="section-pad relative overflow-hidden"
        style={{ background: '#0D0D10', borderTop: '1px solid #1A1A1A' }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none" style={{ width: '600px', height: '300px', background: 'radial-gradient(ellipse, rgba(200,164,77,0.07) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="container-xl relative z-10 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="badge-gold inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
              <BadgeCheck className="w-3.5 h-3.5" />
              <span>Línea Comercial Adicional</span>
            </div>
            <h2 className="type-heading font-cinzel text-3xl sm:text-4xl font-bold text-white">
              ENMARCADO Y RECUERDOS <span className="text-gold-gradient">PERSONALIZADOS</span>
            </h2>
            <div className="divider-gold" />
            <p className="subtitle mt-4">
              Una línea comercial adicional de 4KM Producciones dedicada a convertir tus momentos en piezas que perduran. Cuadros por pedido, enmarcados personalizados, recuerdos memorables y productos personalizados relacionados con la fotografía.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FRAMING_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="flex items-start gap-5 p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: '#141418',
                    border: '1px solid rgba(200,164,77,0.22)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                  }}
                >
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-[rgba(200,164,77,0.12)] border border-[rgba(200,164,77,0.3)] flex items-center justify-center">
                    <Icon className="w-7 h-7 text-[#C8A44D]" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="font-cinzel text-lg font-bold text-white flex items-center gap-2">
                      {item.title}
                      <Star className="w-4 h-4 text-[#C8A44D] fill-current" />
                    </h3>
                    <p className="text-xs text-[#A0A0A8] leading-relaxed font-light">{item.description}</p>
                    <button
                      onClick={() => setQuoteOpen(true)}
                      className="mt-3 inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#C8A44D] hover:text-[#E8C96A] transition-colors"
                    >
                      <Sparkles className="w-3.5 h-3.5" /> SOLICITAR COTIZACIÓN
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="text-center pt-2">
            <p className="text-xs text-[#666672] font-light">
              Todos nuestros productos personalizados se entregan bajo pedido con los más altos estándares de acabado. Contacta a 4KM Producciones para cotizar tu pieza ideal.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
