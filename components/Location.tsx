"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { clinic } from "@/lib/data/clinic";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

function Instagram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Location() {
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    `${clinic.clinic.street}, ${clinic.clinic.neighborhood}, ${clinic.clinic.city}`
  )}&output=embed`;

  return (
    <section id="ubicacion" className="relative py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--turquoise-deep)] font-semibold mb-4">
            Agenda tu cita
          </div>
          <h2
            id="agendar"
            className="font-display font-bold text-3xl md:text-5xl text-[color:var(--ink)] leading-tight"
          >
            Te esperamos en El Poblado
          </h2>
          <p className="mt-5 text-[color:var(--ink-soft)] text-base sm:text-lg">
            En el corazón de Medellín, con estacionamiento disponible y acceso fácil.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 rounded-3xl overflow-hidden shadow-lg shadow-[color:var(--ink)]/10 border border-[color:var(--silver)]/15 min-h-[260px] sm:min-h-[400px] bg-[color:var(--turquoise-soft)]"
          >
            <iframe
              src={mapUrl}
              title="Ubicación consultorio"
              className="w-full h-full min-h-[260px] sm:min-h-[400px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Info — bento stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* Address card */}
            <div
              className="rounded-2xl p-6 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, var(--turquoise-soft) 0%, #d4f3f5 100%)",
                border: "1px solid rgba(79,195,199,0.2)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "var(--turquoise-deep)", boxShadow: "0 4px 12px rgba(14,122,128,0.3)" }}
                >
                  <MapPin className="w-4.5 h-4.5 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--turquoise-deep)] mb-1">
                    Dirección
                  </p>
                  <p className="font-semibold text-[color:var(--ink)] leading-snug">
                    {clinic.clinic.name}
                  </p>
                  <p className="text-sm text-[color:var(--ink-soft)] mt-0.5 leading-relaxed">
                    {clinic.clinic.suite} · {clinic.clinic.street}<br />
                    {clinic.clinic.neighborhood}, {clinic.clinic.city}
                  </p>
                </div>
              </div>
              {/* Decorative dot pattern */}
              <div
                className="absolute right-4 bottom-4 w-16 h-16 opacity-[0.12] pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle, var(--turquoise-deep) 1.5px, transparent 1.5px)",
                  backgroundSize: "8px 8px",
                }}
              />
            </div>

            {/* Phone + Hours — 2-col row */}
            <div className="grid grid-cols-2 gap-4">
              {/* Phone */}
              <div
                className="rounded-2xl p-5 flex flex-col gap-2"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(79,195,199,0.15)",
                  boxShadow: "0 2px 16px rgba(14,122,128,0.06)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: "var(--turquoise-soft)", border: "1px solid rgba(79,195,199,0.25)" }}
                >
                  <Phone className="w-4 h-4 text-[color:var(--turquoise-deep)]" strokeWidth={2.2} />
                </div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--turquoise-deep)]">
                  Teléfono
                </p>
                <a
                  href={`tel:${clinic.contact.phoneTel}`}
                  className="font-bold text-[color:var(--ink)] leading-tight hover:text-[color:var(--turquoise-deep)] transition-colors"
                  style={{ fontSize: 13 }}
                >
                  {clinic.contact.phone}
                </a>
                <p className="text-xs text-[color:var(--ink-soft)]">Ext. {clinic.contact.phoneExt}</p>
              </div>

              {/* Hours */}
              <div
                className="rounded-2xl p-5 flex flex-col gap-2"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(201,169,110,0.2)",
                  boxShadow: "0 2px 16px rgba(14,122,128,0.06)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: "#fdf6ec", border: "1px solid rgba(201,169,110,0.3)" }}
                >
                  <Clock className="w-4 h-4 text-[color:var(--gold)]" strokeWidth={2.2} />
                </div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)]">
                  Horario
                </p>
                {clinic.clinic.hours.map((h) => (
                  <div key={h.day} className="flex flex-col">
                    <span className="text-[11px] text-[color:var(--ink-soft)]">{h.day}</span>
                    <span className="text-xs font-semibold text-[color:var(--ink)]">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <a
              href={`https://wa.me/${clinic.contact.whatsappDigits}?text=Hola%20Dr.%20Alejandro,%20quisiera%20agendar%20una%20cita`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl font-semibold text-[15px] text-white transition-all hover:scale-[1.01] active:scale-[0.99]"
              style={{
                background: "linear-gradient(135deg, #25D366 0%, #1aad52 100%)",
                boxShadow: "0 6px 28px rgba(37,211,102,0.35)",
              }}
            >
              <WhatsAppIcon size={20} />
              Agendar por WhatsApp
            </a>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${clinic.contact.phoneTel}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-sm text-[color:var(--ink)] transition-colors hover:bg-[color:var(--turquoise-soft)]"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(79,195,199,0.25)",
                  boxShadow: "0 2px 12px rgba(14,122,128,0.05)",
                }}
              >
                <Phone className="w-4 h-4 text-[color:var(--turquoise-deep)]" />
                Llamar
              </a>
              <a
                href={clinic.contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-sm text-[color:var(--ink)] transition-colors hover:bg-[color:var(--turquoise-soft)]"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(79,195,199,0.25)",
                  boxShadow: "0 2px 12px rgba(14,122,128,0.05)",
                }}
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
