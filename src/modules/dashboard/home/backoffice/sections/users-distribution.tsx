import { FC } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui";

interface DistributionItem {
  label: string;
  value: number | string;
}

interface UserDistributionProps {
  data: DistributionItem[];
}

const UserDistributionSection: FC<UserDistributionProps> = ({ data }) => {
  return (
    <section className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Distribución de Usuarios</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {data.map((item) => (
            <div key={item.label} className="flex flex-col items-center justify-center gap-1.5">
              <span className="text-2xl font-bold">{item.value}</span>
              <span className="text-muted-foreground text-base font-normal">{item.label}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};

export default UserDistributionSection;
