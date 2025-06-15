import { PropertyAgent } from "@/types/property";
import { FC } from "react";

export interface AgentTouchProps {
  agent: PropertyAgent;
}

export const AgentTouch: FC<AgentTouchProps> = ({
  agent: { avatar, full_name },
}) => {
  return (
    <div className="border-primary w-xl rounded-lg border-2 p-4">
      {/* header */}
      <div className="flex items-center gap-2">
        <img src={avatar} alt="Asesor" className="h-10 w-10 rounded-full" />
        <div>
          <p className="text-sm">{full_name}</p>
        </div>
      </div>

      {/* description */}
      <p className="py-4 text-sm">
        Contacta con la agencia o asesor inmobiliario para recibir atención
        personalizada
      </p>

      {/* form */}
      <form className="space-y-4">
        <div>
          <label className="mb-1 block text-sm">Nombre Completo</label>
          <input
            type="text"
            placeholder="Nombre y Apellidos"
            className="border-secondary focus:border-secondary focus:ring-secondary w-full rounded border-2 p-2 text-black focus:ring-2 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm">Teléfono</label>
          <input
            type="tel"
            placeholder="000-000-00-00"
            className="border-secondary focus:border-secondary focus:ring-secondary w-full rounded border-2 p-2 text-black focus:ring-2 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm">Correo electrónico</label>
          <input
            type="email"
            placeholder="nombre@correo.com"
            className="border-secondary focus:border-secondary focus:ring-secondary w-full rounded border-2 p-2 text-black focus:ring-2 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm">Mensaje Adicional</label>
          <textarea
            rows={3}
            placeholder="Preguntas o dudas..."
            className="border-secondary focus:border-secondary focus:ring-secondary w-full rounded border-2 p-2 text-black focus:ring-2 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="bg-secondary hover:bg-secondary/80 w-full rounded py-2 font-semibold transition hover:cursor-pointer"
        >
          Enviar mensaje
        </button>

        <p className="mt-2 text-center text-xs">
          Al enviar este formulario aceptas nuestras{" "}
          <a href="#" className="text-primary underline">
            Condiciones de uso.
          </a>
        </p>
      </form>
    </div>
  );
};
