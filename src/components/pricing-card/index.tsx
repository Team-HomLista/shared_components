import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  title: string;
  price: string;
  description?: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  priceDetail?: string;
}

export function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  isPopular = false,
  priceDetail,
}: PricingCardProps) {
  return (
    <Card
      className={cn(
        "border-3",
        isPopular ? "border-accent" : "border-secondary",
      )}
    >
      <CardContent className="flex flex-col">
        <div className="flex w-full flex-col items-center justify-center">
          <h3 className="mb-2 text-xl font-semibold">{title}</h3>
          <div className="mb-4">
            <span className="text-primary text-4xl font-bold">{price}</span>
            {priceDetail && (
              <span className="ml-1 text-sm text-gray-500">{priceDetail}</span>
            )}
          </div>
          <p className="mb-6 flex h-full text-black">{description}</p>
          <Button
            size={"lg"}
            className={`mb-6 px-4 ${
              isPopular
                ? "bg-accent hover:bg-accent/80 text-foreground font-semibold"
                : "bg-secondary hover:bg-primary/80"
            }`}
          >
            {buttonText}
          </Button>
        </div>
        <div className="flex w-full flex-col items-start gap-1">
          {features.map((feature, index) => (
            <div className="flex items-start gap-2 py-1.5" key={index}>
              <Check className="text-secondary mt-0.5 h-5 w-5 flex-shrink-0" />
              <span className="text-md text-gray-500">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
