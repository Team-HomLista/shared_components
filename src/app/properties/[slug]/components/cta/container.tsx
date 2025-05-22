import { FC } from "react";
import { InfoCard } from "./info-cards";
import { PropertyAgency, PropertyAgent } from "@/types/property";
import { AgencyTouch } from "./agency-touch";
import { AgentTouch } from "./agent-touch";

export interface CtaInfoCardProps {
  agency: PropertyAgency | null;
  agent: PropertyAgent | null;
  amenities: string[];
  description: string | null;
  features: string[];
}

export const CtaInfoCard: FC<CtaInfoCardProps> = ({
  agency,
  agent,
  amenities,
  description,
  features,
}) => {
  return (
    <div className="flex w-full flex-row gap-4 px-64 pt-12 pb-12">
      <InfoCard description={description} amenities={[]} features={features} />
      {agency && <AgencyTouch agency={agency} />}
      {agent && <AgentTouch agent={agent} />}
    </div>
  );
};
