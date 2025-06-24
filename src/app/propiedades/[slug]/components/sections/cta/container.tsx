import { FC } from "react";
import {
  DetailedProperty,
  PropertyAgency,
  PropertyAgent,
} from "@/types/property";
import { AgencyTouch } from "./sections/agency-touch";
import { AgentTouch } from "./sections/agent-touch";
import { InfoCard } from "./sections/info-cards/index.tsx";
import { LAYOUT_CONSTANTS } from "@/app/constants/layout";

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
    <div className={`flex w-full flex-row gap-4  ${LAYOUT_CONSTANTS.CTA_SECTION_PADDING}`}>
      <InfoCard property={property} />
      {agency && <AgencyTouch agency={agency} />}
      {agent && <AgentTouch agent={agent} />}
    </div>
  );
};
