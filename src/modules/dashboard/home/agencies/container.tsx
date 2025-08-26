"use client";

import { FC } from "react";

import HeaderSection from "@/components/dashboard/home/header";

import {
  newPropertiesData,
  overviewFreePlanData,
  productivityData,
  seasonalDemandData,
  statsData
} from "./mocks";
import NewProperties from "./sections/new-properties";
import OverviewFreePlan from "./sections/overview-free-plan";
import Productivity from "./sections/productivity";
import SeasonalDemand from "./sections/seasonal-demand";

interface DashboardContainerProps {
  slug?: string;
}

export const AgenciesDashboardContainer: FC<DashboardContainerProps> = () => {
  const handlePlanButtonClick = () => {
    console.log("Ver planes clickeado");
  };
  return (
    <section className="container mx-auto space-y-8 p-4">
      <HeaderSection
        title="Panel de Control"
        description="Resumen ejecutivo de tu red Homlista"
        stats={statsData}
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <NewProperties {...newPropertiesData} />
        <OverviewFreePlan
          title="Plan Gratuito"
          {...overviewFreePlanData}
          onButtonClick={handlePlanButtonClick}
        />
        <SeasonalDemand demand={seasonalDemandData} />
        <Productivity {...productivityData} />
      </div>
    </section>
  );
};
