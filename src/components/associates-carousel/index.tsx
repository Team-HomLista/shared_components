"use client";

import { associateLogos } from "@/dummy/associateLogos";
import Image from "next/image";

export const AssociatesMarqueeLogo = () => {
  const logos = [...associateLogos, ...associateLogos];

  return (
    <div className="w-full overflow-hidden bg-white py-4">
      <div className="relative w-full">
        <div
          className="animate-marquee flex gap-12 whitespace-nowrap"
          style={{ animationDuration: "60s" }}
        >
          {logos.map((logo) => (
            <div
              key={`${logo.id}-${Math.random()}`}
              className="flex h-24 w-40 flex-shrink-0 items-center justify-center"
            >
              <Image
                src={logo.url}
                alt={`Logo ${logo.id}`}
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
