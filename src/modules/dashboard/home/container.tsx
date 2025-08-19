"use client";

import { FC } from "react";

import UserDistributionSection from "@/modules/dashboard/home/sections/users-distribution";

import { statsData, chartTabsData, revenueCardsData } from "./mocks";
import HeaderSection from "./sections/header";
import RevenueCardsSection from "./sections/revenue-cards";
import ChartsTabsSection from "./sections/tabs";

interface DashboardContainerProps {
  slug?: string;
}

export const DashboardContainer: FC<DashboardContainerProps> = () => {
  return (
    <section className="container mx-auto space-y-8 p-4">
      <HeaderSection
        title="Panel de Control de Backoffice"
        subtitle="Resumen ejecutivo de la red Homlista"
        stats={statsData}
      />

      <UserDistributionSection
        title="Distribución de Usuarios"
        data={[
          { label: "Franquicias", value: 10 },
          { label: "Agencias", value: 500 },
          { label: "Agentes", value: 1500 },
          { label: "Compradores", value: 3000 }
        ]}
      />

      <ChartsTabsSection tabs={chartTabsData} />

      <RevenueCardsSection title="Ingresos y Crecimiento" cards={revenueCardsData} />
    </section>
  );
};
