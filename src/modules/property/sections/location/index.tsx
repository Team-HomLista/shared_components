import { FC } from "react";
import { NearbyItem } from "@/modules/property/sections/location/nearby-item";
import { NearbyLocation } from "@/utils/location-utils";
import { MapMarkerView } from "@/shared/components/map-marker-view";

export interface LocationNearbyProps {
  locationInfo: {
    city: string;
    state: string;
    neighborhood: string;
    postalCode?: string | null;
    latitude?: number;
    longitude?: number;
  };
  nearby: NearbyLocation[];
}

export const LocationNearby: FC<LocationNearbyProps> = ({
  nearby,
  locationInfo,
}) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg py-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-4">
        <div className="w-full lg:w-2/3">
          <MapMarkerView
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""}
            markers={
              locationInfo && [
                {
                  position: {
                    lat: Number(locationInfo?.latitude ?? 0),
                    lng: Number(locationInfo?.longitude ?? 0),
                  },
                },
              ]
            }
          />
        </div>
        {nearby && nearby.length > 0 ? (
          <div className="grid w-full gap-2.5 rounded-lg border-1 border-solid border-zinc-200 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10),0px_1px_2px_0px_rgba(0,0,0,0.06)] lg:w-1/3">
            <h3 className="pt-4 pl-4 text-lg font-semibold">Ubicación</h3>
            <div className="pl-4 text-[13px] text-zinc-500">
              <div>{locationInfo.neighborhood}</div>
              <div>
                {locationInfo.city}, {locationInfo.state}
                {locationInfo.postalCode && `, CP ${locationInfo.postalCode}`}
              </div>
            </div>
            {nearby.map((location) => (
              <NearbyItem key={location.id} location={location} />
            ))}
          </div>
        ) : (
          <div className="w-full py-8 text-center text-gray-500 lg:w-1/3">
            <p>No hay información de ubicaciones cercanas disponible</p>
          </div>
        )}
      </div>
    </div>
  );
};
