import React from 'react';
import { Clock, Calendar, AlertCircle, Phone, MapPin, Send, MessageSquare, Check, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menu';

interface HoursAndContactProps {
  onOpenChat: () => void;
}

export const HoursAndContact: React.FC<HoursAndContactProps> = ({ onOpenChat }) => {
  return (
    <>
      {/* 5. Horario de Atención (Destacado Visualmente) */}
      <section id="horario" className="py-20 bg-[#0B2545] relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#134074] via-[#0E325D] to-[#134074] rounded-3xl p-8 sm:p-12 border-2 border-cyan-500/50 shadow-2xl shadow-cyan-950/80">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-400/20 text-cyan-200 text-xs font-bold uppercase tracking-wider mb-4 border border-cyan-400/40">
                <Clock className="w-4 h-4 text-cyan-300" /> Horario Oficial de Atención
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight">
                Frescura en el Horario Perfecto
              </h2>
              <p className="mt-3 text-cyan-100 text-sm sm:text-base max-w-xl mx-auto">
                Cuidamos la frescura marina atendiendo exclusivamente durante las horas pico de pesca y almuerzo.
              </p>
            </div>

            {/* Time Grid Display */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {/* Martes a Domingo */}
              <div className="bg-[#0B2545]/90 rounded-2xl p-6 border border-cyan-400/30 flex flex-col justify-between">
                <div>
                  <div className="text-xs uppercase font-extrabold text-[#00A896] tracking-wider mb-1">
                    Días Operativos
                  </div>
                  <div className="font-heading text-2xl font-bold text-white mb-2">
                    Martes a Domingo
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-cyan-300 my-2">
                    11:30 a.m. – 5:00 p.m.
                  </div>
                </div>
                <div className="text-[11px] text-slate-300 bg-[#134074]/60 py-1.5 px-2 rounded-lg mt-3">
                  Salón, recojo en local y delivery
                </div>
              </div>

              {/* Corte de Cocina / Comanda */}
              <div className="bg-[#0B2545]/90 rounded-2xl p-6 border border-amber-400/40 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-2 right-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping inline-block" />
                </div>
                <div>
                  <div className="text-xs uppercase font-extrabold text-amber-300 tracking-wider mb-1">
                    Último Pedido
                  </div>
                  <div className="font-heading text-2xl font-bold text-white mb-2">
                    Cierre de Comanda
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-amber-300 my-2">
                    4:30 p.m.
                  </div>
                </div>
                <div className="text-[11px] text-amber-100/90 bg-amber-950/60 py-1.5 px-2 rounded-lg mt-3 border border-amber-800/60">
                  La cocina cierra para garantizar platos impecables
                </div>
              </div>

              {/* Lunes Cerrado */}
              <div className="bg-[#0B2545]/90 rounded-2xl p-6 border border-slate-700 flex flex-col justify-between opacity-95">
                <div>
                  <div className="text-xs uppercase font-extrabold text-slate-400 tracking-wider mb-1">
                    Día de Cierre
                  </div>
                  <div className="font-heading text-2xl font-bold text-slate-200 mb-2">
                    Lunes
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-rose-400 my-2">
                    Cerrado
                  </div>
                </div>
                <div className="text-[11px] text-slate-400 bg-slate-900/80 py-1.5 px-2 rounded-lg mt-3">
                  Descanso de tripulación y abastecimiento fresco
                </div>
              </div>
            </div>

            {/* Note badge */}
            <div className="mt-8 text-center text-xs text-cyan-200 flex items-center justify-center gap-2">
              <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>¿Escribes fuera de horario? Nuestro Asistente Virtual responderá tus dudas las 24 horas y coordinará tu pedido para las 11:30 a.m.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Contacto & Enlace Directo WhatsApp */}
      <section id="contacto" className="py-20 bg-[#07192f] relative border-t border-cyan-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0B2545] to-[#134074] rounded-3xl p-8 sm:p-14 border border-cyan-800/80 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A896]/20 text-[#00A896] text-xs font-bold uppercase tracking-wider mb-3">
                  <span>🌊</span> Contacto Directo
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                  ¿Listo para disfrutar el auténtico sabor del mar?
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Estamos al otro lado para resolver cualquier duda, sugerirte la pesca del día o agilizar tu pedido de ceviches, tríos y parihuelas.
                </p>

                <div className="space-y-3 mb-8 text-sm text-cyan-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#134074] flex items-center justify-center text-[#00A896]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-slate-400 text-xs block">Línea &amp; WhatsApp Oficial:</span>
                      <strong className="text-white text-base">971 281 473</strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#134074] flex items-center justify-center text-[#00A896]">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-slate-400 text-xs block">Horario de comanda:</span>
                      <span className="text-white font-medium">Martes a Domingo de 11:30 a.m. a 4:30 p.m. (local hasta las 5:00 p.m.)</span>
                    </div>
                  </div>
                </div>

                {/* Direct WhatsApp Button */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href="https://wa.me/51971281473"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-base transition-all shadow-xl shadow-emerald-950/50 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    <Phone className="w-5 h-5 fill-current" />
                    <span>Escríbenos por WhatsApp</span>
                  </a>

                  <button
                    onClick={onOpenChat}
                    className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#134074] hover:bg-[#1f599b] text-cyan-200 hover:text-white font-semibold text-sm border border-cyan-700/60 transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-[#00A896]" />
                    <span>Abrir Asistente IA</span>
                  </button>
                </div>
              </div>

              {/* Decorative Restaurant Badge Card */}
              <div className="bg-[#0B2545]/90 rounded-2xl p-6 sm:p-8 border border-cyan-800/80 shadow-inner">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#00A896] to-cyan-400 flex items-center justify-center text-2xl shadow-md">
                    🐟
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white">YAR'S</h3>
                    <p className="text-xs text-cyan-300">Marisquería &amp; Cevichería</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs text-slate-300">
                  <div className="p-3 rounded-xl bg-[#134074]/40 border border-cyan-900/60">
                    <strong className="text-white block mb-0.5">Pesca con garantía:</strong>
                    Trozos de pescado fresco seleccionado en horas de la madrugada para garantizar la textura firme y sabor original.
                  </div>
                  <div className="p-3 rounded-xl bg-[#134074]/40 border border-cyan-900/60">
                    <strong className="text-white block mb-0.5">Punto exacto de ají:</strong>
                    Elige entre sin picante, picante medio o bien picante al gusto peruano tradicional.
                  </div>
                  <div className="p-3 rounded-xl bg-[#134074]/40 border border-cyan-900/60">
                    <strong className="text-white block mb-0.5">Confirmación transparente:</strong>
                    Cero cargos ocultos. El equipo humano te confirma el total exacto con boleta antes del envío.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
