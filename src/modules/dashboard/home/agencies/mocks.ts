import { PlanUsage } from "./sections/overview-free-plan";
// ===========================
// Stats Generales
// ===========================
export const statsData = [
  { label: "Total de Propiedades", value: "290" },
  { label: "Leads generados (últimos 30 días)", value: "10" },
  { label: "Visualizaciones de Propiedades (30d)", value: "18k" }
];

// Nuevas propiedades
export const newPropertiesData = {
  stats: [
    { label: "Última Semana", value: 2 },
    { label: "Último Mes", value: 10 },
    { label: "Últimos 90 días", value: 30 }
  ],
  actives: 100,
  inactives: 10
};

// Plan
export const overviewFreePlanItems: PlanUsage[] = [
  { label: "Administrador", value: 1, limit: 1 },
  { label: "Usuarios", value: 1, limit: 1 },
  { label: "Anuncios Destacados", value: 0, limit: 0 },
  { label: "Publicación de Propiedades", value: 5, limit: 10 }
];

export const overviewFreePlanData = {
  items: overviewFreePlanItems,
  message:
    "Se te están agotando los archivos y proyectos en tu plan gratuito. Da el siguiente paso con nuestro plan Profesional.",
  buttonText: "Ver Planes"
};

// Estacional
export const seasonalDemandData = [
  { label: "Q1", value: "21%" },
  { label: "Q2", value: "25%" },
  { label: "Q3", value: "32%" },
  { label: "Q4", value: "22%" }
];

// Productividad
export const productivityData = {
  sales: 2,
  leads: 10,
  lastConnection: "Hace 2 minutos"
};
