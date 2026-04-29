"use client";

import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Sparkles, X } from "lucide-react";
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

type View = "before" | "after";

// ── Lightbox ──────────────────────────────────────────────────────────────────

function Lightbox({
  c,
  initialView,
  onClose,
}: {
  c: (typeof cases)[number];
  initialView: View;
  onClose: () => void;
}) {
  const [view, setView] = useState<View>(initialView);
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const dragging = useRef(false);
  const dragOrigin = useRef({ mx: 0, my: 0, px: 0, py: 0 });
  const pinchDist = useRef<number | null>(null);
  const areaRef = useRef<HTMLDivElement>(null);

  // ESC to close
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  // lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const resetZoom = () => { setScale(1); setPos({ x: 0, y: 0 }); };

  // mouse drag
  const onMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    dragging.current = true;
    dragOrigin.current = { mx: e.clientX, my: e.clientY, px: pos.x, py: pos.y };
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return;
    setPos({
      x: dragOrigin.current.px + e.clientX - dragOrigin.current.mx,
      y: dragOrigin.current.py + e.clientY - dragOrigin.current.my,
    });
  };
  const onMouseUp = () => { dragging.current = false; };

  // touch pinch
  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      pinchDist.current = Math.hypot(dx, dy);
    }
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length !== 2 || pinchDist.current === null) return;
    const dx = e.touches[0].clientX - e.touches[1].clientX;
    const dy = e.touches[0].clientY - e.touches[1].clientY;
    const dist = Math.hypot(dx, dy);
    const delta = dist / pinchDist.current;
    setScale(s => Math.min(5, Math.max(1, s * delta)));
    pinchDist.current = dist;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.93)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full text-white transition-colors hover:bg-white/20"
        style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)" }}
        aria-label="Cerrar"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Image area */}
      <div
        ref={areaRef}
        className="relative select-none overflow-hidden"
        style={{
          width: "90vw",
          height: "84vh",
          cursor: scale > 1 ? "grab" : "default",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onDoubleClick={scale > 1 ? resetZoom : () => setScale(2.5)}
      >
        <div
          style={{
            transform: `scale(${scale}) translate(${pos.x / scale}px, ${pos.y / scale}px)`,
            transition: dragging.current ? "none" : "transform 0.15s ease",
            maxWidth: "100%",
            maxHeight: "100%",
            position: "relative",
          }}
        >
          {/* after */}
          <img
            src={c.after}
            alt={`${c.title} — después`}
            draggable={false}
            style={{
              maxWidth: "88vw",
              maxHeight: "78vh",
              display: "block",
              opacity: view === "after" ? 1 : 0,
              transition: "opacity 0.4s",
              userSelect: "none",
            }}
          />
          {/* before — absolute overlay */}
          <img
            src={c.before}
            alt={`${c.title} — antes`}
            draggable={false}
            style={{
              maxWidth: "88vw",
              maxHeight: "78vh",
              position: "absolute",
              inset: 0,
              display: "block",
              opacity: view === "before" ? 1 : 0,
              transition: "opacity 0.4s",
              userSelect: "none",
              objectFit: "contain",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20">
        <div className="flex gap-2">
          {(["before", "after"] as const).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all"
              style={{
                background: view === v ? "var(--turquoise-deep)" : "rgba(255,255,255,0.15)",
                color: view === v ? "#fff" : "rgba(255,255,255,0.75)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              {v === "before" ? "Antes" : "Después"}
            </button>
          ))}
        </div>
        <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
          Doble clic para zoom · pellizca en móvil
        </span>
      </div>
    </div>
  );
}

// ── Card ──────────────────────────────────────────────────────────────────────

function CaseCard({
  c,
  index,
  onOpenLightbox,
}: {
  c: (typeof cases)[number];
  index: number;
  onOpenLightbox: (v: View) => void;
}) {
  const [view, setView] = useState<View>("after");

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: index * 0.12 }}
    >
      <div
        className="relative rounded-2xl overflow-hidden group"
        style={{
          boxShadow: "0 4px 28px rgba(11,43,58,0.10), 0 1px 4px rgba(11,43,58,0.06)",
        }}
      >
        {/* clickable image area */}
        <button
          className="block w-full text-left cursor-zoom-in focus:outline-none"
          onClick={() => onOpenLightbox(view)}
          aria-label="Abrir imagen en grande"
        >
          {/* zoom wrapper */}
          <div className="transition-transform duration-500 ease-out group-hover:scale-105 origin-center">
            {/* after — in-flow, sets natural height */}
            <Image
              src={c.after}
              alt={`${c.title} — después`}
              width={0}
              height={0}
              sizes="(max-width: 640px) 80vw, 30vw"
              draggable={false}
              className="w-full h-auto block"
              style={{ opacity: view === "after" ? 1 : 0, transition: "opacity 0.5s" }}
            />

            {/* before — absolutely overlaid */}
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
                sizes="(max-width: 640px) 80vw, 30vw"
              />
            </div>
          </div>
        </button>

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

// ── Section ───────────────────────────────────────────────────────────────────

export default function BeforeAfter() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightbox, setLightbox] = useState<{ caseIdx: number; view: View } | null>(null);

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

  const closeLightbox = useCallback(() => setLightbox(null), []);

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
              style={{ scrollSnapAlign: "center", flexShrink: 0, width: "80vw" }}
            >
              <CaseCard c={c} index={i} onOpenLightbox={(v) => setLightbox({ caseIdx: i, view: v })} />
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
        <div className="hidden sm:grid sm:grid-cols-3 gap-6 md:gap-8 px-5 sm:px-8 max-w-5xl mx-auto">
          {cases.map((c, i) => (
            <CaseCard
              key={c.id}
              c={c}
              index={i}
              onOpenLightbox={(v) => setLightbox({ caseIdx: i, view: v })}
            />
          ))}
        </div>
      </div>

      {lightbox && (
        <Lightbox
          c={cases[lightbox.caseIdx]}
          initialView={lightbox.view}
          onClose={closeLightbox}
        />
      )}
    </section>
  );
}
