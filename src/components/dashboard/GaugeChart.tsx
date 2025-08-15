"use client";

import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface GaugeChartProps {
  title: string;
  percentage: number;
  goal: number;
  primaryColorVar?: string;
  backgroundColorVar?: string;
}

const GaugeChart: FC<GaugeChartProps> = ({
  title,
  percentage,
  goal,
  primaryColorVar = "--chart-2",
  backgroundColorVar = "--muted"
}) => {
  const primaryColor =
    typeof window !== "undefined"
      ? getComputedStyle(document.documentElement).getPropertyValue(primaryColorVar).trim()
      : "var(--chart-2)";

  const backgroundColor =
    typeof window !== "undefined"
      ? getComputedStyle(document.documentElement).getPropertyValue(backgroundColorVar).trim()
      : "var(--muted)";

  const data = [
    { value: percentage, color: primaryColor },
    { value: 100 - percentage, color: backgroundColor }
  ];

  return (
    <Card className="bg-card text-card-foreground relative w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="relative flex h-[250px] flex-col items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              startAngle={90}
              endAngle={-270}
              innerRadius="70%"
              outerRadius="100%"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute flex flex-col items-center justify-center">
          <p className="text-2xl font-bold">{percentage}%</p>
          <p className="text-muted-foreground text-xs">Meta: {goal}%</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default GaugeChart;
