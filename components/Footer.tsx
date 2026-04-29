import { MapPin, Phone } from "lucide-react";
import { clinic } from "@/lib/data/clinic";

function Instagram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[color:var(--ink)] text-white/80 pt-16 pb-8 border-t border-white/5">
      <div className="px-5 sm:px-8 lg:px-16 xl:px-24 lg:pr-12">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <div className="mb-4">
              <div className="font-display font-bold text-white text-lg">{clinic.brand}</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/50 mt-0.5">
                Ortodoncia · Medellín
              </div>
            </div>
            <p className="text-sm text-white/60 max-w-md leading-relaxed">
              {clinic.doctor.prefix} {clinic.doctor.name}, especialista en ortodoncia con
              más de {clinic.stats.yearsExperience} años de experiencia transformando sonrisas con tecnología de vanguardia.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-white mb-4">
              Contacto
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[color:var(--turquoise)] mt-0.5 shrink-0" />
                <span>{clinic.clinic.street}, {clinic.clinic.neighborhood}, {clinic.clinic.city}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[color:var(--turquoise)] shrink-0" />
                <a href={`tel:${clinic.contact.phoneTel}`} className="hover:text-white">
                  {clinic.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[color:var(--turquoise)] shrink-0" />
                <a
                  href={clinic.contact.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  {clinic.contact.instagramHandle}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-white mb-4">
              Tratamientos
            </div>
            <ul className="space-y-2 text-sm">
              <li><a href="#servicios" className="hover:text-white">Ortodoncia Invisible</a></li>
              <li><a href="#servicios" className="hover:text-white">Brackets</a></li>
              <li><a href="#servicios" className="hover:text-white">Diseño de Sonrisa</a></li>
              <li><a href="#servicios" className="hover:text-white">Blanqueamiento</a></li>
              <li><a href="#servicios" className="hover:text-white">Odontopediatría</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div>
            © {new Date().getFullYear()} {clinic.brand}. Todos los derechos reservados.
          </div>
          <div>
            Diseñado con precisión para {clinic.doctor.shortName} · Medellín, CO
          </div>
        </div>
      </div>
    </footer>
  );
}
