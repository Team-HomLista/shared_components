import { Mail } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

import { Button } from "@/components/ui";
import { Card, CardContent } from "@/components/ui/card";

interface ContactCardProps {
  subtitle?: string;
  description?: string;
}

export const ContactCardSection: FC<ContactCardProps> = ({ subtitle, description }) => {
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
          <Button variant="outline" asChild>
            <Link href="mailto:hola@homlista.com">hola@homlista.com</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
