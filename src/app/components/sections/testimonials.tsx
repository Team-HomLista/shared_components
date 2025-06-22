"use client";
import { SectionHeader } from "@/components/section-header";
import { StarRating } from "@/components/star-rating";
import { Pagination } from "@/components/pagination";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { FC, useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "María González",
    rating: 5,
    text: "Excelente servicio, encontré la casa de mis sueños en tiempo récord. Los agentes son muy profesionales y conocen perfectamente el mercado.",
  },
  {
    id: 2,
    name: "Carlos Hernández",
    rating: 5,
    text: "Vendí mi departamento en menos de un mes gracias a su estrategia de marketing. Superaron mis expectativas completamente.",
  },
  {
    id: 3,
    name: "Ana Martínez",
    rating: 5,
    text: "El proceso de compra fue muy sencillo y transparente. Me acompañaron en cada paso y resolvieron todas mis dudas.",
  },
  {
    id: 4,
    name: "José Luis Ramírez",
    rating: 5,
    text: "Increíble atención al cliente. Me ayudaron a encontrar la propiedad perfecta para mi familia en la zona que buscaba.",
  },
  {
    id: 5,
    name: "Patricia López",
    rating: 5,
    text: "Su conocimiento del mercado inmobiliario es impresionante. Negociaron un excelente precio para mi nueva casa.",
  },
  {
    id: 6,
    name: "Roberto Sánchez",
    rating: 5,
    text: "Profesionalismo de primera. Desde la primera cita hasta la entrega de llaves, todo fue perfecto.",
  },
  {
    id: 7,
    name: "Laura Jiménez",
    rating: 5,
    text: "Recomiendo ampliamente sus servicios. Son honestos, trabajadores y realmente se preocupan por sus clientes.",
  },
  {
    id: 8,
    name: "Fernando Torres",
    rating: 5,
    text: "La mejor experiencia inmobiliaria que he tenido. Hicieron que comprar mi primera casa fuera muy fácil.",
  },
  {
    id: 9,
    name: "Carmen Morales",
    rating: 5,
    text: "Servicio excepcional desde el primer contacto. Me ayudaron a encontrar exactamente lo que necesitaba.",
  },
  {
    id: 10,
    name: "Diego Mendoza",
    rating: 5,
    text: "Muy satisfecho con el resultado. Vendieron mi propiedad rápidamente y al precio que esperaba.",
  },
];

interface TestimonialsSectionProps {}

export const TestimonialsSection: FC<TestimonialsSectionProps> = ({}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const testimonialsPerPage = 1;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const currentTestimonial = testimonials[currentPage - 1];

  const handlePageChange = (newPage: number) => {
    if (newPage === currentPage) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentPage(newPage);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 200);
  };

  const handlePrevPage = () => {
    const newPage = Math.max(currentPage - 1, 1);
    handlePageChange(newPage);
  };

  const handleNextPage = () => {
    const newPage = Math.min(currentPage + 1, totalPages);
    handlePageChange(newPage);
  };

  return (
    <section className="">
      <SectionHeader
        title="Testimonios"
        description="Nuestros clientes son nuestra mejor garantía. 
        Descubre lo que dicen quienes han encontrado su hogar ideal o 
        vendido su propiedad con la ayuda de nuestros expertos agentes inmobiliarios."
        orientation="right"
      />

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Testimonial Card */}
          <Card className="p-8 md:p-12">
            <div
              className={`transition-opacity duration-300 ease-in-out ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              <CardHeader className="px-0">
                {/* Customer Name and Rating */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-foreground text-xl font-semibold md:text-2xl">
                    {currentTestimonial.name}
                  </h3>
                  <StarRating rating={currentTestimonial.rating} />
                </div>
              </CardHeader>
              <CardContent className="px-0">
                {/* Testimonial Text */}
                <blockquote className="text-muted-foreground text-base leading-relaxed md:text-lg">
                  "{currentTestimonial.text}"
                </blockquote>
              </CardContent>
            </div>
          </Card>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onClickPrev={handlePrevPage}
            onClickNext={handleNextPage}
          />
        </div>
      </div>
    </section>
  );
};
