import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CONTACT_PHONE, WHATSAPP_LINK, sendToN8N } from '../config/siteConfig';
import { X, Calculator, Download, Send, Sparkles, Camera, Video } from 'lucide-react';

export const QuoteCalculatorModal = () => {
  const { quoteOpen, setQuoteOpen, addToCart } = useApp();

  const [serviceCategory, setServiceCategory] = useState('boda');
  const [hours, setHours] = useState(6);
  const [cameras, setCameras] = useState(2);
  const [droneIncluded, setDroneIncluded] = useState(true);
  const [photosCount, setPhotosCount] = useState(200);
  const [albumIncluded, setAlbumIncluded] = useState(false);
  const [reelsIncluded, setReelsIncluded] = useState(true);

  if (!quoteOpen) return null;

  // Dynamic Quote Pricing Calculation
  const basePrice = serviceCategory === 'boda' ? 1200 : serviceCategory === 'corp' ? 1000 : 800;
  const hoursCost = (hours - 4) > 0 ? (hours - 4) * 150 : 0;
  const cameraCost = (cameras - 1) * 300;
  const droneCost = droneIncluded ? 350 : 0;
  const albumCost = albumIncluded ? 400 : 0;
  const reelsCost = reelsIncluded ? 200 : 0;

  const estimatedTotal = basePrice + hoursCost + cameraCost + droneCost + albumCost + reelsCost;

  const handleDownloadPDF = () => {
    alert("Iniciando descarga de Cotización Oficial 4KM PRODUCCIONES (PDF generado con desglose de servicios).");
  };

  const handleWhatsAppSend = () => {
    const msg = `*COTIZACIÓN IA 4KM PRODUCCIONES*%0A` +
      `*Categoría:* ${serviceCategory.toUpperCase()}%0A` +
      `*Horas:* ${hours} Horas%0A` +
      `*Cámaras:* ${cameras} Cámaras 4K%0A` +
      `*Drone 4K:* ${droneIncluded ? 'Sí' : 'No'}%0A` +
      `*Álbum Fine Art:* ${albumIncluded ? 'Sí' : 'No'}%0A` +
      `*Reels TikTok:* ${reelsIncluded ? 'Sí' : 'No'}%0A` +
      `*PRESUPUESTO ESTIMADO:* S/ ${estimatedTotal.toFixed(2)}`;

    sendToN8N({
      type: 'quote',
      serviceCategory,
      hours,
      cameras,
      droneIncluded,
      albumIncluded,
      reelsIncluded,
      estimatedTotal
    });

    window.open(`${WHATSAPP_LINK}?text=${msg}`, '_blank');
  };

  const handleAddToCartQuote = () => {
    addToCart({
      id: `quote-${Date.now()}`,
      name: `Cotización Personalizada ${serviceCategory.toUpperCase()} (${hours}h)`,
      price: estimatedTotal,
      quantity: 1
    });
    setQuoteOpen(false);
  };

  return (
    <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-[#0a0a0f] border border-yellow-500/30 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl relative overflow-hidden">
        
        {/* Header */}
        <div className="flex justify-between items-center pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <Calculator className="w-6 h-6 text-yellow-400" />
            <h3 className="font-cinzel text-xl font-bold text-white">Cotizador Inteligente IA 4KM</h3>
          </div>
          <button 
            onClick={() => setQuoteOpen(false)}
            className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Calculator Inputs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs text-slate-300 font-semibold">Tipo de Evento / Proyecto</label>
              <select 
                value={serviceCategory}
                onChange={(e) => setServiceCategory(e.target.value)}
                className="glass-input w-full text-xs bg-slate-900 text-white"
              >
                <option value="boda">Boda Cinematográfica</option>
                <option value="corp">Evento Corporativo</option>
                <option value="15anos">Fiesta de 15 Años</option>
                <option value="promo">Promoción Escolar</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-300 font-semibold flex justify-between">
                <span>Horas de Cobertura:</span>
                <span className="text-yellow-400 font-bold">{hours} Horas</span>
              </label>
              <input 
                type="range" 
                min="3" 
                max="14" 
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full accent-yellow-400 cursor-pointer"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-300 font-semibold flex justify-between">
                <span>Cámaras en Vivo:</span>
                <span className="text-yellow-400 font-bold">{cameras} Cámaras 4K</span>
              </label>
              <input 
                type="range" 
                min="1" 
                max="4" 
                value={cameras}
                onChange={(e) => setCameras(Number(e.target.value))}
                className="w-full accent-yellow-400 cursor-pointer"
              />
            </div>
          </div>

          <div className="space-y-3 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">Servicios Adicionales</span>
            
            <label className="flex items-center justify-between text-xs text-slate-200 cursor-pointer">
              <span className="flex items-center gap-2">
                <Video className="w-4 h-4 text-yellow-400" /> Drone 4K Aéreo (+S/ 350)
              </span>
              <input 
                type="checkbox" 
                checked={droneIncluded}
                onChange={(e) => setDroneIncluded(e.target.checked)}
                className="accent-yellow-400 w-4 h-4"
              />
            </label>

            <label className="flex items-center justify-between text-xs text-slate-200 cursor-pointer">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-400" /> Álbum Impreso Fine Art (+S/ 400)
              </span>
              <input 
                type="checkbox" 
                checked={albumIncluded}
                onChange={(e) => setAlbumIncluded(e.target.checked)}
                className="accent-yellow-400 w-4 h-4"
              />
            </label>

            <label className="flex items-center justify-between text-xs text-slate-200 cursor-pointer">
              <span className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-yellow-400" /> 3 Reels TikTok/Instagram (+S/ 200)
              </span>
              <input 
                type="checkbox" 
                checked={reelsIncluded}
                onChange={(e) => setReelsIncluded(e.target.checked)}
                className="accent-yellow-400 w-4 h-4"
              />
            </label>
          </div>

        </div>

        {/* Result Summary Box */}
        <div className="p-4 rounded-2xl bg-yellow-500/10 border border-yellow-500/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-widest block">Presupuesto Estimado</span>
            <div className="text-3xl font-extrabold text-gold-gradient">
              S/ {estimatedTotal.toFixed(2)}
            </div>
            <span className="text-[10px] text-slate-400">Sujeto a confirmación por el equipo técnico de 4KM.</span>
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <button 
              onClick={handleDownloadPDF}
              className="btn-outline-gold py-2.5 px-4 text-xs font-bold flex items-center gap-1.5"
            >
              <Download className="w-4 h-4" /> PDF
            </button>

            <button 
              onClick={handleWhatsAppSend}
              className="btn-gold py-2.5 px-4 text-xs font-bold flex items-center gap-1.5"
            >
              <Send className="w-4 h-4" /> WHATSAPP ({CONTACT_PHONE})
            </button>
          </div>
        </div>

        <button 
          onClick={handleAddToCartQuote}
          className="w-full btn-gold py-3 text-xs font-bold uppercase tracking-wider"
        >
          CONVERTIR EN PEDIDO EN EL CARRITO
        </button>

      </div>
    </div>
  );
};
