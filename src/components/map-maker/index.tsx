import {
  AdvancedMarker,
  APIProvider,
  Map,
  MapCameraProps,
} from "@vis.gl/react-google-maps";
import { useState } from "react";

type lanLng = { lat: number; lng: number };

export interface FormLocationProps {
  initialCamera?: MapCameraProps;
  coordinates?: lanLng;
}

const DEFAULT_CENTER: lanLng = { lat: 19.432608, lng: -99.133209 };
const DEFAULT_ZOOM = 12;
const PROPERTY_ZOOM = 15;

export function MapMarker({ initialCamera, coordinates }: FormLocationProps) {
  const center = coordinates || DEFAULT_CENTER;
  const zoom = coordinates ? PROPERTY_ZOOM : DEFAULT_ZOOM;

  const camera = initialCamera || { center, zoom };

  const [cameraProps, setCameraProps] = useState<MapCameraProps>(camera);

  return (
    <div className="flex w-full flex-1 flex-col gap-2 self-center">
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""}>
        <Map
          mapId="MapWithMarker"
          className="aspect-[21/9] w-full overflow-hidden rounded-sm"
          {...cameraProps}
          gestureHandling="greedy"
          disableDefaultUI
        >
          <AdvancedMarker draggable position={cameraProps.center} />
        </Map>
      </APIProvider>
    </div>
  );
}
