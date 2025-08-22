import { FC } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui";

interface ActivityItem {
  title: string;
  subtitle: string;
  time: string;
  value?: string;
  color?: string;
}

interface ActivityCardProps {
  title: string;
  description?: string;
  items: ActivityItem[];
}

export const ActivityCard: FC<ActivityCardProps> = ({ title, description, items }) => {
  return (
    <Card className="rounded-2xl border border-[--color-border] bg-[--color-card] text-[--color-card-foreground] shadow-sm">
      <CardHeader>
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
        {description && <p className="text-xs text-[--color-muted-foreground]">{description}</p>}
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center justify-between text-sm">
              <div className="flex items-start gap-2">
                <span
                  className={`mt-1 h-2 w-2 rounded-full`}
                  style={{
                    backgroundColor: item.color === "primary" ? "var(--chart-3)" : "var(--chart-2)"
                  }}
                />
                <div className="flex flex-col">
                  <span className="font-medium">{item.title}</span>
                  <span className="text-xs text-[--color-muted-foreground]">{item.subtitle}</span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                {item.value && <span className="text-sm font-semibold">{item.value}</span>}
                <span className="text-xs text-[--color-muted-foreground]">{item.time}</span>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
