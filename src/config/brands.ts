import { z } from "zod";

// Brand configuration schema
export const BrandConfigSchema = z.object({
  id: z.string(),
  name: z.string(),
  colors: z.object({
    primary: z.string(),
    secondary: z.string(),
    accent: z.string(),
    background: z.string(),
    foreground: z.string(),
    muted: z.string(),
    "muted-foreground": z.string(),
    border: z.string(),
    card: z.string(),
    "card-foreground": z.string()
  }),
  fonts: z.object({
    primary: z.string(),
    secondary: z.string().optional()
  }),
  assets: z.object({
    logo: z.string(),
    favicon: z.string().optional()
  }),
  content: z.object({
    title: z.string(),
    description: z.string(),
    tagline: z.string().optional()
  })
});

export type BrandConfig = z.infer<typeof BrandConfigSchema>;

// Sample brand configurations for POC
export const BRAND_CONFIGS: Record<string, BrandConfig> = {
  acme: {
    id: "acme",
    name: "ACME Real Estate",
    colors: {
      primary: "#dc2626", // red-600
      secondary: "#991b1b", // red-800
      accent: "#fca5a5", // red-300
      background: "#ffffff",
      foreground: "#0f172a", // slate-900
      muted: "#f1f5f9", // slate-100
      "muted-foreground": "#64748b", // slate-500
      border: "#e2e8f0", // slate-200
      card: "#ffffff",
      "card-foreground": "#0f172a"
    },
    fonts: {
      primary: "Inter, sans-serif",
      secondary: "Inter, sans-serif"
    },
    assets: {
      logo: "/themes/acme/logo.svg",
      favicon: "/themes/acme/favicon.ico"
    },
    content: {
      title: "ACME Real Estate",
      description: "Propiedades premium con ACME Real Estate",
      tagline: "Tu hogar perfecto te está esperando"
    }
  },
  zenit: {
    id: "zenit",
    name: "Zenit Properties",
    colors: {
      primary: "#0ea5e9", // sky-500
      secondary: "#0c4a6e", // sky-900
      accent: "#7dd3fc", // sky-300
      background: "#ffffff",
      foreground: "#0f172a",
      muted: "#f8fafc", // slate-50
      "muted-foreground": "#475569", // slate-600
      border: "#cbd5e1", // slate-300
      card: "#ffffff",
      "card-foreground": "#0f172a"
    },
    fonts: {
      primary: "Inter, sans-serif",
      secondary: "Inter, sans-serif"
    },
    assets: {
      logo: "/themes/zenit/logo.svg",
      favicon: "/themes/zenit/favicon.ico"
    },
    content: {
      title: "Zenit Properties",
      description: "Inversiones inmobiliarias de clase mundial",
      tagline: "Elevando tus inversiones inmobiliarias"
    }
  },
  demo: {
    id: "demo",
    name: "Demo Agency",
    colors: {
      primary: "#9333ea", // purple-600
      secondary: "#581c87", // purple-900
      accent: "#c4b5fd", // purple-300
      background: "#ffffff",
      foreground: "#0f172a",
      muted: "#f9fafb", // gray-50
      "muted-foreground": "#6b7280", // gray-500
      border: "#d1d5db", // gray-300
      card: "#ffffff",
      "card-foreground": "#0f172a"
    },
    fonts: {
      primary: "Inter, sans-serif"
    },
    assets: {
      logo: "/themes/demo/logo.svg"
    },
    content: {
      title: "Demo Agency",
      description: "Demostración de white-labeling",
      tagline: "Prueba nuestro sistema personalizable"
    }
  }
};

export function getBrandConfig(brandId: string): BrandConfig | null {
  return BRAND_CONFIGS[brandId] || null;
}
