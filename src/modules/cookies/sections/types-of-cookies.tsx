import { Badge } from "@shared/components/ui/badge";
import { Settings, CheckCircle } from "lucide-react";

import { SectionInline } from "@/components/section-inline";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui";

const TypesOfCookiesSection = () => {
  return (
    <SectionInline title="¿Qué tipos de cookies utilizamos?" icon={Settings}>
      <p>HomLista utiliza las siguientes categorías de cookies:</p>

      <Card className="gap-3">
        <CardHeader>
          <CardTitle>Cookies estrictamente necesarias</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col">
          Necesarias para el funcionamiento básico de la plataforma (ej. inicio de sesión,
          navegación segura).
          <Badge>No requieren consentimiento</Badge>
        </CardContent>
      </Card>

      <Card className="gap-3">
        <CardHeader>
          <CardTitle>Cookies de rendimiento y analíticas</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <p>
            Permiten analizar el uso del sitio (ej. páginas más visitadas, tiempo de navegación).
          </p>
          <p className="font-medium">Herramientas utilizadas:</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-primary flex-shrink-0" />
              <span>Google Analytics</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-primary flex-shrink-0" />
              <span>Pixel de Meta (Facebook/Instagram)</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="gap-3">
        <CardHeader>
          <CardTitle>Cookies de funcionalidad</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <p>Mejoran la experiencia (guardar idioma, preferencias, ubicación).</p>
          <p>Ejemplo: recordamos tu país para mostrarte inmuebles locales.</p>
        </CardContent>
      </Card>

      <Card className="gap-3">
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
