import { Badge } from "@shared/components/ui/badge";
import { Settings, CheckCircle } from "lucide-react";

import { ListWithIcon } from "@/components/list-with-icon";
import { SectionInline } from "@/components/section-inline";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui";

const TypesOfCookiesSection = () => {
  return (
    <SectionInline title="¿Qué tipos de cookies utilizamos?" icon={Settings}>
      <p>HomLista utiliza las siguientes categorías de cookies:</p>

      <Card>
        <CardHeader>
          <CardTitle>Cookies estrictamente necesarias</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <p>
            Necesarias para el funcionamiento básico de la plataforma (ej. inicio de sesión,
            navegación segura).
          </p>
          <Badge>No requieren consentimiento</Badge>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Cookies de rendimiento y analíticas</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <p>
            Permiten analizar el uso del sitio (ej. páginas más visitadas, tiempo de navegación).
          </p>
          <p className="font-medium">Herramientas utilizadas:</p>
          <ListWithIcon
            items={[
              {
                icon: CheckCircle,
                text: "Google Analytics"
              },
              {
                icon: CheckCircle,
                text: "Pixel de Meta (Facebook/Instagram)"
              }
            ]}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Cookies de funcionalidad</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <p>Mejoran la experiencia (guardar idioma, preferencias, ubicación).</p>
          <p>Ejemplo: recordamos tu país para mostrarte inmuebles locales.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Cookies de marketing y publicidad</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <p> Se usan para mostrarte anuncios personalizados dentro y fuera de HomLista.</p>
          <p>Ejemplo: campañas publicitarias a través de Meta Ads y Google Ads.</p>
        </CardContent>
      </Card>
    </SectionInline>
  );
};

export default TypesOfCookiesSection;
