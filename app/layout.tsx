import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { clinic } from "@/lib/data/clinic";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alejovalenciaortodoncista.com"),
  title: {
    default: "Ortodoncista en El Poblado, Medellín — Dr. Alejandro Valencia | Oral Group",
    template: "%s | Oral Group",
  },
  description:
    "Dr. Alejandro Valencia Toro, ortodoncista especialista en El Poblado, Medellín. Ortodoncia invisible, brackets, diseño de sonrisa y tecnología de vanguardia. Agenda tu cita.",
  keywords: [
    "ortodoncia Medellín",
    "ortodoncista El Poblado",
    "brackets Medellín",
    "ortodoncia invisible",
    "diseño de sonrisa",
    "Alejandro Valencia",
    "Oral Group",
  ],
  openGraph: {
    title: "Dr. Alejandro Valencia — Ortodoncia en Medellín",
    description:
      "Sonrisas transformadas con tecnología de vanguardia en El Poblado, Medellín.",
    url: "https://alejovalenciaortodoncista.com",
    siteName: "Oral Group",
    images: [{ url: "/images/doctor/doctor.jpg", width: 1200, height: 630 }],
    locale: "es_CO",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
  alternates: { canonical: "https://alejovalenciaortodoncista.com" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: `${clinic.doctor.prefix} ${clinic.doctor.name}`,
    image: `https://alejovalenciaortodoncista.com${clinic.doctor.photo}`,
    url: "https://alejovalenciaortodoncista.com",
    telephone: clinic.contact.phone,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${clinic.clinic.street}, ${clinic.clinic.name}, ${clinic.clinic.suite}`,
      addressLocality: clinic.clinic.city,
      addressRegion: "Antioquia",
      addressCountry: "CO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: clinic.clinic.lat,
      longitude: clinic.clinic.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "12:00",
      },
    ],
    medicalSpecialty: "Orthodontics",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: clinic.stats.rating,
      reviewCount: 120,
    },
    sameAs: [clinic.contact.instagram],
  };

  return (
    <html
      lang="es-CO"
      className={`${jakarta.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
