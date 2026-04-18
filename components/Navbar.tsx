"use client";

import { useState } from "react";
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

  return (
    <div className="fixed top-0 inset-x-0 z-50 flex justify-center py-4 px-4 pointer-events-none">
      <motion.div
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex items-center justify-between px-5 py-3 bg-white rounded-full shadow-lg w-full max-w-3xl relative pointer-events-auto"
        style={{ boxShadow: "0 4px 24px rgba(11,43,58,0.10), 0 1px 4px rgba(11,43,58,0.06)" }}
      >
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            whileHover={{ rotate: 8 }}
            transition={{ duration: 0.3 }}
            className="w-8 h-8 rounded-xl bg-gradient-to-br from-[color:var(--turquoise)] to-[color:var(--turquoise-deep)] flex items-center justify-center shadow-sm relative"
          >
            <span className="text-white font-display font-black text-sm leading-none">OG</span>
            <span className="absolute -right-0.5 -bottom-0.5 w-2 h-2 rounded-full bg-[color:var(--gold)] border-[1.5px] border-white" />
          </motion.div>
          <div className="hidden sm:block">
            <div className="font-display font-bold text-[color:var(--ink)] text-sm leading-tight">Dr. Alejandro Valencia</div>
            <div className="text-[10px] text-[color:var(--ink-soft)] leading-tight">Ortodoncista · Medellín</div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
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
            className="inline-flex items-center gap-1.5 px-5 py-2 text-sm text-white rounded-full font-semibold transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, var(--turquoise-deep) 0%, var(--turquoise) 100%)" }}
          >
            <Calendar className="w-3.5 h-3.5" />
            Agendar cita
          </a>
        </motion.div>

        {/* Mobile hamburger */}
        <motion.button
          className="md:hidden flex items-center p-1"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label="Menú"
        >
          <Menu className="h-5 w-5 text-[color:var(--ink)]" />
        </motion.button>
      </motion.div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 pt-24 px-6 md:hidden pointer-events-auto"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.button
              className="absolute top-6 right-6 p-2"
              onClick={() => setIsOpen(false)}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              aria-label="Cerrar menú"
            >
              <X className="h-6 w-6 text-[color:var(--ink)]" />
            </motion.button>

            <div className="flex flex-col space-y-6">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 + 0.1 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <a
                    href={l.href}
                    className="text-xl font-display font-semibold text-[color:var(--ink)]"
                    onClick={() => setIsOpen(false)}
                  >
                    {l.label}
                  </a>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                exit={{ opacity: 0, y: 20 }}
                className="pt-4"
              >
                <a
                  href="#agendar"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 text-base font-semibold text-white rounded-full"
                  style={{ background: "linear-gradient(135deg, var(--turquoise-deep) 0%, var(--turquoise) 100%)" }}
                  onClick={() => setIsOpen(false)}
                >
                  <Calendar className="w-4 h-4" />
                  Agendar cita
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="pt-2 border-t border-[color:var(--turquoise-soft)]"
              >
                <a
                  href={`tel:${clinic.contact.phoneTel}`}
                  className="text-sm text-[color:var(--ink-soft)]"
                >
                  📞 {clinic.contact.phone}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
