import React from 'react';
import { Star, Flame, Check, MessageSquare, Phone, ChevronRight } from 'lucide-react';
import { MENU_ITEMS, RESTAURANT_INFO } from '../data/menu';

interface SpecialtiesProps {
  onAskAboutDish: (dishName: string) => void;
}

export const Specialties: React.FC<SpecialtiesProps> = ({ onAskAboutDish }) => {
  // Filter for the 3 requested specialties: Duo Marino, Trio Marino YAR'S, Parihuela Especial
  const specialties = MENU_ITEMS.filter(item =>
    item.id === 'trio-marino-yars' ||
    item.id === 'duo-marino' ||
    item.id === 'parihuela-especial'
  );

  return (
    <section id="especialidades" className="py-20 bg-[#07192f] relative overflow-hidden">
      {/* Decorative Wave Accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A896]/15 border border-[#00A896]/40 text-[#00A896] text-xs font-semibold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-current" /> Platos Estrella
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Especialidades &amp; Combinados
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Las creaciones más aclamadas de nuestro salón. Porciones generosas preparadas al instante con la mayor frescura del litoral.
          </p>
        </div>

        {/* 3 Featured Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((dish) => {
            const isCrownJewel = dish.id === 'trio-marino-yars';
            return (
              <div
                key={dish.id}
                className={`relative rounded-2xl bg-gradient-to-b from-[#134074]/90 to-[#0B2545] border transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1.5 shadow-xl ${
                  isCrownJewel
                    ? 'border-cyan-400/70 ring-2 ring-cyan-400/20 shadow-cyan-950/60'
                    : 'border-cyan-900/60 hover:border-cyan-500/50 shadow-slate-950/40'
                }`}
              >
                {/* Photo Header */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] via-transparent to-black/30" />

                  {/* "Favorito del salón" Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-400 text-slate-950 text-xs font-extrabold shadow-lg uppercase tracking-wide">
                      <Star className="w-3 h-3 fill-slate-950" />
                      Favorito del salón
                    </span>
                  </div>

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-4 right-4 bg-[#0B2545]/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-cyan-400/40 shadow-lg text-right">
                    <span className="text-[11px] text-cyan-200 block uppercase tracking-wider font-semibold">Precio</span>
                    <span className="font-heading text-2xl font-black text-white">
                      S/ {dish.price.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2.5 group-hover:text-cyan-200 transition-colors">
                      {dish.name}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-5">
                      {dish.description}
                    </p>

                    {/* Highlights bullet points */}
                    <div className="space-y-2 mb-6 pt-2 border-t border-cyan-900/60 text-xs text-cyan-100">
                      {dish.id === 'trio-marino-yars' && (
                        <>
                          <div className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full bg-[#00A896]/20 text-[#00A896] flex items-center justify-center font-bold">✓</span>
                            <span>Ceviche clásico de pesca del día con leche de tigre</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full bg-[#00A896]/20 text-[#00A896] flex items-center justify-center font-bold">✓</span>
                            <span>Arroz con mariscos criollo salteado al wok</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full bg-[#00A896]/20 text-[#00A896] flex items-center justify-center font-bold">✓</span>
                            <span>Chicharrón de pescado crocante con tártara casera</span>
                          </div>
                        </>
                      )}
                      {dish.id === 'duo-marino' && (
                        <>
                          <div className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full bg-[#00A896]/20 text-[#00A896] flex items-center justify-center font-bold">✓</span>
                            <span>Ceviche fresco de pesca del día al limón norteño</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full bg-[#00A896]/20 text-[#00A896] flex items-center justify-center font-bold">✓</span>
                            <span>A elegir: Arroz con mariscos criollo o Chicharrón</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full bg-[#00A896]/20 text-[#00A896] flex items-center justify-center font-bold">✓</span>
                            <span>Acompañado con camote glaseado y canchita chulpi</span>
                          </div>
                        </>
                      )}
                      {dish.id === 'parihuela-especial' && (
                        <>
                          <div className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full bg-[#00A896]/20 text-[#00A896] flex items-center justify-center font-bold">✓</span>
                            <span>Pescado entero fresco y concentrado marinero</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full bg-[#00A896]/20 text-[#00A896] flex items-center justify-center font-bold">✓</span>
                            <span>Mixtura de mariscos, cangrejo y conchas en su punto</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full bg-[#00A896]/20 text-[#00A896] flex items-center justify-center font-bold">✓</span>
                            <span>Sustancioso toque de chicha de jora y yuyo costeño</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-cyan-900/60 flex items-center gap-2.5">
                    <button
                      onClick={() => onAskAboutDish(`Quiero consultar sobre el ${dish.name}`)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-[#134074] hover:bg-[#1f599b] text-cyan-200 hover:text-white text-xs font-semibold border border-cyan-700/60 transition-all flex items-center justify-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#00A896]" />
                      <span>Consultar con IA</span>
                    </button>
                    <a
                      href={`${RESTAURANT_INFO.whatsappUrl}?text=${encodeURIComponent(`¡Hola! Quisiera ordenar el plato especial: ${dish.name} (S/ ${dish.price.toFixed(2)})`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="py-2.5 px-4 rounded-xl bg-[#00A896] hover:bg-[#028090] text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1"
                    >
                      <span>Pedir</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
