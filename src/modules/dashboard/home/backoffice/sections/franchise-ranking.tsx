"use client";

import { FC } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui";

interface Franchise {
  name: string;
  ads: number;
  leads: number;
  score: number;
}

interface FranchiseRankingCardProps {
  title?: string;
  data: Franchise[];
}

const FranchiseRankingCard: FC<FranchiseRankingCardProps> = ({
  title = "Top Franquicias por Actividad",
  data
}) => {
  return (
    <Card className="bg-card text-card-foreground w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {data.map((f, i) => (
            <li
              key={f.name}
              className="border-muted flex items-center justify-between border-b pb-2 last:border-none last:pb-0"
            >
              <div>
                <p className="font-medium">{f.name}</p>
                <p className="text-muted-foreground text-xs">
                  {f.ads} anuncios • {f.leads} leads
                </p>
              </div>
              <span
                className="rounded-full px-2 py-1 text-xs font-medium text-white"
                style={{ backgroundColor: `var(--chart-${(i % 4) + 1})` }}
              >
                {f.score}/100
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default FranchiseRankingCard;
