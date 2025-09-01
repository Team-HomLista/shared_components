"use client";

import { Button } from "@shared/components/ui/button";
import { Card, CardContent } from "@shared/components/ui/card";
import { Building2, MapPin, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

import { ErrorBoundary } from "@/components/error-boundary";
import { getBrandConfig } from "@/config/brands";

interface WhiteLabelHomePageProps {
  agencySlug: string;
}

export function WhiteLabelHomePage({ agencySlug }: WhiteLabelHomePageProps) {
  const brandConfig = getBrandConfig(agencySlug);

  if (!brandConfig) {
    throw new Error(`Brand configuration not found for: {agencySlug}`);
  }

  return (
    <div className="space-y-12">
      {/* Hero Section */}

      {/* Features Section */}
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6 text-center">
            <div
              className="mx-auto mb-4 flex size-12 items-center justify-center rounded-lg"
              style={{ backgroundColor: `${brandConfig.colors.primary}20` }}
            >
              <Building2 className="h-6 w-6" style={{ color: brandConfig.colors.primary }} />
            </div>
            <h3 className="mb-2 font-semibold">Propiedades Premium</h3>
            <p className="text-muted-foreground text-sm">
              Selección exclusiva de las mejores propiedades
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div
              className="mx-auto mb-4 flex size-12 items-center justify-center rounded-lg"
              style={{ backgroundColor: `${brandConfig.colors.primary}20` }}
            >
              <MapPin className="h-6 w-6" style={{ color: brandConfig.colors.primary }} />
            </div>
            <h3 className="mb-2 font-semibold">Ubicaciones Estratégicas</h3>
            <p className="text-muted-foreground text-sm">En las mejores zonas de la ciudad</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div
              className="mx-auto mb-4 flex size-12 items-center justify-center rounded-lg"
              style={{ backgroundColor: `${brandConfig.colors.primary}20` }}
            >
              <TrendingUp className="h-6 w-6" style={{ color: brandConfig.colors.primary }} />
            </div>
            <h3 className="mb-2 font-semibold">Mejor Inversión</h3>
            <p className="text-muted-foreground text-sm">
              Propiedades con alto potencial de valorización
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div
              className="mx-auto mb-4 flex size-12 items-center justify-center rounded-lg"
              style={{ backgroundColor: `${brandConfig.colors.primary}20` }}
            >
              <Users className="h-6 w-6" style={{ color: brandConfig.colors.primary }} />
            </div>
            <h3 className="mb-2 font-semibold">Asesoría Experta</h3>
            <p className="text-muted-foreground text-sm">
              Acompañamiento profesional en todo el proceso
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Stats Section */}
      <section
        className="flex flex-col gap-8 rounded-2xl p-8 text-center text-white"
        style={{ backgroundColor: brandConfig.colors.primary }}
      >
        <h2 className="text-2xl font-bold">Resultados que Nos Respaldan</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <div className="text-3xl font-bold">500+</div>
            <div className="opacity-90">Propiedades Vendidas</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-3xl font-bold">95%</div>
            <div className="opacity-90">Clientes Satisfechos</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-3xl font-bold">15+</div>
            <div className="opacity-90">Años de Experiencia</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col gap-4 py-16 text-center">
        <h2 className="text-3xl font-bold">¿Listo para encontrar tu hogar ideal?</h2>
        <p className="text-muted-foreground mx-auto max-w-2xl">
          Explora nuestra selección de propiedades y encuentra la que mejor se adapte a tus
          necesidades
        </p>
        <div>
          <Link href={`/wl/${agencySlug}/properties`}>
            <Button
              size="lg"
              style={{ backgroundColor: brandConfig.colors.primary }}
              className="hover:opacity-90"
            >
              Explorar Propiedades
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
