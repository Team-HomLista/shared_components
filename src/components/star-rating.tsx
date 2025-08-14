import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 5 }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: maxRating }, (_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${
            index < rating ? "fill-accent text-accent" : "text-muted-foreground fill-none"
          }`}
        />
      ))}
    </div>
  );
};
