import { Button } from "@shared/components/ui/button";
import { Input } from "@shared/components/ui/input";
import { Label } from "@shared/components/ui/label";
import { Textarea } from "@shared/components/ui/textarea";
import { PropertyAgency } from "@/types/property";
import Link from "next/link";
import { FC } from "react";

export interface AgencyTouchProps {
  agency: PropertyAgency;
}

export const AgencyTouch: FC<AgencyTouchProps> = ({
  agency: { name, logo },
}) => {
  return (
    <div className="border-primary w-full rounded-lg border-2 p-4 sm:p-6 lg:w-xl">
      {/* header */}
      <div className="flex items-center gap-2 sm:gap-3">
        <img
          src={logo}
          alt="Asesor"
          className="h-8 w-8 rounded-full sm:h-10 sm:w-10"
        />
        <div>
          <p className="text-sm sm:text-base">{name}</p>
        </div>
      </div>

      {/* description */}
      <p className="py-3 text-xs sm:py-4 sm:text-sm">
        Contacta con la agencia o asesor inmobiliario para recibir atención
        personalizada
      </p>

      {/* form */}
      <form className="space-y-3 sm:space-y-4">
        <div>
          <Label className="mb-1 block text-xs sm:text-sm">
            Nombre Completo
          </Label>
          <Input type="text" placeholder="Nombre y Apellidos" />
        </div>

        <div>
          <Label className="mb-1 block text-xs sm:text-sm">Teléfono</Label>
          <Input type="tel" placeholder="000-000-00-00" />
        </div>

        <div>
          <Label className="mb-1 block text-xs sm:text-sm">
            Correo electrónico
          </Label>
          <Input type="email" placeholder="nombre@correo.com" />
        </div>

        <div>
          <Label className="mb-1 block text-xs sm:text-sm">
            Mensaje Adicional
          </Label>
          <Textarea rows={3} placeholder="Preguntas o dudas..." />
        </div>

        <Button className="w-full" type="submit">
          Enviar mensaje
        </Button>

        <p className="mt-2 text-center text-xs">
          Al enviar este formulario aceptas nuestras{" "}
          <Link href="#">Condiciones de uso.</Link>
        </p>
      </form>
    </div>
  );
};
