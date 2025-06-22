import { FC, useState } from "react";
import { DetailedProperty } from "@/types/property";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { amenityIcons } from "./amenity-icons";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

interface AmenityDetailsProps {
    property: DetailedProperty;
}

export const AmenityDetails: FC<AmenityDetailsProps> = ({ property }) => {
    const [showAll, setShowAll] = useState(false);

    if (!property.property_features || property.property_features.length === 0) {
        console.log('Debug - No property_features found');
        return null;
    }

    const maxVisibleFeatures = 9;
    const hasMoreFeatures = property.property_features.length > maxVisibleFeatures;
    const visibleFeatures = showAll 
        ? property.property_features 
        : property.property_features.slice(0, maxVisibleFeatures);

    return (
        <div className="w-full">
            <h3 className="text-lg font-semibold mb-3">Amenidades</h3>
            <div className="grid grid-cols-3 gap-4">
                {visibleFeatures.map((feature) => {
                    console.log('Debug - Feature:', feature.name, 'Tag:', feature.tag);
                    const IconComponent = amenityIcons[feature.tag] || HelpCircle;
                    console.log('Debug - IconComponent found:', !!amenityIcons[feature.tag]);
                    
                    return (
                        <Tooltip key={feature.id}>
                            <TooltipTrigger asChild>
                                <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-help">
                                    <IconComponent className="h-6 w-6 text-secondary" />
                                    <span className="text-sm text-center font-medium text-gray-700">
                                        {feature.name}
                                    </span>
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
                        <button
                            onClick={() => setShowAll(true)}
                            className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors bg-secondary text-white"
                        >
                            <ChevronDown className="h-6 w-6" />
                            <span className="text-sm font-medium">Ver más</span>
                        </button>
                    </div>
                )}
                
                {hasMoreFeatures && showAll && (
                    <div className="flex flex-col items-center gap-2 p-3">
                        <button
                            onClick={() => setShowAll(false)}
                            className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors bg-secondary text-white"
                        >
                            <ChevronUp className="h-6 w-6" />
                            <span className="text-sm font-medium">Ver menos</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}