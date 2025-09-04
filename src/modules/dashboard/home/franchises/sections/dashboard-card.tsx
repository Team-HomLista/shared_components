import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title?: string;
  description?: string;
  rightSlot?: React.ReactNode;
  className?: string;
  contentClassName?: string;
  children: React.ReactNode;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  description,
  rightSlot,
  contentClassName,
  children
}) => (
  <Card className={cn("bg-background")}>
    {(title || description || rightSlot) && (
      <CardHeader className="py-4">
        <div className="flex items-center justify-between">
          <div>
            {title && <CardTitle className="text-base font-medium">{title}</CardTitle>}
            {description && <p className="text-muted-foreground text-sm">{description}</p>}
          </div>
          {rightSlot}
        </div>
      </CardHeader>
    )}
    <CardContent className={cn("p-6 pt-0", contentClassName)}>{children}</CardContent>
  </Card>
);
