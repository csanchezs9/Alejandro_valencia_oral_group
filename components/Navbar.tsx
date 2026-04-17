"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calendar } from "lucide-react";
import { clinic } from "@/lib/data/clinic";

const links = [
  { href: "#servicios", label: "Tratamientos" },
  { href: "#sobre-mi", label: "El Doctor" },
  { href: "#proceso", label: "Proceso" },
  { href: "#faq", label: "Preguntas" },
  { href: "#ubicacion", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-[color:var(--turquoise-soft)] shadow-[0_8px_30px_rgba(11,43,58,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[color:var(--turquoise)] to-[color:var(--turquoise-deep)] flex items-center justify-center shadow-sm">
            <span className="text-white font-display font-bold text-lg leading-none">O</span>
            <span className="absolute -right-0.5 -bottom-0.5 w-2 h-2 rounded-full bg-[color:var(--gold)]" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-[color:var(--ink)] text-base">{clinic.brand}</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-[color:var(--ink-soft)]">Ortodoncia</div>
          </div>
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
