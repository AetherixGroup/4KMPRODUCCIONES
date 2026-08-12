import React from 'react';
import { useApp } from '../context/AppContext';
import { X, ShieldCheck, FileText, Lock, CheckCircle2 } from 'lucide-react';

export const LegalModal = () => {
  const { legalOpen, setLegalOpen, legalType } = useApp();

  if (!legalOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-[#0a0a0f] border border-yellow-500/30 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl relative max-h-[85vh] flex flex-col">
        
        {/* Header */}
        <div className="flex justify-between items-center pb-4 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-yellow-400" />
            <h3 className="font-cinzel text-xl font-bold text-white uppercase">
              {legalType === 'privacy' && 'POLÍTICA DE PRIVACIDAD'}
              {legalType === 'terms' && 'TÉRMINOS Y CONDICIONES'}
              {legalType === 'cookies' && 'POLÍTICA DE COOKIES'}
              {legalType === 'gdpr' && 'TRATAMIENTO DE DATOS PERSONALES'}
            </h3>
          </div>
          <button 
            onClick={() => setLegalOpen(false)}
            className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Text Body */}
        <div className="flex-1 overflow-y-auto space-y-4 text-xs text-slate-300 leading-relaxed pr-2">
          
          {legalType === 'privacy' && (
            <>
              <h4 className="font-bold text-yellow-300 text-sm">1. Declaración de Privacidad de 4KM PRODUCCIONES</h4>
              <p>
                En 4KM PRODUCCIONES respetamos plenamente la privacidad de nuestros clientes y usuarios de la aplicación móvil y plataforma web. Esta Política explica cómo recopilamos, usamos y protegemos los datos personales de acuerdo con la Ley de Protección de Datos Personales (Ley N° 29733) y el Reglamento General de Protección de Datos (GDPR).
              </p>
              <h4 className="font-bold text-yellow-300 text-sm">2. Información Recopilada</h4>
              <p>
                Recopilamos información únicamente cuando reservas un servicio, solicitas una cotización o compras en nuestro carrito. Los datos incluyen: Nombre completo, correo electrónico, número telefónico/WhatsApp, ubicación del evento y detalles del pedido.
              </p>
              <h4 className="font-bold text-yellow-300 text-sm">3. Uso de la Información e Integraciones Seguras</h4>
              <p>
                Los datos se procesan exclusivamente para gestionar tu reserva, generar la facturación, enviar notificaciones push del estado de tu evento y automatizar recordatorios vía n8n y CRM HubSpot. Ninguna clave de API ni dato sensible del cliente se almacena en el dispositivo móvil.
              </p>
            </>
          )}

          {legalType === 'terms' && (
            <>
              <h4 className="font-bold text-yellow-300 text-sm">1. Condiciones de Contratación de Servicios Audiovisuales</h4>
              <p>
                Al confirmar una reserva a través de la aplicación o web de 4KM PRODUCCIONES, el cliente acepta bloquear la fecha mediante el abono del porcentaje estipulado. Las entregas finales de video 4K/8K, fotografía editada y productos físicos (USB, Álbumes) se realizan en los plazos indicados en cada paquete.
              </p>
              <h4 className="font-bold text-yellow-300 text-sm">2. Operación de Drones 4K</h4>
              <p>
                La operación de aeronaves pilotadas a distancia (Drones) está sujeta a las condiciones climatológicas y a los permisos de vuelo de la DGAC/MTC. En caso de condiciones adversas extremas (lluvia torrencial, viento mayor a 35 km/h), el piloto priorizará la seguridad del espacio aéreo.
              </p>
            </>
          )}

          {legalType === 'cookies' && (
            <>
              <h4 className="font-bold text-yellow-300 text-sm">Política de Cookies & Tecnologías de Rastreo</h4>
              <p>
                Utilizamos cookies esenciales y píxeles de conversión (Meta Pixel & Google Analytics GA4) para optimizar la experiencia de navegación, recordar los productos agregados a tu carrito y analizar el rendimiento de nuestras campañas publicitarias.
              </p>
            </>
          )}

        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-800 flex justify-end shrink-0">
          <button 
            onClick={() => setLegalOpen(false)}
            className="btn-gold py-2 px-6 text-xs font-bold uppercase tracking-wider"
          >
            ENTENDIDO Y ACEPTAR
          </button>
        </div>

      </div>
    </div>
  );
};
