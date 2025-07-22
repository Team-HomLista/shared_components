import { Card, CardContent } from "@/components/ui/card";
import { User, CheckCircle, XCircle, AlertTriangle, Info } from "lucide-react";

export const PlatformUsageSection = () => {
  return (
    <Card className="group to-terciary/30 hover:shadow-primary/5 border-0 bg-gradient-to-br from-white shadow-lg transition-all duration-300 hover:shadow-xl">
      <CardContent className="p-6 sm:p-8 lg:p-10">
        <div className="mb-6 flex items-start gap-4 sm:mb-8">
          <div className="from-primary to-primary/80 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br shadow-lg sm:h-14 sm:w-14">
            <User className="text-primary-foreground h-6 w-6 sm:h-7 sm:w-7" />
          </div>
          <div className="flex-1">
            <h2 className="text-primary mb-2 text-2xl font-bold sm:text-3xl">
              Uso de la plataforma
            </h2>
            <div className="from-secondary to-primary h-1 w-16 rounded-full bg-gradient-to-r"></div>
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <div className="border-primary/20 from-primary/5 rounded-xl border bg-gradient-to-br to-transparent p-6">
            <h3 className="text-primary mb-3 flex items-center gap-3 text-lg font-bold sm:text-xl">
              <div className="bg-primary h-2 w-2 rounded-full"></div>
              1.1 Acceso
            </h3>
            <p className="text-foreground/80 mb-3 text-sm leading-relaxed sm:text-base">
              El uso de HomLista está{" "}
              <strong>restringido a personas mayores de 18 años</strong> que
              actúen con fines legítimos relacionados con la compra, venta o
              alquiler de bienes raíces.
            </p>
            <p className="text-foreground/80 text-sm leading-relaxed sm:text-base">
              Al utilizar la plataforma, usted{" "}
              <strong>declara bajo protesta de decir verdad</strong> que cumple
              con este requisito.
            </p>
          </div>

          <div className="border-secondary/20 from-secondary/5 rounded-xl border bg-gradient-to-br to-transparent p-6">
            <h3 className="text-primary mb-3 flex items-center gap-3 text-lg font-bold sm:text-xl">
              <div className="bg-secondary h-2 w-2 rounded-full"></div>
              1.2 Creación y uso de cuenta
            </h3>
            <ul className="text-foreground/80 mb-4 space-y-2 text-sm leading-relaxed sm:text-base">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-secondary mt-0.5 h-4 w-4 flex-shrink-0" />
                Usted es responsable de la información registrada en su cuenta y
                de todas las actividades realizadas desde la misma.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-secondary mt-0.5 h-4 w-4 flex-shrink-0" />
                El acceso a funciones avanzadas requiere un perfil completo y
                verídico.
              </li>
            </ul>
            <p className="text-foreground/80 mb-2 text-sm font-medium sm:text-base">
              <strong>Queda estrictamente prohibido:</strong>
            </p>
            <ul className="text-foreground/80 mb-4 space-y-2 text-sm leading-relaxed sm:text-base">
              <li className="flex items-start gap-3">
                <XCircle className="text-destructive mt-0.5 h-4 w-4 flex-shrink-0" />
                Crear múltiples cuentas sin autorización.
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="text-destructive mt-0.5 h-4 w-4 flex-shrink-0" />
                Compartir cuentas entre varias personas.
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="text-destructive mt-0.5 h-4 w-4 flex-shrink-0" />
                Suplantar la identidad de terceros.
              </li>
            </ul>
            <div className="border-destructive/20 from-destructive/5 to-destructive/10 rounded-xl border bg-gradient-to-r p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-destructive mt-0.5 h-4 w-4 flex-shrink-0" />
                <p className="text-foreground text-sm leading-relaxed font-medium">
                  <strong>Importante:</strong> HomLista se reserva el derecho de
                  suspender, bloquear o eliminar cuentas que infrinjan estas
                  normas o presenten comportamiento fraudulento.
                </p>
              </div>
            </div>
          </div>

          <div className="border-muted/40 from-muted/10 rounded-xl border bg-gradient-to-br to-transparent p-6">
            <h3 className="text-primary mb-3 flex items-center gap-3 text-lg font-bold sm:text-xl">
              <div className="bg-muted-foreground h-2 w-2 rounded-full"></div>
              1.3 Información proporcionada
            </h3>
            <p className="text-foreground/80 mb-3 text-sm leading-relaxed sm:text-base">
              Usted se compromete a proporcionar información{" "}
              <strong>precisa, veraz, completa y actualizada</strong>.
            </p>
            <p className="text-foreground/80 mb-2 text-sm font-medium sm:text-base">
              <strong>HomLista no se responsabiliza por:</strong>
            </p>
            <ul className="text-foreground/80 space-y-2 text-sm leading-relaxed sm:text-base">
              <li className="flex items-start gap-3">
                <Info className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                Errores u omisiones en los datos aportados por los usuarios.
              </li>
              <li className="flex items-start gap-3">
                <Info className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                Daños derivados del uso de información falsa o engañosa.
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
