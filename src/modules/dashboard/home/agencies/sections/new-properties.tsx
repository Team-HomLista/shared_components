"use client";

import { Building2, Workflow, LayoutGrid } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle, Button } from "@/components/ui";

type NewPropertiesProps = {
  stats: { label: string; value: string | number }[];
  actives: number;
  inactives: number;
  onGo?: () => void;
};

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-muted/80 flex h-9 w-9 items-center justify-center rounded-md">
      <span className="text-muted-foreground">{children}</span>
    </div>
  );
}

export default function NewProperties({ stats, actives, inactives, onGo }: NewPropertiesProps) {
  return (
    <section className="w-full space-y-4">
      {/* Sección: Nuevas Propiedades (sin borde externo del contenedor) */}
      <div className="w-full">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <IconBadge>
              <Building2 className="h-5 w-5" />
            </IconBadge>
            <CardTitle className="text-base font-semibold">Nuevas Propiedades</CardTitle>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="flex flex-col text-sm">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center py-2 first:pt-0 last:pb-0">
                <span className="text-muted-foreground">{s.label}</span>
                <span className="ml-auto font-medium">{s.value}</span>
              </div>
            ))}
          </div>

          {/* Cards: Activas / Inactivas */}
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Card>
              <CardContent className="p-5">
                <div className="flex flex-col items-start gap-2">
                  <IconBadge>
                    <Workflow className="h-5 w-5" />
                  </IconBadge>
                  <div className="text-muted-foreground text-sm leading-tight">
                    Propiedades Activas
                  </div>
                  <div className="text-2xl font-bold"> {actives} </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-5">
                <div className="flex flex-col items-start gap-2">
                  <IconBadge>
                    <LayoutGrid className="h-5 w-5" />
                  </IconBadge>
                  <div className="text-muted-foreground text-sm leading-tight">
                    Propiedades Inactivas
                  </div>
                  <div className="text-2xl font-bold"> {inactives} </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Botón inferior */}
          <div className="mt-5">
            <Button variant="outline" className="w-full" onClick={onGo}>
              Ir a Propiedades
            </Button>
          </div>
        </CardContent>
      </div>
    </section>
  );
}
