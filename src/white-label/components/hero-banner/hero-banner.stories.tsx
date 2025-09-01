// File: src/white-label/components/hero-banner/hero-banner.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";

import { WhiteLabelHero } from "./hero-banner";

const meta: Meta<typeof WhiteLabelHero> = {
  title: "WhiteLabel/HeroBanner",
  component: WhiteLabelHero,
  argTypes: {
    primaryColor: { control: "color" },
    align: { control: { type: "inline-radio", options: ["center", "left"] } }
  }
};
export default meta;

type Story = StoryObj<typeof WhiteLabelHero>;

export const WithBackground: Story = {
  args: {
    eyebrow: "Agencia Inmobiliaria",
    title: "Encuentra tu próximo hogar",
    subtitle: "Propiedades seleccionadas para ti",
    description: "Explora una amplia selección de viviendas en las mejores ubicaciones.",
    primaryColor: "#0ea5a4",
    primaryCta: { label: "Ver Propiedades", href: "#" },
    secondaryCta: { label: "Contactar Agencia", href: "#" },
    align: "left",
    backgroundUrl:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop",
    kpis: [
      { value: "500+", label: "Propiedades Vendidas" },
      { value: "95%", label: "Clientes Satisfechos" },
      { value: "15+", label: "Años de Experiencia" }
    ]
  }
};

export const Minimal: Story = {
  args: {
    title: "Tu inversión segura",
    primaryColor: "#0ea5a4",
    primaryCta: { label: "Explorar", href: "#" },
    align: "center"
  }
};
