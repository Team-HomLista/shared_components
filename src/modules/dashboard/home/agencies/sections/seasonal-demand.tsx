"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";

type DemandItem = { label: string; value: string };

type SeasonalDemandProps = {
  demand: DemandItem[];
};

export default function SeasonalDemand({ demand }: SeasonalDemandProps) {
  return (
    <Card className="w-full rounded-2xl">
      <CardHeader className="pb-4">
        <CardTitle className="text-foreground text-base font-semibold">
          Demanda Estacional
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {demand.map((d) => (
          <div key={d.label} className="text-foreground flex justify-between text-sm font-medium">
            <span className="text-muted-foreground">{d.label}</span>
            <span>{d.value}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
