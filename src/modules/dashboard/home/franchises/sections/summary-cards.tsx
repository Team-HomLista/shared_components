"use client";

import { FC } from "react";

import { Card, CardContent } from "@/shared/components/ui";

interface SummaryCardItem {
  label: string;
  value: string | number;
}

interface SummaryCardsProps {
  items: SummaryCardItem[];
}

export const SummaryCards: FC<SummaryCardsProps> = ({ items }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, idx) => (
        <Card key={idx} className="rounded-2xl border border-gray-100 shadow-sm">
          <CardContent className="flex flex-col items-center justify-center p-6">
            <span className="text-foreground text-2xl font-semibold">{item.value}</span>
            <span className="text-muted-foreground mt-1 text-sm">{item.label}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
