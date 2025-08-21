"use client";

import { PropertyAdapter, PropertyBackend } from "@/adapters/property";
import { PropertyCardItem } from "@/components/property-card";
import { getBrandConfig } from "@/config/brands";

interface WhiteLabelPropertiesContainerProps {
  agencySlug: string;
}

// Mock data for POC - in real app this would come from API
const MOCK_PROPERTIES: PropertyBackend[] = [
  {
    id: "prop-001",
    title: "Casa moderna en zona residencial",
    price: 3500000,
    currency: "MXN",
    location: {
      city: "Guadalajara",
      state: "Jalisco",
      address: "Av. Providencia 1234"
    },
    type: "HOUSE",
    transaction_type: "SALE",
    features: {
      bedrooms: 3,
      bathrooms: 2,
      area_m2: 180,
      parking: 2
    },
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80"
    ],
    status: "AVAILABLE",
    agency: {
      id: "agency-001",
      name: "Test Agency"
    }
  },
  {
    id: "prop-002", 
    title: "Departamento ejecutivo céntrico",
    price: 25000,
    currency: "MXN",
    location: {
      city: "CDMX",
      state: "CDMX",
      address: "Polanco, Miguel Hidalgo"
    },
    type: "APARTMENT",
    transaction_type: "RENT",
    features: {
      bedrooms: 2,
      bathrooms: 1,
      area_m2: 85,
      parking: 1
    },
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"
    ],
    status: "AVAILABLE",
    agency: {
      id: "agency-001", 
      name: "Test Agency"
    }
  },
  {
    id: "prop-003",
    title: "Terreno comercial con gran potencial",
    price: 5000000,
    currency: "MXN",
    location: {
      city: "Monterrey",
      state: "Nuevo León", 
      address: "Zona Centro"
    },
    type: "LAND",
    transaction_type: "SALE",
    features: {
      area_m2: 500
    },
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
    ],
    status: "AVAILABLE",
    agency: {
      id: "agency-001",
      name: "Test Agency"
    }
  }
];

export function WhiteLabelPropertiesContainer({ agencySlug }: WhiteLabelPropertiesContainerProps) {
  // Get brand configuration
  const brandConfig = getBrandConfig(agencySlug);
  
  // Initialize adapter with brand config
  const adapter = new PropertyAdapter(brandConfig || undefined);
  
  // Adapt backend data to UI props
  const adaptedProperties = adapter.adaptMany(MOCK_PROPERTIES);

  const handleLike = (index: number, isLiked: boolean) => {
    console.log(`Property ${index} liked: ${isLiked}`);
    // In real app: update like status via API
  };

  // @ts-ignore
  return (
    <div>
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-muted-foreground">
        <a 
          href={`/wl/${agencySlug}`} 
          className="hover:text-foreground transition-colors"
          style={{ color: brandConfig?.colors.primary }}
        >
          Inicio
        </a>
        <span className="mx-2">/</span>
        <span>Propiedades</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Propiedades {brandConfig?.content.title ? `- ${brandConfig.content.title}` : agencySlug}
        </h1>
        <p className="text-muted-foreground">
          {brandConfig?.content.description || `Descubre las mejores propiedades disponibles`}
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          {adaptedProperties.length} propiedades encontradas
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {adaptedProperties.map((property, index) => (
          <PropertyCardItem
            key={property.id}
            image={property.image}
            // @ts-ignore
            tag={property.tag}
            // @ts-ignore
            banner={property.banner}
            // @ts-ignore
            information={property.information}
            slug={property.slug}
            onClickLike={handleLike}
          />
        ))}
      </div>
      
      {adaptedProperties.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No hay propiedades disponibles en este momento.
          </p>
        </div>
      )}
    </div>
  );
}