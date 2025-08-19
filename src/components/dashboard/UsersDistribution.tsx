import { FC } from "react";

import { Card, CardContent } from "@/shared/components/ui";

interface DistributionItem {
  label: string;
  value: number | string;
}

interface UserDistributionProps {
  title: string;
  data: DistributionItem[];
}

const UserDistribution: FC<UserDistributionProps> = ({ title, data }) => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {data.map((item) => (
          <Card key={item.label} className="border border-gray-200">
            <CardContent className="flex flex-col items-center justify-center py-6">
              <span className="text-lg font-semibold">{item.value}</span>
              <span className="text-muted-foreground text-sm">{item.label}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default UserDistribution;
