"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { clinic } from "@/lib/data/clinic";

export default function WhatsAppFab() {
  const msg = encodeURIComponent(
    `Hola ${clinic.doctor.shortName}, vengo de la web y quiero agendar una cita.`
  );
  return (
    <motion.a
      href={`https://wa.me/${clinic.contact.whatsappDigits}?text=${msg}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chatear por WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.5, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <span className="relative flex items-center gap-3 bg-[#25D366] text-white pl-4 pr-5 py-3.5 rounded-full shadow-2xl shadow-[#25D366]/30 hover:bg-[#1ebe5a] transition-colors">
        <MessageCircle className="w-5 h-5 shrink-0" />
        <span className="hidden sm:inline font-semibold text-sm">WhatsApp</span>
      </span>
    </motion.a>
  );
}
