"use client";

import { FC } from "react";

import HeaderSection from "../../../../components/dashboard/home/header";
import RevenueCardsSection from "../../../../components/dashboard/home/revenue-cards";

import { statsData, revenueCardsData } from "./mocks";
import { ActivityTab } from "./sections/activity-tab";
import { AgenciesTab } from "./sections/agencies-tab";
import { PropertiesTab } from "./sections/properties-tab";
import { TabsSection } from "./sections/tabs-section";

interface FranquiciasDashboardContainerProps {
  slug?: string;
}

export const FranquiciasDashboardContainer: FC<FranquiciasDashboardContainerProps> = () => {
  return (
    <section className="container mx-auto space-y-8 p-4">
      <HeaderSection
        title="Panel de Control de Franquicia"
        description="Resumen ejecutivo de tu red Homlista"
        stats={statsData}
      />

      <RevenueCardsSection cards={revenueCardsData} />

      <TabsSection
        defaultValue="agencias"
        items={[
          { value: "agencias", label: "Agencias", content: <AgenciesTab /> },
          { value: "propiedades", label: "Propiedades", content: <PropertiesTab /> },
          { value: "actividad", label: "Actividad", content: <ActivityTab /> }
        ]}
      />
    </section>
  );
};
