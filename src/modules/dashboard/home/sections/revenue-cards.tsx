"use client";

import { FC } from "react";

import RevenueSections from "@/modules/dashboard/home/sections/revenue";

interface RevenueCardData {
  label: string;
  value: string | number;
  change?: string;
}

interface RevenueCardsSectionProps {
  title: string;
  cards: RevenueCardData[];
}

const RevenueCardsSections: FC<RevenueCardsSectionProps> = ({ title, cards }) => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {cards.map((card, index) => (
          <RevenueSections key={index} label={card.label} value={card.value} change={card.change} />
        ))}
      </div>
    </section>
  );
};

export default RevenueCardsSections;
