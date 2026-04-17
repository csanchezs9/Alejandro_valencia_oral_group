"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Award, Users, Smile, Clock } from "lucide-react";
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
  {
    icon: Users,
    value: clinic.stats.patients,
    suffix: "+",
    label: "Pacientes atendidos",
  },
  {
    icon: Clock,
    value: clinic.stats.yearsExperience,
    suffix: "+",
    label: "Años de experiencia",
  },
  {
    icon: Smile,
    value: clinic.stats.smilesDelivered,
    suffix: "+",
    label: "Sonrisas transformadas",
  },
  {
    icon: Award,
    value: 4,
    suffix: "",
    label: "Aseguradoras aliadas",
  },
];

export default function SocialProof() {
  return (
    <section className="relative py-16 md:py-24 bg-[color:var(--ink)] overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[color:var(--turquoise)] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[color:var(--gold)] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--turquoise)] font-semibold mb-4">
            Resultados que hablan
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white leading-tight">
            Experiencia, precisión y confianza
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative group"
            >
              <div className="h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 hover:border-[color:var(--turquoise)]/40 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[color:var(--turquoise)]/30 to-[color:var(--turquoise)]/5 flex items-center justify-center mb-5 border border-[color:var(--turquoise)]/20">
                  <s.icon className="w-5 h-5 text-[color:var(--turquoise)]" />
                </div>
                <div className="font-display font-extrabold text-3xl md:text-5xl text-white leading-none tracking-tight">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-sm text-white/60">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Insurance logos row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14 pt-10 border-t border-white/10"
        >
          <div className="text-center text-xs uppercase tracking-[0.25em] text-white/40 mb-6">
            Trabajamos con
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {clinic.pricing.insurances.map((name) => (
              <div
                key={name}
                className="text-white/70 font-display font-semibold tracking-wide text-sm md:text-base hover:text-white transition-colors"
              >
                {name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
