"use client";

import { FC } from "react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui";

interface ChartCardProps {
  title: string;
  data: { name: string; value: number }[];
  type?: "line" | "area";
  colorVar?: string;
  height?: number;
}

const ChartCard: FC<ChartCardProps> = ({
  title,
  data,
  type = "line",
  colorVar = "--chart-1", // 👈 por defecto usamos chart-1
  height = 250
}) => {
  const color = `var(${colorVar})`; // 👈 sin window, sin getComputedStyle

  return (
    <Card className="bg-card text-card-foreground w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          {type === "line" ? (
            <LineChart data={data}>
              <XAxis dataKey="name" stroke="var(--muted-foreground)" />
              <YAxis stroke="var(--muted-foreground)" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke={color}
                strokeWidth={2}
                dot={{ r: 4, fill: color }}
              />
            </LineChart>
          ) : (
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={color} stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="var(--muted-foreground)" />
              <YAxis stroke="var(--muted-foreground)" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke={color}
                fillOpacity={1}
                fill="url(#colorValue)"
              />
            </AreaChart>
          )}
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ChartCard;
