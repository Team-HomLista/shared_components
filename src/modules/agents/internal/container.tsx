"use client";

import { APIProvider } from "@vis.gl/react-google-maps";
import {
  ChevronLeft,
  Share2,
  MoreHorizontal,
  Facebook,
  Twitter,
  Linkedin,
  Flag
} from "lucide-react";
import { useRouter } from "next/navigation";
import { FC } from "react";

import { About } from "@/components/advisor/profile/about";
import { Certificate } from "@/components/advisor/profile/certificate";
import { ContactCard } from "@/components/advisor/profile/contact-card";
import { Header } from "@/components/advisor/profile/header";
import { PropertiesMap } from "@/components/advisor/profile/properties-map";
import PropertiesSection from "@/components/advisor/profile/properties-section";
import { ReviewsSection } from "@/components/advisor/profile/reviews-section";
import { Specialties } from "@/components/advisor/profile/specialties";
import { VideoCard } from "@/components/advisor/profile/video-card";
import { Zones } from "@/components/advisor/profile/zones";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

interface AgentContainerProps {
  slug: string;
}

const propiedades = [
  { lat: 21.2515, lng: -89.6665, tipo: "venta" as const },
  { lat: 21.252, lng: -89.667, tipo: "renta" as const },
  { lat: 21.2525, lng: -89.666, tipo: "venta" as const }
];

const contactInfo = [
  { label: "Móvil:", value: "+52-5555-9999" },
  { label: "Oficina:", value: "+52-5380-2345" },
  { label: "Email:", value: "carlos@alpha.com" }
];

type SocialPlatform = "facebook" | "instagram" | "linkedin" | "twitter";

interface SocialLink {
  platform: SocialPlatform;
  url: string;
}

const socialMedia: SocialLink[] = [
  { platform: "facebook", url: "https://facebook.com/miPerfil" },
  { platform: "instagram", url: "https://instagram.com/miPerfil" },
  { platform: "linkedin", url: "https://linkedin.com/in/miPerfil" },
  { platform: "twitter", url: "https://twitter.com/miPerfil" }
];

const propertiesForSale = [
  {
    id: 1,
    title: "Casa en Cancún",
    price: "$5,000,000 MXN",
    location: "Cancún, Quintana Roo",
    details: { beds: 3, baths: 2, cars: 1, size: "180 m²" },
    amenities: ["alberca", "jardín", "estudio"],
    status: ["Venta"]
  },
  {
    id: 2,
    title: "Residencia en Playa del Carmen",
    price: "$7,200,000 MXN",
    location: "Playa del Carmen, Quintana Roo",
    details: { beds: 4, baths: 3, cars: 2, size: "250 m²" },
    amenities: ["alberca", "terraza", "gimnasio"],
    status: ["Venta", "Desarrollo"]
  },
  {
    id: 3,
    title: "Condominio en Tulum",
    price: "$4,500,000 MXN",
    location: "Tulum, Quintana Roo",
    details: { beds: 2, baths: 2, cars: 1, size: "120 m²" },
    amenities: ["seguridad", "jardín"],
    status: ["Venta"]
  }
];

const propertiesForRent = [
  {
    id: 101,
    title: "Departamento en renta",
    price: "$15,000 MXN/mes",
    location: "Playa del Carmen",
    details: { beds: 2, baths: 1, cars: 1, size: "90 m²" },
    amenities: ["balcón", "seguridad"],
    status: ["Renta"]
  },
  {
    id: 102,
    title: "Casa vacacional en Holbox",
    price: "$18,000 MXN/mes",
    location: "Holbox, Quintana Roo",
    details: { beds: 3, baths: 2, cars: 2, size: "160 m²" },
    amenities: ["alberca", "vista al mar", "aire acondicionado"],
    status: ["Renta"]
  },
  {
    id: 103,
    title: "Departamento amueblado en Cancún",
    price: "$20,000 MXN/mes",
    location: "Cancún, Quintana Roo",
    details: { beds: 1, baths: 1, cars: 1, size: "80 m²" },
    amenities: ["gimnasio", "piscina"],
    status: ["Renta"]
  }
];

const reviewsData = [
  {
    id: 1,
    title: "Excelente Servicio",
    content: "Fue nuestra primera vez comprando y vendiendo a la vez...",
    author: "Lisa María Hernández",
    date: "20 junio 2025"
  },
  {
    id: 2,
    title: "Agente Conocedor",
    content: "Fue nuestra primera vez comprando y vendiendo a la vez...",
    author: "Lisa María Hernández",
    date: "20 junio 2025"
  },
  {
    id: 3,
    title: "Ampliamente Recomendable",
    content: "Fue nuestra primera vez comprando y vendiendo a la vez...",
    author: "Lisa María Hernández",
    date: "20 junio 2025"
  }
];

const specialtiesData = [
  "Administración de Propiedades",
  "Desarrollo Inmobiliario",
  "Tasador de Bienes Raíces",
  "Arrendamiento de Locales",
  "Apartment brokerage",
  "Tasador de Bienes Raíces"
];

const videoData = {
  title: "Hola, soy Carlos",
  thumbnailUrl: "https://img.youtube.com/vi/SZEflIVnhH8/hqdefault.jpg",
  videoUrl: "https://www.youtube.com/embed/SZEflIVnhH8"
};

const zonesData = [
  "Quintana Roo",
  "Isla Mujeres",
  "Holbox",
  "Playa del Carmen",
  "Cozumel",
  "Bacalar"
];

// eslint-disable-next-line no-empty-pattern
export const AgentContainer: FC<AgentContainerProps> = ({}) => {
  const router = useRouter();

  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4">
      {/* Botones superiores */}
      <div className="flex w-full items-center justify-between">
        <Button variant="link" onClick={() => router.back()}>
          <ChevronLeft /> <span>Back</span>
        </Button>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Share2 />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Facebook />
                <span>Facebook</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Twitter />
                <span>Twitter</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Linkedin />
                <span>LinkedIn</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Flag />
                <span>Reportar problema</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="container">
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="flex-1 space-y-8">
            <Header
              imageUrl="/images/carlos.jpg"
              name="Carlos Mendoza"
              role="Real Estate Property"
              location="Cancún, Quintana Roo"
              languages="Español, Inglés, Francés"
              experience="5 años de experiencia"
            />
            <Certificate
              license="2908-0809-8080"
              placeOfIssue="Cancún, Quintana Roo"
              dateOfIssue="Enero 20, 2025"
            />
            <About
              title="Acerca de Carlos"
              description="Como agente certificado y parte de Agencia Alpha, me especializo en ayudar a clientes a encontrar su hogar ideal o inversión perfecta..."
            />
            <Specialties specialties={specialtiesData} />
            <Zones zones={zonesData} />
            <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
              <PropertiesMap propiedades={propiedades} />
            </APIProvider>
            <PropertiesSection
              propertiesForSale={propertiesForSale}
              propertiesForRent={propertiesForRent}
            />
            <ReviewsSection reviews={reviewsData} />
          </div>

          <aside className="w-full space-y-8 lg:w-xs">
            <ContactCard
              type="agent"
              imageUrl="/images/carlos.jpg"
              agentName="Carlos Mendoza"
              agentCompany="Real Estate Agency"
              contactDetails={contactInfo}
              socialLinks={socialMedia}
            />
            <VideoCard {...videoData} />
          </aside>
        </div>
      </div>
    </div>
  );
};
