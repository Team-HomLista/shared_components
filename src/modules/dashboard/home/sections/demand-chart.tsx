"use client";

import { FC } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui";

interface DemandData {
  name: string;
  [key: string]: number | string;
}

interface DemandMapChartProps {
  title?: string;
  data: DemandData[];
  keys: string[];
  colors?: string[];
  height?: number;
  stackId?: string;
}

const DemandMapChart: FC<DemandMapChartProps> = ({
  title = "Mapa de Demanda",
  data,
  keys,
  colors,
  height = 250,
  stackId = "a"
}) => {
  const defaultColors = ["--chart-1", "--chart-2", "--chart-3", "--chart-4", "--chart-5"];

  const resolvedColors = (colors || defaultColors).map((c) => `var(${c})`);

  return (
    <Card className="bg-card text-card-foreground w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="var(--muted-foreground)" />
            <YAxis stroke="var(--muted-foreground)" />
            <Tooltip />
            {keys.map((key, index) => (
              <Bar
                key={key}
                dataKey={key}
                stackId={stackId}
                fill={resolvedColors[index % resolvedColors.length]}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default DemandMapChart;
