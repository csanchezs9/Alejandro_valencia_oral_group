"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calendar, MapPin, Phone } from "lucide-react";
import { clinic } from "@/lib/data/clinic";

const links = [
  { href: "#servicios", label: "Tratamientos" },
  { href: "#sobre-mi", label: "El Doctor" },
  { href: "#proceso", label: "Proceso" },
  { href: "#faq", label: "Preguntas" },
  { href: "#ubicacion", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const curr = window.scrollY;
      setHidden(curr > last && curr > 80);
      last = curr;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      {/* ── Top info bar ── */}
      <div className="relative bg-white border-b border-gray-200 text-xs text-gray-900 py-2.5 px-5 sm:px-8">

        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Left: address */}
          <span className="hidden sm:flex items-center gap-1.5 truncate">
            <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-gray-900" />
            {clinic.clinic.city}, Colombia &nbsp;{clinic.clinic.street}, {clinic.clinic.name}, {clinic.clinic.suite}
          </span>
          <span className="sm:hidden flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-gray-900 flex-shrink-0" />
            {clinic.clinic.city}, Colombia
          </span>

          {/* Right: phone + instagram */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <a
              href={`tel:${clinic.contact.phoneTel}`}
              className="flex items-center gap-1.5 hover:text-gray-800 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gray-900" />
              Citas: {clinic.contact.phone}
            </a>
            <a
              href={clinic.contact.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-75 transition-opacity"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/iconig.png" alt="Instagram" className="w-4 h-4 object-contain" />
            </a>
          </div>
        </div>
      </div>

      {/* ── Main nav ── */}
      <div className="bg-white/85 backdrop-blur-md border-b border-[color:var(--turquoise-soft)] shadow-[0_8px_30px_rgba(11,43,58,0.06)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="group">
          <div className="font-display font-bold text-[color:var(--ink)] text-base">Odont. Alejandro Valencia Toro</div>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[color:var(--ink-soft)] hover:text-[color:var(--turquoise-deep)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#agendar"
            className="hidden md:inline-flex items-center gap-2 bg-[color:var(--ink)] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[color:var(--turquoise-deep)] transition-colors shadow-sm"
          >
            <Calendar className="w-4 h-4" />
            Agendar cita
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menú"
            className="md:hidden p-2 rounded-lg text-[color:var(--ink)]"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-white border-t border-[color:var(--turquoise-soft)]"
          >
            <div className="px-5 py-5 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-[color:var(--ink)] font-medium border-b border-[color:var(--turquoise-soft)] last:border-0"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#agendar"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-2 bg-[color:var(--ink)] text-white px-5 py-3 rounded-full text-sm font-semibold"
              >
                <Calendar className="w-4 h-4" /> Agendar cita
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
