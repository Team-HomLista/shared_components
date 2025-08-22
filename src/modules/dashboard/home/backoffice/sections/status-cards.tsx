import * as React from "react";

type StatsCardProps = {
  value: string | number;
  label: string;
};

export default function StatsCard({ value, label }: StatsCardProps) {
  return (
    <div className="flex flex-col items-start gap-1.5">
      <span className="text-2xl font-bold">{value}</span>
      <span className="text-muted-foreground text-base font-normal">{label}</span>
    </div>
  );
}
