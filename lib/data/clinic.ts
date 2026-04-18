export const clinic = {
  brand: "Oral Group",
  doctor: {
    prefix: "Odont.",
    name: "Alejandro Valencia Toro",
    shortName: "Dr. Alejandro Valencia",
    specialty: "Ortodoncista",
    photo: "/images/doctor/doctor.PNG",
    photo2: "/images/doctor/doctor-2.jpg",
    education: [
      { degree: "Odontología", institution: "Universidad CES" },
      { degree: "Diplomado en Ortodoncia Estética", institution: "Universidad CES" },
      { degree: "Especialidad en Ortodoncia", institution: "Universidad de Guadalajara" },
    ],
    expertise: [
      "Ortodoncia invisible con alineadores",
      "Ortodoncia Fowjac con mini tubos",
      "Ortodoncia de autoligado",
      "Ortodoncia convencional",
      "Blanqueamiento dental",
      "Diseño de sonrisa",
      "Odontopediatría",
      "Odontología estética",
    ],
    bioShort:
      "Egresado de Odontología de la Universidad CES con Especialidad en Ortodoncia de la Universidad de Guadalajara. Más de 20 años transformando sonrisas en Medellín con tecnología de vanguardia.",
  },
  contact: {
    phone: "+57 (604) 4310031",
    phoneExt: "8113",
    phoneTel: "+576044310031",
    whatsapp: "+573001234567", // pendiente de confirmar con el doctor
    whatsappDigits: "573001234567",
    email: "contacto@oralgrouppro.com", // pendiente
    instagram: "https://www.instagram.com/oralgrouppro/",
    instagramHandle: "@oralgrouppro",
  },
  clinic: {
    name: "Centro Profesional El Crucero Torre 1",
    suite: "Consultorio 102",
    street: "Cra. 48 #12 Sur-70",
    neighborhood: "El Poblado",
    city: "Medellín",
    country: "Colombia",
    lat: 6.2089,
    lng: -75.5692,
    mapsQuery: "Centro+Profesional+El+Crucero+Torre+1+Medellin",
    hours: [
      { day: "Lun – Vie", time: "8:00 AM – 6:00 PM" },
      { day: "Sábado", time: "8:00 AM – 12:00 PM" },
      { day: "Domingo", time: "Cerrado" },
    ],
  },
  pricing: {
    firstConsult: "$100.000 COP",
    insurances: [
      "Particular",
      "Salud Total EPS",
      "Colpatria",
      "Comfenalco Valle",
    ],
  },
  stats: {
    patients: 2500,
    yearsExperience: 20,
    rating: 4.9,
    smilesDelivered: 1800,
  },
} as const;

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: string; // lucide name
  image?: string;
  category: "ortodoncia" | "estetica" | "infantil" | "general";
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "ortodoncia-invisible",
    title: "Ortodoncia Invisible",
    tagline: "Alinea sin que se note",
    description:
      "Alineadores transparentes y removibles que corrigen la posición de los dientes sin afectar tu estética diaria. La alternativa moderna a los brackets.",
    icon: "Sparkles",
    image: "/images/tratamientos/ortodoncia-invisible.jpg",
    category: "ortodoncia",
    featured: true,
  },
  {
    slug: "ortodoncia-adultos",
    title: "Ortodoncia en Adultos",
    tagline: "Nunca es tarde para tu sonrisa",
    description:
      "Tratamientos personalizados para adultos que buscan mejorar función y estética, con opciones discretas y tecnología de última generación.",
    icon: "UserRound",
    image: "/images/tratamientos/adultos.jpg",
    category: "ortodoncia",
    featured: true,
  },
  {
    slug: "ortodoncia-infantil",
    title: "Ortodoncia Infantil",
    tagline: "Crecemos con ellos",
    description:
      "Intervención temprana para guiar el desarrollo dental de los más pequeños. Aparatos fijos o removibles en un ambiente amigable.",
    icon: "Baby",
    image: "/images/tratamientos/infantil.jpg",
    category: "infantil",
    featured: true,
  },
  {
    slug: "diseno-sonrisa",
    title: "Diseño de Sonrisa",
    tagline: "Hecho a la medida de tu rostro",
    description:
      "Planificación digital de tu sonrisa ideal aplicando principios de proporción, armonía y estética facial. Ves el resultado antes de empezar.",
    icon: "Smile",
    image: "/images/tratamientos/diseno-sonrisa.jpg",
    category: "estetica",
    featured: true,
  },
  {
    slug: "blanqueamiento-dental",
    title: "Blanqueamiento Dental",
    tagline: "Brillo en una sesión",
    description:
      "Procedimiento seguro y profesional que devuelve la luminosidad natural a tus dientes sin dañar el esmalte.",
    icon: "Star",
    image: "/images/tratamientos/blanqueamiento.jpg",
    category: "estetica",
    featured: true,
  },
  {
    slug: "brackets",
    title: "Brackets",
    tagline: "Clásicos con precisión moderna",
    description:
      "Sistema probado que corrige desde pequeñas irregularidades hasta maloclusiones complejas, con opciones estéticas en cerámica.",
    icon: "Grid3x3",
    image: "/images/tratamientos/brackets.jpg",
    category: "ortodoncia",
  },
  {
    slug: "ortodoncia-autoligado",
    title: "Ortodoncia de Autoligado",
    tagline: "Menos visitas, menos fricción",
    description:
      "Brackets con clip integrado que reducen la fricción, disminuyen el dolor y acortan los tiempos de tratamiento.",
    icon: "Zap",
    image: "/images/tratamientos/brackets.jpg",
    category: "ortodoncia",
  },
  {
    slug: "ortodoncia-lingual",
    title: "Ortodoncia Lingual",
    tagline: "Invisible desde afuera",
    description:
      "Brackets colocados en la cara interna de los dientes: imperceptibles para quienes te ven, igual de efectivos.",
    icon: "EyeOff",
    image: "/images/tratamientos/ortodoncia-invisible.jpg",
    category: "ortodoncia",
  },
  {
    slug: "ortodoncia-digital",
    title: "Ortodoncia Digital",
    tagline: "Planificación asistida por computadora",
    description:
      "Tecnología de última generación que permite visualizar el resultado final y planificar cada movimiento con precisión milimétrica.",
    icon: "Cpu",
    image: "/images/tratamientos/general.jpg",
    category: "ortodoncia",
  },
  {
    slug: "ortodoncia-laser",
    title: "Ortodoncia Láser",
    tagline: "Menos dolor, más rapidez",
    description:
      "Uso del láser en procedimientos complementarios a la ortodoncia para acelerar la recuperación y minimizar las molestias.",
    icon: "Flashlight",
    image: "/images/tratamientos/general.jpg",
    category: "ortodoncia",
  },
  {
    slug: "ortodoncia-prequirurgica",
    title: "Ortodoncia Prequirúrgica",
    tagline: "Preparación para cirugía maxilofacial",
    description:
      "Fase ortodóncica previa y posterior a la cirugía ortognática, coordinada con el cirujano maxilofacial.",
    icon: "Stethoscope",
    image: "/images/tratamientos/adultos.jpg",
    category: "ortodoncia",
  },
  {
    slug: "ortodoncia-correctiva",
    title: "Ortodoncia Correctiva",
    tagline: "Función + estética",
    description:
      "Corrección de mordidas y alineación que no solo mejora la apariencia sino la función masticatoria y la salud bucal a largo plazo.",
    icon: "Wrench",
    image: "/images/tratamientos/adultos.jpg",
    category: "ortodoncia",
  },
  {
    slug: "ortodoncia-estetica",
    title: "Ortodoncia Estética",
    tagline: "Tratamientos discretos",
    description:
      "Opciones con brackets cerámicos, zafiro o alineadores para quienes buscan resultados sin comprometer su imagen.",
    icon: "Gem",
    image: "/images/tratamientos/estetica.jpg",
    category: "estetica",
  },
  {
    slug: "odontologia-estetica",
    title: "Odontología Estética",
    tagline: "Armonía en cada detalle",
    description:
      "Carillas, coronas, composites y procedimientos que buscan simetría y equilibrio entre dientes, labios y rostro.",
    icon: "Heart",
    image: "/images/tratamientos/estetica.jpg",
    category: "estetica",
  },
  {
    slug: "odontologia-infantil",
    title: "Odontología Infantil",
    tagline: "Cuidado desde la primera visita",
    description:
      "Prevención, diagnóstico y tratamiento odontopediátrico en un ambiente diseñado para que los niños se sientan tranquilos.",
    icon: "Candy",
    image: "/images/tratamientos/infantil.jpg",
    category: "infantil",
  },
  {
    slug: "odontologia-general",
    title: "Odontología General",
    tagline: "Salud bucal integral",
    description:
      "Limpiezas, resinas, endodoncia y todos los cuidados que mantienen tu boca sana y funcional.",
    icon: "ShieldCheck",
    image: "/images/tratamientos/general.jpg",
    category: "general",
  },
  {
    slug: "tratamientos-odontologicos",
    title: "Tratamientos Odontológicos",
    tagline: "Soluciones a medida",
    description:
      "Plan integral personalizado según tus necesidades: periodoncia, rehabilitación oral, prótesis y más.",
    icon: "ClipboardList",
    image: "/images/tratamientos/general.jpg",
    category: "general",
  },
  {
    slug: "ortodoncia",
    title: "Ortodoncia",
    tagline: "Nuestra especialidad central",
    description:
      "Rama de la odontología que corrige la posición de dientes y huesos para restablecer equilibrio morfológico, funcional y estético.",
    icon: "Atom",
    image: "/images/tratamientos/brackets.jpg",
    category: "ortodoncia",
  },
];

