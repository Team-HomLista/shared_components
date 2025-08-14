interface ZonesProps {
  zones: string[];
}

export function Zones({ zones }: ZonesProps) {
  return (
    <div className="space-y-2">
      <h2 className="text-foreground text-base font-semibold">
        Zonas de Servicio ({zones.length})
      </h2>
      <ul className="text-foreground grid list-disc grid-cols-3 gap-y-8 pt-2 pl-5 text-sm">
        {zones.map((zone, idx) => (
          <li key={idx}>{zone}</li>
        ))}
      </ul>
    </div>
  );
}
