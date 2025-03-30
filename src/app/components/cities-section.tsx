import { SectionHeader } from "@/components/section-header";
import { FC } from "react";
import React from "react";
import { Text } from "@/components/ui/text";
import { Label } from "@radix-ui/react-select";

interface City {
  name: string;
  image: string;
}

interface CitiesGridProps {
  cities: City[];
}

export const CitiesGrid: FC<CitiesGridProps> = ({ cities }) => {
  return (
    <div className="grid grid-cols-4 gap-8 items-center justify-center mx-32 pb-16">
      {cities.map((city, index) => (
        <div key={index} className="relative w-full h-48 rounded-3xl">
          <div className="relative w-full h-48 rounded-3xl bg-black overflow-hidden">
            <img
              src={city.image}
              alt={city.name}
              className="w-full h-full object-cover rounded-3xl blur-xs opacity-50"
            />
          </div>
          <div className="absolute inset-0"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center rounded-3xl">
            <Text variant="title" className="text-white">
              {city.name}
            </Text>
            <Text className="text-white hidden">2000 propiedades</Text>
          </div>
        </div>
      ))}
    </div>
  );
};

interface CitiesSectionProps {}

export const CitiesSection: FC<CitiesSectionProps> = ({}) => {
  const cities = [
    {
      name: "Ciudad de México",
      image: "/images/Cities-assets/CDMX.png",
    },
    {
      name: "Guadalajara",
      image: "/images/Cities-assets/Guadalajara.png",
    },
    {
      name: "Monterrey",
      image: "/images/Cities-assets/Monterrey.png",
    },
    {
      name: "Puebla",
      image: "/images/Cities-assets/Puebla.png",
    },
    {
      name: "Cancún",
      image: "/images/Cities-assets/Cancun.png",
    },
    {
      name: "Acapulco",
      image: "/images/Cities-assets/Acapulco.png",
    },
    {
      name: "Tijuana",
      image: "/images/Cities-assets/Tijuana.png",
    },
    {
      name: "Querétaro",
      image: "/images/Cities-assets/Queretaro.png",
    },
    {
      name: "Mérida",
      image: "/images/Cities-assets/Merida.png",
    },
    {
      name: "Mazatlán",
      image: "/images/Cities-assets/Mazatlan.png",
    },
    {
      name: "Tulum",
      image: "/images/Cities-assets/Tulum.png",
    },
    {
      name: "Veracruz",
      image: "/images/Cities-assets/Veracruz.png",
    },
    {
      name: "Cabo San Lucas",
      image: "/images/Cities-assets/Cabo San Lucas.png",
    },
    {
      name: "La Paz",
      image: "/images/Cities-assets/La Paz.png",
    },
    {
      name: "Oaxaca",
      image: "/images/Cities-assets/Oaxaca.png",
    },
    {
      name: "Tamaulipas",
      image: "/images/Cities-assets/Tamaulipas.png",
    },
  ];

  return (
    <section>
      <div className="bg-[#F5F5F5]">
        <SectionHeader
          title="Ciudades"
          description="Explora propiedades en venta y renta en las principales 
        ciudades de México. Encuentra tu próximo hogar o inversión en lugares 
        como Cancún, Playa del Carmen, Ciudad de México, y mucho más"
          orientation="left"
        ></SectionHeader>
        <CitiesGrid cities={cities} />
      </div>
    </section>
  );
};
