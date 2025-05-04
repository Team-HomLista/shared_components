import { FC, Fragment } from "react";
import { InfoCard } from "./info-cards";
import { Touch } from "./touch";

export interface CtaInfoCardProps {
  description: string;
  features: string[];
  amenities: string[];
  full_name: string;
  agent_avatar: string;
  agent_agency: string;
}

export const CtaInfoCard: FC<CtaInfoCardProps> = ({
  description,
  features,
  full_name,
  agent_avatar,
  agent_agency,
}) => {
  return (
    <div className="flex w-full flex-row gap-4 px-64 pt-12 pb-12">
      <InfoCard description={description} amenities={[]} features={features} />
      <Touch
        full_name={full_name}
        agent_agency={agent_agency}
        agent_avatar={agent_avatar}
      />
    </div>
  );
};
