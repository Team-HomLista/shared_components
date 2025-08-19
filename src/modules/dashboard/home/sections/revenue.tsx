import { FC } from "react";

import { Card, CardContent, CardTitle } from "@/shared/components/ui";

interface RevenueSectionsProps {
  label: string;
  value: string | number;
  change?: string;
}

const Revenue: FC<RevenueSectionsProps> = ({ label, value, change }) => {
  return (
    <Card>
      <CardContent>
        <CardTitle className="text-muted-foreground pb-2 text-sm font-medium">{label}</CardTitle>
        <div className="pb-4 text-2xl font-bold">{value}</div>
        {change && (
          <span
            className={`rounded-full px-2 py-1 text-xs font-medium ${
              change.startsWith("-")
                ? "bg-blocked-status text-blocked-status-foreground"
                : "bg-approved-status text-active-status-foreground"
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
