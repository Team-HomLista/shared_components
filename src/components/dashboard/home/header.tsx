import * as React from "react";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import StatsCard from "@/modules/dashboard/home/backoffice/sections/status-cards";

type StatsData = {
  label: string;
  value: string | number;
};

type HeaderSectionProps = {
  stats: StatsData[];
  title: string;
  description?: string;
};

export default function HeaderSection({ stats, title, description }: HeaderSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </CardContent>
    </Card>
  );
}
