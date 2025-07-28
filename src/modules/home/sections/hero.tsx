import { SearchBar } from "@/components/search-bar";
import Image from "next/image";
import { FC } from "react";

interface HeroSectionProps {}

export const HeroSection: FC<HeroSectionProps> = ({}) => {
  return (
    <section className="relative -mt-22 flex min-h-screen w-full flex-col items-start px-4 pt-24 pb-8 sm:px-8 lg:px-32">
      <Image
        src="/images/hero-assets/homepage.png"
        alt="Hero background image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
        priority
        className="-z-10 brightness-50"
      />
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center gap-4 px-4 pt-8 font-medium text-white sm:gap-6 sm:px-8 sm:pt-12 lg:gap-8 lg:pt-16">
        <div className="mb-16 w-full max-w-[744px] md:mb-16">
          <h1 className="mb-4 text-3xl leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-[64px] lg:leading-[72px]">
            Deja que nosotros encontremos el hogar que mereces
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl">
            El primer portal en méxico con anunciantes certificados potenciado
            con IA. Compra, vende o invierte: tu futuro inmobiliario comienza
            aquí
          </h2>
        </div>
      </div>
      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <SearchBar />
      </div>
    </section>
  );
};
