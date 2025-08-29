// File: src/white-label/components/hero-banner/hero-banner.stories.tsx
import { Meta, StoryFn } from "@storybook/react";
import React from "react";

import { WhiteLabelHero } from "./hero-banner";

export default {
  title: "WhiteLabel/WhiteLabelHero",
  component: WhiteLabelHero,
  argTypes: {
    primaryColor: { control: "color" },
    align: { control: { type: "inline-radio", options: ["center", "left"] } },
    title: { control: "text" },
    tagline: { control: "text" },
    description: { control: "text" }
  }
} as Meta;

const Template: StoryFn<any> = (args) => (
  <div style={{ padding: 20 }}>
    <WhiteLabelHero {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: "Encuentra tu próximo hogar",
  tagline: "Propiedades seleccionadas para ti",
  description: "Explora una amplia selección de viviendas en las mejores ubicaciones.",
  primaryColor: "#0ea5a4",
  primaryCta: { label: "Ver Propiedades", href: "#" },
  secondaryCta: { label: "Contactar Agencia", href: "#" },
  align: "center"
};

export const LeftAligned = Template.bind({});
LeftAligned.args = {
  ...Default.args,
  align: "left"
};
