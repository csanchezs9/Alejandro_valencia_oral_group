"use client";

import { motion } from "framer-motion";
import { CalendarCheck, ScanLine, Smile } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    title: "Valoración inicial",
    desc: "Agenda tu cita. Hacemos diagnóstico clínico, radiografías y entendemos tus objetivos estéticos y funcionales.",
  },
  {
    icon: ScanLine,
    title: "Plan de tratamiento",
    desc: "Diseñamos tu plan personalizado con simulación digital para que veas el resultado antes de empezar.",
  },
  {
    icon: Smile,
    title: "Tu nueva sonrisa",
    desc: "Seguimiento constante durante todo el tratamiento. Cada ajuste te acerca a la sonrisa que quieres.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="relative py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--turquoise-deep)] font-semibold mb-4">
            Tu camino
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[color:var(--ink)] leading-tight">
            Tres pasos hacia tu mejor sonrisa
          </h2>
        </motion.div>

        <div className="relative grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[color:var(--turquoise)]/40 to-transparent" />

          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="relative text-center"
            >
              <div className="relative inline-flex w-16 h-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[color:var(--turquoise)] to-[color:var(--turquoise-deep)] text-white shadow-lg shadow-[color:var(--turquoise)]/30 mb-6">
                <s.icon className="w-6 h-6" />
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[color:var(--gold)] text-[color:var(--ink)] font-display font-extrabold text-sm flex items-center justify-center shadow">
                  {i + 1}
                </div>
              </div>
              <h3 className="font-display font-bold text-xl text-[color:var(--ink)] mb-2">
                {s.title}
              </h3>
              <p className="text-[color:var(--ink-soft)] max-w-xs mx-auto">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
