"use client";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui";

interface LeadSourcesPieProps {
  data: { name: string; value: number }[];
  colorVars?: string[];
}

export default function LeadSourcesPie({
  data,
  colorVars = ["--publishable-status", "--paused-status-foreground", "--approved-status"]
}: LeadSourcesPieProps) {
  const colors =
    typeof window !== "undefined"
      ? colorVars.map((varName) =>
          getComputedStyle(document.documentElement).getPropertyValue(varName).trim()
        )
      : colorVars.map((varName) => `var(${varName})`);

  return (
    <Card className="bg-card text-card-foreground w-full">
      <CardHeader>
        <CardTitle>Fuentes de leads</CardTitle>
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
