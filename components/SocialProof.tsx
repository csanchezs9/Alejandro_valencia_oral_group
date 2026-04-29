"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { clinic } from "@/lib/data/clinic";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1800, bounce: 0 });
  const display = useTransform(spring, (v) =>
    Math.round(v).toLocaleString("es-CO") + suffix
  );

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, to, mv]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

const stats = [
  { value: clinic.stats.patients,        suffix: "+", label: "Pacientes atendidos"    },
  { value: clinic.stats.yearsExperience, suffix: "+", label: "Años de experiencia"    },
  { value: clinic.stats.smilesDelivered, suffix: "+", label: "Sonrisas transformadas" },
  { value: 4,                            suffix: "",  label: "Aseguradoras aliadas"   },
];

export default function SocialProof() {
  return (
    <section className="relative pt-8 md:pt-10 pb-16 md:pb-24 overflow-hidden">
      {/* Dark overlay over shared background */}
      <div className="absolute inset-0 bg-[color:var(--ink)]/55" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={[
                "px-5 md:px-10 py-2",
                i === 0 ? "pl-0" : "",
                i === 3 ? "lg:pr-0" : "",
                (i === 1 || i === 3) ? "border-l border-white/15" : "",
                i === 2 ? "lg:border-l lg:border-white/15" : "",
                (i === 0 || i === 1) ? "pb-7 border-b border-white/10 lg:pb-2 lg:border-b-0" : "pt-7 lg:pt-2",
              ].join(" ")}
            >
              <div className="w-8 h-[2px] bg-[color:var(--gold)] mb-4" />
              <div className="font-display font-black text-4xl md:text-6xl text-white leading-none tracking-tight">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.2em] text-white/50 font-medium">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
