"use client";

import { FC } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui";

interface GaugeChartProps {
  title: string;
  percentage: number;
  goal: number;
}

const GaugeChart: FC<GaugeChartProps> = ({ title, percentage, goal }) => {
  const data = [
    { value: percentage, color: "var(--approved-status)" },
    { value: 100 - percentage, color: "var(--sidebar-ring)" }
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
