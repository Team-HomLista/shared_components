"use client";

import { FC } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui";

interface AgencySidebarProps {
  properties: {
    total: number;
    active: number;
    inactive: number;
  };
  agents: {
    total: number;
  };
  metadata: {
    createdAt: string;
    updatedAt: string;
    createdBy: string;
  };
}

export const AgencySidebar: FC<AgencySidebarProps> = ({ properties, agents, metadata }) => {
  return (
    <aside className="space-y-4">
      {/* Card Propiedades */}
      <Card>
        <CardHeader>
          <CardTitle>Propiedades</CardTitle>
        </CardHeader>
        <CardContent className="space-y-1">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Total Propiedades</span>
            <span className="font-semibold">{properties.total}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Propiedades Activas</span>
            <span className="font-semibold">{properties.active}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Propiedades Inactivas</span>
            <span className="font-semibold">{properties.inactive}</span>
          </div>
        </CardContent>
      </Card>

      {/* Card Agentes */}
      <Card>
        <CardHeader>
          <h3 className="text-sm font-medium">Agentes</h3>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Total Agentes</span>
            <span className="font-semibold">{agents.total}</span>
          </div>
        </CardContent>
      </Card>

      {/* Card Metadata */}
      <Card>
        <CardContent className="space-y-3 text-sm">
          <div>
            <p className="text-foreground font-medium">Fecha de creación</p>
            <p className="text-muted-foreground text-xs">{metadata.createdAt}</p>
          </div>
          <div>
            <p className="text-foreground font-medium">Fecha de modificación</p>
            <p className="text-muted-foreground text-xs">{metadata.updatedAt}</p>
          </div>
          <div>
            <p className="text-foreground font-medium">Creado por</p>
            <p className="text-muted-foreground text-xs">{metadata.createdBy}</p>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
};
