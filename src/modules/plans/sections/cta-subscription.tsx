import { ArrowRightIcon } from "lucide-react";
import { FC } from "react";

import { Button } from "@/components/ui/button";

interface CTASubscriptionSectionProps {}

export const CTASubscriptionSection: FC<CTASubscriptionSectionProps> = () => {
  return (
    <section className="from-primary bg-gradient-to-r to-[#0f4880] py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">
          Comienza a transformar tu negocio inmobiliario hoy
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-xl">
          Únete a los cientos de agentes y agencias que ya confían en Homlista para impulsar su
          negocio inmobiliario
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button variant="outline" size="lg">
            Comenzar prueba gratuita
          </Button>
          <Button variant="secondary" size="lg">
            Contáctanos
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </section>
  );
};
