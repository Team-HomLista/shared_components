"use client";

import { SectionHeader } from "@/components/section-header";
import { useState } from "react";
import { LeadFormResponsive } from "./lead-form-responsive";
import { FindSmallForm } from "./small-form";
import { SmallFormData } from "./schemas";

interface FindSectionProps {}

export const FindSection = ({}: FindSectionProps) => {
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [formData, setFormData] = useState<SmallFormData | null>(null);

  const handleSmallFormComplete = (data: SmallFormData) => {
    setFormData(data);
    setShowLeadForm(true);
  };

  return (
    <section className="flex flex-col items-center justify-evenly gap-4 bg-[#F5F5F5] pb-16">
      <div className="w-full">
        <SectionHeader
          title="Encuentra"
          description="¿Aún no encuentras lo que buscas? Deja que nuestra IA te recomiende opciones o encuentre el mejor asesor para ti"
          orientation="left"
        />
        <div className="flex justify-center">
          <div className="w-full max-w-[600px] px-8">
            <FindSmallForm onComplete={handleSmallFormComplete} />
          </div>
        </div>
      </div>
      <LeadFormResponsive
        open={showLeadForm}
        onOpenChange={setShowLeadForm}
        initialData={formData}
      />
    </section>
  );
};
