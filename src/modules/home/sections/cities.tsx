import { Button } from "@shared/components/ui/button";
import { Text } from "@shared/components/ui/text";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { FC, useState, useEffect } from "react";

import { SectionHeader } from "@/components/section-header";

interface City {
  name: string;
  image: string;
}

interface CitiesGridProps {
  cities: City[];
}

export const CitiesGrid: FC<CitiesGridProps> = ({ cities }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Limit cities based on screen size
  const citiesToShow = isMobile ? cities.slice(0, 5) : cities.slice(0, 15);

  return (
    <div className="container mx-auto px-4 pb-16 sm:px-6 lg:px-8 xl:px-12">
      <div className="cities-grid grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
        {citiesToShow.map((city, index) => (
          <Link
            key={index}
            className="group gradient-border city-card-entrance relative block overflow-hidden rounded-2xl opacity-0 shadow-lg transition-all duration-500 hover:shadow-2xl"
            href={`/propiedades?city=${city.name}`}
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: "forwards"
            }}
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
              <img
                src={city.image}
                alt={city.name}
                className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                loading="lazy"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

              {/* Shimmer Effect on Hover */}
              <div className="city-card-shimmer absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
              <div className="transform transition-all duration-500">
                <Text
                  variant="title"
                  className="mb-2 text-lg leading-tight font-bold text-white drop-shadow-lg transition-all duration-300 group-hover:text-blue-100 sm:text-xl lg:text-2xl"
                >
                  {city.name}
                </Text>

                {/* Animated CTA */}
                <div className="flex transform items-center space-x-3 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <div className="from-secondary to-secondary/50 h-0.5 w-8 rounded-full bg-gradient-to-r transition-all duration-500 group-hover:w-12" />
                  <Text className="text-sm font-medium whitespace-nowrap text-white/90">
                    Ver propiedades
                  </Text>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                    <ChevronRight className="h-3 w-3 text-white transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

interface CitiesSectionProps {}

export const CitiesSection: FC<CitiesSectionProps> = () => {
  const cities = [
    {
      name: "Ciudad de México",
      image: "/images/Cities-assets/CDMX.png"
    },
    {
      name: "Guadalajara",
      image: "/images/Cities-assets/Guadalajara.png"
    },
    {
      name: "Monterrey",
      image: "/images/Cities-assets/Monterrey.png"
    },
    {
      name: "Puebla",
      image: "/images/Cities-assets/Puebla.png"
    },
    {
      name: "Cancún",
      image: "/images/Cities-assets/Cancun.png"
    },
    {
      name: "Acapulco",
      image: "/images/Cities-assets/Acapulco.png"
    },
    {
      name: "Tijuana",
      image: "/images/Cities-assets/Tijuana.png"
    },
    {
      name: "Querétaro",
      image: "/images/Cities-assets/Queretaro.png"
    },
    {
      name: "Mérida",
      image: "/images/Cities-assets/Merida.png"
    },
    {
      name: "Mazatlán",
      image: "/images/Cities-assets/Mazatlan.png"
    },
    {
      name: "Tulum",
      image: "/images/Cities-assets/Tulum.png"
    },
    {
      name: "Veracruz",
      image: "/images/Cities-assets/Veracruz.png"
    },
    {
      name: "Cabo San Lucas",
      image: "/images/Cities-assets/Cabo San Lucas.png"
    },
    {
      name: "La Paz",
      image: "/images/Cities-assets/La Paz.png"
    },
    {
      name: "Oaxaca",
      image: "/images/Cities-assets/Oaxaca.png"
    },
    {
      name: "Tamaulipas",
      image: "/images/Cities-assets/Tamaulipas.png"
    }
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_theme(colors.gray.500)_1px,_transparent_0)] opacity-[0.03]"
          style={{ backgroundSize: "24px 24px" }}
        />

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 h-32 w-32 animate-pulse rounded-full bg-gradient-to-br from-blue-100/20 to-purple-100/20 blur-3xl" />
        <div
          className="absolute right-10 bottom-20 h-40 w-40 animate-pulse rounded-full bg-gradient-to-br from-purple-100/20 to-pink-100/20 blur-3xl"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 h-24 w-24 animate-pulse rounded-full bg-gradient-to-br from-blue-200/10 to-indigo-200/10 blur-2xl"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative">
        <SectionHeader
          title="Ciudades"
          description="Explora propiedades en venta y renta en las principales 
        ciudades de México. Encuentra tu próximo hogar o inversión en lugares 
        como Cancún, Playa del Carmen, Ciudad de México, y mucho más"
          orientation="left"
        />

        <CitiesGrid cities={cities} />

        {/* Enhanced Call to Action */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center">
            <Button asChild>
              <Link href="/contactos">¿No encuentras tu ciudad? Contáctanos</Link>
            </Button>
            <p className="mx-auto mt-4 max-w-md text-sm text-gray-500">
              Estamos expandiendo constantemente a nuevas ubicaciones. ¡Déjanos saber dónde te
              gustaría encontrar propiedades!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
