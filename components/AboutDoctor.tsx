"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Sparkles } from "lucide-react";
import { clinic } from "@/lib/data/clinic";

export default function AboutDoctor() {
  return (
    <section id="sobre-mi" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--turquoise-soft)]/40 via-[color:var(--off-white)] to-white" />
      <div className="absolute right-0 top-0 w-1/3 h-full mesh-glow opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
            <div className="absolute -top-4 -left-4 w-full h-full rounded-[2.5rem] border-2 border-[color:var(--gold)]/40" />
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-[2.5rem] bg-[color:var(--turquoise)]/15" />
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[color:var(--ink)]/20">
              <video
                src="/videos/AQNz-miNSvOCscclxfZe-RSoSd5DFEkuAD025TWU9RJBIzxy9l8bgAM-sMyF0rf82rnsjgVstHr_Eddk5Kob-BDP4tBBVmtyeYfKO1Y.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="order-1 lg:order-2"
        >
          <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--turquoise-deep)] font-semibold mb-4">
            Conoce al especialista
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[color:var(--ink)] leading-tight">
            {clinic.doctor.prefix} {clinic.doctor.name}
          </h2>
          <div className="mt-3 text-lg text-[color:var(--turquoise-deep)] font-semibold">
            {clinic.doctor.specialty}
          </div>

          <p className="mt-6 text-[color:var(--ink-soft)] text-lg leading-relaxed">
            {clinic.doctor.bioShort}
          </p>

          {/* Education */}
          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[color:var(--ink)] mb-3">
              <GraduationCap className="w-4 h-4 text-[color:var(--turquoise-deep)]" />
              Formación académica
            </div>
            {clinic.doctor.education.map((e, i) => (
              <motion.div
                key={e.degree}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                className="flex gap-3 items-start"
              >
                <div className="w-2 h-2 rounded-full bg-[color:var(--gold)] mt-2 shrink-0" />
                <div>
                  <div className="font-semibold text-[color:var(--ink)]">{e.degree}</div>
                  <div className="text-sm text-[color:var(--ink-soft)]">{e.institution}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Expertise pills */}
          <div className="mt-8">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[color:var(--ink)] mb-4">
              <Award className="w-4 h-4 text-[color:var(--turquoise-deep)]" />
              Áreas de experticia
            </div>
            <div className="flex flex-wrap gap-2">
              {clinic.doctor.expertise.map((e, i) => (
                <motion.span
                  key={e}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="inline-flex items-center gap-1.5 text-sm bg-white border border-[color:var(--turquoise-soft)] px-3 py-1.5 rounded-full text-[color:var(--ink)]"
                >
                  <Sparkles className="w-3 h-3 text-[color:var(--turquoise-deep)]" />
                  {e}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
