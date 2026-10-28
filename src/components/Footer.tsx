import React from 'react';
import { Phone, MessageSquare, Heart, Shield, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menu';

interface FooterProps {
  onOpenChat: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenChat }) => {
  return (
    <footer className="bg-[#051324] text-slate-400 text-xs border-t border-cyan-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-2xl">🐟</span>
              <span className="font-heading font-extrabold text-xl text-white tracking-wider">
                YAR'S
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
                Marisquería &amp; Cevichería
              </span>
            </div>
            <p className="text-slate-300 text-sm max-w-md mb-4 leading-relaxed">
              “El auténtico sabor del mar, fresco en tu mesa”. Especialistas en ceviches de pesca del día, combinados generosos, tríos marinos y parihuelas al punto.
            </p>
            <div className="flex items-center gap-2 text-slate-400">
              <Shield className="w-4 h-4 text-[#00A896]" />
              <span>Privacidad: No almacenamos datos sensibles ni bancarios.</span>
            </div>
          </div>

          {/* Horarios */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-3">
              Horario de Atención
            </h4>
            <ul className="space-y-1.5 text-slate-300">
              <li className="flex items-center gap-2 text-cyan-200">
                <Clock className="w-3.5 h-3.5 text-[#00A896]" />
                <span className="font-medium">Martes a Domingo:</span>
              </li>
              <li className="pl-5 text-white font-semibold">11:30 a.m. a 5:00 p.m.</li>
              <li className="pl-5 text-amber-300 text-[11px]">Último pedido a cocina: 4:30 p.m.</li>
              <li className="pt-2 text-rose-300">
                <strong className="text-rose-400">Lunes:</strong> Cerrado por descanso y abastecimiento fresco.
              </li>
            </ul>
          </div>

          {/* Canales Oficiales */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-3">
              Canales Oficiales
            </h4>
            <div className="space-y-2.5">
              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <div className="w-6 h-6 rounded bg-[#134074] flex items-center justify-center text-emerald-400">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>WhatsApp: 971 281 473</span>
              </a>

              <button
                onClick={onOpenChat}
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors cursor-pointer text-left"
              >
                <div className="w-6 h-6 rounded bg-[#134074] flex items-center justify-center text-cyan-300">
                  <MessageSquare className="w-3.5 h-3.5" />
                </div>
                <span>Asistente Virtual con IA</span>
              </button>

              <div className="pt-2 text-[11px] text-slate-400">
                Modalidades: Salón, Recojo en local y Delivery.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-cyan-950 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} YAR'S Marisquería &amp; Cevichería. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-2">
            <span>Diseñado con pasión marina y asistido por Gemini AI</span>
            <span>🐟</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
