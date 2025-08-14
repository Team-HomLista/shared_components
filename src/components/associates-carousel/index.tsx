"use client";

import Image from "next/image";

import { associateLogos } from "@/dummy/associateLogos";

export const AssociatesMarqueeLogo = () => {
  const logos = [...associateLogos, ...associateLogos];

  return (
    <div className="w-full overflow-hidden bg-white py-4">
      <div className="relative w-full">
        <div className="animate-marquee flex gap-12 whitespace-nowrap">
          {logos.map((logo, index) => (
            <div key={index} className="flex h-24 w-40 flex-shrink-0 items-center justify-center">
              <Image
                src={logo.url}
                alt={String(index)}
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
