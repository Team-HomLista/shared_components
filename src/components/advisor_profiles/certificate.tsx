interface CertificateProps {
  license?: string;
  placeOfIssue?: string;
  dateOfIssue?: string;
}

export function Certificate({
  license = "N/A",
  placeOfIssue = "Desconocido",
  dateOfIssue = "Desconocida"
}: CertificateProps) {
  return (
    <div className="relative flex flex-col justify-between gap-6 rounded-xl border px-6 py-5 md:flex-row">
      <div className="text-foreground space-y-2 text-sm">
        <h2 className="text-base font-semibold">Agente Certificado</h2>
        <p>
          <strong>Licencia:</strong> {license}
        </p>
        <p>
          <strong>Lugar de Expedición:</strong> {placeOfIssue}
        </p>
        <p>
          <strong>Fecha de Expedición:</strong> {dateOfIssue}
        </p>
      </div>

      {/* Sello */}
      <div className="flex-shrink-0 self-center md:self-start">
        <div className="border-foreground flex h-24 w-24 items-center justify-center rounded-full border-2 border-dotted">
          <div className="bg-primary-foreground border-foreground h-22 w-22 rounded-full border-2" />
        </div>
      </div>
    </div>
  );
}
