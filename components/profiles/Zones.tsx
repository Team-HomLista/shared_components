const zones = [
  "Quintana Roo",
  "Isla Mujeres",
  "Holbox",
  "Playa del Carmen",
  "Cozumel",
  "Bacalar",
];

export function AgentZones() {
  return (
    <div className="space-y-2">
      <h2 className="text-base font-semibold text-foreground">
        Zonas de Servicio ({zones.length})
      </h2>
      <ul className="grid grid-cols-3 gap-y-8 pt-2 text-sm text-foreground list-disc pl-5">
        {zones.map((zone, idx) => (
          <li key={idx}>{zone}</li>
        ))}
      </ul>
    </div>
  );
}
