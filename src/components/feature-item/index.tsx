import { Check, LucideIcon } from "lucide-react";

interface FeatureItemProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export function FeatureItem({ title, description, Icon }: FeatureItemProps) {
  return (
    <div className="border-secondary flex flex-col rounded-[12px] border-1 p-2 pb-4 lg:p-4 lg:pb-6">
      <div className="mb-2 flex items-center">
        <div className="bg-homlista-blue/10 mr-4 rounded-full p-2">
          {Icon && <Icon className="text-secondary h-8 w-8" />}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="ml-16 text-gray-600">{description}</p>
    </div>
  );
}
