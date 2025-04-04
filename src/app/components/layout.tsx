"use client";
import { FC } from "react";
import { HeroSection } from "./sections/hero-section";
import { DiscoverSection } from "./sections/discover-section";
import { FindSection } from "./sections/find-section";
import { TestimonialsSection } from "./sections/testimonials-section";
import { CitiesSection } from "./sections/cities-section";
import { PartnersSection } from "./sections/partners-section";
import { Footer } from "../../components/footer/footer";
import { useHome } from "./use-home";
import { properties } from "../../dummy/property";

export interface HomepageLayoutProps {}

export const HomepageLayout: FC<HomepageLayoutProps> = ({}) => {
  const { onClickLike, items } = useHome({ properties });

  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <DiscoverSection items={items} onClickLike={onClickLike} />
      <FindSection />
      <TestimonialsSection />
      <CitiesSection />
      <PartnersSection />
      <Footer />
    </>
  );
};
