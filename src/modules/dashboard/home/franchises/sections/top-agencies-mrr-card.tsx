import { DashboardCard } from "./dashboard-card";

export type AgencyItem = {
  name: string;
  mrr: string;
  posts: number;
  leads: number;
};

export function TopAgenciesMRRCard({
  title = "Top Agencias por Ingresos",
  items
}: {
  title?: string;
  items: AgencyItem[];
}) {
  return (
    <DashboardCard title={title}>
      <ul className="space-y-4">
        {items.map((a) => (
          <li key={a.name} className="flex items-start justify-between">
            <div className="min-w-0">
              <p className="truncate font-medium">{a.name}</p>
              <p className="text-muted-foreground text-xs">
                {a.posts} anuncios • {a.leads} leads
              </p>
            </div>
            <div className="text-right">
              <span className="block font-semibold">{a.mrr}</span>
              <span className="text-muted-foreground text-xs">MRR</span>
            </div>
          </li>
        ))}
      </ul>
    </DashboardCard>
  );
}
