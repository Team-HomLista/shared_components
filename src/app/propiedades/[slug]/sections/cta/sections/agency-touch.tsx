import { PropertyAgency } from "@/types/property";
import { FC } from "react";

export interface AgencyTouchProps {
  agency: PropertyAgency;
}

export const AgencyTouch: FC<AgencyTouchProps> = ({
  agency: { name, logo },
}) => {
  return (
    <div className="border-secondary w-full lg:w-xl rounded-lg border-2 p-4 sm:p-6">
      {/* header */}
      <div className="flex items-center gap-2 sm:gap-3">
        <img src={logo} alt="Asesor" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full" />
        <div>
          <p className="text-sm sm:text-base">{name}</p>
        </div>
      </div>

      {/* description */}
      <p className="py-3 sm:py-4 text-xs sm:text-sm">
        Contacta con la agencia o asesor inmobiliario para recibir atención
        personalizada
      </p>

      {/* form */}
      <form className="space-y-3 sm:space-y-4">
        <div>
          <label className="mb-1 block text-xs sm:text-sm">Nombre Completo</label>
          <input
            type="text"
            placeholder="Nombre y Apellidos"
            className="border-secondary focus:border-secondary focus:ring-secondary w-full rounded border-2 p-2 sm:p-3 text-xs sm:text-sm text-black focus:ring-2 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs sm:text-sm">Teléfono</label>
          <input
            type="tel"
            placeholder="000-000-00-00"
            className="border-secondary focus:border-secondary focus:ring-secondary w-full rounded border-2 p-2 sm:p-3 text-xs sm:text-sm text-black focus:ring-2 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs sm:text-sm">Correo electrónico</label>
          <input
            type="email"
            placeholder="nombre@correo.com"
            className="border-secondary focus:border-secondary focus:ring-secondary w-full rounded border-2 p-2 sm:p-3 text-xs sm:text-sm text-black focus:ring-2 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs sm:text-sm">Mensaje Adicional</label>
          <textarea
            rows={3}
            placeholder="Preguntas o dudas..."
            className="border-secondary focus:border-secondary focus:ring-secondary w-full rounded border-2 p-2 sm:p-3 text-xs sm:text-sm text-black focus:ring-2 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="bg-secondary text-white hover:bg-secondary/80 w-full rounded py-2 sm:py-3 text-sm sm:text-base font-semibold transition hover:cursor-pointer"
        >
          Enviar mensaje
        </button>

        <p className="mt-2 text-center text-xs">
          Al enviar este formulario aceptas nuestras{" "}
          <a href="#" className="text-secondary underline">
            Condiciones de uso.
          </a>
        </p>
      </form>
    </div>
  );
};
