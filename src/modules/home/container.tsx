"use client";
import { FC } from "react";

import { WebsiteNavbar } from "@/layouts/website/navbar";
import {
  CitiesSection,
  DiscoverSection,
  FindSection,
  HeroSection,
  PartnersSection,
  TestimonialsSection
} from "@/modules/home/sections";
import { useHome } from "@/modules/home/use-home";
import { Property } from "@/types/property";

export interface HomepageContainerProps {
  properties: Array<Property>;
}

export const HomepageContainer: FC<HomepageContainerProps> = ({ properties }) => {
  const { onClickLike, items } = useHome({ properties });

  return (
    <>
      <WebsiteNavbar variant="float" />
      <HeroSection />
      <DiscoverSection items={items} onClickLike={onClickLike} />
      <FindSection />
      <TestimonialsSection />
      <CitiesSection />
      <PartnersSection />
    </>
  );
};
