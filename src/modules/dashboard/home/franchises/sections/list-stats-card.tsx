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
          <li key={i} className="grid grid-cols-[1fr_auto_auto] items-center gap-2">
            {/* Label */}
            <span className="truncate">{row.label}</span>

            {/* Primer valor */}
            {invertOrder ? (
              row.amount !== undefined ? (
                <span className="text-sidebar-primary w-16 truncate text-right">{row.amount}</span>
              ) : (
                <span />
              )
            ) : row.pct !== undefined ? (
              <span className="text-muted-foreground w-16 truncate text-right">{row.pct}</span>
            ) : (
              <span />
            )}

            {/* Segundo valor */}
            {invertOrder ? (
              row.pct !== undefined ? (
                <span className="text-muted-foreground w-16 truncate text-right">{row.pct}</span>
              ) : (
                <span />
              )
            ) : row.amount !== undefined ? (
              <span className="text-sidebar-primary w-16 truncate text-right">{row.amount}</span>
            ) : (
              <span />
            )}
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
