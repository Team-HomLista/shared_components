import {
  ActivityIcon,
  BotIcon,
  Building2Icon,
  LayoutTemplateIcon,
  SendIcon,
  StarIcon
} from "lucide-react";
import { FC } from "react";

import { FeatureItem } from "@/components/feature-item";

interface HomlistaFeaturesSectionProps {}

export const HomlistaFeaturesSection: FC<HomlistaFeaturesSectionProps> = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-20 flex w-full flex-col items-center text-center">
          <h2 className="mb-6 max-w-3xl text-4xl font-bold md:text-5xl">
            Funcionalidades diseñadas para el éxito inmobiliario
          </h2>
          <p className="max-w-xl text-xl text-gray-600">
            Todas las herramientas que necesitas para captar leads gestionar clientes y cerrar más
            ventas
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
          <FeatureItem
            Icon={Building2Icon}
            title="CRM Inmobiliario Especializado"
            description="Gestiona tus contactos, seguimientos y ciclos de venta con un CRM diseñado específicamente para el sector inmobiliario en México."
          />
          <FeatureItem
            Icon={BotIcon}
            title="Inteligencia Artificial"
            description="Genera descripciones atractivas, optimiza fotografías y recibe recomendaciones inteligentes para cada propiedad."
          />
          <FeatureItem
            Icon={ActivityIcon}
            title="Analytics Avanzados"
            description="Toma decisiones basadas en datos con reportes detallados sobre el rendimiento de tus anuncios y conversión de leads."
          />
          <FeatureItem
            Icon={LayoutTemplateIcon}
            title="Generador de Landing Pages"
            description="Crea páginas de aterrizaje profesionales para cada propiedad en minutos sin conocimientos técnicos."
          />
          <FeatureItem
            Icon={StarIcon}
            title="Calificación de Leads"
            description="Prioriza tus esfuerzos de venta con un sistema inteligente que califica automáticamente a los prospectos según su potencial."
          />
          <FeatureItem
            Icon={SendIcon}
            title="Automatización de Marketing"
            description="Configura campañas automáticas de email y seguimiento para mantener el interés de tus clientes potenciales."
          />
        </div>
      </div>
    </section>
  );
};
