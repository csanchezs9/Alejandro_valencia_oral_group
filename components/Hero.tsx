"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { clinic } from "@/lib/data/clinic";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const stats = [
  { val: `${clinic.stats.yearsExperience}+`, label: "años de experiencia" },
  { val: `${clinic.stats.patients.toLocaleString("es-CO")}+`, label: "pacientes" },
  { val: `${clinic.stats.rating}`, label: "+120 reseñas" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative hero-bg min-h-dvh"
      style={{ zIndex: 2 }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(48% 55% at 74% 55%, rgba(79,195,199,0.15), transparent 65%), radial-gradient(32% 38% at 4% 88%, rgba(201,169,110,0.08), transparent 60%)",
        }}
      />

      {/* ── Doctor image — mobile top ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.65 }}
        className="lg:hidden relative h-[58svh] shrink-0 overflow-hidden bg-[color:var(--off-white)]"
      >
        <Image
          src={clinic.doctor.photo}
          alt={`${clinic.doctor.prefix} ${clinic.doctor.name} – Ortodoncista en Medellín`}
          fill
          priority
          sizes="100vw"
          className="object-contain object-bottom mix-blend-multiply"
        />
        <div
          aria-hidden="true"
          className="absolute top-0 inset-x-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, var(--off-white) 0%, transparent 100%)" }}
        />
      </motion.div>

      {/* ── Text content ── */}
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, delay: 0.2 }}
        className={[
          // mobile: card that slides up over the image
          "relative z-10 -mt-8 rounded-t-[2.5rem] bg-[color:var(--off-white)] px-5 pt-7 pb-10",
          "shadow-[0_-16px_48px_rgba(14,122,128,0.18)]",
          // desktop: left column, no card treatment, centered vertically
          "lg:absolute lg:inset-y-0 lg:left-0 lg:mt-0 lg:rounded-none lg:bg-transparent lg:shadow-none",
          "lg:flex lg:flex-col lg:justify-center lg:w-[60%] lg:pl-16 xl:pl-24 lg:pr-12 lg:pt-28 xl:pt-24",
        ].join(" ")}
      >
        <h1
          className="font-display font-extrabold leading-[1.03] text-[color:var(--ink)] lg:max-w-[14ch]"
          style={{ fontSize: "clamp(2rem, 5.4vw, 5rem)" }}
        >
          <span className="lg:hidden">
            La sonrisa<br />
            que siempre<br />
            <span className="text-[color:var(--turquoise-deep)]">soñaste.</span>
          </span>
          <span className="hidden lg:inline">
            La sonrisa que siempre{" "}
            <span className="text-[color:var(--turquoise-deep)]">soñaste.</span>
          </span>
        </h1>

        <p className="mt-3 lg:mt-6 text-sm lg:text-lg leading-relaxed text-[color:var(--ink-soft)] max-w-xs lg:max-w-[520px]">
          <span className="lg:hidden">
            Más de {clinic.stats.yearsExperience} años transformando sonrisas en Medellín, sin miedo ni estrés.
          </span>
          <span className="hidden lg:inline">
            Cada visita, sin miedo ni estrés.{" "}
            <strong className="text-[color:var(--ink)]">{clinic.doctor.shortName}</strong>{" "}
            lleva más de {clinic.stats.yearsExperience} años transformando sonrisas con tecnología de vanguardia.
          </span>
        </p>

        <div className="mt-4 lg:mt-8 flex flex-wrap gap-2.5 lg:gap-3">
          <a
            href="#agendar"
            className="inline-flex items-center px-5 lg:px-7 py-2.5 lg:py-3.5 rounded-full font-semibold text-sm lg:text-[15px] bg-[color:var(--turquoise-deep)] text-white hover:opacity-90 transition-opacity shadow-md"
          >
            Agendar cita
          </a>
          <a
            href={`https://wa.me/${clinic.contact.whatsappDigits}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 lg:px-7 py-2.5 lg:py-3.5 rounded-full font-semibold text-sm lg:text-[15px] text-[color:var(--turquoise-deep)] hover:border-[color:var(--turquoise)] transition-colors"
            style={{ border: "2px solid rgba(79,195,199,0.35)", background: "rgba(255,255,255,0.7)" }}
          >
            <WhatsAppIcon size={20} />
            WhatsApp
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-4 lg:mt-10 flex flex-wrap gap-x-5 lg:gap-x-8 gap-y-3 pt-3 lg:pt-6 border-t border-[rgba(79,195,199,0.18)]"
        >
          {stats.map((s) => (
            <div key={s.val} className="flex flex-col">
              <span className="font-display font-bold text-base lg:text-xl text-[color:var(--turquoise-deep)]">
                {s.val}
              </span>
              <span className="text-[10px] lg:text-xs mt-0.5 text-[color:var(--ink-soft)]">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Doctor image — desktop right ── */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.85, delay: 0.3 }}
        className="absolute hidden lg:block pointer-events-none inset-y-0 right-0 w-[52%]"
        style={{ zIndex: 20, paddingTop: "100px" }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(55% 50% at 50% 60%, rgba(79,195,199,0.17) 0%, transparent 70%)" }}
        />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="pointer-events-auto absolute bottom-[110px] right-6 z-30 rounded-2xl px-5 py-3.5"
          style={{
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(79,195,199,0.22)",
            boxShadow: "0 8px 32px rgba(14,122,128,0.13)",
          }}
        >
          <div className="text-xs font-bold text-[color:var(--turquoise-deep)]">Esp. Ortodoncia</div>
          <div className="text-xs mt-0.5 font-medium text-[color:var(--ink-soft)]">U. CES · U. Guadalajara</div>
        </motion.div>
        <div className="relative w-full h-full">
          <Image
            src={clinic.doctor.photo}
            alt={`${clinic.doctor.prefix} ${clinic.doctor.name} – Ortodoncista en Medellín`}
            fill
            priority
            sizes="52vw"
            className="object-contain object-bottom mix-blend-multiply"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent 0%, var(--off-white) 100%)" }}
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[8%] right-[8%] h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(79,195,199,0.55), transparent)" }}
          />
        </div>
      </motion.div>

      {/* Bottom line */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 inset-x-0 h-px z-[25]"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(79,195,199,0.35) 30%, rgba(79,195,199,0.35) 70%, transparent 100%)" }}
      />

      {/* Scroll hint — mobile */}
      <motion.div
        className="lg:hidden absolute z-20 bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center text-[color:var(--turquoise)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>

      {/* Scroll hint — desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-7 left-[24%] -translate-x-1/2 hidden lg:flex flex-col items-center text-[color:var(--turquoise)]"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
