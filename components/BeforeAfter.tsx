"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const cases = [
  {
    id: 1,
    title: "Corrección de apiñamiento con alineadores",
    duration: "14 meses",
    before: "/images/cdn/475e3b6362545355a3afd97d1cae365f.jpg",
    after: "/images/cdn/4e7c7c881c23ca35a20a144f36c89c7a.jpg",
  },
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
];

export default function BeforeAfter() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(50);
  const clipAfter = useTransform(x, (v) => `inset(0 0 0 ${v}%)`);
  const clipBefore = useTransform(x, (v) => `inset(0 ${100 - v}% 0 0)`);
  const handleLeft = useTransform(x, (v) => `${v}%`);

  // Intro animation — sweep left-right-center on first visible
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

  const current = cases[index];

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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative max-w-4xl mx-auto"
        >
          <div
            ref={containerRef}
            className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl shadow-[color:var(--ink)]/15 select-none cursor-ew-resize touch-none bg-[color:var(--ink)]"
            onMouseMove={(e) => e.buttons === 1 && handleMove(e.clientX)}
            onMouseDown={(e) => handleMove(e.clientX)}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
            onTouchStart={(e) => handleMove(e.touches[0].clientX)}
          >
            {/* After image - full */}
            <motion.div
              style={{ clipPath: clipAfter }}
              className="absolute inset-0"
            >
              <Image
                src={current.after}
                alt="Después"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 900px"
              />
              <div className="absolute top-5 right-5 bg-[color:var(--turquoise-deep)] text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                Después
              </div>
            </motion.div>

            {/* Before image */}
            <motion.div
              style={{ clipPath: clipBefore }}
              className="absolute inset-0"
            >
              <Image
                src={current.before}
                alt="Antes"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 900px"
              />
              <div className="absolute top-5 left-5 bg-white/95 text-[color:var(--ink)] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                Antes
              </div>
            </motion.div>

            {/* Divider line + handle */}
            <motion.div
              style={{ left: handleLeft }}
              className="absolute top-0 bottom-0 w-[3px] bg-white/90 -translate-x-1/2 shadow-[0_0_12px_rgba(255,255,255,0.7)] pointer-events-none"
            />
            <motion.div
              style={{ left: handleLeft }}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center shadow-xl ring-4 ring-[color:var(--turquoise)]/30 pointer-events-none"
            >
              <ChevronLeft className="w-4 h-4 text-[color:var(--ink)]" />
              <ChevronRight className="w-4 h-4 text-[color:var(--ink)]" />
            </motion.div>
          </div>

          {/* Caption */}
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-[color:var(--turquoise-deep)] text-xs uppercase tracking-[0.2em] font-semibold mb-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Caso {index + 1} · {current.duration}
              </div>
              <div className="font-display font-semibold text-[color:var(--ink)] text-lg">
                {current.title}
              </div>
            </div>
            <div className="flex items-center gap-2">
              {cases.map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => setIndex(i)}
                  aria-label={`Caso ${i + 1}`}
                  className={`w-10 h-1.5 rounded-full transition-all ${
                    i === index
                      ? "bg-[color:var(--turquoise-deep)] w-14"
                      : "bg-[color:var(--silver)]/40 hover:bg-[color:var(--silver)]"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
