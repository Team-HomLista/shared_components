"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui";

interface AgencyData {
  name: string;
  ads: number;
  leads: number;
  mrr: string;
}

interface TopAgenciesTableProps {
  title?: string;
  data: AgencyData[];
}

export default function TopAgenciesTable({
  title = "Top Agencias por Ingresos",
  data
}: TopAgenciesTableProps) {
  const badgeColor =
    typeof window !== "undefined"
      ? getComputedStyle(document.documentElement).getPropertyValue("--chart-1").trim()
      : "var(--chart-1)";

  return (
    <Card className="bg-card text-card-foreground w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {data.map((a) => (
            <li
              key={a.name}
              className="border-muted flex items-center justify-between border-b pb-2 last:border-none last:pb-0"
            >
              <div>
                <p className="font-medium">{a.name}</p>
                <p className="text-muted-foreground text-xs">
                  {a.ads} anuncios • {a.leads} leads
                </p>
              </div>
              <span
                className="rounded-full px-2 py-1 text-sm font-semibold"
                style={{ backgroundColor: badgeColor, color: "white" }}
              >
                {a.mrr} MRR
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
