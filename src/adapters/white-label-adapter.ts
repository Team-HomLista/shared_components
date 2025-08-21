import { BrandConfig } from "@/config/brands";

/**
 * White Label Content Adapter
 * Transforms generic content to brand-specific messaging and terminology
 */
export class WhiteLabelContentAdapter {
  constructor(private brandConfig?: BrandConfig) {}

  /**
   * Adapt property type labels based on brand preferences
   */
  adaptPropertyTypeLabel(type: string): string {
    if (!this.brandConfig) return type;

    const brandMappings = {
      acme: {
        HOUSE: "Casa Premium",
        APARTMENT: "Departamento Exclusivo",
        COMMERCIAL: "Comercial Prime",
        LAND: "Terreno Selecto"
      },
      zenit: {
        HOUSE: "Casa de Inversión", 
        APARTMENT: "Depto. Estratégico",
        COMMERCIAL: "Oportunidad Comercial",
        LAND: "Desarrollo Potencial"
      },
      demo: {
        HOUSE: "Casa Demo",
        APARTMENT: "Apartamento Demo", 
        COMMERCIAL: "Comercial Demo",
        LAND: "Terreno Demo"
      }
    };

    const mapping = brandMappings[this.brandConfig.id as keyof typeof brandMappings];
    return mapping?.[type as keyof typeof mapping] || type;
  }

  /**
   * Adapt transaction labels (Sale/Rent) based on brand language
   */
  adaptTransactionLabel(transactionType: "SALE" | "RENT"): string {
    if (!this.brandConfig) {
      return transactionType === "RENT" ? "Renta" : "Venta";
    }

    const brandMappings = {
      acme: {
        SALE: "Precio Exclusivo",
        RENT: "Renta Premium"
      },
      zenit: {
        SALE: "Inversión",
        RENT: "Renta Mensual"
      },
      demo: {
        SALE: "Demo Venta",
        RENT: "Demo Renta"
      }
    };

    const mapping = brandMappings[this.brandConfig.id as keyof typeof brandMappings];
    return mapping?.[transactionType] || (transactionType === "RENT" ? "Renta" : "Venta");
  }

  /**
   * Adapt pricing display with brand-specific terminology
   */
  adaptPriceLabel(transactionType: "SALE" | "RENT"): string | undefined {
    if (!this.brandConfig) return undefined;

    const brandMappings = {
      acme: {
        SALE: "precio final",
        RENT: "por mes"
      },
      zenit: {
        SALE: "valor total", 
        RENT: "inversión mensual"
      },
      demo: {
        SALE: "precio demo",
        RENT: "renta demo"
      }
    };

    const mapping = brandMappings[this.brandConfig.id as keyof typeof brandMappings];
    return mapping?.[transactionType];
  }

  /**
   * Get brand-specific call-to-action text
   */
  getCallToActionText(context: "view_properties" | "contact" | "learn_more"): string {
    if (!this.brandConfig) {
      const defaults = {
        view_properties: "Ver Propiedades",
        contact: "Contactar", 
        learn_more: "Saber Más"
      };
      return defaults[context];
    }

    const brandCTAs = {
      acme: {
        view_properties: "Explorar Premium",
        contact: "Contactar Experto",
        learn_more: "Descubrir Más"
      },
      zenit: {
        view_properties: "Ver Inversiones", 
        contact: "Asesor de Inversión",
        learn_more: "Analizar Oportunidades"
      },
      demo: {
        view_properties: "Demo Propiedades",
        contact: "Demo Contacto",
        learn_more: "Demo Info"
      }
    };

    const mapping = brandCTAs[this.brandConfig.id as keyof typeof brandCTAs];
    return mapping?.[context] || context;
  }

  /**
   * Generate brand-specific page titles
   */
  adaptPageTitle(basePage: string): string {
    if (!this.brandConfig) return basePage;

    return `${basePage} | ${this.brandConfig.content.title}`;
  }

  /**
   * Generate brand-specific meta descriptions
   */
  adaptMetaDescription(defaultDescription: string): string {
    if (!this.brandConfig) return defaultDescription;

    // Prepend brand tagline if available
    if (this.brandConfig.content.tagline) {
      return `${this.brandConfig.content.tagline} - ${defaultDescription}`;
    }

    return `${this.brandConfig.content.description} - ${defaultDescription}`;
  }
}

/**
 * Factory function to create content adapter
 */
export function createContentAdapter(brandConfig?: BrandConfig) {
  return new WhiteLabelContentAdapter(brandConfig);
}