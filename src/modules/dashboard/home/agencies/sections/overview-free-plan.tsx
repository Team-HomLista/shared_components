"use client";

import { HelpCircle } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle, Button } from "@/components/ui";

export type PlanUsage = {
  label: string;
  value: number;
  limit: number;
};

interface OverviewFreePlanProps {
  title: string;
  items: PlanUsage[];
  message: string;
  buttonText: string;
  onButtonClick?: () => void;
}

function UsageRow({ label, value, limit }: PlanUsage) {
  const isFull = value >= limit;
  const progress = limit > 0 ? (value / limit) * 100 : 0;

  return (
    <div className="flex flex-col gap-1">
      {/* Label + Value */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-1">
          <span>{label}</span>
          <HelpCircle className="text-muted-foreground h-4 w-4" />
        </div>
        <span>
          {value}/{limit}
        </span>
      </div>

      {/* Barra de progreso */}
      <div className="bg-muted h-1.5 w-full rounded-full pb-2">
        <div
          className="h-1.5 rounded-full transition-all"
          style={{
            width: `${progress}%`,
            backgroundColor: isFull ? "var(--destructive)" : "var(--active-status-foreground)"
          }}
        />
      </div>
    </div>
  );
}

export default function OverviewFreePlan({
  title,
  items,
  message,
  buttonText,
  onButtonClick
}: OverviewFreePlanProps) {
  return (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle className="text-base font-semibold">Overview {title}</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4 text-sm">
        {/* Items con progress */}
        <div className="flex flex-col gap-4">
          {items.map((item) => (
            <UsageRow key={item.label} {...item} />
          ))}
        </div>

        {/* Mensaje */}
        <p className="text-muted-foreground text-sm leading-relaxed">{message}</p>

        {/* Botón */}
        <Button
          className="bg-foreground text-background w-full hover:opacity-90"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}
