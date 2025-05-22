"use client";
import { FC } from "react";
import { useHome } from "./use-home";
import {
  CitiesSection,
  DiscoverSection,
  FindSection,
  HeroSection,
  PartnersSection,
  TestimonialsSection,
} from "./sections";
import { Navbar } from "@/components/navbar";
import { Property } from "@/types/property";

export interface HomepageContainerProps {
  properties: Array<Property>;
}

export const HomepageContainer: FC<HomepageContainerProps> = ({
  properties,
}) => {
  const { onClickLike, items } = useHome({ properties });

  return (
    <>
      <Navbar variant="float" />
      <HeroSection />
      <DiscoverSection items={items} onClickLike={onClickLike} />
      <FindSection />
      <TestimonialsSection />
      <CitiesSection />
      <PartnersSection />
    </>
  );
};
