"use client";

import { motion } from "framer-motion";
import {
  CalendarCheck2, ClipboardList, Award,
  ShieldCheck, Sparkles, Star, ArrowRight,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const steps = [
  {
    num: "01",
    Icon: CalendarCheck2,
    accent: "var(--turquoise-deep)",
    accentBg: "rgba(14,122,128,0.12)",
    title: "Valoración sin costo",
    desc: "Visita nuestra clínica en El Poblado, Medellín. Diagnóstico completo con escáner 3D, radiografías y simulación digital de tu sonrisa ideal — sin pagar un peso.",
    stat: "$0",
    statLabel: "Costo de tu primera cita",
    pills: ["Escáner 3D incluido", "45 min", "El Poblado, Medellín"],
    BadgeIcon: ShieldCheck,
  },
  {
    num: "02",
    Icon: ClipboardList,
    accent: "#C9A96E",
    accentBg: "rgba(201,169,110,0.12)",
    title: "Plan hecho para ti",
    desc: "El Dr. Valencia diseña tu tratamiento — Invisalign, brackets de autoligado o diseño de sonrisa — con tecnología de punta y financiación a tu medida.",
    stat: "30 días",
    statLabel: "Primeros resultados visibles",
    pills: ["Invisalign · Autoligado", "Diseño de sonrisa", "Financiación disponible"],
    BadgeIcon: Sparkles,
  },
  {
    num: "03",
    Icon: Award,
    accent: "#4FC3C7",
    accentBg: "rgba(79,195,199,0.12)",
    title: "Sonrisa que enamora",
    desc: "La sonrisa que siempre soñaste, con la tecnología que mereces. Transformación real, permanente y respaldada por más de 2.500 pacientes felices en Medellín.",
    stat: "2.500+",
    statLabel: "Pacientes transformados en Medellín",
    pills: ["4.9 ★ Google", "120+ reseñas verificadas", "Resultados permanentes"],
    BadgeIcon: Star,
  },
];

export default function Process() {
  return (
    <section
      id="proceso"
      className="relative pt-20 md:pt-28 pb-10 md:pb-12 overflow-hidden"
    >
      {/* dark overlay over background image */}
      <div aria-hidden="true" className="absolute inset-0 bg-[color:var(--ink)]/55" />
      {/* subtle radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(79,195,199,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        {/* heading */}
        <Reveal className="text-center mb-8 md:mb-12">
          <p className="text-[11px] uppercase tracking-[0.35em] text-[color:var(--turquoise)] font-semibold mb-4">
            Tu camino
          </p>
          <h2 className="font-display font-black text-3xl md:text-5xl text-white leading-tight">
            Tres pasos hacia tu{" "}
            <span style={{ color: "var(--turquoise)" }}>mejor sonrisa</span>
          </h2>
          <p className="mt-4 text-white/55 max-w-xl mx-auto">
            Un proceso simple, transparente y diseñado para que veas resultados
            desde el primer mes.
          </p>
        </Reveal>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 relative">

          {/* connector line — desktop only */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-[3.75rem] left-[calc(33.33%+1.25rem)] right-[calc(33.33%+1.25rem)] h-px pointer-events-none"
            style={{ background: "linear-gradient(to right, rgba(79,195,199,0.25), rgba(124,58,237,0.25), rgba(217,119,6,0.25))" }}
          />

          {steps.map(({ num, Icon, accent, accentBg, title, desc, stat, statLabel, pills, BadgeIcon }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative flex flex-col rounded-3xl p-5 sm:p-7 md:p-8"
              style={{
                background: "rgba(11,43,58,0.80)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              {/* step number + icon row */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: accentBg }}
                >
                  <Icon className="w-7 h-7" style={{ color: accent }} />
                </div>
                <span
                  className="font-display font-black text-5xl leading-none select-none"
                  style={{ color: "rgba(255,255,255,0.07)" }}
                >
                  {num}
                </span>
              </div>

              {/* title */}
              <h3 className="font-display font-black text-xl text-white leading-snug mb-3">
                {title}
              </h3>

              {/* desc */}
              <p className="text-white/55 text-sm sm:text-[15px] leading-relaxed flex-1 mb-6">
                {desc}
              </p>

              {/* stat block */}
              <div
                className="rounded-2xl px-4 py-3 sm:px-5 sm:py-4 mb-5"
                style={{ background: accentBg }}
              >
                <p
                  className="font-display font-black text-2xl sm:text-3xl leading-none mb-1"
                  style={{ color: accent }}
                >
                  {stat}
                </p>
                <p className="text-white/50 text-xs font-semibold uppercase tracking-wider">
                  {statLabel}
                </p>
              </div>

              {/* pills */}
              <div className="flex flex-wrap gap-2">
                {pills.map((p) => (
                  <span
                    key={p}
                    className="text-[11px] font-semibold px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      color: "rgba(255,255,255,0.60)",
                      border: "1px solid rgba(255,255,255,0.10)",
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>

              {/* arrow connector — mobile only */}
              {i < steps.length - 1 && (
                <div className="md:hidden flex justify-center mt-6">
                  <ArrowRight
                    className="w-5 h-5 rotate-90"
                    style={{ color: "rgba(255,255,255,0.15)" }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <Reveal className="text-center mt-8 md:mt-10">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: "var(--turquoise-deep)",
              boxShadow: "0 8px 32px rgba(14,122,128,0.35)",
            }}
          >
            Agenda tu valoración gratuita
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="mt-3 text-white/30 text-xs">Sin costo · Sin compromiso · Respuesta en 24h</p>
        </Reveal>
      </div>
    </section>
  );
}
