import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle, XCircle, AlertTriangle } from "lucide-react";

export const IntellectualPropertySection = () => {
  return (
    <Card className="group to-terciary/30 hover:shadow-primary/5 border-0 bg-gradient-to-br from-white shadow-lg transition-all duration-300 hover:shadow-xl">
      <CardContent className="p-6 sm:p-8 lg:p-10">
        <div className="mb-6 flex items-start gap-4 sm:mb-8">
          <div className="from-secondary to-secondary/80 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br shadow-lg sm:h-14 sm:w-14">
            <Shield className="h-6 w-6 text-white sm:h-7 sm:w-7" />
          </div>
          <div className="flex-1">
            <h2 className="text-primary mb-2 text-2xl font-bold sm:text-3xl">
              Propiedad Intelectual
            </h2>
            <div className="from-secondary to-primary h-1 w-16 rounded-full bg-gradient-to-r"></div>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-foreground/80 text-base leading-relaxed sm:text-lg">
            Todos los contenidos de HomLista (textos, imágenes, códigos, diseño,
            bases de datos, logotipos) están protegidos por las leyes de
            propiedad intelectual.
          </p>

          <div className="border-destructive/10 from-destructive/5 to-destructive/10 rounded-xl border bg-gradient-to-r p-4 sm:p-6">
            <div className="mb-4 flex items-start gap-3">
              <XCircle className="text-destructive mt-0.5 h-5 w-5 flex-shrink-0" />
              <h3 className="text-destructive text-base font-semibold sm:text-lg">
                Prohibiciones
              </h3>
            </div>
            <p className="text-foreground/80 text-sm leading-relaxed sm:text-base">
              Está{" "}
              <strong>
                prohibido copiar, modificar, reproducir o distribuir
              </strong>{" "}
              cualquier contenido sin consentimiento expreso.
            </p>
          </div>

          <div className="border-secondary/20 from-secondary/5 to-secondary/10 rounded-xl border bg-gradient-to-r p-4 sm:p-6">
            <div className="mb-4 flex items-start gap-3">
              <CheckCircle className="text-secondary mt-0.5 h-5 w-5 flex-shrink-0" />
              <h3 className="text-secondary text-base font-semibold sm:text-lg">
                Licencia de Uso
              </h3>
            </div>
            <p className="text-foreground/80 text-sm leading-relaxed sm:text-base">
              Al publicar contenido (anuncios, fotos, descripciones), el usuario
              otorga a HomLista una{" "}
              <strong>licencia no exclusiva, transferible y sin costo</strong>{" "}
              para su uso en marketing, motores de búsqueda, campañas
              promocionales, redes sociales, etc.
            </p>
          </div>

          <div className="border-destructive/20 from-destructive/5 to-destructive/10 rounded-xl border bg-gradient-to-r p-6">
            <div className="flex items-start gap-4">
              <div className="bg-destructive/10 flex h-8 w-8 items-center justify-center rounded-lg">
                <AlertTriangle className="text-destructive h-4 w-4" />
              </div>
              <p className="text-foreground text-sm leading-relaxed font-medium sm:text-base">
                <strong>Advertencia:</strong> Cualquier uso no autorizado será
                perseguido conforme a la legislación aplicable.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
