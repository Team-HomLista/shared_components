import { useState } from "react";

interface VideoCardProps {
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
}

export function VideoCard({ title, thumbnailUrl, videoUrl }: VideoCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Card principal */}
      <div className="space-y-4 rounded-2xl border p-6">
        <p className="text-foreground text-sm font-semibold">{title}</p>
        <div
          onClick={openModal}
          className="relative aspect-video w-full cursor-pointer overflow-hidden rounded-lg shadow-md"
        >
          <img
            src={thumbnailUrl}
            alt={`Video thumbnail for ${title}`}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="bg-primary-foreground/40 absolute inset-0 flex items-center justify-center">
            <svg className="text-background size-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={closeModal}>
          <div
            className="bg-background relative aspect-video w-full max-w-3xl overflow-hidden rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="h-full w-full"
              src={`${videoUrl}?autoplay=1`}
              title={title}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />

            {/* Botón cerrar */}
            <button
              onClick={closeModal}
              className="text-background absolute top-2 right-2 flex size-8 items-center justify-center rounded-full"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
