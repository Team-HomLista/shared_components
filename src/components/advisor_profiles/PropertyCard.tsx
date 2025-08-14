"use client";

import { Card } from "@shared/components/ui/card";
import { MapPin, BedDouble, Bath, CarFront, Maximize } from "lucide-react";

interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  details: { beds: number; baths: number; cars: number; size: string };
  amenities: string[];
  status: string[];
}

interface PropertyCardProps {
  property: Property;
  favorites: number[];
  toggleFavorite: (id: number) => void;
  badgeColors: Record<string, string>;
}

export default function PropertyCard({
  property,
  favorites,
  toggleFavorite,
  badgeColors
}: PropertyCardProps) {
  return (
    <Card className="overflow-hidden rounded-xl border px-4 shadow-md transition hover:shadow-lg">
      {/* Imagen o Placeholder */}
      <div className="bg-primary-foreground relative rounded-xl px-4 shadow-md">
        <div className="text-foreground flex h-52 w-full items-center justify-center rounded-xl text-sm">
          Imagen no disponible
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {property.status.map((status, idx) => (
            <span
              key={idx}
              className="text-accent rounded-full px-3 py-1 text-xs font-semibold"
              style={{ backgroundColor: badgeColors[status] || "var(--color-sidebar-primary)" }}
            >
              {status}
            </span>
          ))}
        </div>

        {/* Favorito */}
        <button
          onClick={() => toggleFavorite(property.id)}
          className="absolute top-3 right-3 rounded-full p-1 shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={favorites.includes(property.id) ? "red" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke={favorites.includes(property.id) ? "red" : "currentColor"}
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733C11.285 4.876 9.623 3.75 7.688 3.75 5.099 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      </div>

      {/* Contenido */}
      <div className="p-2">
        <h3 className="line-clamp-2 text-base font-semibold">{property.title}</h3>
        <p className="mt-1 text-lg font-bold">{property.price}</p>
        <p className="mt-1 flex items-center gap-1 text-sm text-gray-500">
          <MapPin size={14} /> {property.location}
        </p>

        {/* Detalles */}
        <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <BedDouble size={16} /> {property.details.beds}
          </div>
          <div className="flex items-center gap-1">
            <Bath size={16} /> {property.details.baths}
          </div>
          <div className="flex items-center gap-1">
            <CarFront size={16} /> {property.details.cars}
          </div>
          <div className="flex items-center gap-1">
            <Maximize size={16} /> {property.details.size}
          </div>
        </div>

        {/* Amenidades */}
        <p className="mt-2 text-sm text-gray-500">{property.amenities.join(", ")}</p>
      </div>
    </Card>
  );
}
