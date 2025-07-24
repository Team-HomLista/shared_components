import { AdvancedMarker, Map } from "@vis.gl/react-google-maps";
import { useMemo } from "react";

type LanLng = { lat: number; lng: number };
type MarkerType = {
  position: LanLng;
};

export interface FormLocationProps {
  markers?: MarkerType[];
}

const DEFAULT_CENTER: LanLng = { lat: 19.432608, lng: -99.133209 };
const DEFAULT_ZOOM = 15;

export function MapMarkerView({ markers }: FormLocationProps) {
  const centerPosition = useMemo(() => {
    const sumPosition =
      markers?.reduce(
        (acc, marker) => {
          return {
            lat: acc.lat + marker.position.lat,
            lng: acc.lng + marker.position.lng,
          };
        },
        { lat: 0, lng: 0 },
      ) ?? DEFAULT_CENTER;

    return {
      lat: sumPosition?.lat / (markers?.length ?? 1),
      lng: sumPosition?.lng / (markers?.length ?? 1),
    };
  }, [markers]);

  return (
    <div className="flex w-full flex-1 flex-col gap-2 self-center">
      <Map
        mapId="MapWithMarker"
        className="aspect-[21/9] w-full overflow-hidden rounded-sm"
        gestureHandling="greedy"
        center={centerPosition}
      >
        {markers?.map((marker) => (
          <AdvancedMarker position={marker.position} />
        ))}
      </Map>
    </div>
  );
}
