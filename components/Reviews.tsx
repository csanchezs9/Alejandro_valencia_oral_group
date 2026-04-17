"use client";

import { Star, Quote } from "lucide-react";
import Reveal from "@/components/Reveal";

const REVIEWS = [
  { name: "María C.",     city: "Medellín",    ago: "hace 2 días",    text: "El Dr. Valencia es increíble. Mi sonrisa cambió completamente en 14 meses. Lo recomiendo con los ojos cerrados." },
  { name: "Santiago R.",  city: "Envigado",    ago: "hace 1 semana",  text: "Atención de primera. Los brackets de autoligado son lo mejor que he hecho por mí mismo. Sin dolor y muy rápido." },
  { name: "Valentina M.", city: "Laureles",    ago: "hace 2 semanas", text: "Quedé enamorada del resultado. El equipo es muy profesional y siempre me explicaron cada paso del tratamiento." },
  { name: "Andrés P.",    city: "Bogotá",      ago: "hace 3 semanas", text: "Vine desde Bogotá exclusivamente por el Dr. Alejandro. Vale cada peso y cada kilómetro. Totalmente recomendado." },
  { name: "Daniela O.",   city: "El Poblado",  ago: "hace 1 mes",     text: "El diseño de sonrisa superó todas mis expectativas. Jamás pensé que podría verme así de bien." },
  { name: "Felipe G.",    city: "Sabaneta",    ago: "hace 1 mes",     text: "Proceso muy cómodo, prácticamente sin dolor. La alineación quedó perfecta y el equipo siempre muy atento." },
  { name: "Luisa F.",     city: "Itagüí",      ago: "hace 2 meses",   text: "Mi hija lleva 8 meses y ya se notan los cambios. Un tratamiento de alta calidad a un precio muy justo." },
  { name: "Camilo V.",    city: "Rionegro",    ago: "hace 2 meses",   text: "La ortodoncia invisible es una pasada. Nadie sabe que llevo alineadores y ya tengo resultados a los 6 meses." },
  { name: "Natalia S.",   city: "Bello",       ago: "hace 3 meses",   text: "Súper satisfecha. El consultorio es moderno, la atención es personalizada y el resultado habla por sí solo." },
  { name: "Julián M.",    city: "Medellín",    ago: "hace 3 meses",   text: "Llevaba años con complejo por mis dientes y el Dr. Valencia me devolvió la seguridad. Mil gracias." },
];

function ReviewCard({ r }: { r: (typeof REVIEWS)[number] }) {
  return (
    <div className="flex-shrink-0 w-72 bg-white rounded-2xl shadow-md shadow-[color:var(--ink)]/8 border border-[color:var(--turquoise-soft)] px-5 py-5 flex flex-col gap-3">
      <Quote className="w-5 h-5 text-[color:var(--turquoise-deep)] opacity-60" />
      <p className="text-sm text-[color:var(--ink)] leading-relaxed flex-1">{r.text}</p>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-[color:var(--gold)] text-[color:var(--gold)]" />
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-[color:var(--turquoise-soft)] pt-3">
        <div>
          <div className="text-sm font-semibold text-[color:var(--ink)]">{r.name}</div>
          <div className="text-xs text-[color:var(--ink-soft)]">{r.city}</div>
        </div>
        <span className="text-xs text-[color:var(--ink-soft)]">{r.ago}</span>
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="relative pt-20 md:pt-28 pb-10 md:pb-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--turquoise-deep)] font-semibold mb-4">
            Experiencia de nuestros clientes
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[color:var(--ink)] leading-tight">
            Lo que dicen quienes{" "}
            <span className="text-[color:var(--turquoise-deep)]">ya transformaron su sonrisa</span>
          </h2>
          <p className="mt-4 text-[color:var(--ink-soft)]">
            Más de 120 reseñas verificadas de pacientes reales.
          </p>
        </Reveal>
      </div>

      <div className="overflow-hidden">
        <div className="flex animate-marquee gap-4 w-max px-5">
          {[...REVIEWS, ...REVIEWS].map((r, i) => (
            <ReviewCard key={i} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
