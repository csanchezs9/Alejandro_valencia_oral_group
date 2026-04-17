"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Calendar, MessageCircle } from "lucide-react";
import { clinic } from "@/lib/data/clinic";

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
          <p className="mt-5 text-[color:var(--ink-soft)] text-lg">
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
            className="lg:col-span-3 rounded-3xl overflow-hidden shadow-lg shadow-[color:var(--ink)]/10 border border-[color:var(--silver)]/15 min-h-[400px] bg-[color:var(--turquoise-soft)]"
          >
            <iframe
              src={mapUrl}
              title="Ubicación consultorio"
              className="w-full h-full min-h-[400px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 bg-[color:var(--ink)] rounded-3xl p-8 md:p-10 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-30">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[color:var(--turquoise)] blur-3xl" />
            </div>

            <div className="relative">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[color:var(--turquoise)]" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/50 mb-1">
                    Dirección
                  </div>
                  <div className="font-semibold leading-snug">
                    {clinic.clinic.name}
                  </div>
                  <div className="text-white/70 text-sm">
                    {clinic.clinic.suite} · {clinic.clinic.street}
                    <br />
                    {clinic.clinic.neighborhood}, {clinic.clinic.city}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[color:var(--turquoise)]" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/50 mb-1">
                    Teléfono
                  </div>
                  <a
                    href={`tel:${clinic.contact.phoneTel}`}
                    className="font-semibold hover:text-[color:var(--turquoise)] transition-colors"
                  >
                    {clinic.contact.phone}
                  </a>
                  <div className="text-white/70 text-sm">Ext. {clinic.contact.phoneExt}</div>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-8">
                <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[color:var(--turquoise)]" />
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-[0.2em] text-white/50 mb-1">
                    Horario
                  </div>
                  {clinic.clinic.hours.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm">
                      <span className="text-white/80">{h.day}</span>
                      <span className="font-semibold">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={`https://wa.me/${clinic.contact.whatsappDigits}?text=Hola%20Dr.%20Alejandro,%20quisiera%20agendar%20una%20cita`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[color:var(--turquoise)] text-[color:var(--ink)] px-6 py-3.5 rounded-full font-semibold hover:bg-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Agendar por WhatsApp
                </a>
                <a
                  href={`tel:${clinic.contact.phoneTel}`}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3.5 rounded-full font-semibold hover:bg-white/15 transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  Llamar al consultorio
                </a>
                <a
                  href={clinic.contact.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-sm text-white/60 hover:text-white transition-colors mt-1"
                >
                  <Instagram className="w-4 h-4" />
                  {clinic.contact.instagramHandle}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
