"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";

import { DashboardCard } from "./dashboard-card";

type Slice = { name: string; percent: number; value: number };

interface Props {
  title?: string;
  totalLabel?: string;
  totalValue: number;
  slices: Slice[];
  invertOrder?: boolean;
  hideCenter?: boolean;
}

export function DonutDistributionCard({
  title = "Distribución de Planes",
  totalLabel = "Total",
  totalValue,
  slices,
  invertOrder = false,
  hideCenter = false
}: Props) {
  const chartColors = [
    "var(--chart-1)",
    "var(--chart-2)",
    "var(--chart-3)",
    "var(--chart-4)",
    "var(--chart-5)"
  ];

  return (
    <DashboardCard title={title}>
      <div className="flex items-center gap-6">
        {/* Donut Chart */}
        <div className="h-48 w-48">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={slices}
                dataKey="percent"
                nameKey="name"
                innerRadius={60}
                outerRadius={80}
                strokeWidth={4}
              >
                {slices.map((_, i) => (
                  <Cell key={i} fill={chartColors[i % chartColors.length]} />
                ))}
                {!hideCenter && (
                  <Label
                    position="center"
                    content={({ viewBox }) => {
                      if (!viewBox || !("cx" in viewBox) || !("cy" in viewBox)) return null;
                      const { cx, cy } = viewBox;
                      return (
                        <g>
                          <text
                            x={cx}
                            y={(cy ?? 0) - 6}
                            textAnchor="middle"
                            className="fill-foreground text-xl font-semibold"
                          >
                            {totalValue}
                          </text>
                          <text
                            x={cx}
                            y={(cy ?? 0) + 14}
                            textAnchor="middle"
                            className="fill-muted-foreground text-xs"
                          >
                            {totalLabel}
                          </text>
                        </g>
                      );
                    }}
                  />
                )}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Leyenda */}
        <ul className="space-y-2 text-sm">
          {slices.map((s, i) => {
            const first = invertOrder
              ? { value: s.value, color: "text-sidebar-primary" }
              : { value: s.percent + "%", color: "text-muted-foreground" };
            const second = invertOrder
              ? { value: s.percent + "%", color: "text-muted-foreground" }
              : { value: s.value, color: "text-sidebar-primary" };

            return (
              <li key={s.name} className="flex items-center gap-3">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ background: chartColors[i % chartColors.length] }}
                />
                <span className="w-20">{s.name}</span>
                <span className={`ml-auto ${first.color} w-8 text-right`}>{first.value}</span>
                <span className={`ml-2 ${second.color} w-8 text-right`}>{second.value}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </DashboardCard>
  );
}
