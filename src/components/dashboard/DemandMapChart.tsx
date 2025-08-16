"use client";

import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface DemandMapChartProps {
  title?: string;
  data: Record<string, any>[];
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
 
  const defaultColors = ["--primary", "--secondary", "--chart-2"];

  const resolvedColors = (colors || defaultColors).map(
    (c) =>
      (typeof window !== "undefined"
        ? getComputedStyle(document.documentElement).getPropertyValue(c).trim()
        : c) || "var(--secondary)"
  );

  return (
    <Card className="bg-card text-card-foreground w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className={`h-[${height}px]`}>
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
