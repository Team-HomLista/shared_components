import { Car, Bike, Footprints, Bus } from "lucide-react";

export const getTransportIcon = (travelMode: string) => {
  switch (travelMode) {
    case 'CAR':
      return <Car className="w-6 h-6 text-secondary" />;
    case 'BIKE':
      return <Bike className="w-6 h-6 text-secondary" />;
    case 'WALKING':
      return <Footprints className="w-6 h-6 text-secondary" />;
    case 'PUBLIC_TRANSPORT':
      return <Bus className="w-6 h-6 text-secondary" />;
    default:
      return <Footprints className="w-6 h-6 text-secondary" />;
  }
};

export const formatTime = (time: number, unit: string) => {
  if (unit === 'HOUR') {
    return time === 1 ? '1 hora' : `${time} horas`;
  } else if (unit === 'MINUTE') {
    return time === 1 ? '1 minuto' : `${time} minutos`;
  }
  return `${time} ${unit.toLowerCase()}`;
};

export interface NearbyLocation {
  id: number;
  name: string;
  travel_time: number;
  time_unit: string;
  travel_mode: string;
}
