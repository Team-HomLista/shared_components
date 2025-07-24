import { Card, CardContent } from "@shared/components/ui/card";
import { Cookie } from "lucide-react";

const WhatAreCookiesSection = () => {
  return (
    <Card className="group to-terciary/30 hover:shadow-primary/5 border-0 bg-gradient-to-br from-white shadow-lg transition-all duration-300 hover:shadow-xl">
      <CardContent className="p-6 sm:p-8 lg:p-10">
        <div className="mb-6 flex items-start gap-4 sm:mb-8">
          <div className="from-primary to-primary/80 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br shadow-lg sm:h-14 sm:w-14">
            <Cookie className="text-primary-foreground h-6 w-6 sm:h-7 sm:w-7" />
          </div>
          <div className="flex-1">
            <h2 className="text-primary mb-2 text-2xl font-bold sm:text-3xl">
              ¿Qué son las cookies?
            </h2>
            <div className="from-secondary to-primary h-1 w-16 rounded-full bg-gradient-to-r"></div>
          </div>
        </div>
        <p className="text-foreground/80 text-base leading-relaxed sm:text-lg">
          Las <strong>cookies</strong> son pequeños archivos de texto que se
          almacenan en su dispositivo (ordenador, tablet o móvil) cuando visita
          un sitio web. Sirven para recordar sus preferencias, mejorar su
          experiencia de navegación y recopilar información estadística.
        </p>
      </CardContent>
    </Card>
  );
};

export default WhatAreCookiesSection;
