import { Map, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";

interface Propiedad {
  lat: number;
  lng: number;
  tipo: "venta" | "renta";
}

interface Props {
  propiedades: Propiedad[];
}

export function PropertiesMap({ propiedades }: Props) {
  return (
    <section className="w-full space-y-4">
      {/* Título de sección */}
      <div>
        <h2 className="text-foreground font-semibold">Propiedades del Agente</h2>
      </div>

      {/* Mapa */}
      <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow">
        <Map
          zoom={17}
          center={{ lat: 21.2515, lng: -89.6665 }}
          mapId={process.env.NEXT_PUBLIC_GOOGLE_MAP_ID}
          gestureHandling="greedy"
          disableDefaultUI
        >
          {propiedades.map((p, i) => (
            <AdvancedMarker position={{ lat: p.lat, lng: p.lng }} key={i}>
              <Pin
                background={p.tipo === "venta" ? "hsl(var(--foreground))" : "hsl(var(--ring))"}
                borderColor="hsl(var(--background))"
                glyphColor="hsl(var(--background))"
                scale={1.2}
              />
            </AdvancedMarker>
          ))}
        </Map>

        {/* Leyenda */}
        <div className="bg-background absolute top-4 right-4 flex gap-x-4 rounded-lg px-4 py-2 text-sm shadow">
          <div className="flex items-center gap-x-1">
            <span className="bg-foreground size-3 rounded-full shadow-md" />
            <span>En Venta</span>
          </div>
          <div className="flex items-center gap-x-1">
            <span className="bg-ring size-3 rounded-full" />
            <span>En Renta</span>
          </div>
        </div>
      </div>
    </section>
  );
}
