"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface PieChartCardProps {
  title: string;
  data: { name: string; value: number }[];
  colorVars?: string[];
}

export default function PieChartCard({
  title,
  data,
  colorVars = ["--chart-1", "--chart-2", "--chart-3"]
}: PieChartCardProps) {
  const colors =
    typeof window !== "undefined"
      ? colorVars.map((varName) =>
          getComputedStyle(document.documentElement).getPropertyValue(varName).trim()
        )
      : colorVars.map((varName) => `var(${varName})`);

  return (
    <Card className="bg-card text-card-foreground w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={90}
              label
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
