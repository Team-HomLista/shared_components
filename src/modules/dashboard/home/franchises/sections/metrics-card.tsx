"use client";

import { DashboardCard } from "./dashboard-card";

interface Metric {
  label: string;
  value: string | number;
}

interface Props {
  title: string;
  metrics: Metric[];
}

export function MetricsCard({ title, metrics }: Props) {
  return (
    <DashboardCard title={title}>
      <ul className="space-y-2 text-sm">
        {metrics.map((m, i) => (
          <li key={i} className="flex justify-between">
            <span>{m.label}</span>
            <span className="text-muted-foreground font-medium">{m.value}</span>
          </li>
        ))}
      </ul>
    </DashboardCard>
  );
}
