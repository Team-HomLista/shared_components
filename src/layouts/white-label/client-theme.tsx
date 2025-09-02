"use client";

import { useEffect } from "react";

import { BrandConfig } from "@/config/brands";

interface WhiteLabelClientThemeProps {
  brandConfig: BrandConfig;
}

export function WhiteLabelClientTheme({ brandConfig }: WhiteLabelClientThemeProps) {
  useEffect(() => {
    if (brandConfig) {
      const root = document.documentElement;

      // Apply CSS variables for theming
      Object.entries(brandConfig.colors).forEach(([key, value]) => {
        root.style.setProperty(`--color-${key}`, value);
      });

      // Apply font variables
      root.style.setProperty("--font-primary", brandConfig.fonts.primary);
      if (brandConfig.fonts.secondary) {
        root.style.setProperty("--font-secondary", brandConfig.fonts.secondary);
      }

      // Update document title and meta for client-side
      document.title = brandConfig.content.title;

      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", brandConfig.content.description);
      }

      // Add brand attribute to html element
      root.setAttribute("data-brand", brandConfig.id);
    }
  }, [brandConfig]);

  return null; // This component only applies side effects
}
