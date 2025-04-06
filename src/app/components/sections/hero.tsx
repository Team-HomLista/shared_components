import { SearchBar } from "@/components/search-bar";
import { FC } from "react";

interface HeroSectionProps {}

export const HeroSection: FC<HeroSectionProps> = ({}) => {
  return (
    <section
      className="w-full h-screen flex flex-col items-start px-32 pt-24"
      style={{
        backgroundImage: "url('/images/homlistaHero.png')",
        backgroundSize: "100%",
        backgroundPosition: "auto",
        backgroundColor: "#03224A",
        backdropFilter: "brightness(0.5)",
      }}
    >
      <div className="w-[744px] h-full flex flex-col text-white font-medium px-8 gap-8 pt-16">
        <h1 className="text-[64px] leading-[72px]">
          Deja que nosotros encontremos el hogar que mereces
        </h1>
        <h2 className="text-2xl">
          El primer portal en méxico con anunciantes certificados potenciado con
          IA. Compra, vende o invierte: tu futuro inmobiliario comienza aquí
        </h2>
      </div>
      <SearchBar />
    </section>
  );
};
