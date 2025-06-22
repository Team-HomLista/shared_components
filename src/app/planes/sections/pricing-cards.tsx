import { FC } from "react";
import { PricingCard } from "@/components/pricing-card";

interface PricingCardProps {}

export const PricingCardSection: FC<PricingCardProps> = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 flex w-full flex-col items-center text-center">
          <h2 className="mb-6 max-w-3xl text-3xl font-bold md:text-4xl">
            Descubre los precios y planes de HomLista para hacer crecer tu
            negocio inmobiliario
          </h2>
          <p className="max-w-xl text-xl text-gray-600">
            Desde planes individuales hasta opciones avanzadas para agencias…
            Encuentra el plan que se adapta a tus necesidades y alcanza nuevos
            niveles de éxito
          </p>
        </div>

        <div className="mx-auto flex w-full flex-col items-stretch justify-center gap-8 px-4 md:flex-row lg:px-12">
          <PricingCard
            title="Asesor"
            price="$1,580 MXN"
            priceDetail="/mes"
            description="¡Publica sin límites y alcanza más clientes!"
            buttonText="Suscribirse a plan Asesor"
            features={[
              "Propiedades ilimitadas",
              "Optimización SEO",
              "WhatsApp con tus leads en tiempo real",
              "3 Anuncios destacados",
              "Comparte tus anuncios en tus redes sociales",
              "Hasta 10 leads de compradores cada mes",
            ]}
          />
          <PricingCard
            title="Agencia"
            price="$3,000 MXN"
            priceDetail="/mes"
            description="¡Optimiza tu equipo con herramientas avanzadas!"
            buttonText="Suscribirse a plan Agencia"
            features={[
              "Propiedades ilimitadas",
              "Optimización SEO",
              "WhatsApp con tus leads en tiempo real",
              "8 anuncios destacados",
              "Comparte tus anuncios en tus redes sociales",
              "Hasta 4 usuarios",
              "8 anuncios destacados",
              "Herramientas colaborativas",
              "Gestión de equipos",
              "Grupo WhatsApp dedicado",
            ]}
          />
          <PricingCard
            title="Agencia VIP"
            price="$4,200 MXN"
            priceDetail="/mes"
            description="¡Exclusividad y potencia para cerrar más ventas!"
            buttonText="Suscribirse a plan Agencia VIP"
            isPopular={true}
            features={[
              "Propiedades ilimitadas",
              "Optimización SEO",
              "WhatsApp con tus leads en tiempo real",
              "12 anuncios destacados",
              "Comparte tus anuncios en tus redes sociales",
              "Hasta 10 usuarios",
              "8 anuncios destacados",
              "Herramientas colaborativas",
              "Gestión de equipos",
              "Grupo WhatsApp dedicado",
              "Soporte técnico prioritario",
            ]}
          />
        </div>
      </div>
    </section>
  );
};
