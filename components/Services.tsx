"use client";

import { motion } from "framer-motion";
import {
  Sparkles, UserRound, Baby, Smile, Star, Grid3x3, Zap, EyeOff,
  Cpu, Flashlight, Stethoscope, Wrench, Gem, Heart, Candy,
  ShieldCheck, ClipboardList, Atom, ArrowRight,
} from "lucide-react";
import { services, type Service } from "@/lib/data/clinic";
import { useState } from "react";
import Reveal from "@/components/Reveal";

const iconMap: Record<string, typeof Sparkles> = {
  Sparkles, UserRound, Baby, Smile, Star, Grid3x3, Zap, EyeOff,
  Cpu, Flashlight, Stethoscope, Wrench, Gem, Heart, Candy,
  ShieldCheck, ClipboardList, Atom,
};

const categories = [
  { key: "all", label: "Todos" },
  { key: "ortodoncia", label: "Ortodoncia" },
  { key: "estetica", label: "Estética" },
  { key: "infantil", label: "Infantil" },
  { key: "general", label: "General" },
] as const;

export default function Services() {
  const [filter, setFilter] = useState<(typeof categories)[number]["key"]>("all");
  const filtered =
    filter === "all" ? services : services.filter((s) => s.category === filter);

  return (
    <section id="servicios" className="relative py-20 md:py-28 bg-[color:var(--off-white)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--turquoise-deep)] font-semibold mb-4">
            Tratamientos
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[color:var(--ink)] leading-tight">
            Soluciones para cada sonrisa
          </h2>
          <p className="mt-5 text-[color:var(--ink-soft)] text-lg">
            Desde ortodoncia invisible hasta diseño integral, con tecnología de vanguardia
            y un enfoque 100% personalizado.
          </p>
        </Reveal>

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setFilter(c.key)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === c.key
                  ? "bg-[color:var(--ink)] text-white shadow-md"
                  : "bg-white text-[color:var(--ink-soft)] border border-[color:var(--silver)]/30 hover:border-[color:var(--turquoise)] hover:text-[color:var(--turquoise-deep)]"
              }`}
            >
              {c.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((s, i) => (
            <ServiceCard key={s.slug} service={s} delay={Math.min(i * 0.05, 0.4)} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service, delay }: { service: Service; delay: number }) {
  const Icon = iconMap[service.icon] ?? Sparkles;

  return (
    <motion.a
      layout
      href={`#contacto`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      className="group relative bg-white rounded-3xl p-7 border border-[color:var(--silver)]/15 hover:border-[color:var(--turquoise)]/40 shadow-sm hover:shadow-xl hover:shadow-[color:var(--turquoise)]/10 transition-all overflow-hidden"
    >
      {/* Subtle bg hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--turquoise-soft)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative">
        <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-[color:var(--turquoise-soft)] to-white border border-[color:var(--turquoise)]/20 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:rotate-3 transition-transform">
          <Icon className="w-5 h-5 text-[color:var(--turquoise-deep)]" />
        </div>

        <div className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--gold)] font-bold mb-2">
          {service.tagline}
        </div>
        <h3 className="font-display font-bold text-xl text-[color:var(--ink)] mb-3">
          {service.title}
        </h3>
        <p className="text-sm text-[color:var(--ink-soft)] leading-relaxed line-clamp-3">
          {service.description}
        </p>

        <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[color:var(--turquoise-deep)] opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all">
          Más información <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.a>
  );
}
