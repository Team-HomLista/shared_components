"use client";

import { SectionHeader } from "@/components/section-header";
import { useState } from "react";
import { LeadFormResponsive } from "./lead-form-responsive";
import { FindSmallForm } from "./lead-small-form";

interface FindSectionProps {}

export const FindSection = ({}: FindSectionProps) => {
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [formData, setFormData] = useState<{
    propertyType: string;
    location: string;
    searchType: string;
    budget: number;
  } | null>(null);

  const handleSmallFormComplete = (data: {
    propertyType: string;
    location: string;
    searchType: string;
    budget: number;
  }) => {
    setFormData(data);
    setShowLeadForm(true);
  };

  return (
    <section className="flex flex-col items-center justify-evenly gap-4 bg-[#F5F5F5] pb-8">
      <div>
        <SectionHeader
          title="Encuentra"
          description="¿Aún no encuentras lo que buscas? Deja que nuestra IA te recomiende opciones o encuentre el mejor asesor para ti"
          orientation="left"
        />
        <FindSmallForm onComplete={handleSmallFormComplete} />
      </div>
      <LeadFormResponsive
        open={showLeadForm}
        onOpenChange={setShowLeadForm}
        initialData={formData}
      />
    </section>
  );
};
