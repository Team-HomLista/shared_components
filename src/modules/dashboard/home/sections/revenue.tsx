import { FC } from "react";

import { Card, CardContent } from "@/shared/components/ui";

interface RevenueProps {
  label: string;
  value: string | number;
  change?: string;
}

const Revenue: FC<RevenueProps> = ({ label, value, change }) => {
  return (
    <Card className="border-border border shadow-none">
      <CardContent className="p-4">
        {/* Label */}
        <p className="text-muted-foreground text-sm font-medium">{label}</p>

        {/* Value */}
        <p className="pb-2 text-2xl font-bold">{value}</p>

        {/* Change chip */}
        {change && (
          <span
            className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${
              change.startsWith("-")
                ? "bg-destructive text-destructive-foreground"
                : "bg-foreground text-background"
            }`}
          >
            {change}
          </span>
        )}
      </CardContent>
    </Card>
  );
};

export default Revenue;
