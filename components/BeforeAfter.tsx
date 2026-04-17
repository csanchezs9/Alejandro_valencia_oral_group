"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const cases = [
  {
    id: 2,
    title: "Diseño de sonrisa integral",
    duration: "18 meses",
    before: "/images/cdn/dd7adb7f281d3c51969c8f5e60cb653f.jpg",
    after: "/images/cdn/5cff68b6748abacf98a87e5051188d16.jpg",
  },
  {
    id: 3,
    title: "Ortodoncia de autoligado",
    duration: "12 meses",
    before: "/images/cdn/2bda9a8f7e3d4f466186b2c336957fd5.jpg",
    after: "/images/cdn/054036d07af8ae2432fc1ef6ff78fa12.jpg",
  },
  {
    id: 4,
    title: "Transformación de sonrisa",
    duration: "",
    before: "/images/before/after/before.jpg",
    after: "/images/before/after/afterr.jpg",
  },
];

function SliderCard({ c, index }: { c: (typeof cases)[number]; index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const x = useMotionValue(50);
  const clipAfter = useTransform(x, (v) => `inset(0 0 0 ${v}%)`);
  const clipBefore = useTransform(x, (v) => `inset(0 ${100 - v}% 0 0)`);
  const handleLeft = useTransform(x, (v) => `${v}%`);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const controls = animate(x, [50, 85, 15, 50], {
              duration: 3,
              ease: "easeInOut",
            });
            obs.disconnect();
            return () => controls.stop();
          }
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [x]);

  const handleMove = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    x.set(Math.max(0, Math.min(100, pct)));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div
        ref={containerRef}
        className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl shadow-[color:var(--ink)]/15 select-none cursor-ew-resize touch-none bg-[color:var(--ink)]"
        onMouseMove={(e) => isDragging.current && handleMove(e.clientX)}
        onMouseDown={(e) => { isDragging.current = true; handleMove(e.clientX); }}
        onMouseUp={() => { isDragging.current = false; }}
        onMouseLeave={() => { isDragging.current = false; }}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchStart={(e) => handleMove(e.touches[0].clientX)}
      >
        {/* After image */}
        <motion.div style={{ clipPath: clipAfter }} className="absolute inset-0">
          <Image
            src={c.after}
            alt="Después"
            fill
            draggable={false}
            className="object-cover pointer-events-none"
            sizes="(max-width: 768px) 90vw, 33vw"
          />
          <div className="absolute right-0 top-0 bottom-0 w-7 flex items-center justify-center bg-gradient-to-l from-[color:var(--turquoise-deep)]/60 to-transparent">
            <span
              className="text-white text-[9px] font-bold uppercase tracking-[0.35em] select-none"
              style={{ writingMode: "vertical-rl" }}
            >
              Después
            </span>
          </div>
        </motion.div>

        {/* Before image */}
        <motion.div style={{ clipPath: clipBefore }} className="absolute inset-0">
          <Image
            src={c.before}
            alt="Antes"
            fill
            draggable={false}
            className="object-cover pointer-events-none"
            sizes="(max-width: 768px) 90vw, 33vw"
          />
          <div className="absolute left-0 top-0 bottom-0 w-7 flex items-center justify-center bg-gradient-to-r from-black/40 to-transparent">
            <span
              className="text-white text-[9px] font-bold uppercase tracking-[0.35em] select-none"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              Antes
            </span>
          </div>
        </motion.div>

        {/* Divider line + handle */}
        <motion.div
          style={{ left: handleLeft }}
          className="absolute top-0 bottom-0 w-[3px] bg-white/90 -translate-x-1/2 shadow-[0_0_12px_rgba(255,255,255,0.7)] pointer-events-none"
        />
        <motion.div
          style={{ left: handleLeft }}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-xl ring-4 ring-[color:var(--turquoise)]/30 pointer-events-none"
        >
          <ChevronLeft className="w-3.5 h-3.5 text-[color:var(--ink)]" />
          <ChevronRight className="w-3.5 h-3.5 text-[color:var(--ink)]" />
        </motion.div>
      </div>

      {/* Caption */}
      <div className="mt-4">
        <div className="flex items-center gap-1.5 text-[color:var(--turquoise-deep)] text-xs uppercase tracking-[0.2em] font-semibold mb-1">
          <Sparkles className="w-3 h-3" />
          Caso {index + 1}{c.duration ? ` · ${c.duration}` : ""}
        </div>
        <div className="font-display font-semibold text-[color:var(--ink)] text-sm">
          {c.title}
        </div>
      </div>
    </motion.div>
  );
}

export default function BeforeAfter() {
  return (
    <section className="relative py-20 md:py-28 bg-[color:var(--off-white)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--turquoise-deep)] font-semibold mb-4">
            Transformaciones reales
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[color:var(--ink)] leading-tight">
            Arrastra para ver el{" "}
            <span className="text-[color:var(--turquoise-deep)]">antes y después</span>
          </h2>
          <p className="mt-5 text-[color:var(--ink-soft)]">
            Casos reales de nuestros pacientes. Los tiempos varían según cada tratamiento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <SliderCard key={c.id} c={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
