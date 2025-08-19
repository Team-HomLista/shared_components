import { Users, CheckCircle, Info } from "lucide-react";

import { ListWithIcon } from "@/components/list-with-icon";
import { SectionInline } from "@/components/section-inline";
import { Alert, AlertDescription, AlertTitle, Card, CardContent } from "@/shared/components/ui";

const ThirdPartyCookiesSection = () => {
  return (
    <SectionInline title="Cookies propias y de terceros" icon={Users}>
      <Card>
        <CardContent className="flex flex-col gap-3">
          <ListWithIcon
            items={[
              {
                icon: CheckCircle,
                text: (
                  <>
                    <strong>Cookies propias:</strong> gestionadas directamente por HomLista.
                  </>
                )
              },
              {
                icon: Info,
                text: (
                  <>
                    <strong>Cookies de terceros:</strong> gestionadas por servicios como Google,
                    Meta, Hotjar, etc., que pueden recopilar información sobre tu navegación y
                    comportamiento para sus propias finalidades.
                  </>
                )
              }
            ]}
          />

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
