"use client";

import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";

interface AgencySidebarProps {
  properties: {
    total: number;
    active: number;
    inactive: number;
  };
  agents?: {
    total: number;
  };
  metadata: {
    createdAt: string;
    updatedAt: string;
    createdBy: string;
  };
  showAgents?: boolean;
}

export const AgencySidebar: FC<AgencySidebarProps> = ({
  properties,
  agents,
  metadata,
  showAgents = true
}) => {
  const { t } = useTranslation("agency");

  return (
    <aside className="space-y-4">
      {/* Card Propiedades */}
      <Card>
        <CardHeader>
          <CardTitle>{t("sidebar.properties.title")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-1">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">{t("sidebar.properties.total")}</span>
            <span className="font-semibold">{properties.total}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">{t("sidebar.properties.active")}</span>
            <span className="font-semibold">{properties.active}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">{t("sidebar.properties.inactive")}</span>
            <span className="font-semibold">{properties.inactive}</span>
          </div>
        </CardContent>
      </Card>

      {/* Card Agentes */}
      {showAgents && agents && (
        <Card>
          <CardHeader>
            <h3 className="text-sm font-medium">{t("sidebar.agents.title")}</h3>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">{t("sidebar.agents.total")}</span>
              <span className="font-semibold">{agents.total}</span>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Card Metadata */}
      <Card>
        <CardContent className="space-y-3 text-sm">
          <div>
            <p className="text-foreground font-medium">{t("sidebar.metadata.createdAt")}</p>
            <p className="text-muted-foreground text-xs">{metadata.createdAt}</p>
          </div>
          <div>
            <p className="text-foreground font-medium">{t("sidebar.metadata.updatedAt")}</p>
            <p className="text-muted-foreground text-xs">{metadata.updatedAt}</p>
          </div>
          <div>
            <p className="text-foreground font-medium">{t("sidebar.metadata.createdBy")}</p>
            <p className="text-muted-foreground text-xs">{metadata.createdBy}</p>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
};
