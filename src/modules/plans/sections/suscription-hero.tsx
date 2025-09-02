import { ArrowRight } from "lucide-react";
import { FC } from "react";

import { Button } from "@/components/ui/button";

interface SubscriptionHeroSectionProps {}

export const SubscriptionHeroSection: FC<SubscriptionHeroSectionProps> = () => {
  return (
    <section className="text-foreground relative isolate">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="from-primary to-secondary relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          }}
        />
      </div>
      <div className="container mx-auto px-4 pt-24">
        <div className="mx-auto flex w-full flex-col items-center text-center">
          <h1 className="mb-10 max-w-4xl text-5xl font-bold md:text-5xl lg:text-6xl">
            Todo lo que tu inmobiliaria necesita para crecer, en una sola plataforma
          </h1>
          <h2 className="mb-6 max-w-2xl text-lg text-gray-600 md:text-xl">
            Desde la publicación hasta el cierre, optimiza cada paso del proceso con nuestras
            herramientas inteligentes basadas en AI. Todo lo que necesitas en un solo lugar para
            atraer clientes.
          </h2>
          <div className="mb-16 flex flex-row items-center justify-center gap-8">
            <Button variant={"default"} size={"lg"}>
              Registrarse gratis
            </Button>
            <Button variant={"outline"} size={"lg"}>
              Contáctanos <ArrowRight />
            </Button>
          </div>
        </div>
        <img
          src="/images/hero-assets/dashboard.png"
          alt="Dashboard preview"
          className="fade-out-100 border-primary/20 mx-auto w-full max-w-4xl rounded-2xl border-2 p-2"
        />
      </div>
    </section>
  );
};
