import Link from "next/link";

export default function PropertyNotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          No pudimos encontrar tu propiedad.
        </h1>
        <p className="mb-8 text-gray-600">
          La propiedad que buscas no existe o ya no está disponible.
        </p>
        <Link
          href="/propiedades"
          className="rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
        >
          Ver todas las propiedades
        </Link>
      </div>
    </div>
  );
}
