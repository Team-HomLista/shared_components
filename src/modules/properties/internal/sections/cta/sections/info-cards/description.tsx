"use client";

import { FC, useEffect, useState } from "react";

import { DetailedProperty } from "@/types/property";

interface PropertyDescriptionProps {
  property: DetailedProperty;
}

export const PropertyDescription: FC<PropertyDescriptionProps> = ({ property }) => {
  const [descripcionSegura, setDescripcionSegura] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && property.description) {
      const DOMPurify = require("dompurify");
      const sanitized = DOMPurify.sanitize(property.description);
      setDescripcionSegura(sanitized);
    }
  }, [property.description]);

  if (!descripcionSegura) return null;

  return (
    <>
      <div className="flex items-center gap-2">
        <h3 className="mb-3 text-lg font-semibold">Descripción</h3>
      </div>
      <div className="flex flex-col gap-2">
        <div
          dangerouslySetInnerHTML={{ __html: descripcionSegura }}
          className="prose prose-slate prose-headings:text-[#09090B] prose-p:text-[#09090B] prose-p:leading-relaxed prose-p:font-light prose-strong:text-[#09090B] prose-ul:text-[#09090B] prose-ol:text-[#09090B] prose-li:text-[#09090B] max-w-none"
        />
      </div>
    </>
  );
};
