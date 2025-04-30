"use client";
import { ComparisonTable } from "@/components/comparison-table";
import { pricingInfo } from "@/dummy/pricingInfo";
import { FC } from "react";

interface ComparisonTableSectionProps {}

export const ComparisonTableSection: FC<ComparisonTableSectionProps> = ({}) => {
  return (
    <>
      <section className="flex w-full justify-center bg-white py-20">
        <div className="flex w-[70%] flex-col items-center justify-center">
          <div className="mx-auto mb-8 flex w-full flex-col items-center text-center">
            <h2 className="mb-6 max-w-3xl text-3xl font-bold md:text-4xl">
              Compara los planes
            </h2>
            <p className="max-w-xl text-xl text-gray-600">
              Encuentra el plan que mejor se adapta a las necesidades de tu
              negocio inmobiliario
            </p>
          </div>
          <ComparisonTable sections={pricingInfo} />
        </div>
      </section>
    </>
  );
};
