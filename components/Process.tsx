"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  CalendarCheck, Smile, Clock, ChevronRight,
  Star, CheckCircle2, ShieldCheck, Sparkles, BadgeCheck,
} from "lucide-react";
import { IPhoneMockup } from "@/components/ui/iphone-mockup";

/* ─────────────────────────────────────────
   PHONE SCALE  0.62 → visual ≈ 259 × 543 px
───────────────────────────────────────── */
const PHONE_SCALE = 0.62;
const OUTER_W = 417;
const OUTER_H = 876;
const LABEL_W = Math.round(OUTER_W * PHONE_SCALE);

/* ══════════════════════════════════════════
   SCREEN CONTENT
══════════════════════════════════════════ */
function Screen1() {
  const days = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  return (
    <div className="flex flex-col h-full bg-white text-[#1c1c1e]">
      <div className="bg-white px-6 pt-5 pb-5 border-b border-black/5">
        <p className="text-[15px] text-[#8e8e93] font-semibold uppercase tracking-widest mb-1.5">Tu cita</p>
        <p className="text-[26px] font-black leading-tight tracking-tight">Valoración inicial</p>
        <div className="mt-2 inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-600 text-[13px] font-semibold px-3 py-1 rounded-full">
          <ShieldCheck className="w-4 h-4" />
          Sin costo de valoración
        </div>
      </div>
      <div className="flex-1 px-5 py-4 space-y-3 overflow-hidden">
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 rounded-xl bg-[color:var(--turquoise)] flex items-center justify-center shrink-0">
              <CalendarCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-[17px] font-bold">Lunes 15 de Abril</p>
              <p className="text-[14px] text-[#8e8e93] font-medium">10:00 AM · 45 min</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-xl px-3 py-2">
            <Clock className="w-4 h-4 text-[color:var(--turquoise)]" />
            <p className="text-[13px] text-[#3c3c43] font-medium">Diagnóstico completo incluido</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[color:var(--turquoise)] to-[color:var(--turquoise-deep)] flex items-center justify-center text-white text-[15px] font-black shrink-0">
            AV
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[16px] font-bold truncate">Dr. Alejandro Valencia</p>
            <p className="text-[13px] text-[#8e8e93] font-medium">Ortodoncista certificado</p>
          </div>
          <div className="flex flex-col items-end gap-0.5">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-[#fbbf24] text-[#fbbf24]" />
              <span className="text-[15px] font-black">4.9</span>
            </div>
            <span className="text-[11px] text-[#8e8e93]">500+ reseñas</span>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-2">
          {days.map((d, i) => (
            <div key={d} className={`rounded-xl py-2 text-center text-[12px] font-bold ${
              i === 0 ? "bg-[color:var(--turquoise)] text-white shadow-sm" : "bg-white text-[#1c1c1e]"
            }`}>{d}</div>
          ))}
        </div>
        <button className="w-full bg-[color:var(--turquoise-deep)] text-white text-[16px] font-black py-3.5 rounded-2xl shadow-md">
          Confirmar cita
        </button>
      </div>
    </div>
  );
}

function Screen2() {
  const checkSteps = [
    { label: "Escáner 3D intraoral",   done: true  },
    { label: "Simulación digital",      done: true  },
    { label: "Fabricación alineadores", done: false },
    { label: "Inicio tratamiento",      done: false },
  ];
  return (
    <div className="flex flex-col h-full bg-white text-[#1c1c1e]">
      <div className="bg-white px-6 pt-5 pb-5 border-b border-black/5">
        <p className="text-[15px] text-[#8e8e93] font-semibold uppercase tracking-widest mb-1.5">Tu plan</p>
        <p className="text-[26px] font-black leading-tight tracking-tight">Plan de tratamiento</p>
        <div className="mt-2 inline-flex items-center gap-1.5 bg-violet-50 text-violet-600 text-[13px] font-semibold px-3 py-1 rounded-full">
          <Sparkles className="w-4 h-4" />
          Fabricado a medida para ti
        </div>
      </div>
      <div className="flex-1 px-5 py-4 space-y-3 overflow-hidden">
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[16px] font-bold">Ortodoncia invisible</p>
            <span className="text-[12px] bg-[color:var(--turquoise)]/10 text-[color:var(--turquoise-deep)] font-bold px-3 py-1 rounded-full">14 meses</span>
          </div>
          <div className="w-full bg-[#e5e7eb] rounded-full h-2.5 mb-2">
            <div className="bg-[color:var(--turquoise)] h-2.5 rounded-full w-[30%]" />
          </div>
          <div className="flex justify-between">
            <p className="text-[13px] text-[#8e8e93] font-medium">Mes 4 de 14</p>
            <p className="text-[13px] text-[color:var(--turquoise)] font-bold">30% completado</p>
          </div>
        </div>
        {checkSteps.map((item) => (
          <div key={item.label} className={`bg-white rounded-2xl px-4 py-3 shadow-sm flex items-center gap-3 ${item.done ? "" : "opacity-55"}`}>
            <CheckCircle2 className={`w-5 h-5 shrink-0 ${item.done ? "text-[color:var(--turquoise)]" : "text-[#d1d5db]"}`} />
            <p className={`text-[14px] font-semibold ${item.done ? "text-[#1c1c1e]" : "text-[#8e8e93]"}`}>{item.label}</p>
            {item.done && <BadgeCheck className="w-4 h-4 text-[color:var(--turquoise)] ml-auto shrink-0" />}
          </div>
        ))}
      </div>
    </div>
  );
}

function Screen3() {
  return (
    <div className="flex flex-col h-full bg-white text-[#1c1c1e]">
      <div className="bg-white px-6 pt-5 pb-5 border-b border-black/5">
        <p className="text-[15px] text-[#8e8e93] font-semibold uppercase tracking-widest mb-1.5">Resultado</p>
        <p className="text-[26px] font-black leading-tight tracking-tight">Tu nueva sonrisa</p>
        <div className="mt-2 inline-flex items-center gap-1.5 bg-amber-50 text-amber-600 text-[13px] font-semibold px-3 py-1 rounded-full">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          127 pacientes transformados
        </div>
      </div>
      <div className="flex-1 px-5 py-4 space-y-3 overflow-hidden">
        <div className="bg-[color:var(--turquoise)] rounded-2xl p-5 text-white text-center shadow-lg">
          <Smile className="w-12 h-12 mx-auto mb-2 opacity-90" />
          <p className="text-[18px] font-black">¡Tratamiento completado!</p>
          <p className="text-[14px] opacity-75 mt-1 font-medium">14 meses · 38 visitas</p>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex gap-0.5 mb-2">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-[#fbbf24] text-[#fbbf24]" />)}
          </div>
          <p className="text-[14px] text-[#1c1c1e] font-medium leading-snug italic">
            "Superó todas mis expectativas.<br />El doctor Valencia es increíble."
          </p>
          <p className="text-[12px] text-[#8e8e93] mt-2 font-semibold">— María G., paciente 2024</p>
        </div>
        <div className="bg-white rounded-2xl px-4 py-3 shadow-sm flex items-center justify-between">
          <p className="text-[14px] font-bold">Ver mi antes y después</p>
          <ChevronRight className="w-5 h-5 text-[color:var(--turquoise)]" />
        </div>
        <button className="w-full bg-[#1c1c1e] text-white text-[16px] font-black py-3.5 rounded-2xl">
          Agendar revisión
        </button>
      </div>
    </div>
  );
}

