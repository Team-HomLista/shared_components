import { Button } from "@shared/components/ui/button";
import { Input } from "@shared/components/ui/input";
import { Textarea } from "@shared/components/ui/textarea";
import { PropertyAgent } from "@/types/property";
import Link from "next/link";
import { FC } from "react";

export interface AgentTouchProps {
  agent: PropertyAgent;
}

export const AgentTouch: FC<AgentTouchProps> = ({
  agent: { avatar, full_name },
}) => {
  return (
    <div className="border-primary w-full rounded-lg border-2 p-4 sm:p-6 lg:w-xl">
      {/* header */}
      <div className="flex items-center gap-2 sm:gap-3">
        <img
          src={avatar}
          alt="Asesor"
          className="h-8 w-8 rounded-full sm:h-10 sm:w-10"
        />
        <div>
          <p className="text-sm sm:text-base">{full_name}</p>
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
          <label className="mb-1 block text-xs sm:text-sm">
            Nombre Completo
          </label>
          <Input type="text" placeholder="Nombre y Apellidos" />
        </div>

        <div>
          <label className="mb-1 block text-xs sm:text-sm">Teléfono</label>
          <Input type="tel" placeholder="000-000-00-00" />
        </div>

        <div>
          <label className="mb-1 block text-xs sm:text-sm">
            Correo electrónico
          </label>
          <Input type="email" placeholder="nombre@correo.com" />
        </div>

        <div>
          <label className="mb-1 block text-xs sm:text-sm">
            Mensaje Adicional
          </label>
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
