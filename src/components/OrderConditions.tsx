import React from 'react';
import { Truck, Store, UtensilsCrossed, Clock, CheckCircle2, ShieldAlert, CreditCard, Banknote, Smartphone, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menu';

export const OrderConditions: React.FC = () => {
  return (
    <section id="delivery" className="py-20 bg-[#07192f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/40 border border-cyan-700/60 text-cyan-200 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>🛵</span> Modalidades y Políticas
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Condiciones de Pedido &amp; Delivery
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Te explicamos cómo disfrutar de la frescura marina de YAR'S con la mayor rapidez, calidad y seguridad alimentaria.
          </p>
        </div>

        {/* 3 Modalities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Modalidad Salón */}
          <div className="bg-[#0B2545]/90 border border-cyan-900/70 rounded-2xl p-6 relative overflow-hidden shadow-lg hover:border-cyan-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#134074] text-[#00A896] flex items-center justify-center mb-5 text-2xl shadow-inner">
              <UtensilsCrossed className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-white mb-2">1. Atención en Salón</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Disfruta tus platos recién salidos de la barra y del wok en nuestro ambiente marino climatizado y acogedor.
            </p>
            <ul className="space-y-2 text-xs text-cyan-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Mesas por orden de llegada y reservas anticipadas.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Tiempo promedio de servicio: 15 a 20 minutos.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Todos los medios de pago aceptados al instante.</span>
              </li>
            </ul>
          </div>

          {/* Modalidad Recojo en Local */}
          <div className="bg-[#0B2545]/90 border border-cyan-900/70 rounded-2xl p-6 relative overflow-hidden shadow-lg hover:border-cyan-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#134074] text-cyan-300 flex items-center justify-center mb-5 text-2xl shadow-inner">
              <Store className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-white mb-2">2. Recojo en Local</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Haz tu comanda con anticipación por WhatsApp o asistente virtual y pasa a recogerla sin esperar colas.
            </p>
            <ul className="space-y-2 text-xs text-cyan-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Tiempo de empaque: 20 a 30 minutos desde la confirmación.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Tolerancia de recojo: 15 minutos para preservar el frío del ceviche.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Empaque hermético y separado para salsas y guarniciones.</span>
              </li>
            </ul>
          </div>

          {/* Modalidad Delivery */}
          <div className="bg-[#0B2545]/90 border border-cyan-900/70 rounded-2xl p-6 relative overflow-hidden shadow-lg hover:border-cyan-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#134074] text-[#00A896] flex items-center justify-center mb-5 text-2xl shadow-inner">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-white mb-2">3. Delivery a Domicilio</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Llevamos el sabor del mar a tu puerta en envases térmicos grado alimentario para cuidar cada bocado.
            </p>
            <ul className="space-y-2 text-xs text-cyan-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Tiempo estimado de entrega: 35 a 50 minutos según zona.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>El chofer coordina llamada al momento del arribo.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Recepción de pedidos delivery hasta las 4:30 PM.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Human Team Confirmation & Payment Methods Notice */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Human Team Notice */}
          <div className="bg-[#134074]/40 border border-cyan-800/80 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-amber-300 font-bold text-sm mb-3">
                <ShieldAlert className="w-5 h-5" />
                <span>Confirmación Vía Equipo Humano</span>
              </div>
              <p className="text-slate-200 text-sm leading-relaxed mb-3">
                Por seguridad y control de calidad marina, <strong className="text-white">el asistente de IA toma la solicitud inicial</strong>, y de inmediato nuestro equipo humano valida la comanda, calcula el delivery y te envía los datos oficiales al WhatsApp:
              </p>
              <div className="inline-flex items-center gap-2 bg-[#0B2545] px-4 py-2 rounded-xl border border-cyan-700 text-[#00A896] font-bold text-sm sm:text-base">
                <Phone className="w-4 h-4" />
                <span>WhatsApp Oficial: 971 281 473</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 mt-4 border-t border-cyan-900/60 pt-3">
              Nunca realices transferencias a números diferentes al canal oficial de YAR'S.
            </p>
          </div>

          {/* Payment Methods */}
          <div className="bg-[#134074]/40 border border-cyan-800/80 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-cyan-200 font-bold text-sm mb-3">
                <CreditCard className="w-5 h-5 text-[#00A896]" />
                <span>Métodos de Pago Aceptados</span>
              </div>
              <p className="text-slate-200 text-sm leading-relaxed mb-4">
                Paga de forma rápida y segura a través de los principales canales digitales y físicos:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                <div className="bg-[#0B2545] p-3 rounded-xl border border-cyan-900/80 text-center">
                  <Smartphone className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                  <div className="text-xs font-bold text-white">Yape</div>
                  <div className="text-[10px] text-slate-400">Sin comisión</div>
                </div>
                <div className="bg-[#0B2545] p-3 rounded-xl border border-cyan-900/80 text-center">
                  <Smartphone className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
                  <div className="text-xs font-bold text-white">Plin</div>
                  <div className="text-[10px] text-slate-400">Interbancario</div>
                </div>
                <div className="bg-[#0B2545] p-3 rounded-xl border border-cyan-900/80 text-center">
                  <CreditCard className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                  <div className="text-xs font-bold text-white">Tarjetas</div>
                  <div className="text-[10px] text-slate-400">POS inalámbrico</div>
                </div>
                <div className="bg-[#0B2545] p-3 rounded-xl border border-cyan-900/80 text-center">
                  <CreditCard className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                  <div className="text-xs font-bold text-white">Transferencia</div>
                  <div className="text-[10px] text-slate-400">BCP / BBVA / Interbank</div>
                </div>
                <div className="bg-[#0B2545] p-3 rounded-xl border border-cyan-900/80 text-center col-span-2 sm:col-span-1">
                  <Banknote className="w-5 h-5 text-emerald-300 mx-auto mb-1" />
                  <div className="text-xs font-bold text-white">Efectivo</div>
                  <div className="text-[10px] text-slate-400">Salón y contra entrega</div>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 mt-4 border-t border-cyan-900/60 pt-3">
              Emitimos Boleta de Venta electrónica y Factura para empresas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
