import { Mail } from "lucide-react";
import { Card, CardContent } from "@shared/components/ui/card";
import { Badge } from "@shared/components/ui/badge";
import { FC } from "react";

interface ContactCardProps {
  subtitle?: string;
  description?: string;
}

export const ContactCardSection: FC<ContactCardProps> = ({
  subtitle,
  description,
}) => {
  return (
    <Card className="group from-primary via-primary to-primary/90 hover:shadow-3xl border-0 bg-gradient-to-br shadow-2xl transition-all duration-300">
      <CardContent className="relative overflow-hidden p-8 sm:p-10 lg:p-12">
        <div className="relative text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
            <Mail className="text-primary-foreground h-8 w-8" />
          </div>
          <h2 className="text-primary-foreground mb-4 text-2xl font-bold sm:text-3xl">
            {subtitle}
          </h2>
          <p className="text-primary-foreground/90 mb-8 text-base leading-relaxed sm:text-lg">
            {description}
          </p>
          <Badge
            variant="secondary"
            className="text-primary border-0 bg-white px-6 py-3 text-sm font-semibold shadow-lg sm:text-base"
          >
            hola@homlista.com
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};
