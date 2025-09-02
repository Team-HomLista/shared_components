import { PropsWithChildren } from "react";

import { getBrandConfig } from "@/config/brands";

import { WhiteLabelClientTheme } from "./client-theme";

interface WhiteLabelLayoutProps extends PropsWithChildren {
  brand: string;
}

export function WhiteLabelLayout({ children, brand }: WhiteLabelLayoutProps) {
  const brandConfig = getBrandConfig(brand);

  if (!brandConfig) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1>Brand not found: {brand}</h1>
        <p>Please check your configuration.</p>
      </div>
    );
  }

  return (
    <>
      {/* Client-side theme application */}
      <WhiteLabelClientTheme brandConfig={brandConfig} />

      <div className="bg-background text-foreground min-h-screen">
        {/* Server-rendered branded header */}
        <header className="bg-card border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="h-8 w-8 rounded"
                  style={
                    {
                      backgroundColor: brandConfig.colors.primary,
                      "--brand-primary": brandConfig.colors.primary
                    } as React.CSSProperties
                  }
                />
                <div>
                  <h1
                    className="text-xl font-bold"
                    style={
                      {
                        color: brandConfig.colors.primary,
                        "--brand-primary": brandConfig.colors.primary
                      } as React.CSSProperties
                    }
                  >
                    {brandConfig.content.title}
                  </h1>
                  {brandConfig.content.tagline && (
                    <p className="text-muted-foreground text-sm">{brandConfig.content.tagline}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">{children}</main>

        {/* Server-rendered branded footer */}
        <footer className="bg-card border-t">
          <div className="container mx-auto px-4 py-6">
            <p className="text-muted-foreground text-center text-sm">
              © 2025 {brandConfig.content.title}. Powered by HomLista.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
