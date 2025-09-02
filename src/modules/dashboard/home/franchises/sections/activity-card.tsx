import { FC } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { cn } from "@/lib/utils";

export interface ActivityItem {
  title: string;
  subtitle: string;
  time: string;
  value?: string;
  color?: "primary" | "secondary";
}

interface ActivityCardProps {
  title: string;
  description?: string;
  items: ActivityItem[];
}

export const ActivityCard: FC<ActivityCardProps> = ({ title, description, items }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
        {description && <p className="text-muted-foreground text-xs">{description}</p>}
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center justify-between text-sm">
              <div className="flex items-start gap-2">
                <span
                  className={cn("size-2 rounded-full", {
                    "bg-chart-3": item.color === "primary",
                    "bg-chart-2": item.color === "secondary"
                  })}
                />
                <div className="flex flex-col">
                  <span className="font-medium">{item.title}</span>
                  <span className="text-muted-foreground text-xs">{item.subtitle}</span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                {item.value && <span className="text-sm font-semibold">{item.value}</span>}
                <span className="text-muted-foreground text-xs">{item.time}</span>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
