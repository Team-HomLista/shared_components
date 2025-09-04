import {
  Star,
  Home,
  Building,
  MapPin,
  DollarSign,
  Wrench,
  Gavel,
  Sparkles,
  Tag as TagIcon,
  Percent
} from "lucide-react";
import { FC } from "react";

import { Card } from "@/components/ui/card";
import { PropertyTag } from "@/types/property";

export interface PropertyTagsProps {
  tags: Array<PropertyTag>;
}

const getTagIcon = (tagType: string) => {
  switch (tagType) {
    case "featured":
      return Star;
    case "new":
      return Sparkles;
    case "transaction":
      return DollarSign;
    case "buildingType":
      return Building;
    case "discount":
      return Percent;
    case "offer":
      return TagIcon;
    case "location":
      return MapPin;
    case "amenity":
      return Home;
    case "service":
      return Wrench;
    case "auction":
      return Gavel;
    default:
      return TagIcon;
  }
};

export const PropertyTags: FC<PropertyTagsProps> = ({ tags }) => {
  if (!tags || tags.length === 0) {
    return null;
  }

  // Separate remarkable tags from regular tags for better organization
  const remarkableTags = tags.filter((tag) => tag.isRemarkable);
  const regularTags = tags.filter((tag) => !tag.isRemarkable);

  const renderTag = (tag: PropertyTag, index: number) => {
    const IconComponent = getTagIcon(tag.type);

    return (
      <Card
        key={`${tag.type}-${index}`}
        className="bg-terciary text-primary flex flex-row items-center gap-2 rounded-lg border-none px-2 py-1 shadow-sm transition-shadow duration-200 hover:shadow-md"
        style={{
          borderRadius: "8px",
          paddingTop: "4px",
          paddingBottom: "4px",
          paddingLeft: "8px",
          paddingRight: "8px"
        }}
        title={tag.description || tag.name}
      >
        <IconComponent className="text-primary h-4 w-4" />
        <span className="text-primary text-sm font-medium">{tag.name}</span>
      </Card>
    );
  };

  return (
    <div className="flex flex-row flex-wrap" style={{ gap: "20px" }}>
      {remarkableTags.map((tag, index) => renderTag(tag, index))}
      {regularTags.map((tag, index) => renderTag(tag, index))}
    </div>
  );
};
