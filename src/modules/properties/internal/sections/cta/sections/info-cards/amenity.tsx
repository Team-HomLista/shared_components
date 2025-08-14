import { Button } from "@shared/components/ui/button";
import { Tooltip, TooltipTrigger, TooltipContent } from "@shared/components/ui/tooltip";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { FC, useState } from "react";

import { DetailedProperty } from "@/types/property";

import { amenityIcons } from "./amenity-icons";

interface AmenityDetailsProps {
  property: DetailedProperty;
}

export const AmenityDetails: FC<AmenityDetailsProps> = ({ property }) => {
  const [showAll, setShowAll] = useState(false);

  if (!property.property_features || property.property_features.length === 0) {
    return null;
  }

  const maxVisibleFeatures = 9;
  const hasMoreFeatures = property.property_features.length > maxVisibleFeatures;
  const visibleFeatures = showAll
    ? property.property_features
    : property.property_features.slice(0, maxVisibleFeatures);

  return (
    <div className="w-full">
      <h3 className="mb-3 text-lg font-semibold">Amenidades</h3>
      <div className="grid grid-cols-3 gap-4">
        {visibleFeatures.map((feature) => {
          const IconComponent = amenityIcons[feature.tag] || HelpCircle;

          return (
            <Tooltip key={feature.id}>
              <TooltipTrigger asChild>
                <div className="flex cursor-help flex-col items-center gap-2 rounded-lg p-3 transition-colors hover:bg-gray-50">
                  <IconComponent className="text-primary h-6 w-6" />
                  <span className="text-center text-sm font-light">{feature.name}</span>
                </div>
              </TooltipTrigger>
              {feature.description && (
                <TooltipContent>
                  <p className="max-w-xs">{feature.description}</p>
                </TooltipContent>
              )}
            </Tooltip>
          );
        })}

        {hasMoreFeatures && !showAll && (
          <div className="flex flex-col items-center gap-2 p-3">
            <Button variant="link" onClick={() => setShowAll(true)}>
              <ChevronDown className="h-6 w-6" />
              <span className="text-sm font-medium">Ver más</span>
            </Button>
          </div>
        )}

        {hasMoreFeatures && showAll && (
          <div className="flex flex-col items-center gap-2 p-3">
            <Button variant="link" onClick={() => setShowAll(false)}>
              <ChevronUp className="h-6 w-6" />
              <span className="text-sm font-medium">Ver menos</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
