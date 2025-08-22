"use client";

import { DashboardCard } from "./dashboard-card";

interface Row {
  label: string;
  pct?: number | string;
  amount?: string | number;
}

interface Props {
  title: string;
  descriptions?: string;
  rows: Row[];
  totalAmount?: string | number;
  invertOrder?: boolean;
}

export function ListStatsCard({
  title,
  descriptions,
  rows,
  totalAmount,
  invertOrder = false
}: Props) {
  return (
    <DashboardCard title={title} description={descriptions}>
      <ul className="space-y-2 text-sm">
        {rows.map((row, i) => (
          <li key={i} className="flex justify-between">
            <span>{row.label}</span>
            <span className="flex gap-2 font-medium">
              {invertOrder ? (
                <>
                  {row.amount !== undefined && (
                    <span className="text-sidebar-primary">{row.amount}</span>
                  )}
                  {row.pct !== undefined && (
                    <span className="text-muted-foreground">{row.pct}</span>
                  )}
                </>
              ) : (
                <>
                  {row.pct !== undefined && (
                    <span className="text-muted-foreground">{row.pct}</span>
                  )}
                  {row.amount !== undefined && (
                    <span className="text-sidebar-primary">{row.amount}</span>
                  )}
                </>
              )}
            </span>
          </li>
        ))}
      </ul>
      {totalAmount && (
        <div className="mt-4 flex justify-between border-t pt-2 text-sm">
          <span>Total</span>
          <span className="font-semibold">{totalAmount}</span>
        </div>
      )}
    </DashboardCard>
  );
}
