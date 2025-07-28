import {
  NearbyLocation,
  formatTime,
  getTransportIcon,
} from "@/utils/location-utils";
import { FC } from "react";

interface NearbyItemProps {
  location: NearbyLocation;
}

export const NearbyItem: FC<NearbyItemProps> = ({ location }) => {
  return (
    <div className="flex items-center justify-between gap-3 px-4 pb-2">
      <span className="text-sm font-medium">{location.name}</span>
      <div className="flex flex-row gap-2">
        <div className="flex flex-col items-end">
          <span className="flex items-end text-gray-900">
            {formatTime(location.travel_time, location.time_unit)}
          </span>
        </div>
        <div className="flex items-center">
          {getTransportIcon(location.travel_mode)}
        </div>
      </div>
    </div>
  );
};
