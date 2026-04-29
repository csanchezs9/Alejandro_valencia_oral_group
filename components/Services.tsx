"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Sparkles, UserRound, Baby, Smile, Star, Grid3x3, Zap, EyeOff,
  Cpu, Flashlight, Stethoscope, Wrench, Gem, Heart, Candy,
  ShieldCheck, ClipboardList, Atom, ArrowRight,
} from "lucide-react";
import { services, type Service } from "@/lib/data/clinic";
import { useCallback, useRef, useState } from "react";
import { useLenis } from "@/components/SmoothScroll";
import Reveal from "@/components/Reveal";
import Image from "next/image";

const iconMap: Record<string, typeof Sparkles> = {
  Sparkles, UserRound, Baby, Smile, Star, Grid3x3, Zap, EyeOff,
  Cpu, Flashlight, Stethoscope, Wrench, Gem, Heart, Candy,
  ShieldCheck, ClipboardList, Atom,
};

const categories = [
  { key: "ortodoncia", label: "Ortodoncia" },
  { key: "estetica", label: "Estética" },
  { key: "infantil", label: "Infantil" },
  { key: "general", label: "General" },
] as const;

const MAX_VISIBLE = 6;

export default function Services() {
  const [filter, setFilter] = useState<(typeof categories)[number]["key"]>("ortodoncia");
  const [showAll, setShowAll] = useState(false);
  const filtered = services.filter((s) => s.category === filter);
  const visible = showAll ? filtered : filtered.slice(0, MAX_VISIBLE);
  const hasMore = filtered.length > MAX_VISIBLE;

  const sectionRef = useRef<HTMLElement>(null);
  const lenisRef = useLenis();

  /** Scroll the viewport so the top of the treatments section is just below the navbar. */
  const scrollToSection = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return;

    const NAV_OFFSET = 88;
    const lenis = lenisRef.current;

    // 1. Stop Lenis so it doesn't fight our programmatic scroll
    if (lenis) lenis.stop();

    // 2. Immediately snap scroll to the section top
    const doSnap = () => {
      const rect = section.getBoundingClientRect();
      const target = window.scrollY + rect.top - NAV_OFFSET;
      window.scrollTo({ top: Math.max(0, target), behavior: "instant" as ScrollBehavior });
    };

    doSnap();

    // 3. Keep correcting across multiple frames while Framer Motion settles exit animations.
    //    The exit animations last ~180ms (see ServiceCard exit), so we poll for 350ms.
    let elapsed = 0;
    const INTERVAL = 16; // ~1 frame
    const MAX_DURATION = 350;

    const timer = setInterval(() => {
      elapsed += INTERVAL;
      doSnap();
      if (elapsed >= MAX_DURATION) {
        clearInterval(timer);
        // 4. Re-enable Lenis smooth scrolling now that everything has settled
        if (lenis) lenis.start();
      }
    }, INTERVAL);
  }, [lenisRef]);

  const toggleShowAll = () => {
    if (showAll) {
      // Collapsing: first set state, then scroll on next tick
      setShowAll(false);
      // Use requestAnimationFrame so React has committed the DOM update (fewer cards)
      requestAnimationFrame(() => {
        scrollToSection();
      });
    } else {
      setShowAll(true);
    }
  };

  return (
    <section ref={sectionRef} id="servicios" className="relative pt-10 md:pt-14 pb-10 md:pb-14 bg-[color:var(--off-white)]">
      <div className="px-5 sm:px-8 lg:px-16 xl:px-24 lg:pr-12">
        <Reveal className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--turquoise-deep)] font-semibold mb-4">
            Tratamientos
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[color:var(--ink)] leading-tight">
            Soluciones para cada sonrisa
          </h2>
          <p className="mt-5 text-[color:var(--ink-soft)] text-base sm:text-lg">
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
              onClick={() => { setFilter(c.key); setShowAll(false); }}
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence initial={false} mode="sync">
            {visible.map((s, i) => (
              <ServiceCard
                key={`${filter}-${s.slug}`}
                service={s}
                delay={i < MAX_VISIBLE ? Math.min(i * 0.035, 0.18) : Math.min((i - MAX_VISIBLE) * 0.04, 0.2)}
              />
            ))}
          </AnimatePresence>
        </div>

        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={toggleShowAll}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm border-2 border-[color:var(--turquoise)]/40 text-[color:var(--turquoise-deep)] hover:bg-[color:var(--turquoise-soft)] transition-colors"
            >
              {showAll ? "Ver menos" : "Ver más servicios"} <ArrowRight className={`w-4 h-4 transition-transform ${showAll ? "rotate-[-90deg]" : ""}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function ServiceCard({ service, delay }: { service: Service; delay: number }) {
  const Icon = iconMap[service.icon] ?? Sparkles;

  return (
    <motion.a
      href="#contacto"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, transition: { duration: 0.18, ease: "easeOut" } }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white rounded-3xl border border-[color:var(--silver)]/15 hover:border-[color:var(--turquoise)]/40 shadow-sm hover:shadow-xl hover:shadow-[color:var(--turquoise)]/10 transition-all overflow-hidden flex flex-col"
    >
      {/* Image banner */}
      {service.image && (
        <div className="relative h-40 sm:h-52 overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>
      )}

      {/* Subtle bg hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--turquoise-soft)] to-transparent opacity-0 group-hover:opacity-60 transition-opacity pointer-events-none" />

      {/* Content */}
      <div className="relative flex flex-col flex-1 p-6 pt-5">
        <div className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--gold)] font-bold mb-1.5">
          {service.tagline}
        </div>
        <h3 className="font-display font-bold text-xl text-[color:var(--ink)] mb-3 leading-snug">
          {service.title}
        </h3>
        <p className="text-sm text-[color:var(--ink-soft)] leading-relaxed line-clamp-3 flex-1">
          {service.description}
        </p>

        <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[color:var(--turquoise-deep)] opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all">
          Más información <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.a>
  );
}
