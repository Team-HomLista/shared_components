import { Card, CardContent } from "@shared/components/ui/card";
import { Badge } from "@shared/components/ui/badge";
import { Settings, CheckCircle } from "lucide-react";

const TypesOfCookiesSection = () => {
  return (
    <Card className="group to-terciary/30 hover:shadow-primary/5 border-0 bg-gradient-to-br from-white shadow-lg transition-all duration-300 hover:shadow-xl">
      <CardContent className="p-6 sm:p-8 lg:p-10">
        <div className="mb-6 flex items-start gap-4 sm:mb-8">
          <div className="from-secondary to-secondary/80 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br shadow-lg sm:h-14 sm:w-14">
            <Settings className="h-6 w-6 text-white sm:h-7 sm:w-7" />
          </div>
          <div className="flex-1">
            <h2 className="text-primary mb-2 text-2xl font-bold sm:text-3xl">
              ¿Qué tipos de cookies utilizamos?
            </h2>
            <div className="from-secondary to-primary h-1 w-16 rounded-full bg-gradient-to-r"></div>
          </div>
        </div>
        <p className="text-foreground/80 mb-6 text-base leading-relaxed sm:mb-8 sm:text-lg">
          HomLista utiliza las siguientes categorías de cookies:
        </p>

        <div className="space-y-6 sm:space-y-8">
          {/* Strictly necessary */}
          <div className="group/item border-primary/20 from-primary/5 hover:border-primary/40 rounded-xl border bg-gradient-to-br to-transparent p-6 transition-all duration-300 hover:shadow-md">
            <h3 className="text-primary mb-3 flex items-center gap-3 text-lg font-bold sm:text-xl">
              <div className="bg-primary h-2 w-2 rounded-full"></div>
              2.1 Cookies estrictamente necesarias
            </h3>
            <p className="text-foreground/80 mb-3 text-sm leading-relaxed sm:text-base">
              Necesarias para el funcionamiento básico de la plataforma (ej.
              inicio de sesión, navegación segura).
            </p>
            <Badge className="bg-primary text-primary-foreground text-xs sm:text-sm">
              No requieren consentimiento
            </Badge>
          </div>

          {/* Performance cookies */}
          <div className="group/item border-secondary/20 from-secondary/5 hover:border-secondary/40 rounded-xl border bg-gradient-to-br to-transparent p-6 transition-all duration-300 hover:shadow-md">
            <h3 className="text-primary mb-3 flex items-center gap-3 text-lg font-bold sm:text-xl">
              <div className="bg-secondary h-2 w-2 rounded-full"></div>
              2.2 Cookies de rendimiento y analíticas
            </h3>
            <p className="text-foreground/80 mb-3 text-sm leading-relaxed sm:text-base">
              Permiten analizar el uso del sitio (ej. páginas más visitadas,
              tiempo de navegación).
            </p>
            <p className="text-foreground/80 mb-2 text-sm font-medium sm:text-base">
              <strong>Herramientas utilizadas:</strong>
            </p>
            <ul className="text-foreground/80 space-y-2 text-sm leading-relaxed sm:text-base">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-secondary mt-0.5 h-4 w-4 flex-shrink-0" />
                <strong>Google Analytics</strong>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-secondary mt-0.5 h-4 w-4 flex-shrink-0" />
                <strong>Pixel de Meta (Facebook/Instagram)</strong>
              </li>
            </ul>
          </div>

          {/* Functionality cookies */}
          <div className="group/item border-muted/40 from-muted/10 hover:border-muted/60 rounded-xl border bg-gradient-to-br to-transparent p-6 transition-all duration-300 hover:shadow-md">
            <h3 className="text-primary mb-3 flex items-center gap-3 text-lg font-bold sm:text-xl">
              <div className="bg-muted-foreground h-2 w-2 rounded-full"></div>
              2.3 Cookies de funcionalidad
            </h3>
            <p className="text-foreground/80 mb-2 text-sm leading-relaxed sm:text-base">
              Mejoran la experiencia (guardar idioma, preferencias, ubicación).
            </p>
            <p className="text-foreground/60 text-sm leading-relaxed italic sm:text-base">
              Ejemplo: recordamos tu país para mostrarte inmuebles locales.
            </p>
          </div>

          {/* Marketing cookies */}
          <div className="group/item border-accent/40 from-accent/20 hover:border-accent/60 rounded-xl border bg-gradient-to-br to-transparent p-6 transition-all duration-300 hover:shadow-md">
            <h3 className="text-primary mb-3 flex items-center gap-3 text-lg font-bold sm:text-xl">
              <div className="bg-accent-foreground h-2 w-2 rounded-full"></div>
              2.4 Cookies de marketing y publicidad
            </h3>
            <p className="text-foreground/80 mb-2 text-sm leading-relaxed sm:text-base">
              Se usan para mostrarte anuncios personalizados dentro y fuera de
              HomLista.
            </p>
            <p className="text-foreground/60 text-sm leading-relaxed italic sm:text-base">
              Ejemplo: campañas publicitarias a través de Meta Ads y Google Ads.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TypesOfCookiesSection;
