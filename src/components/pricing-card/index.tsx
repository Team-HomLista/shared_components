import { Button } from "@shared/components/ui/button";
import { Card, CardContent } from "@shared/components/ui/card";
import { Check } from "lucide-react";

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
  priceDetail
}: PricingCardProps) {
  return (
    <Card className={cn("border-3", isPopular ? "border-secondary" : "border-primary")}>
      <CardContent className="flex flex-col gap-4">
        <div className="flex w-full flex-col items-center justify-center gap-2">
          <h3 className="text-xl font-semibold">{title}</h3>

          <div>
            <span className="text-primary text-3xl font-bold">{price}</span>
            {priceDetail && <span className="ml-1 text-sm text-gray-500">{priceDetail}</span>}
          </div>

          <p className="flex h-full text-black">{description}</p>

          <Button size={"lg"} variant={isPopular ? "secondary" : "default"}>
            {buttonText}
          </Button>
        </div>

        <div className="flex w-full flex-col items-start gap-1">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2 py-1.5">
              <Check className="text-secondary mt-0.5 h-5 w-5 flex-shrink-0" />
              <span className="text-md text-gray-500">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
