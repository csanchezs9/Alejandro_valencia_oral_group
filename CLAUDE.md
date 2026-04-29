@AGENTS.md

# Proyecto: Alejandro Valencia Oral Group

## Cliente
- **Doctor**: Odont. Alejandro Valencia Toro — Ortodoncista certificado
- **Clínica**: Centro Profesional El Crucero Torre 1, Cons. 102
- **Dirección**: Cra. 48 #12 Sur-70, Col. El Poblado, Medellín
- **Teléfono**: +57 (604) 4310031 Ext. 8113
- **Sitio anterior**: alejovalenciaortodoncista.com (lento, roto en móvil, sin CTA)

## Objetivo
Reemplazar sitio antiguo con landing moderna en Next.js — rápida, mobile-first, que convierta visitas en citas. 80% de búsquedas vienen desde celular.

## Servicios del doctor
Ortodoncia en Adultos, Ortodoncia Invisible (Invisalign), Ortodoncia Infantil, Ortodoncia Estética, Ortodoncia Correctiva, Ortodoncia Digital, Ortodoncia de Autoligado, Brackets, Diseño de Sonrisa, Ortodoncia Prequirúrgica, Ortodoncia Lingual, Ortodoncia Láser, Blanqueamiento Dental, Odontología Estética, Odontología Infantil.

## Diseño & estética
- **Objetivo emocional**: confianza + estética + tecnología
- **Paleta**: turquesa suave (higiene/calma), off-white #FAFAFA, dorado/plata como acento premium
- **Tipografía**: Sans-serif limpia — Plus Jakarta Sans (display), Inter (body). Nada divertido, arquitectónico y profesional
- **Animaciones**: sutiles y fluidas (Framer Motion). Fade-ins suaves, parallax ligero. Sin cosas saltando
- **Tono copy**: aspiracional pero cercano. Medellín, mercado colombiano

## Stack
- Next.js App Router, TypeScript, Tailwind CSS
- Framer Motion para animaciones
- GSAP + ScrollTrigger donde se necesite scroll storytelling
- `next/metadata` para SEO local Medellín

## Estructura de la landing (orden)
1. Hero — foto del doctor / sonrisa real + CTA "Agenda tu valoración gratuita"
2. Before/After — slider interactivo antes/después (genera confianza inmediata)
3. Servicios — cards minimalistas con iconos limpios
4. About Doctor — bio breve + foto (humaniza la marca)
5. Proceso — 3 pasos: Valoración sin costo → Plan hecho para ti → Sonrisa que enamora
6. Social Proof — stats (2.500+ pacientes, 4.9★, años de experiencia)
7. Reviews — reseñas reales de Google
8. FAQ
9. Ubicación / Contacto
10. WhatsApp FAB — fundamental para mercado colombiano

## Copy guía
- Headline hero: "La sonrisa que siempre soñaste, con la tecnología que mereces"
- Valoración: siempre resaltar que es **sin costo**
- Resultados: visibles desde el primer mes
- Respaldo: 2.500+ pacientes transformados, 4.9★ en Google, 120+ reseñas

## Reglas de desarrollo
- Mobile-first siempre
- CTA de "Agendar cita" visible en todo momento (navbar + hero + secciones)
- No saturar de texto — el antes/después vende más que mil palabras
- WhatsApp FAB siempre presente
- SEO: todas las páginas con next/metadata, palabras clave Medellín + ortodoncia
