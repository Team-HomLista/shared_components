import { FC } from "react";
import {
  DetailedProperty,
  PropertyAgency,
  PropertyAgent,
} from "@/types/property";
import { AgencyTouch } from "./sections/agency-touch";
import { AgentTouch } from "./sections/agent-touch";
import { InfoCard } from "./sections/info-cards/index.tsx";

export interface CtaInfoCardProps {
  property: DetailedProperty;
  agency?: PropertyAgency;
  agent?: PropertyAgent;
}

export const CtaInfoCard: FC<CtaInfoCardProps> = ({
  property,
  agency,
  agent,
}) => {
  return (
    <>
      <div className="flex w-full flex-row gap-4 px-64 pt-12 pb-12">
        {/*<DescriptionCard/>
     <AmenitiesCard/> */}
        <InfoCard
          property={property}
          description={property.description}
          amenities={[]}
          features={
            property.features ? property.features.map((f) => f.name) : []
          }
        />
        {agency && <AgencyTouch agency={agency} />}
        {agent && <AgentTouch agent={agent} />}
      </div>
    </>
  );
};
