"use client";

import { getBrandConfig } from "@/config/brands";
import { Button } from "@shared/components/ui/button";
import { Card, CardContent } from "@shared/components/ui/card";
import { Building2, MapPin, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

interface WhiteLabelHomePageProps {
  agencySlug: string;
}

export function WhiteLabelHomePage({ agencySlug }: WhiteLabelHomePageProps) {
  const brandConfig = getBrandConfig(agencySlug);

  if (!brandConfig) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1>Brand configuration not found for: {agencySlug}</h1>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4" style={{ color: brandConfig.colors.primary }}>
          {brandConfig.content.title}
        </h1>
        {brandConfig.content.tagline && (
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {brandConfig.content.tagline}
          </p>
        )}
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
          {brandConfig.content.description}
        </p>
        
        <div className="flex gap-4 justify-center">
          <Link href={`/wl/${agencySlug}/properties`}>
            <Button 
              size="lg"
              style={{ backgroundColor: brandConfig.colors.primary }}
              className="hover:opacity-90"
            >
              Ver Propiedades
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="lg"
            style={{ borderColor: brandConfig.colors.primary, color: brandConfig.colors.primary }}
          >
            Contactar Agencia
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <div 
              className="w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center"
              style={{ backgroundColor: `${brandConfig.colors.primary}20` }}
            >
              <Building2 className="h-6 w-6" style={{ color: brandConfig.colors.primary }} />
            </div>
            <h3 className="font-semibold mb-2">Propiedades Premium</h3>
            <p className="text-sm text-muted-foreground">
              Selección exclusiva de las mejores propiedades
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div 
              className="w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center"
              style={{ backgroundColor: `${brandConfig.colors.primary}20` }}
            >
              <MapPin className="h-6 w-6" style={{ color: brandConfig.colors.primary }} />
            </div>
            <h3 className="font-semibold mb-2">Ubicaciones Estratégicas</h3>
            <p className="text-sm text-muted-foreground">
              En las mejores zonas de la ciudad
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div 
              className="w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center"
              style={{ backgroundColor: `${brandConfig.colors.primary}20` }}
            >
              <TrendingUp className="h-6 w-6" style={{ color: brandConfig.colors.primary }} />
            </div>
            <h3 className="font-semibold mb-2">Mejor Inversión</h3>
            <p className="text-sm text-muted-foreground">
              Propiedades con alto potencial de valorización
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div 
              className="w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center"
              style={{ backgroundColor: `${brandConfig.colors.primary}20` }}
            >
              <Users className="h-6 w-6" style={{ color: brandConfig.colors.primary }} />
            </div>
            <h3 className="font-semibold mb-2">Asesoría Experta</h3>
            <p className="text-sm text-muted-foreground">
              Acompañamiento profesional en todo el proceso
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Stats Section */}
      <section 
        className="rounded-2xl p-8 text-white text-center"
        style={{ backgroundColor: brandConfig.colors.primary }}
      >
        <h2 className="text-2xl font-bold mb-8">Resultados que Nos Respaldan</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-3xl font-bold mb-2">500+</div>
            <div className="opacity-90">Propiedades Vendidas</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">95%</div>
            <div className="opacity-90">Clientes Satisfechos</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">15+</div>
            <div className="opacity-90">Años de Experiencia</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold mb-4">¿Listo para encontrar tu hogar ideal?</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Explora nuestra selección de propiedades y encuentra la que mejor se adapte a tus necesidades
        </p>
        <Link href={`/wl/${agencySlug}/properties`}>
          <Button 
            size="lg"
            style={{ backgroundColor: brandConfig.colors.primary }}
            className="hover:opacity-90"
          >
            Explorar Propiedades
          </Button>
        </Link>
      </section>
    </div>
  );
}