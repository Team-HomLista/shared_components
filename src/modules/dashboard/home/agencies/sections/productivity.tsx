"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";

type ProductivityProps = {
  sales: number;
  leads: number;
  lastConnection: string;
};

export default function Productivity({ sales, leads, lastConnection }: ProductivityProps) {
  return (
    <Card className="w-full rounded-2xl">
      <CardHeader className="pb-4">
        <CardTitle className="text-foreground text-base font-semibold">Productividad</CardTitle>
      </CardHeader>
      <CardContent className="text-foreground flex flex-col gap-3 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Número de ventas</span>
          <span>{sales}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Leads generados</span>
          <span>{leads}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Última Conexión</span>
          <span>{lastConnection}</span>
        </div>
      </CardContent>
    </Card>
  );
}
