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
    <section className="flex w-full justify-center bg-gray-100 py-20">
      <div className="flex w-[40%] flex-col items-center justify-center">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 max-w-3xl text-3xl font-bold md:text-4xl">
            Preguntas frecuentes
          </h2>
          <p className="max-w-xl text-xl text-gray-600">
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
              className="bg-secondary/30 border-secondary/60 rounded-sm border-2 px-6"
            >
              <AccordionTrigger className="text-xl">
                {faq.title}
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                {faq.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="flex flex-col items-center justify-center pt-12 text-center">
          <h3 className="mb-6 text-2xl font-semibold">
            ¿No encuentras respuesta a tu pregunta?
          </h3>
          <Button className="bg-primary flex items-center justify-center gap-2">
            Contacta con nuestro equipo
            <ArrowRight className="h-4 w-4 justify-center" />
          </Button>
        </div>
      </div>
    </section>
  );
};
