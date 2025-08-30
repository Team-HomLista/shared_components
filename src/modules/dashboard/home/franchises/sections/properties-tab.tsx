import {
  donutPropiedades,
  tiposPropiedad,
  distribucionPrecio,
  rendimientoPropiedades,
  summaryProperties
} from "@/modules/dashboard/home/franchises/mocks";

import { DonutDistributionCard } from "./donut-distribution-card";
import { ListStatsCard } from "./list-stats-card";
import { MetricsCard } from "./metrics-card";
import { SummaryCards } from "./summary-cards";

export const PropertiesTab = () => {
  return (
    <div className="space-y-4">
      <SummaryCards items={summaryProperties} />

      <div className="grid gap-4 md:grid-cols-2">
        <DonutDistributionCard
          totalValue={1247}
          totalLabel="Total"
          slices={donutPropiedades}
          invertOrder
          hideCenter
        />
        <ListStatsCard
          title="Tipos de Propiedad"
          rows={tiposPropiedad}
          totalAmount="$71,500"
          invertOrder
        />
        <ListStatsCard
          title="Distribución por Precio"
          descriptions="Propiedades por rango de precio"
          rows={distribucionPrecio}
          invertOrder
        />
        <MetricsCard title="Rendimiento de Propiedades" metrics={rendimientoPropiedades} />
      </div>
    </div>
  );
};
