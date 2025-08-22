"use client";

import { FC } from "react";

import { actividadesAgencias, actividadesPropiedades } from "../mocks";

import { ActivityCard } from "./activity-card";

export const ActivityTab: FC = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <ActivityCard
        title="Actividad de Agencias"
        description="Agencias por rango de actividad"
        items={actividadesAgencias}
      />
      <ActivityCard
        title="Actividad de Propiedades"
        description="Propiedades por rango de precio"
        items={actividadesPropiedades}
      />
    </div>
  );
};
