"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Calendar, MessageCircle, Sparkles, ShieldCheck, Star } from "lucide-react";
import { clinic } from "@/lib/data/clinic";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yImg = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative overflow-hidden hero-bg pt-28 md:pt-36 pb-16 md:pb-24"
    >
      <div className="absolute inset-0 mesh-glow opacity-70 pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-[color:var(--turquoise)]/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <motion.div style={{ y: yText }} className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/70 backdrop-blur px-4 py-1.5 rounded-full border border-[color:var(--turquoise-soft)] text-xs font-semibold text-[color:var(--turquoise-deep)] mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Especialista certificado · Medellín, El Poblado
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-extrabold text-[color:var(--ink)] text-4xl sm:text-5xl lg:text-[56px] leading-[1.05]"
          >
            La sonrisa que siempre soñaste,{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[color:var(--turquoise-deep)] to-[color:var(--turquoise)] bg-clip-text text-transparent">
                con la tecnología
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
              >
                <motion.path
                  d="M2 8 Q 75 2, 150 6 T 298 5"
                  stroke="var(--gold)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                />
              </svg>
            </span>{" "}
            que mereces.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-lg text-[color:var(--ink-soft)] max-w-xl leading-relaxed"
          >
            Ortodoncia invisible, brackets de autoligado y diseño de sonrisa con el{" "}
            <span className="text-[color:var(--ink)] font-semibold">
              Dr. Alejandro Valencia
            </span>
            . Más de {clinic.stats.yearsExperience} años transformando sonrisas en Medellín.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#agendar"
              className="group inline-flex items-center gap-2 bg-[color:var(--ink)] text-white px-6 py-3.5 rounded-full font-semibold shadow-lg shadow-[color:var(--ink)]/15 hover:bg-[color:var(--turquoise-deep)] transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              Agenda tu valoración
            </a>
            <a
              href={`https://wa.me/${clinic.contact.whatsappDigits}?text=Hola%20Dr.%20Alejandro,%20quisiera%20agendar%20una%20cita`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[color:var(--ink)] px-6 py-3.5 rounded-full font-semibold border border-[color:var(--turquoise-soft)] hover:border-[color:var(--turquoise)] transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 text-[color:var(--turquoise-deep)]" />
              Escribir por WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 flex items-center gap-6 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[color:var(--gold)] text-[color:var(--gold)]"
                  />
                ))}
              </div>
              <span className="font-semibold text-[color:var(--ink)]">
                {clinic.stats.rating}
              </span>
              <span className="text-[color:var(--ink-soft)]">(120+ reseñas)</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-[color:var(--ink-soft)]">
              <ShieldCheck className="w-4 h-4 text-[color:var(--turquoise-deep)]" />
              U. CES · U. Guadalajara
            </div>
          </motion.div>
        </motion.div>

        {/* Doctor image */}
        <motion.div style={{ y: yImg }} className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative aspect-[4/5] max-w-md mx-auto lg:ml-auto lg:mr-0"
          >
            {/* Background shape */}
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-[color:var(--turquoise)] to-[color:var(--turquoise-deep)] opacity-20 blur-2xl" />
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[color:var(--turquoise)]/30 via-transparent to-[color:var(--gold)]/20" />

            {/* Image container */}
            <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[color:var(--ink)]/20">
              <Image
                src={clinic.doctor.photo}
                alt={`${clinic.doctor.prefix} ${clinic.doctor.name} – Ortodoncista en Medellín`}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 500px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--turquoise-soft)] mb-1">
                  Ortodoncista
                </div>
                <div className="font-display font-bold text-xl leading-tight">
                  {clinic.doctor.prefix} {clinic.doctor.name}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -left-4 sm:-left-8 top-8 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-[color:var(--turquoise-soft)]"
            >
              <div className="w-10 h-10 rounded-full bg-[color:var(--turquoise-soft)] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[color:var(--turquoise-deep)]" />
              </div>
              <div>
                <div className="text-xs text-[color:var(--ink-soft)]">Pacientes felices</div>
                <div className="font-display font-bold text-[color:var(--ink)]">
                  +{clinic.stats.patients.toLocaleString("es-CO")}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 1.15 }}
              className="absolute -right-2 sm:-right-6 bottom-14 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-[color:var(--turquoise-soft)]"
            >
              <div className="w-10 h-10 rounded-full bg-[color:var(--gold)]/15 flex items-center justify-center">
                <Star className="w-5 h-5 text-[color:var(--gold)]" />
              </div>
              <div>
                <div className="text-xs text-[color:var(--ink-soft)]">Calificación</div>
                <div className="font-display font-bold text-[color:var(--ink)]">
                  {clinic.stats.rating} / 5.0
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
