import { FC } from "react";

export interface InfoCardProps {
  description: string;
  features: string[];
  amenities: string[];
}

export const InfoCard: FC<InfoCardProps> = ({ description }) => {
  return (
    <div className="flex w-full flex-col gap-2.5">
      <div className="border-primary flex flex-col gap-2 rounded-sm border-2 p-2">
        <div className="text-xl">Descripción</div>
        <div className="text-sm">{description}</div>
      </div>
      <div className="border-primary flex flex-col gap-2 rounded-sm border-2 p-2">
        <div className="text-xl">Características</div>
        <div className="flex flex-col gap-2">
          <ul className="list-disc pl-4">
            {["Cochera", "Baño", "Habitaciones"].map((feature) => (
              <li key={feature} className="text-sm">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-primary flex flex-col gap-2 rounded-sm border-2 p-2">
        <div className="text-xl">Servicios</div>
        <div className="flex flex-col gap-2">
          <ul className="list-disc pl-4">
            {["Cochera", "Baño", "Habitaciones"].map((feature) => (
              <li key={feature} className="text-sm">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