function Phone({ children, shadow }: { children: React.ReactNode; shadow?: string }) {
  return (
    <div style={{ width: OUTER_W * PHONE_SCALE, height: OUTER_H * PHONE_SCALE, position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0 }}>
        <IPhoneMockup
          model="15-pro"
          color="space-black"
          scale={PHONE_SCALE}
          shadow={shadow ?? "0 24px 60px rgba(0,0,0,0.55), 0 4px 12px rgba(0,0,0,0.3)"}
          screenBg="#ffffff"
          safeArea
          innerShadow={false}
        >
          {children}
        </IPhoneMockup>
      </div>
    </div>
  );
}

const steps = [
  { title: "Valoración sin costo", desc: "Diagnóstico completo, radiografías y simulación de tu sonrisa ideal — todo gratis." },
  { title: "Plan hecho para ti",   desc: "Tecnología 3D, alineadores a medida y resultados visibles desde el primer mes."     },
  { title: "Sonrisa que enamora",  desc: "Transformación real, permanente y respaldada por más de 2.500 pacientes felices."   },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef    = useRef<HTMLDivElement>(null);
  const groupRef   = useRef<HTMLDivElement>(null);
  const leftRef    = useRef<HTMLDivElement>(null);
  const centerRef  = useRef<HTMLDivElement>(null);
  const rightRef   = useRef<HTMLDivElement>(null);
  const label1Ref  = useRef<HTMLDivElement>(null);
  const label2Ref  = useRef<HTMLDivElement>(null);
  const label3Ref  = useRef<HTMLDivElement>(null);
  const hintRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
        },
        defaults: { ease: "power3.inOut" },
      });

      tl.fromTo(groupRef.current,
        { y: 90, scale: 0.96 },
        { y: 0, scale: 1, ease: "power3.out", duration: 1.4 },
        0,
      );

      tl.fromTo(headRef.current,
        { opacity: 1, y: 0, filter: "blur(0px)" },
        { opacity: 0, y: -52, filter: "blur(4px)", ease: "power2.in", duration: 1.8 },
        0,
      );

      tl.fromTo(hintRef.current,
        { opacity: 1 },
        { opacity: 0, ease: "power1.in", duration: 0.4 },
        0,
      );

      tl.fromTo(leftRef.current,
        { x: "0%", rotateY: -14, scale: 0.80, opacity: 0.85 },
        { x: "-72%", rotateY: 0, scale: 1, opacity: 1, duration: 4 },
        0,
      );

      tl.fromTo(rightRef.current,
        { x: "0%", rotateY: 14, scale: 0.80, opacity: 0.85 },
        { x: "72%", rotateY: 0, scale: 1, opacity: 1, duration: 4 },
        0,
      );

      tl.fromTo(centerRef.current,
        { y: 20, scale: 0.88, rotateX: 6 },
        { y: 0, scale: 1, rotateX: 0, ease: "power3.out", duration: 4 },
        0,
      );

      tl.fromTo(
        [label1Ref.current, label2Ref.current, label3Ref.current],
        { opacity: 0, y: 28, filter: "blur(6px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", stagger: 0.22, ease: "power2.out", duration: 1.6 },
        3.2,
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="proceso"
      ref={sectionRef}
      className="relative h-[200vh]"
    >
      <div
        className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{ perspective: "1400px" }}
      >
        {/* Same overlay as SocialProof for visual continuity */}
        <div className="absolute inset-0 z-0 bg-[color:var(--ink)]/55" />

        {/* ── Heading ── */}
        <div
          ref={headRef}
          className="absolute top-10 md:top-14 inset-x-0 text-center px-4 z-50 pointer-events-none"
        >
          <p className="text-[11px] uppercase tracking-[0.35em] text-[color:var(--turquoise)] font-semibold mb-3">
            Tu camino
          </p>
          <h2 className="font-display font-black text-3xl md:text-5xl text-white leading-tight drop-shadow-lg">
            Tres pasos hacia tu<br />mejor sonrisa
          </h2>
        </div>

        {/* ── Phones cluster ── */}
        <div
          ref={groupRef}
          className="relative z-10 flex items-start justify-center"
        >
          {/* Left */}
          <div ref={leftRef} className="relative z-10" style={{ willChange: "transform", backfaceVisibility: "hidden" }}>
            <Phone><Screen1 /></Phone>
            <div
              ref={label1Ref}
              className="mt-5 text-center opacity-0"
              style={{ width: LABEL_W }}
            >
              <p className="text-white font-display font-black text-xl leading-snug">{steps[0].title}</p>
              <p className="text-white/65 text-[15px] mt-2 leading-snug px-1">{steps[0].desc}</p>
            </div>
          </div>

          {/* Center */}
          <div ref={centerRef} className="relative z-20" style={{ willChange: "transform", backfaceVisibility: "hidden" }}>
            <Phone shadow="0 32px 90px rgba(0,0,0,0.70), 0 8px 24px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.05)">
              <Screen2 />
            </Phone>
            <div
              ref={label2Ref}
              className="mt-5 text-center opacity-0"
              style={{ width: LABEL_W }}
            >
              <p className="text-white font-display font-black text-xl leading-snug">{steps[1].title}</p>
              <p className="text-white/65 text-[15px] mt-2 leading-snug px-1">{steps[1].desc}</p>
            </div>
          </div>

          {/* Right */}
          <div ref={rightRef} className="relative z-10" style={{ willChange: "transform", backfaceVisibility: "hidden" }}>
            <Phone><Screen3 /></Phone>
            <div
              ref={label3Ref}
              className="mt-5 text-center opacity-0"
              style={{ width: LABEL_W }}
            >
              <p className="text-white font-display font-black text-xl leading-snug">{steps[2].title}</p>
              <p className="text-white/65 text-[15px] mt-2 leading-snug px-1">{steps[2].desc}</p>
            </div>
          </div>
        </div>

        {/* ── Scroll hint ── */}
        <div
          ref={hintRef}
          className="absolute bottom-8 z-10 flex flex-col items-center gap-2 pointer-events-none"
        >
          <p className="text-white/25 text-[10px] uppercase tracking-[0.3em]">Desplaza</p>
          <div className="w-px h-7 bg-gradient-to-b from-white/30 to-transparent animate-bounce" />
        </div>

      </div>
    </section>
  );
}
