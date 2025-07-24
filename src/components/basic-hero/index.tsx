import { Badge } from "@shared/components/ui/badge";
import { FC } from "react";

interface BasicHeroProps {
  policyName: string;
  description: string;
  lastUpdated: string;
}

export const BasicHeroSection: FC<BasicHeroProps> = ({
  policyName,
  description,
  lastUpdated,
}) => {
  return (
    <div className="from-primary via-primary to-primary/90 relative overflow-hidden bg-gradient-to-b">
      <div className="relative container mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="text-center">
          <h1 className="text-primary-foreground mb-6 text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl xl:text-6xl">
            {policyName}
          </h1>
          <p className="text-primary-foreground/90 mx-auto max-w-3xl text-lg leading-relaxed sm:text-xl lg:text-2xl">
            {description}
          </p>
          <Badge
            variant="secondary"
            className="bg-secondary/20 mt-3 border-white/20 text-xs text-white sm:text-sm"
          >
            Última actualización: {lastUpdated}
          </Badge>
        </div>
      </div>
    </div>
  );
};
