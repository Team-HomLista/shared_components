"use client";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui";

interface LeadSourcesPieProps {
  data: { name: string; value: number }[];
}

export default function LeadSourcesPie({ data }: LeadSourcesPieProps) {
  const chartVars = ["--chart-1", "--chart-2", "--chart-3", "--chart-4", "--chart-5"];

  const colors =
    typeof window !== "undefined"
      ? chartVars.map((varName) =>
          getComputedStyle(document.documentElement).getPropertyValue(varName).trim()
        )
      : chartVars.map((varName) => `var(${varName})`);

  return (
    <Card className="bg-card text-card-foreground w-full">
      <CardHeader>
        <CardTitle>Fuentes de leads</CardTitle>
      </CardHeader>
      <CardContent className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart aria-label="Distribución de fuentes de leads">
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={90}
              label={({ name, value }) => `${name}: ${value}`}
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
