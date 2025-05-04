import { Navbar } from "@/components/navbar";
import { Property } from "@/types/property";
import { FC } from "react";
import { PropertiesSearchControlsSection } from "./sections/controls";
import { PropertiesSearchGridSection } from "./sections/grid";
import { PropertiesSearchPaginationSection } from "./sections/pagination";

export interface PropertiesSearchContainerProps {
  properties: Array<Property>;
}

export const PropertiesSearchContainer: FC<PropertiesSearchContainerProps> = ({
  properties,
}) => {
  return (
    <>
      <Navbar variant="default" />
      {/*  <PropertiesSearchControlsSection /> */}
      <PropertiesSearchGridSection properties={properties} />
      {/* <PropertiesSearchPaginationSection /> */}
    </>
  );
};
