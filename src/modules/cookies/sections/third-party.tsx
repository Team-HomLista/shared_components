import { Users, CheckCircle, Info } from "lucide-react";

import { SectionInline } from "@/components/section-inline";
import { Alert, AlertDescription, AlertTitle, Card, CardContent } from "@/shared/components/ui";

const ThirdPartyCookiesSection = () => {
  return (
    <SectionInline title="Cookies propias y de terceros" icon={Users}>
      <Card>
        <CardContent className="flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <CheckCircle className="text-primary flex-shrink-0" />
            <p>
              <strong>Cookies propias:</strong> gestionadas directamente por HomLista.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Info className="text-primary flex-shrink-0" />
            <p>
              <strong>Cookies de terceros:</strong> gestionadas por servicios como Google, Meta,
              Hotjar, etc., que pueden recopilar información sobre tu navegación y comportamiento
              para sus propias finalidades.
            </p>
          </div>

          <Alert>
            <Info />
            <AlertTitle>Nota</AlertTitle>
            <AlertDescription>
              <p>
                HomLista{" "}
                <strong>no controla directamente los datos recopilados por terceros</strong>. Te
                recomendamos revisar sus respectivas políticas.
              </p>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </SectionInline>
  );
};

export default ThirdPartyCookiesSection;
