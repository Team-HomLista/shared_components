import { donutFranquicias, topAgencias, ingresosPlanes, indicadoresAdopcion } from "../mocks";

import { DonutDistributionCard } from "./donut-distribution-card";
import { ListStatsCard } from "./list-stats-card";
import { MetricsCard } from "./metrics-card";
import { TopAgenciesMRRCard } from "./top-agencies-mrr-card";

export const AgenciesTab = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <DonutDistributionCard totalValue={51} slices={donutFranquicias} />
      <TopAgenciesMRRCard items={topAgencias} />
      <ListStatsCard title="Ingresos por Plan" rows={ingresosPlanes} totalAmount="132.3K" />
      <MetricsCard title="Indicadores de Adopción" metrics={indicadoresAdopcion} />
    </div>
  );
};
