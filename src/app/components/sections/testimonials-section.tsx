import { SectionHeader } from "@/components/section-header";
import { FC } from "react";

interface TestimonialsSectionProps {}

export const TestimonialsSection: FC<TestimonialsSectionProps> = ({}) => {
  return (
    <section>
      <SectionHeader
        title="Testimonios"
        description="Nuestros clientes son nuestra mejor garantía. 
        Descubre lo que dicen quienes han encontrado su hogar ideal o 
        vendido su propiedad con la ayuda de nuestros expertos agentes inmobiliarios."
        orientation="right"
      />
    </section>
  );
};
