import { PropsWithChildren, ReactNode } from "react";

import { Badge } from "@/components/ui/badge";

interface BasicHeroProps {
  title: string;
  description?: ReactNode;
  badge?: string;
}

export function BasicHero({
  title,
  description,
  badge,
  children
}: PropsWithChildren<BasicHeroProps>) {
  return (
    <>
      <div className="from-primary via-primary to-primary/90 relative overflow-hidden bg-gradient-to-b">
        <div className="relative container mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="text-center">
            <h1 className="text-primary-foreground mb-6 text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl xl:text-6xl">
              {title}
            </h1>

            {description && (
              <p className="text-primary-foreground/90 mx-auto max-w-3xl text-lg leading-relaxed sm:text-xl lg:text-2xl">
                {description}
              </p>
            )}

            {badge && (
              <Badge
                variant="secondary"
                className="bg-secondary/20 mt-3 border-white/20 text-xs text-white sm:text-sm"
              >
                {badge}
              </Badge>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl space-y-8 sm:space-y-12">{children}</div>
      </div>
    </>
  );
}
