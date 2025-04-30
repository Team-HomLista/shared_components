"use client";
import { FC } from "react";
import { useHome } from "./use-home";
import { properties } from "../../dummy/property";
import {
  CitiesSection,
  DiscoverSection,
  FindSection,
  HeroSection,
  PartnersSection,
  TestimonialsSection,
} from "./sections";
import { Navbar } from "@/components/navbar";

export interface HomepageContainerProps {}

export const HomepageContainer: FC<HomepageContainerProps> = ({}) => {
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
