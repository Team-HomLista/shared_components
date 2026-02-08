import { useState } from "react";

export function AgentVideoCard() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Card principal */}
      <div className="border rounded-2xl p-6 space-y-4">
        <p className="text-sm font-semibold text-foreground">
          Hola, soy Carlos
        </p>
        <div
          onClick={openModal}
          className="relative w-full rounded-lg overflow-hidden aspect-video shadow-md cursor-pointer"
        >
          <img
            src="https://img.youtube.com/vi/SZEflIVnhH8/hqdefault.jpg"
            alt="Testimonio de agente inmobiliario"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-foreground/40 flex items-center justify-center">
            <svg
              className="size-12 text-background"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0  z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="bg-background rounded-xl overflow-hidden w-full max-w-3xl aspect-video relative"
            onClick={(e) => e.stopPropagation()} 
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/SZEflIVnhH8?autoplay=1"
              title="Testimonio agente inmobiliaria"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>

            {/* Botón cerrar */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-background rounded-full size-8 flex items-center justify-center"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
