import { Car, Bike, Footprints, Bus } from "lucide-react";

export const getTransportIcon = (travelMode: string) => {
  /// TODO: usar constantes
  switch (travelMode) {
    case "CAR":
      return <Car className="h-6 w-6" />;
    case "BIKE":
      return <Bike className="h-6 w-6" />;
    case "WALKING":
      return <Footprints className="h-6 w-6" />;
    case "PUBLIC_TRANSPORT":
      return <Bus className="h-6 w-6" />;
    default:
      return <Footprints className="h-6 w-6" />;
  }
};

export const formatTime = (time: number, unit: string) => {
  /// TODO: usar constantes
  if (unit === "HOUR") {
    return time === 1 ? "1 hora" : `${time} horas`;
  } else if (unit === "MINUTE") {
    return time === 1 ? "1 minuto" : `${time} minutos`;
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
