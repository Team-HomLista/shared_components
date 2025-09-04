"use client";

import { FC } from "react";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";

interface GaugeChartProps {
  title: string;
  percentage: number;
  goal: number;
}

const GaugeChart: FC<GaugeChartProps> = ({ title, percentage, goal }) => {
  const data = [{ value: percentage, fill: "var(--chart-3)" }, { value: 100 - percentage }];

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="relative flex h-[250px] flex-col items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart data={data}>
            <Pie
              data={data}
              startAngle={90}
              endAngle={-270}
              innerRadius="70%"
              outerRadius="100%"
              dataKey="value"
            />
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
