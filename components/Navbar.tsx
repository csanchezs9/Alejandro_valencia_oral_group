"use client";

import React, { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  React.useEffect(() => {
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
    <>
      {/* Navbar pill */}
      <div
        className={`fixed top-0 inset-x-0 z-50 flex justify-center py-4 px-4 pointer-events-none transition-transform duration-300 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <motion.div
          initial={{ y: -32, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center justify-between px-5 sm:px-8 py-3 sm:py-4 bg-white rounded-full shadow-lg w-full max-w-5xl relative pointer-events-auto"
          style={{ boxShadow: "0 4px 24px rgba(11,43,58,0.10), 0 1px 4px rgba(11,43,58,0.06)" }}
        >
          {/* Logo — name only, no OG badge */}
          <a href="#top" className="flex items-center gap-1 shrink-0">
            <div>
              <div className="font-display font-bold text-[color:var(--ink)] text-sm leading-tight">
                Dr. Alejandro Valencia
              </div>
              <div className="text-[10px] text-[color:var(--ink-soft)] leading-tight">
                Ortodoncista · Medellín
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-9">
            {links.map((l) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <a
                  href={l.href}
                  className="text-sm text-[color:var(--ink-soft)] hover:text-[color:var(--turquoise-deep)] transition-colors font-medium"
                >
                  {l.label}
                </a>
              </motion.div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <a
              href="#agendar"
              className="inline-flex items-center gap-1.5 px-6 py-2.5 text-sm text-white rounded-full font-semibold transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg, var(--turquoise-deep) 0%, var(--turquoise) 100%)" }}
            >
              <Calendar className="w-3.5 h-3.5" />
              Agendar cita
            </a>
          </motion.div>

          {/* Mobile hamburger */}
          <motion.button
            className="md:hidden flex items-center p-1"
            onClick={() => setIsOpen(true)}
            whileTap={{ scale: 0.9 }}
            aria-label="Abrir menú"
          >
            <Menu className="h-5 w-5 text-[color:var(--ink)]" />
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile menu — outside navbar pill so scroll-hide doesn't affect it */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-[60] flex flex-col px-6 pt-0 pb-10 md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
          >
            {/* Header inside menu */}
            <div className="flex items-center justify-between py-5 border-b border-[color:var(--turquoise-soft)]">
              <div>
                <div className="font-display font-bold text-[color:var(--ink)] text-base leading-tight">
                  Dr. Alejandro Valencia
                </div>
                <div className="text-xs text-[color:var(--ink-soft)] leading-tight mt-0.5">
                  Ortodoncista · Medellín
                </div>
              </div>
              <motion.button
                onClick={() => setIsOpen(false)}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full hover:bg-[color:var(--turquoise-soft)] transition-colors"
                aria-label="Cerrar menú"
              >
                <X className="h-6 w-6 text-[color:var(--ink)]" />
              </motion.button>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-1 mt-6 flex-1">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.05 }}
                >
                  <a
                    href={l.href}
                    className="block py-3.5 text-xl font-display font-semibold text-[color:var(--ink)] hover:text-[color:var(--turquoise-deep)] transition-colors border-b border-[color:var(--turquoise-soft)]/50"
                    onClick={() => setIsOpen(false)}
                  >
                    {l.label}
                  </a>
                </motion.div>
              ))}
            </nav>

            {/* Bottom CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38 }}
              className="flex flex-col gap-3 mt-6"
            >
              <a
                href="#agendar"
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-4 text-base font-semibold text-white rounded-2xl"
                style={{ background: "linear-gradient(135deg, var(--turquoise-deep) 0%, var(--turquoise) 100%)" }}
                onClick={() => setIsOpen(false)}
              >
                <Calendar className="w-4 h-4" />
                Agendar cita
              </a>
              <a
                href={`tel:${clinic.contact.phoneTel}`}
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-4 text-base font-semibold text-[color:var(--ink)] rounded-2xl border border-[color:var(--turquoise-soft)] hover:bg-[color:var(--turquoise-soft)] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {clinic.contact.phone}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
