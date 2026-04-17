# Oral Group — Web del Dr. Alejandro Valencia Toro

## Contexto

Rediseño completo del sitio actual (https://alejovalenciaortodoncista.com/), que tiene problemas de velocidad, mobile-UX roto (agendamiento no funciona), sin CTA claro, y estética genérica del tema Nuxt de Top Doctors. El objetivo es vender más consultas en **Medellín (El Poblado)** para un ortodoncista de alta gama.

El cliente es el Dr. Alejandro Valencia Toro. La marca comercial en redes es **Oral Group** (@oralgrouppro en Instagram). Mercado: Colombia (Medellín).

## Stack

- **Next.js 15** (App Router) + React 19 + TypeScript
- **Tailwind CSS 4**
- **Framer Motion** para animaciones sutiles (fade-in, parallax ligero, stagger). Nada brusco.
- **lucide-react** para iconos
- **Fuentes:** Plus Jakarta Sans (display) + Inter (body), via `next/font`
- Despliegue final: Vercel

## Brand / Paleta

Objetivo visual: **confianza + estética + tecnología**. Clínica de alta gama.

| Token | Hex | Uso |
|---|---|---|
| `--turquoise` | `#4FC3C7` | Primario (higiene/calma) |
| `--turquoise-deep` | `#0E7A80` | Hover / texto sobre claro |
| `--ink` | `#0B2B3A` | Texto principal |
| `--off-white` | `#FAFAFA` | Fondo (nunca blanco puro) |
| `--gold` | `#C9A96E` | Accentos premium |
| `--silver` | `#B8BEC4` | Detalles sutiles |

Tipografía: Sans-serif limpia, profesional, nada "divertido".

## Estructura de carpetas

```
Oral_Group/
├── CLAUDE.md            ← este archivo
├── Oral group - site.pdf ← brief original del cliente
├── scrape/              ← contenido extraído del sitio viejo
│   ├── content.md       ← resumen consolidado (bio, servicios, contacto)
│   ├── images/          ← 29 imágenes descargadas (doctor/, nuxt/, cdn/)
│   └── index.html       ← HTML crudo del scrape
└── web/                 ← app Next.js (ESTO es lo que se despliega)
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx     ← landing
    │   └── globals.css
    ├── components/
    │   ├── Navbar.tsx
    │   ├── Hero.tsx
    │   ├── SocialProof.tsx
    │   ├── BeforeAfter.tsx
    │   ├── Services.tsx
    │   ├── AboutDoctor.tsx
    │   ├── Process.tsx
    │   ├── FAQ.tsx
    │   ├── Location.tsx
    │   ├── Footer.tsx
    │   └── WhatsAppFab.tsx
    ├── lib/data/clinic.ts
    └── public/images/   ← assets migrados desde scrape/images/
```

## Datos clave (para lib/data/clinic.ts)

- **Doctor:** Odont. Alejandro Valencia Toro — Ortodoncista
- **Educación:** Odontología (U. CES) · Diplomado Ortodoncia Estética (CES) · Especialidad en Ortodoncia (U. de Guadalajara)
- **Consultorio:** Centro Profesional El Crucero Torre 1, Cons. 102
- **Dirección:** Cra. 48 #12 Sur-70, El Poblado, Medellín
- **Teléfono:** +57 (604) 4310031 ext. 8113
- **Primera consulta particular:** $100.000 COP
- **Aseguradoras:** Salud Total EPS, Colpatria, Comfenalco Valle, Particular
- **Instagram:** @oralgrouppro
- **Servicios (18):** Ortodoncia (Adultos, Invisible, Infantil, Estética, Correctiva, Láser, Digital, Prequirúrgica, Autoligado, Lingual), Brackets, Blanqueamiento Dental, Diseño de la Sonrisa, Odontología (General, Estética, Infantil), Tratamientos Odontológicos

## Pendientes que el doctor debe proveer

- WhatsApp oficial (para FAB + formulario)
- Email de contacto
- Horario de atención
- Fotos antes/después reales (críticas en ortodoncia)
- Fotos del consultorio

Placeholders actuales: las fotos `scrape/images/doctor/alejandro-valencia-profile-large.jpg` (410 KB) y las de `scrape/images/cdn/` se usan mientras tanto.

## Secciones de la landing (orden según PDF del brief)

1. **Navbar** sticky, transparente al inicio, con CTA "Agendar cita"
2. **Hero** — foto del doctor + headline *"La sonrisa que siempre soñaste, con la tecnología que mereces"* + 2 CTAs
3. **Prueba social** — credenciales, contadores animados, certificaciones
4. **Antes/Después** — slider drag interactivo (imprescindible en el nicho)
5. **Servicios** — grid de cards minimalistas con iconos lucide
6. **Sobre el doctor** — bio + credenciales (humanizar)
7. **Proceso** — 3 pasos (Consulta → Plan → Sonrisa)
8. **FAQ** — accordion
9. **Ubicación** — mapa + dirección + horarios
10. **Footer** — Instagram, legal, copyright
11. **FAB WhatsApp** — flotante permanente

## Convenciones de código

- Server Components por defecto. `"use client"` solo donde haga falta (animaciones, estado).
- Animaciones con `motion` de framer-motion, siempre con `viewport={{ once: true }}` para no reejecutar.
- Fade-ins con `initial={{ opacity: 0, y: 20 }}` / `whileInView={{ opacity: 1, y: 0 }}`. Duración 0.5-0.7s, easing suave.
- Nada de `scale > 1.05` en hover, nada de rotaciones bruscas. Todo sutil, fluido.
- `next/image` obligatorio para imágenes, con `priority` solo en el hero.
- Tailwind utility-first. Tokens de color como CSS vars en `globals.css`.

## SEO

- `generateMetadata` por página
- JSON-LD `Dentist` + `LocalBusiness` con geo Poblado
- Título home: *"Ortodoncista en El Poblado, Medellín — Dr. Alejandro Valencia | Oral Group"*
- Descripción enfocada en dolor de paciente + ubicación

## Scripts

```bash
cd web
npm run dev      # http://localhost:3000
npm run build
npm run start
```
