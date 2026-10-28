import React from 'react';
import { MessageSquare, ArrowDown, Sparkles, Clock, Utensils, ShieldCheck, HeartHandshake } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menu';

interface HeroProps {
  onOpenChat: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenChat }) => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Ambience with Marine Gradient & Wave Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B2545] via-[#134074]/60 to-[#0B2545] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-br from-[#00A896]/15 via-cyan-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Ocean Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#134074_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Dynamic Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#134074]/80 border border-cyan-400/30 text-cyan-100 text-xs sm:text-sm font-medium shadow-lg backdrop-blur-md mb-6 animate-pulse-slow">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
            </span>
            <span className="font-semibold text-emerald-300">Abierto hoy hasta las 5:00 PM</span>
            <span className="text-slate-400">|</span>
            <span className="text-cyan-200">Cierre comanda: 4:30 PM</span>
          </div>

          {/* Restaurant Name */}
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-none mb-6">
            YAR'S
            <span className="block text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-cyan-300 via-teal-200 to-[#00A896] bg-clip-text text-transparent mt-2">
              Marisquería &amp; Cevichería
            </span>
          </h1>

          {/* Warm Marine Welcome Phrase */}
          <p className="text-lg sm:text-2xl text-slate-200 font-light max-w-2xl mx-auto leading-relaxed mb-8">
            “El auténtico sabor del mar, <span className="font-semibold text-white">fresco en tu mesa</span>”
          </p>

          <p className="text-sm sm:text-base text-cyan-100/80 max-w-xl mx-auto mb-10 leading-relaxed">
            Pescados del día seleccionados al alba, ceviches preparados al momento, generosos Dúos y Tríos Marinos y la más contundente Parihuela Especial.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            {/* Prominent Asistente Virtual Button */}
            <button
              onClick={onOpenChat}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00A896] to-[#028090] text-white font-bold text-base shadow-xl shadow-teal-900/50 hover:shadow-teal-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all border border-teal-300/30 group cursor-pointer"
            >
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-12 transition-transform">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              </div>
              <span>Habla con nuestro asistente</span>
            </button>

            {/* Menu Anchor Button */}
            <a
              href="#carta"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#134074]/70 hover:bg-[#134074] text-slate-100 font-semibold text-base border border-cyan-700/50 hover:border-cyan-400 transition-all shadow-md hover:scale-[1.01]"
            >
              <Utensils className="w-4 h-4 text-cyan-300" />
              <span>Ver Carta Marina</span>
            </a>
          </div>

          {/* Feature Badges */}
          <div className="mt-14 pt-8 border-t border-cyan-900/50 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="bg-[#134074]/30 backdrop-blur-sm p-4 rounded-xl border border-cyan-800/40">
              <div className="text-2xl mb-1">🐟</div>
              <div className="font-semibold text-white text-sm">Pesca Fresca Diaria</div>
              <div className="text-xs text-slate-300 mt-0.5">Directo del puerto sin conservantes</div>
            </div>
            <div className="bg-[#134074]/30 backdrop-blur-sm p-4 rounded-xl border border-cyan-800/40">
              <div className="text-2xl mb-1">🍋</div>
              <div className="font-semibold text-white text-sm">Limón Norteño al Instante</div>
              <div className="text-xs text-slate-300 mt-0.5">Exprimido en el momento</div>
            </div>
            <div className="bg-[#134074]/30 backdrop-blur-sm p-4 rounded-xl border border-cyan-800/40">
              <div className="text-2xl mb-1">🛵</div>
              <div className="font-semibold text-white text-sm">Salón &amp; Delivery</div>
              <div className="text-xs text-slate-300 mt-0.5">Empaque térmico y cuidado</div>
            </div>
            <div className="bg-[#134074]/30 backdrop-blur-sm p-4 rounded-xl border border-cyan-800/40">
              <div className="text-2xl mb-1">💬</div>
              <div className="font-semibold text-white text-sm">Atención Personalizada</div>
              <div className="text-xs text-slate-300 mt-0.5">WhatsApp directo al 971 281 473</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
