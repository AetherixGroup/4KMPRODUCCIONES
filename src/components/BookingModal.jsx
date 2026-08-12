import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CONTACT_PHONE, sendToN8N } from '../config/siteConfig';
import { X, Calendar, Clock, MapPin, CheckCircle2, Send } from 'lucide-react';

export const BookingModal = () => {
  const { bookingOpen, setBookingOpen, selectedBookingItem, createBooking } = useApp();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: selectedBookingItem ? selectedBookingItem.name : 'Boda Standard',
    date: '',
    time: '15:00',
    location: 'Miraflores, Lima',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!bookingOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) {
      alert("Por favor completa tu Nombre, Teléfono y Fecha de Reserva.");
      return;
    }

    createBooking({
      clientName: formData.name,
      date: formData.date,
      time: formData.time,
      event: formData.eventType,
      location: formData.location,
      notes: formData.notes
    });

    sendToN8N({
      type: 'booking',
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      eventType: formData.eventType,
      date: formData.date,
      time: formData.time,
      location: formData.location,
      notes: formData.notes
    });

    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-[#0a0a0f] border border-yellow-500/30 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl relative overflow-hidden">
        
        {/* Header */}
        <div className="flex justify-between items-center pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6 text-yellow-400" />
            <h3 className="font-cinzel text-xl font-bold text-white">Agenda tu Fecha - 4KM</h3>
          </div>
          <button 
            onClick={() => { setBookingOpen(false); setSubmitted(false); }}
            className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-yellow-500/20 text-yellow-400 flex items-center justify-center mx-auto border border-yellow-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-cinzel text-2xl font-bold text-white">¡RESERVA AGENDADA CON ÉXITO!</h4>
            <p className="text-sm text-slate-300">
              Gracias <span className="text-yellow-300 font-bold">{formData.name}</span>. Hemos bloqueado preliminarmente el <span className="text-yellow-300 font-bold">{formData.date}</span> para tu evento: {formData.eventType}.
            </p>
            <p className="text-xs text-slate-400">
              Un productor de 4KM PRODUCCIONES se comunicará a tu teléfono ({formData.phone}) o desde nuestro WhatsApp ({CONTACT_PHONE}) en menos de 15 minutos para ultimar detalles.
            </p>

            <button 
              onClick={() => { setBookingOpen(false); setSubmitted(false); }}
              className="btn-gold py-3 px-8 text-xs font-bold uppercase tracking-wider mt-4"
            >
              ENTENDIDO
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs text-slate-300 font-semibold">Nombre Completo *</label>
                <input 
                  type="text"
                  required
                  placeholder="Ej: Laura Ramírez"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="glass-input w-full text-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-slate-300 font-semibold">Teléfono / WhatsApp *</label>
                <input 
                  type="tel"
                  required
                  placeholder="Ej: 924130007"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="glass-input w-full text-xs"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-300 font-semibold">Servicio o Paquete *</label>
              <select 
                value={formData.eventType}
                onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                className="glass-input w-full text-xs bg-slate-900 text-white"
              >
                <option value="Boda Básico">Boda Básico</option>
                <option value="Boda Standard">Boda Standard</option>
                <option value="Boda Premium VIP">Boda Premium VIP</option>
                <option value="Corporativo Standard">Corporativo Standard</option>
                <option value="15 Años Standard">15 Años Standard</option>
                <option value="Drone 4K Fotografía & Video">Drone 4K Fotografía & Video</option>
                <option value="Marketing Standard Pro">Marketing Standard Pro</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs text-slate-300 font-semibold flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-yellow-400" /> Fecha del Evento *
                </label>
                <input 
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="glass-input w-full text-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-slate-300 font-semibold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-yellow-400" /> Hora Inicio
                </label>
                <input 
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="glass-input w-full text-xs"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-300 font-semibold flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-yellow-400" /> Ubicación del Evento
              </label>
              <input 
                type="text"
                placeholder="Ej: Hacienda Mamacona, Lurín / Local Miraflores"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="glass-input w-full text-xs"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-300 font-semibold">Observaciones / Requerimientos Especiales</label>
              <textarea 
                rows="3"
                placeholder="Ej: Deseo tomas adicionales en la playa..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="glass-input w-full text-xs"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full btn-gold py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 mt-4"
            >
              <Send className="w-4 h-4" />
              <span>CONFIRMAR Y BLOQUEAR FECHA</span>
            </button>

          </form>
        )}

      </div>
    </div>
  );
};
