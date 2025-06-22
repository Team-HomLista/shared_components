import { FaqItem } from "@/app/planes/components/faq/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FC } from "react";

interface FAQProps {
  faqs: FaqItem[];
}

export const FaqSection: FC<FAQProps> = ({ faqs }: FAQProps) => {
  return (
    <section className="flex w-full justify-center bg-gray-100 py-12 md:py-20">
      <div className="flex w-full max-w-4xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 md:mb-16 max-w-3xl text-center">
          <h2 className="mb-4 md:mb-6 max-w-3xl text-2xl sm:text-3xl font-bold md:text-4xl">
            Preguntas frecuentes
          </h2>
          <p className="max-w-xl text-lg sm:text-xl text-gray-600">
            Todo lo que necesitas saber antes de elegir tu plan
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="items-strech flex w-full flex-col justify-center gap-2"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={`faq-${index}`}
              value={`item-${index + 1}`}
              className="bg-secondary/30 border-secondary/60 rounded-sm border-2 px-4 sm:px-6"
            >
              <AccordionTrigger className="text-lg sm:text-xl">
                {faq.title}
              </AccordionTrigger>
              <AccordionContent className="text-base sm:text-lg">
                {faq.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="flex flex-col items-center justify-center pt-8 md:pt-12 text-center">
          <h3 className="mb-4 md:mb-6 text-xl sm:text-2xl font-semibold px-4">
            ¿No encuentras respuesta a tu pregunta?
          </h3>
          <Button className="bg-primary flex items-center justify-center gap-2 text-sm sm:text-base px-4 sm:px-6">
            Contacta con nuestro equipo
            <ArrowRight className="h-4 w-4 justify-center" />
          </Button>
        </div>
      </div>
    </section>
  );
};
