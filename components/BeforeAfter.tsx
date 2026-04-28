"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";

const cases = [
  {
    id: 1,
    title: "Diseño de sonrisa integral",
    duration: "18 meses",
    before: "/images/before/segunda%20persona/antes.png",
    after: "/images/before/segunda%20persona/despues.png",
  },
  {
    id: 2,
    title: "Ortodoncia de autoligado",
    duration: "12 meses",
    before: "/images/before/3%20persona/antes.png",
    after: "/images/before/3%20persona/despues.png",
  },
  {
    id: 3,
    title: "Transformación de sonrisa",
    duration: "",
    before: "/images/before/after/before.jpg",
    after: "/images/before/after/afterr.jpg",
  },
];

function CaseCard({ c, index }: { c: (typeof cases)[number]; index: number }) {
  const [view, setView] = useState<"before" | "after">("after");

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: index * 0.12 }}
    >
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          aspectRatio: "3/4",
          boxShadow: "0 4px 28px rgba(11,43,58,0.10), 0 1px 4px rgba(11,43,58,0.06)",
        }}
      >
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{ opacity: view === "after" ? 1 : 0 }}
        >
          <Image
            src={c.after}
            alt={`${c.title} — después`}
            fill
            draggable={false}
            className="object-cover"
            sizes="(max-width: 640px) 85vw, 33vw"
          />
        </div>

        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{ opacity: view === "before" ? 1 : 0 }}
        >
          <Image
            src={c.before}
            alt={`${c.title} — antes`}
            fill
            draggable={false}
            className="object-cover"
            sizes="(max-width: 640px) 85vw, 33vw"
          />
        </div>

        <div
          className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(11,43,58,0.50), transparent)" }}
        />

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {(["before", "after"] as const).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className="px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer"
              style={{
                transition: "all 0.25s ease",
                background:
                  view === v
                    ? v === "after" ? "var(--turquoise-deep)" : "rgba(255,255,255,0.96)"
                    : "rgba(255,255,255,0.22)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                color:
                  view === v
                    ? v === "after" ? "#fff" : "var(--ink)"
                    : "rgba(255,255,255,0.88)",
                boxShadow: view === v ? "0 2px 14px rgba(0,0,0,0.18)" : "none",
                transform: view === v ? "scale(1.05)" : "scale(1)",
              }}
            >
              {v === "before" ? "Antes" : "Después"}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 px-1">
        <div
          className="flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-semibold mb-1"
          style={{ color: "var(--turquoise-deep)" }}
        >
          <Sparkles className="w-3 h-3" />
          Caso {index + 1}{c.duration ? ` · ${c.duration}` : ""}
        </div>
        <div className="font-display font-semibold text-sm" style={{ color: "var(--ink)" }}>
          {c.title}
        </div>
      </div>
    </motion.div>
  );
}

export default function BeforeAfter() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / (el.scrollWidth / cases.length));
    setActiveIndex(Math.max(0, Math.min(cases.length - 1, idx)));
  };

  const scrollTo = (i: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[i] as HTMLElement;
    card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  return (
    <section className="relative py-20 md:py-28 bg-[color:var(--off-white)]">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-20 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(79,195,199,0.06), transparent)" }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 px-5 sm:px-8">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--turquoise-deep)] font-semibold mb-4">
              Transformaciones reales
            </div>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[color:var(--ink)] leading-tight">
              Sonrisas que hablan{" "}
              <span className="text-[color:var(--turquoise-deep)]">por sí solas</span>
            </h2>
            <p className="mt-5 text-[color:var(--ink-soft)]">
              Casos reales de nuestros pacientes.
              Los tiempos varían según cada tratamiento.
            </p>
          </Reveal>
        </div>

        {/* Mobile: snap carousel */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="sm:hidden flex overflow-x-auto gap-4 px-5 pb-2"
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {cases.map((c, i) => (
            <div
              key={c.id}
              style={{ scrollSnapAlign: "center", flexShrink: 0, width: "82vw" }}
            >
              <CaseCard c={c} index={i} />
            </div>
          ))}
        </div>

        {/* Mobile: dots */}
        <div className="sm:hidden flex justify-center gap-2 mt-5">
          {cases.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Caso ${i + 1}`}
              style={{
                width: activeIndex === i ? 20 : 6,
                height: 6,
                borderRadius: 3,
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease",
                background: activeIndex === i ? "var(--turquoise-deep)" : "rgba(79,195,199,0.3)",
              }}
            />
          ))}
        </div>

        {/* Desktop: 3-col grid */}
        <div className="hidden sm:grid sm:grid-cols-3 gap-6 md:gap-8 px-5 sm:px-8">
          {cases.map((c, i) => (
            <CaseCard key={c.id} c={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
