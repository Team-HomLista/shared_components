import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from "@shared/components/ui/card";
import * as React from "react";

import StatsCard from "./status-cards";

type StatsData = {
  label: string;
  value: string | number;
};

type DashboardHeaderProps = {
  title: string;
  subtitle?: string;
  stats: StatsData[];
};

export default function HeaderSection({ title, subtitle, stats }: DashboardHeaderProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {subtitle && <CardDescription>{subtitle}</CardDescription>}
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </CardContent>
    </Card>
  );
}
