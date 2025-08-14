import { Card, CardContent } from "@shared/components/ui/card";
import { Users, CheckCircle, Info } from "lucide-react";

const ThirdPartyCookiesSection = () => {
  return (
    <Card className="group to-terciary/30 hover:shadow-primary/5 border-0 bg-gradient-to-br from-white shadow-lg transition-all duration-300 hover:shadow-xl">
      <CardContent className="p-6 sm:p-8 lg:p-10">
        <div className="mb-6 flex items-start gap-4 sm:mb-8">
          <div className="from-primary to-primary/80 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br shadow-lg sm:h-14 sm:w-14">
            <Users className="text-primary-foreground h-6 w-6 sm:h-7 sm:w-7" />
          </div>
          <div className="flex-1">
            <h2 className="text-primary mb-2 text-2xl font-bold sm:text-3xl">
              Cookies propias y de terceros
            </h2>
            <div className="from-secondary to-primary h-1 w-16 rounded-full bg-gradient-to-r" />
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <CheckCircle className="text-secondary mt-0.5 h-5 w-5 flex-shrink-0" />
            <p className="text-foreground/80 text-sm leading-relaxed sm:text-base">
              <strong>Cookies propias:</strong> gestionadas directamente por HomLista.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Info className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
            <p className="text-foreground/80 text-sm leading-relaxed sm:text-base">
              <strong>Cookies de terceros:</strong> gestionadas por servicios como Google, Meta,
              Hotjar, etc., que pueden recopilar información sobre tu navegación y comportamiento
              para sus propias finalidades.
            </p>
          </div>
          <div className="border-muted/40 from-muted/20 to-muted/10 rounded-xl border bg-gradient-to-r p-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-lg">
                <Info className="text-primary h-4 w-4" />
              </div>
              <p className="text-foreground text-sm leading-relaxed font-medium sm:text-base">
                HomLista{" "}
                <strong>no controla directamente los datos recopilados por terceros</strong>. Te
                recomendamos revisar sus respectivas políticas.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ThirdPartyCookiesSection;
