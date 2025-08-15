import * as React from "react";
import StatsCard from "./StatsCards";

type StatsData = {
  label: string;
  value: string | number;
};

type DashboardHeaderProps = {
  title: string;
  subtitle?: string;
  stats: StatsData[];
};

export default function DashboardHeader({ title, subtitle, stats }: DashboardHeaderProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6">
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      {subtitle && <p className="text-muted-foreground pb-6 text-sm">{subtitle}</p>}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </div>
    </div>
  );
}
