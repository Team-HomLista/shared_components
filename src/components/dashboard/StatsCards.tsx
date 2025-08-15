import * as React from "react";

type StatsCardProps = {
  value: string | number;
  label: string;
};

export default function StatsCard({ value, label }: StatsCardProps) {
  return (
    <div className="flex flex-col items-start">
      <span className="text-xl font-semibold">{value}</span>
      <span className="text-muted-foreground text-xs">{label}</span>
    </div>
  );
}
