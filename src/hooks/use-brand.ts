"use client";

import { BrandConfig, getBrandConfig } from "@/config/brands";
import { useEffect, useState } from "react";

export function useBrand(brandId?: string): BrandConfig | null {
  const [brandConfig, setBrandConfig] = useState<BrandConfig | null>(null);

  useEffect(() => {
    if (!brandId) {
      setBrandConfig(null);
      return;
    }

    const config = getBrandConfig(brandId);
    setBrandConfig(config);

    // Apply CSS variables for theming
    if (config) {
      const root = document.documentElement;
      
      // Apply color variables
      Object.entries(config.colors).forEach(([key, value]) => {
        root.style.setProperty(`--color-${key}`, value);
      });

      // Apply font variables
      root.style.setProperty('--font-primary', config.fonts.primary);
      if (config.fonts.secondary) {
        root.style.setProperty('--font-secondary', config.fonts.secondary);
      }

      // Update document title and meta
      document.title = config.content.title;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', config.content.description);
      }
    }
  }, [brandId]);

  return brandConfig;
}