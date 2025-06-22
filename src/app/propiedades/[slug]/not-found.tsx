import Link from 'next/link';

export default function PropertyNotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Propiedad no encontrada
        </h1>
        <p className="text-gray-600 mb-8">
          La propiedad que buscas no existe o ya no está disponible.
        </p>
        <Link
          href="/propiedades"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Ver todas las propiedades
        </Link>
      </div>
    </div>
  );
}
