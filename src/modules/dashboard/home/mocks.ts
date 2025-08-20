export interface Stat {
  label: string;
  value: string | number;
}

export interface ChartData {
  name: string;
  value?: number;
  Casa?: number;
  Departamentos?: number;
  Terreno?: number;
  ads?: number;
  leads?: number;
  score?: number;
  mrr?: string;
}

export interface Chart {
  type: "line" | "ranking" | "gauge" | "pie" | "table" | "bar";
  title: string;
  data?: ChartData[];
  percentage?: number;
  goal?: number;
}

export interface Tab {
  key: string;
  label: string;
  charts: Chart[];
}

export interface RevenueCard {
  label: string;
  value: string | number;
  change: string;
}

// stats
export const statsData: Stat[] = [
  { label: "Usuarios Activos Totales", value: "15k" },
  { label: "Nuevos Registros (30d)", value: 1200 },
  { label: "Anuncios Activos (30d)", value: "45k" },
  { label: "Conversión de Leads", value: "23.8%" }
];

// chart tabs
export const chartTabsData: Tab[] = [
  {
    key: "tendencias",
    label: "Tendencias",
    charts: [
      {
        type: "line",
        title: "Nuevos Registros por Mes",
        data: [
          { name: "Ene", value: 186 },
          { name: "Feb", value: 200 },
          { name: "Mar", value: 305 },
          { name: "Abr", value: 237 },
          { name: "May", value: 73 },
          { name: "Jun", value: 214 }
        ]
      },
      {
        type: "line",
        title: "Evolución de Anuncios",
        data: [
          { name: "Ene", value: 50 },
          { name: "Feb", value: 60 },
          { name: "Mar", value: 80 },
          { name: "Abr", value: 100 },
          { name: "May", value: 90 },
          { name: "Jun", value: 110 }
        ]
      }
    ]
  },
  {
    key: "franquicias",
    label: "Franquicias",
    charts: [
      {
        type: "ranking",
        title: "Top Franquicias por Actividad",
        data: [
          { name: "Century 21", ads: 5420, leads: 1280, score: 95 },
          { name: "RE/MAX", ads: 4890, leads: 1150, score: 92 },
          { name: "Coldwell Banker", ads: 5420, leads: 1280, score: 88 },
          { name: "Keller Williams", ads: 3210, leads: 780, score: 85 }
        ]
      },
      { type: "gauge", title: "Adopción de Agentes", percentage: 73.5, goal: 80 }
    ]
  },
  {
    key: "agencias",
    label: "Agencias",
    charts: [
      {
        type: "pie",
        title: "Distribución de Planes",
        data: [
          { name: "Free", value: 132500 },
          { name: "Pro", value: 89500 },
          { name: "VIP", value: 55100 }
        ]
      },
      {
        type: "table",
        title: "Top Agencias por Ingresos",
        data: [
          { name: "Premier Properties", ads: 280, leads: 95, mrr: "$12,500" },
          { name: "Elite Realty", ads: 245, leads: 82, mrr: "$9,800" },
          { name: "Urban Living", ads: 220, leads: 78, mrr: "$8,900" }
        ]
      }
    ]
  },
  {
    key: "compradores",
    label: "Compradores",
    charts: [
      {
        type: "bar",
        title: "Mapa de Demanda",
        data: [
          { name: "CDMX", Casa: 700, Departamentos: 500, Terreno: 300 },
          { name: "GDL", Casa: 650, Departamentos: 400, Terreno: 250 },
          { name: "MTY", Casa: 600, Departamentos: 380, Terreno: 200 }
        ]
      },
      {
        type: "pie",
        title: "Fuentes de Leads",
        data: [
          { name: "Orgánico", value: 36 },
          { name: "Redes Sociales", value: 21 },
          { name: "Portales", value: 17 }
        ]
      }
    ]
  }
];

// revenue cards
export const revenueCardsData: RevenueCard[] = [
  { label: "Ingresos Totales", value: "$12,500", change: "+5%" },
  { label: "Nuevos Clientes", value: 320, change: "+12%" },
  { label: "Ventas Online", value: "$8,300", change: "+8%" }
];
