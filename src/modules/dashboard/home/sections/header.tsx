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
  stats: StatsData[];
};

export default function HeaderSection({ stats }: DashboardHeaderProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Panel de Control de Backoffice</CardTitle>
        {<CardDescription>Resumen ejecutivo de la red Homlista</CardDescription>}
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </CardContent>
    </Card>
  );
}
