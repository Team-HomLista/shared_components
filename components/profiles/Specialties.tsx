const specialties = [
  "Administración de Propiedades",
  "Desarrollo Inmobiliario",
  "Tasador de Bienes Raíces",
  "Arrendamiento de Locales",
  "Apartment brokerage",
  "Tasador de Bienes Raíces",
];

export function AgentSpecialties() {
  return (
    <div className="space-y-2">
      <h2 className="text-base font-semibold text-foreground">Especialización</h2>
      <div className="flex flex-wrap gap-2 pt-2">
        {specialties.map((item, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-sm border border-foreground text-foreground rounded-md"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
