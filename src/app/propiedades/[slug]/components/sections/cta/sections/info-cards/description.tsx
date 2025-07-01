"use client";

import { DetailedProperty } from "@/types/property";
import { FC } from "react";

interface PropertyDescriptionProps {
  property: DetailedProperty;
}

export const PropertyDescription: FC<PropertyDescriptionProps> = ({
  property,
}) => {
  if (!property.description) return null;

  return (
    <>
      <div className="flex items-center gap-2">
         <h3 className="text-lg font-semibold mb-3">Descripción</h3>
      </div>
      <div className="flex flex-col gap-2">
        <p className="leading-relaxed font-light" style={{ color: '#09090B' }}>{property.description}</p>
      </div>
    </>
  );
};