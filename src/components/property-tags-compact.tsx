import { Card } from "@shared/components/ui/card";
import { PropertyTag } from "@/types/property";
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
  Percent,
} from "lucide-react";
import { FC } from "react";

export interface PropertyTagsCompactProps {
  tags: Array<PropertyTag>;
  maxTags?: number;
  showRemarkableOnly?: boolean;
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

export const PropertyTagsCompact: FC<PropertyTagsCompactProps> = ({
  tags,
  maxTags = 3,
  showRemarkableOnly = false,
}) => {
  if (!tags || tags.length === 0) {
    return null;
  }

  // Filter and limit tags
  const filteredTags = showRemarkableOnly
    ? tags.filter((tag) => tag.isRemarkable)
    : tags;

  const displayTags = filteredTags.slice(0, maxTags);
  const remainingCount = filteredTags.length - maxTags;

  const renderTag = (tag: PropertyTag, index: number) => {
    const IconComponent = getTagIcon(tag.type);

    return (
      <Card
        key={`${tag.type}-${index}`}
        className="bg-secondary text-secondary-foreground flex items-center gap-1 rounded-lg border-none px-2 py-1 text-xs shadow-sm"
        title={tag.description || tag.name}
      >
        <IconComponent className="h-3 w-3" />
        <span className="text-xs font-medium">{tag.name}</span>
      </Card>
    );
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      {displayTags.map((tag, index) => renderTag(tag, index))}
      {remainingCount > 0 && (
        <Card
          className="bg-secondary text-secondary-foreground rounded-lg border-none px-2 py-1 text-xs"
          title={`${remainingCount} tags más`}
        >
          <span className="text-xs font-medium">+{remainingCount}</span>
        </Card>
      )}
    </div>
  );
};
