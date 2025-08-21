import { BrandConfig } from "@/config/brands";

// Original backend property type (simplified for POC)
export interface PropertyBackend {
  id: string;
  title: string;
  price: number;
  currency: string;
  location: {
    city: string;
    state: string;
    address: string;
  };
  type: "HOUSE" | "APARTMENT" | "COMMERCIAL" | "LAND";
  transaction_type: "SALE" | "RENT";
  features: {
    bedrooms?: number;
    bathrooms?: number;
    area_m2?: number;
    parking?: number;
  };
  images: string[];
  status: "AVAILABLE" | "PENDING" | "SOLD";
  agency: {
    id: string;
    name: string;
  };
}

// UI-friendly adapted property type
export interface PropertyUI {
  id: string;
  slug: string;
  image: string;
  tag: {
    label: string;
    variant: "default" | "secondary" | "destructive" | "outline";
    color?: string;
  };
  banner: {
    transaction: {
      label: string;
      price: string;
      variant: "sale" | "rent";
    };
  };
  information: {
    title: string;
    location: string;
    features: string[];
    price: string;
    priceLabel?: string;
  };
}

export class PropertyAdapter {
  constructor(private brandConfig?: BrandConfig) {}

  adapt(property: PropertyBackend): PropertyUI {
    const primaryImage = property.images[0] || "/placeholder-property.jpg";
    
    // Adapt tag based on property type
    const tag = this.adaptPropertyTag(property.type, property.status);
    
    // Adapt transaction banner
    const banner = this.adaptTransactionBanner(property);
    
    // Adapt information section
    const information = this.adaptPropertyInformation(property);

    return {
      id: property.id,
      slug: this.generateSlug(property),
      image: primaryImage,
      tag,
      banner,
      information,
    };
  }

  private adaptPropertyTag(
    type: PropertyBackend["type"], 
    status: PropertyBackend["status"]
  ) {
    // Brand-specific tag adaptations
    if (this.brandConfig?.id === 'acme') {
      // ACME prefers premium language
      const typeLabels = {
        HOUSE: "Casa Premium",
        APARTMENT: "Departamento Exclusivo", 
        COMMERCIAL: "Comercial Prime",
        LAND: "Terreno Selecto"
      };
      
      return {
        label: typeLabels[type] || type,
        variant: "default" as const,
        color: this.brandConfig.colors.primary,
      };
    }

    if (this.brandConfig?.id === 'zenit') {
      // Zenit prefers investment language
      const typeLabels = {
        HOUSE: "Casa de Inversión",
        APARTMENT: "Depto. Estratégico",
        COMMERCIAL: "Oportunidad Comercial", 
        LAND: "Desarrollo Potencial"
      };

      return {
        label: typeLabels[type] || type,
        variant: "secondary" as const,
        color: this.brandConfig.colors.primary,
      };
    }

    // Default adaptation
    const typeLabels = {
      HOUSE: "Casa",
      APARTMENT: "Departamento",
      COMMERCIAL: "Comercial",
      LAND: "Terreno"
    };

    const variant: "default" | "outline" = status === "AVAILABLE" ? "default" : "outline";
    
    return {
      label: typeLabels[type] || type,
      variant,
    };
  }

  private adaptTransactionBanner(property: PropertyBackend) {
    const formatter = new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: property.currency || 'MXN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

    const price = formatter.format(property.price);
    const isRent = property.transaction_type === "RENT";
    
    // Brand-specific transaction labeling
    let label = isRent ? "Renta" : "Venta";
    
    if (this.brandConfig?.id === 'acme' && !isRent) {
      label = "Precio Exclusivo";
    } else if (this.brandConfig?.id === 'zenit') {
      label = isRent ? "Renta Mensual" : "Inversión";
    }

    return {
      transaction: {
        label,
        price,
        variant: isRent ? "rent" : "sale" as const,
      },
    };
  }

  private adaptPropertyInformation(property: PropertyBackend) {
    const features: string[] = [];
    
    if (property.features.bedrooms) {
      features.push(`${property.features.bedrooms} rec`);
    }
    if (property.features.bathrooms) {
      features.push(`${property.features.bathrooms} baños`);
    }
    if (property.features.area_m2) {
      features.push(`${property.features.area_m2} m²`);
    }
    if (property.features.parking) {
      features.push(`${property.features.parking} estacionamientos`);
    }

    const location = `${property.location.city}, ${property.location.state}`;
    
    // Brand-specific pricing display
    const formatter = new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: property.currency || 'MXN',
      minimumFractionDigits: 0,
    });

    let priceLabel = undefined;
    if (this.brandConfig?.id === 'acme') {
      priceLabel = property.transaction_type === "RENT" ? "por mes" : "precio final";
    } else if (this.brandConfig?.id === 'zenit') {
      priceLabel = property.transaction_type === "RENT" ? "inversión mensual" : "valor total";
    }

    return {
      title: property.title,
      location,
      features,
      price: formatter.format(property.price),
      priceLabel,
    };
  }

  private generateSlug(property: PropertyBackend): string {
    return `${property.id}-${property.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')}`;
  }

  // Batch adaptation for multiple properties
  adaptMany(properties: PropertyBackend[]): PropertyUI[] {
    return properties.map(property => this.adapt(property));
  }
}