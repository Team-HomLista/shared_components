type MockActivity = {
  title: string;
  subtitle: string;
  time: string;
  value?: string;
  color: "primary" | "secondary";
};

// ===========================
// Donut Charts
// ===========================
export const donutFranquicias = [
  { name: "Free", percent: 36, value: 30 },
  { name: "Pro", percent: 21, value: 15 },
  { name: "VIP", percent: 17, value: 8 }
];

export const donutPropiedades = [
  { name: "Disponible", percent: 72, value: 892 },
  { name: "En Proceso", percent: 19, value: 234 },
  { name: "Vendidas", percent: 9, value: 121 }
];

// ===========================
// Stats Generales
// ===========================
export const statsData = [
  { label: "Total de Propiedades", value: "290" },
  { label: "Perfiles Completados", value: "90%" },
  { label: "Visualizaciones de Propiedades (30d)", value: "18k" }
];

// ===========================
// Revenue Cards
// ===========================
export const revenueCardsData = [
  { label: "MRR (Ingresos Mensuales)", value: "€300k", change: "+5%" },
  { label: "ARR (Ingresos Anuales)", value: "€2.9M", change: "+12%" },
  { label: "Conversión Visitas a Contactos", value: "3.2%", change: "" }
];

// ===========================
// Agencias
// ===========================
export const topAgencias = [
  { name: "Premier Properties", mrr: "$12,500", posts: 280, leads: 95 },
  { name: "Elite Realty", mrr: "$9,800", posts: 245, leads: 82 },
  { name: "Urban Living", mrr: "$8,900", posts: 220, leads: 78 }
];

export const ingresosPlanes = [
  { label: "Plan VIP", pct: "36%", amount: "132.3K" },
  { label: "Plan Pro", pct: "21%", amount: "89.5K" },
  { label: "Plan Free", pct: "17%", amount: "55.1K" }
];

// ===========================
// Propiedades
// ===========================
export const tiposPropiedad = [
  { label: "Residencial", pct: "72%", amount: 892 },
  { label: "Comercial", pct: "28%", amount: 355 }
];

export const distribucionPrecio = [
  { label: "$0 - $200K", pct: "36%", amount: 342 },
  { label: "$200K - $500K", pct: "40%", amount: 498 },
  { label: "$500K - $1M", pct: "24%", amount: 298 },
  { label: "$1M+", pct: "9%", amount: 109 }
];

export const rendimientoPropiedades = [
  { label: "Tiempo promedio en mercado", value: "45 días" },
  { label: "Tasa de ocupación", value: "91%" },
  { label: "ROI promedio", value: "8.5%" },
  { label: "Propiedades destacadas", value: "87" }
];

export const summaryProperties = [
  { label: "Total Propiedades", value: "1,247" },
  { label: "Propiedades Residenciales", value: "800" },
  { label: "Propiedades Comerciales", value: "355" },
  { label: "Valor Total Portfolio", value: "$89.2M" }
];

// ===========================
// Métricas de adopción
// ===========================
export const indicadoresAdopcion = [
  { label: "Tiempo de Actividad", value: "99%" },
  { label: "Agentes Certificados", value: "87%" },
  { label: "Usuarios Activos (30d)", value: "156 usuarios" },
  { label: "API Response Time", value: "180ms" }
];

// ===========================
// Actividades
// ===========================
export const actividadesAgencias: MockActivity[] = [
  {
    title: "Nueva agencia se unió al plan Pro",
    subtitle: "Inmobiliaria Centro • Plan Pro",
    time: "Hace 2h",
    color: "primary"
  },
  {
    title: "Upgrade a plan VIP completado",
    subtitle: "Propiedades Premium • Plan VIP",
    time: "Hace 3h",
    color: "primary"
  },
  {
    title: "Nueva agencia registrada",
    subtitle: "Casas del Valle • Plan Free",
    time: "Hace 4h",
    color: "primary"
  },
  {
    title: "Renovación de suscripción",
    subtitle: "Bienes Raíces Elite • Plan VIP",
    time: "Hace 5h",
    color: "primary"
  }
];

export const actividadesPropiedades: MockActivity[] = [
  {
    title: "Nueva propiedad listada",
    subtitle: "Preferred Luxury Real Estate",
    time: "Hace 1h",
    value: "$450,000",
    color: "secondary"
  },
  {
    title: "Propiedad vendida",
    subtitle: "Playa Home Real Estate",
    time: "Hace 2h",
    value: "$280,000",
    color: "secondary"
  },
  {
    title: "Precio actualizado",
    subtitle: "Bienes Raíces Quintana Roo",
    time: "Hace 3h",
    value: "$680,000",
    color: "secondary"
  },
  {
    title: "Propiedad destacada",
    subtitle: "Caribbean Realtors",
    time: "Hace 4h",
    value: "$320,000",
    color: "secondary"
  }
];
