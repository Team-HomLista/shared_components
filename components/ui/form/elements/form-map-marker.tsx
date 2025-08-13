"use client";

import { FormItem } from "@shared/components/ui/form/elements/fomr-item";
import { FormDescription } from "@shared/components/ui/form/elements/form-description";
import { FormLabel } from "@shared/components/ui/form/elements/form-label";
import { DisplayErrorMessage } from "@shared/components/ui/form/elements/form-message";
import {
  AdvancedMarker,
  Map,
  MapCameraChangedEvent,
  MapCameraProps
} from "@vis.gl/react-google-maps";
import { useCallback, useEffect, useState } from "react";
import { Control, FieldPath, FieldValues, useController, useFormContext } from "react-hook-form";

type lanLng = { lat: number; lng: number };

export interface FormLocationProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  title?: string;
  description?: string;
  initialCamera?: MapCameraProps;
  latitudeName: FieldPath<TFieldValues>;
  longitudeName: FieldPath<TFieldValues>;
}

const INITIAL_CAMERA = {
  center: { lat: 19.432608, lng: -99.133209 },
  zoom: 12
};

export function FormMapMarker<TFieldValues extends FieldValues>({
  control,
  title,
  description,
  initialCamera = INITIAL_CAMERA,
  latitudeName,
  longitudeName
}: FormLocationProps<TFieldValues>) {
  const [cameraProps, setCameraProps] = useState<MapCameraProps>(initialCamera);

  const { setValue } = useFormContext<TFieldValues>();
  const {
    field: latitudeField,
    fieldState: { invalid: isLatitudeInvalid }
  } = useController({
    name: latitudeName,
    control
  });
  const {
    field: longitudeField,
    fieldState: { invalid: isLongitudeInvalid }
  } = useController({
    name: longitudeName,
    control
  });

  const isDirty = latitudeField.value || longitudeField.value;
  const isInvalid = isLatitudeInvalid || isLongitudeInvalid;

  const position = {
    lat: Number(latitudeField.value ?? 0),
    lng: Number(longitudeField.value ?? 0)
  };

  const setLatLng = useCallback(
    (latLng: lanLng, shouldCenter: boolean = false) => {
      setValue(latitudeField.name, latLng.lat as TFieldValues[keyof TFieldValues], {
        shouldDirty: true,
        shouldValidate: true
      });
      setValue(longitudeField.name, latLng.lng as TFieldValues[keyof TFieldValues], {
        shouldDirty: true,
        shouldValidate: true
      });

      if (!shouldCenter) return;

      setCameraProps((prevState) => {
        return { ...prevState, center: latLng };
      });
    },
    [setValue, setCameraProps]
  );

  const handleCameraChange = useCallback(
    (ev: MapCameraChangedEvent) => setCameraProps(ev.detail),
    []
  );

  useEffect(() => {
    setCameraProps((prevCameraProps) => {
      return {
        ...prevCameraProps,
        center: {
          lat: Number(latitudeField.value ?? prevCameraProps.center.lat),
          lng: Number(longitudeField.value ?? prevCameraProps.center.lng)
        }
      };
    });
  }, []);

  return (
    <FormItem className="w-full">
      <FormLabel>{title}</FormLabel>
      <FormDescription>{description}</FormDescription>
      <div className="flex w-full flex-1 flex-col gap-2 self-center">
        <Map
          mapId="MapWithMarker"
          className="aspect-[21/9] w-full overflow-hidden rounded-sm"
          {...cameraProps}
          gestureHandling="greedy"
          disableDefaultUI
          onCameraChanged={handleCameraChange}
          onClick={(e) => {
            if (!e.detail.latLng) return;

            setLatLng(e.detail.latLng);
          }}
        >
          {isDirty && !isInvalid && (
            <AdvancedMarker
              draggable
              position={position}
              onDragEnd={(e) => {
                if (!e.latLng) return;

                setLatLng({ lat: e.latLng.lat(), lng: e.latLng.lng() }, true);
              }}
            />
          )}
        </Map>

        {isInvalid && (
          <DisplayErrorMessage>
            No has seleccionado ninguna ubicación en el mapa.
          </DisplayErrorMessage>
        )}
      </div>
    </FormItem>
  );
}
