import { Card, CardContent } from "@shared/components/ui/card";
import { FileText, XCircle } from "lucide-react";

export const ContentResponsibilitySection = () => {
  return (
    <Card className="group to-terciary/30 hover:shadow-primary/5 border-0 bg-gradient-to-br from-white shadow-lg transition-all duration-300 hover:shadow-xl">
      <CardContent className="p-6 sm:p-8 lg:p-10">
        <div className="mb-6 flex items-start gap-4 sm:mb-8">
          <div className="from-primary to-primary/80 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br shadow-lg sm:h-14 sm:w-14">
            <FileText className="text-primary-foreground h-6 w-6 sm:h-7 sm:w-7" />
          </div>
          <div className="flex-1">
            <h2 className="text-primary mb-2 text-2xl font-bold sm:text-3xl">
              Contenidos y responsabilidad de terceros
            </h2>
            <div className="from-secondary to-primary h-1 w-16 rounded-full bg-gradient-to-r" />
          </div>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          <div className="border-primary/20 from-primary/5 rounded-xl border bg-gradient-to-br to-transparent p-6">
            <h3 className="text-primary mb-3 flex items-center gap-3 text-lg font-bold sm:text-xl">
              <div className="bg-primary h-2 w-2 rounded-full" />
              3.1 Publicaciones de usuarios
            </h3>
            <p className="text-foreground/80 mb-3 text-sm leading-relaxed sm:text-base">
              Todo anuncio, comentario o publicación hecha por usuarios o agentes inmobiliarios es{" "}
              <strong>responsabilidad exclusiva de quien la publica</strong>.
            </p>
            <p className="text-foreground/80 text-sm leading-relaxed sm:text-base">
              HomLista <strong>no garantiza ni valida la veracidad ni legalidad</strong> de los
              contenidos generados por terceros. Se recomienda verificar cualquier información antes
              de concretar una operación.
            </p>
          </div>

          <div className="border-destructive/20 from-destructive/5 rounded-xl border bg-gradient-to-br to-transparent p-6">
            <h3 className="text-primary mb-3 flex items-center gap-3 text-lg font-bold sm:text-xl">
              <div className="bg-destructive h-2 w-2 rounded-full" />
              3.2 Contenido prohibido
            </h3>
            <p className="text-foreground/80 mb-3 text-sm leading-relaxed sm:text-base">
              HomLista <strong>prohíbe expresamente</strong> la publicación de:
            </p>
            <ul className="text-foreground/80 mb-4 space-y-2 text-sm leading-relaxed sm:text-base">
              <li className="flex items-start gap-2">
                <XCircle className="text-destructive mt-0.5 h-3 w-3 flex-shrink-0" />
                Información falsa o engañosa.
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="text-destructive mt-0.5 h-3 w-3 flex-shrink-0" />
                Fotografías no relacionadas con el inmueble.
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="text-destructive mt-0.5 h-3 w-3 flex-shrink-0" />
                Datos de contacto visibles fuera de los campos destinados.
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="text-destructive mt-0.5 h-3 w-3 flex-shrink-0" />
                Contenido ofensivo, discriminatorio o ilegal.
              </li>
            </ul>
            <div className="border-destructive/30 bg-destructive/10 rounded-lg border p-3">
              <p className="text-foreground text-xs leading-relaxed font-medium sm:text-sm">
                <strong>Importante:</strong> Las publicaciones que infrinjan estas reglas podrán ser{" "}
                <strong>eliminadas sin previo aviso ni reembolso</strong>.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
