"use client";

import { useState } from "react";

import PropertyCard from "./PropertyCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/components/ui/tabs";

interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  details: { beds: number; baths: number; cars: number; size: string };
  amenities: string[];
  status: string[];
}

interface PropertiesSectionProps {
  propertiesForSale: Property[];
  propertiesForRent: Property[];
}

export default function PropertiesSection({
  propertiesForSale,
  propertiesForRent,
}: PropertiesSectionProps) {
  const [activeTab, setActiveTab] = useState("sale");
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  const badgeColors: Record<string, string> = {
    Venta: "var(--color-sidebar-primary)",
    Desarrollo: "var(--color-sidebar-ring)",
    Renta: "var(--color-sidebar-primary)",
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex w-full">
          <TabsTrigger value="sale" className="flex-1 text-center">
            Venta
          </TabsTrigger>
          <TabsTrigger value="rent" className="flex-1 text-center">
            Renta
          </TabsTrigger>
        </TabsList>

        <h2 className="mb-4 mt-4 font-bold">
          {activeTab === "sale"
            ? `En venta (${propertiesForSale.length})`
            : `En renta (${propertiesForRent.length})`}
        </h2>

        <TabsContent value="sale">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {propertiesForSale.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                badgeColors={badgeColors}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="rent">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {propertiesForRent.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                badgeColors={badgeColors}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