export const faqs = [
  {
    q: "¿Cuánto dura un tratamiento de ortodoncia?",
    a: "Depende de cada caso, pero la mayoría de tratamientos van entre 12 y 24 meses. En la primera consulta te entregamos un plan con tiempos realistas según tu condición.",
  },
  {
    q: "¿Cuánto cuesta la primera consulta?",
    a: "La primera consulta de ortodoncia como particular tiene un costo de $100.000 COP. Incluye diagnóstico clínico y plan de tratamiento preliminar.",
  },
  {
    q: "¿Aceptan EPS o prepagadas?",
    a: "Trabajamos con Salud Total EPS, Colpatria y Comfenalco Valle. También atendemos consultas particulares sin convenio.",
  },
  {
    q: "¿Duelen los brackets?",
    a: "Las técnicas modernas como el autoligado reducen significativamente las molestias. Puedes sentir presión los primeros días tras cada ajuste, pero nada que te impida tu rutina normal.",
  },
  {
    q: "¿Puedo hacer ortodoncia siendo adulto?",
    a: "Sí. Los dientes se pueden mover a cualquier edad. Tenemos pacientes desde 25 hasta 70 años con excelentes resultados, muchos con alineadores invisibles.",
  },
  {
    q: "¿Cómo agendo mi cita?",
    a: "Puedes agendar por WhatsApp, llamando al consultorio o desde el formulario de esta web. Te confirmamos disponibilidad en menos de 24 horas.",
  },
];
