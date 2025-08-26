"use client";

import { FC } from "react";

import HeaderSection from "../../../../components/dashboard/home/header";
import RevenueCardsSection from "../../../../components/dashboard/home/revenue-cards";

import { statsData, chartTabsData, revenueCardsData } from "./mocks";
import ChartsTabsSection from "./sections/tabs";
import UserDistributionSection from "./sections/users-distribution";

interface DashboardContainerProps {
  slug?: string;
}

export const DashboardContainer: FC<DashboardContainerProps> = () => {
  return (
    <section className="container mx-auto space-y-8 p-4">
      <HeaderSection
        title="Panel de Control de Backoffice"
        description="Resumen ejecutivo de la red Homlista"
        stats={statsData}
      />

      <UserDistributionSection
        data={[
          { label: "Franquicias", value: 10 },
          { label: "Agencias", value: 500 },
          { label: "Agentes", value: 1500 },
          { label: "Compradores", value: 3000 }
        ]}
      />

      <ChartsTabsSection tabs={chartTabsData} />

      <RevenueCardsSection cards={revenueCardsData} />
    </section>
  );
};
