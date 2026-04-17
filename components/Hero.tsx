"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { clinic } from "@/lib/data/clinic";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-white"
      style={{ minHeight: "clamp(560px, 90vh, 800px)" }}
    >
      <div
        className="max-w-7xl mx-auto px-6 sm:px-10 grid lg:grid-cols-[48%_52%] h-full"
        style={{ minHeight: "inherit" }}
      >
        {/* ── LEFT: copy ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center pt-36 pb-10 lg:pb-16 z-10"
        >
          <h1
            className="font-display font-extrabold leading-[1.06]"
            style={{
              fontSize: "clamp(2.6rem, 5vw, 4rem)",
              color: "var(--turquoise)",
            }}
          >
            La sonrisa que<br />
            siempre soñaste,<br />
            <span style={{ color: "var(--turquoise-deep)" }}>
              más cerca.
            </span>
          </h1>

          <p
            className="mt-5 leading-relaxed max-w-[360px]"
            style={{ fontSize: 16, color: "var(--ink-soft)" }}
          >
            Nuestro objetivo es que disfrutes cada visita sin miedo ni estrés.
            El{" "}
            <strong style={{ color: "var(--ink)" }}>
              {clinic.doctor.shortName}
            </strong>{" "}
            lleva más de {clinic.stats.yearsExperience} años transformando
            sonrisas en Medellín.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#agendar"
              style={{ background: "var(--turquoise-deep)", color: "#fff" }}
              className="inline-flex items-center px-7 py-3 rounded-full font-semibold text-[15px] hover:opacity-90 transition-opacity"
            >
              Agendar cita
            </a>
            <a
              href={`https://wa.me/${clinic.contact.whatsappDigits}`}
              target="_blank"
              rel="noreferrer"
              style={{
                color: "var(--turquoise-deep)",
                border: "2px solid var(--turquoise-soft)",
              }}
              className="inline-flex items-center px-7 py-3 rounded-full font-semibold text-[15px] hover:border-[color:var(--turquoise)] transition-colors"
            >
              WhatsApp
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-5 text-sm" style={{ color: "var(--ink-soft)" }}>
            <span>⭐ {clinic.stats.rating} · +120 reseñas</span>
            <span>✓ U. CES · U. Guadalajara</span>
          </div>
        </motion.div>

        {/* ── RIGHT: tooth + doctor ── */}
        <div className="relative flex items-end justify-center">

          {/* Tooth — behind doctor, shifted left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.15, ease: "easeOut" }}
            className="absolute z-0 pointer-events-none"
            style={{ width: "55%", bottom: 0, left: "-10%" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/tooth.png"
              alt=""
              aria-hidden="true"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                filter: "sepia(1) hue-rotate(145deg) saturate(8) brightness(0.82)",
              }}
            />
          </motion.div>

          {/* Doctor — centered, on top of tooth */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="relative z-10"
            style={{ width: "95%", maxWidth: 480, paddingTop: "40px" }}
          >
            <Image
              src={clinic.doctor.photo}
              alt={`${clinic.doctor.prefix} ${clinic.doctor.name} – Ortodoncista en Medellín`}
              width={380}
              height={500}
              priority
              className="w-full h-auto object-contain object-bottom [mix-blend-mode:multiply]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
