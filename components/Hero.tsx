"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ChevronDown } from "lucide-react";
import { clinic } from "@/lib/data/clinic";

const stats = [
  { val: `${clinic.stats.yearsExperience}+`, label: "años de experiencia" },
  { val: `${clinic.stats.patients.toLocaleString()}+`, label: "pacientes" },
  { val: `${clinic.stats.rating}`, label: "+120 reseñas" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative hero-bg"
      style={{ minHeight: "100dvh", position: "relative", zIndex: 2 }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(48% 55% at 74% 55%, rgba(79,195,199,0.15), transparent 65%),
            radial-gradient(32% 38% at 4% 88%, rgba(201,169,110,0.08), transparent 60%)
          `,
        }}
      />

      {/* ═══════════════════════════════════════
          MOBILE — layout estático sin scroll
      ═══════════════════════════════════════ */}
      <div
        className="lg:hidden flex flex-col relative"
        style={{ minHeight: "100svh" }}
      >
        {/* Texto */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55 }}
          style={{ padding: "86px 1.375rem 1rem" }}
        >
          <span
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold"
            style={{
              background: "rgba(79,195,199,0.10)",
              color: "var(--turquoise-deep)",
              border: "1px solid rgba(79,195,199,0.28)",
            }}
          >
            <Star className="w-3 h-3 fill-current" />
            {clinic.stats.rating} · +120 reseñas en Google
          </span>

          <h1
            className="font-display font-extrabold leading-[1.03] mt-3"
            style={{ fontSize: "clamp(2.3rem, 9vw, 3.2rem)", color: "var(--ink)" }}
          >
            La sonrisa<br />
            que siempre<br />
            <span style={{ color: "var(--turquoise-deep)" }}>soñaste.</span>
          </h1>

          <p
            className="mt-3 leading-relaxed"
            style={{ fontSize: 14, color: "var(--ink-soft)", maxWidth: 300 }}
          >
            Más de {clinic.stats.yearsExperience} años transformando sonrisas en
            Medellín, sin miedo ni estrés.
          </p>

          <div className="mt-4 flex gap-2.5">
            <a
              href="#agendar"
              style={{ background: "var(--turquoise-deep)", color: "#fff" }}
              className="inline-flex items-center px-5 py-2.5 rounded-full font-semibold text-sm shadow-md"
            >
              Agendar cita
            </a>
            <a
              href={`https://wa.me/${clinic.contact.whatsappDigits}`}
              target="_blank"
              rel="noreferrer"
              style={{
                color: "var(--turquoise-deep)",
                border: "2px solid rgba(79,195,199,0.35)",
                background: "rgba(255,255,255,0.7)",
              }}
              className="inline-flex items-center px-5 py-2.5 rounded-full font-semibold text-sm"
            >
              WhatsApp
            </a>
          </div>

          <div
            className="mt-4 flex gap-5"
            style={{ paddingTop: "0.75rem", borderTop: "1px solid rgba(79,195,199,0.18)" }}
          >
            {stats.map((s) => (
              <div key={s.val} className="flex flex-col">
                <span
                  className="font-display font-bold text-base"
                  style={{ color: "var(--turquoise-deep)" }}
                >
                  {s.val}
                </span>
                <span className="text-[10px] mt-0.5" style={{ color: "var(--ink-soft)" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Doctor — ocupa el espacio restante hasta el fondo */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.65, delay: 0.25 }}
          style={{
            flex: "1 1 auto",
            minHeight: "220px",
            position: "relative",
            borderRadius: "2.5rem 2.5rem 0 0",
            background: "linear-gradient(160deg, var(--turquoise-soft) 0%, #ecf9f9 100%)",
            boxShadow: "0 -20px 64px rgba(14,122,128,0.18)",
            overflow: "hidden",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute", inset: 0,
              background: "radial-gradient(60% 65% at 50% 55%, rgba(79,195,199,0.18) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <Image
            src={clinic.doctor.photo}
            alt={`${clinic.doctor.prefix} ${clinic.doctor.name} – Ortodoncista en Medellín`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "contain", objectPosition: "bottom center", mixBlendMode: "multiply" }}
          />
        </motion.div>

        {/* Scroll hint sobre la foto */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          style={{ color: "var(--turquoise)" }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════
          DESKTOP — layout completo
      ═══════════════════════════════════════ */}
      <div
        className="hidden lg:flex max-w-7xl mx-auto px-10 flex-col justify-center"
        style={{ minHeight: "100svh" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-[48%] flex flex-col z-10"
        >
          <motion.p
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-4 font-semibold uppercase tracking-widest"
            style={{ fontSize: 11, color: "var(--turquoise)", letterSpacing: "0.14em" }}
          >
            Ortodoncista · El Poblado, Medellín
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="self-start mb-6"
          >
            <span
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold"
              style={{
                background: "rgba(79,195,199,0.10)",
                color: "var(--turquoise-deep)",
                border: "1px solid rgba(79,195,199,0.28)",
              }}
            >
              <Star className="w-3 h-3 fill-current" />
              {clinic.stats.rating} · +120 reseñas en Google
            </span>
          </motion.div>

          <h1
            className="font-display font-extrabold leading-[1.03]"
            style={{ fontSize: "clamp(2.8rem, 5vw, 5rem)", color: "var(--ink)" }}
          >
            La sonrisa<br />
            que siempre<br />
            <span style={{ color: "var(--turquoise-deep)" }}>soñaste.</span>
          </h1>

          <p
            className="mt-6 leading-relaxed max-w-[380px]"
            style={{ fontSize: 16, color: "var(--ink-soft)" }}
          >
            Cada visita, sin miedo ni estrés.{" "}
            <strong style={{ color: "var(--ink)" }}>{clinic.doctor.shortName}</strong>{" "}
            lleva más de {clinic.stats.yearsExperience} años transformando sonrisas
            con tecnología de vanguardia.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#agendar"
              style={{ background: "var(--turquoise-deep)", color: "#fff" }}
              className="inline-flex items-center px-7 py-3.5 rounded-full font-semibold text-[15px] hover:opacity-90 transition-opacity shadow-md"
            >
              Agendar cita
            </a>
            <a
              href={`https://wa.me/${clinic.contact.whatsappDigits}`}
              target="_blank"
              rel="noreferrer"
              style={{
                color: "var(--turquoise-deep)",
                border: "2px solid rgba(79,195,199,0.35)",
                background: "rgba(255,255,255,0.7)",
              }}
              className="inline-flex items-center px-7 py-3.5 rounded-full font-semibold text-[15px] hover:border-[color:var(--turquoise)] transition-colors"
            >
              WhatsApp
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-4"
            style={{ paddingTop: "1.5rem", borderTop: "1px solid rgba(79,195,199,0.18)" }}
          >
            {stats.map((s) => (
              <div key={s.val} className="flex flex-col">
                <span className="font-display font-bold text-xl" style={{ color: "var(--turquoise-deep)" }}>
                  {s.val}
                </span>
                <span className="text-xs mt-0.5" style={{ color: "var(--ink-soft)" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Desktop doctor */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.85, delay: 0.3 }}
        className="absolute hidden lg:block pointer-events-none"
        style={{ right: 0, top: 0, bottom: 0, width: "52%", zIndex: 20, paddingTop: "100px" }}
      >
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(55% 50% at 50% 60%, rgba(79,195,199,0.17) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="pointer-events-auto"
          style={{
            position: "absolute", bottom: "110px", right: "1.5rem",
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(79,195,199,0.22)",
            borderRadius: "1rem", padding: "0.875rem 1.25rem",
            boxShadow: "0 8px 32px rgba(14,122,128,0.13)", zIndex: 30,
          }}
        >
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--turquoise-deep)" }}>Esp. Ortodoncia</div>
          <div style={{ fontSize: 12, marginTop: 2, fontWeight: 500, color: "var(--ink-soft)" }}>U. CES · U. Guadalajara</div>
        </motion.div>
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <Image
            src={clinic.doctor.photo}
            alt={`${clinic.doctor.prefix} ${clinic.doctor.name} – Ortodoncista en Medellín`}
            fill priority
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "contain", objectPosition: "bottom center", mixBlendMode: "multiply" }}
          />
          <div aria-hidden="true" style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: 90,
            background: "linear-gradient(to bottom, transparent 0%, var(--off-white) 100%)",
            pointerEvents: "none",
          }} />
          <div aria-hidden="true" style={{
            position: "absolute", bottom: 0, left: "8%", right: "8%", height: 1,
            background: "linear-gradient(90deg, transparent, rgba(79,195,199,0.55), transparent)",
          }} />
        </div>
      </motion.div>

      {/* Bottom line */}
      <div aria-hidden="true" style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 1, zIndex: 25,
        background: "linear-gradient(90deg, transparent 0%, rgba(79,195,199,0.35) 30%, rgba(79,195,199,0.35) 70%, transparent 100%)",
      }} />

      {/* Desktop scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-7 left-[24%] -translate-x-1/2 hidden lg:flex flex-col items-center"
        style={{ color: "var(--turquoise)" }}
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
