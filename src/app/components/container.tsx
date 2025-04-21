"use client";
import { FC } from "react";
import { HeroSection } from "./sections/hero";
import { DiscoverSection } from "./sections/discover";
import { FindSection } from "./sections/find";
import { TestimonialsSection } from "./sections/testimonials";
import { CitiesSection } from "./sections/cities";
import { PartnersSection } from "./sections/partners";
import { Footer } from "../../components/footer/footer";
import { useHome } from "./use-home";
import { properties } from "../../dummy/property";

export interface HomepageContainerProps {}

export const HomepageContainer: FC<HomepageContainerProps> = ({}) => {
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
