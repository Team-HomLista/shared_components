"use client";

import { FC } from "react";

import Revenue from "./revenue";

interface RevenueCardData {
  label: string;
  value: string | number;
  change?: string;
}

interface RevenueCardsSectionProps {
  cards: RevenueCardData[];
}

const RevenueCardsSections: FC<RevenueCardsSectionProps> = ({ cards }) => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold tracking-tight">Ingresos y Crecimiento</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {cards.map((card, index) => (
          <Revenue key={index} label={card.label} value={card.value} change={card.change} />
        ))}
      </div>
    </section>
  );
};

export default RevenueCardsSections;
