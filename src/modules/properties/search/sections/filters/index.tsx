"use client";
import { Button } from "@shared/components/ui/button";
import { Form } from "@shared/components/ui/form";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose
} from "@shared/components/ui/sheet";
import { Slider } from "@shared/components/ui/slider";
import { FC } from "react";
import { SubmitHandler, UseFormReturn } from "react-hook-form";

import { DimensionInput } from "@/modules/properties/search/sections/filters/DimensionInput";
import { LabeledSelect } from "@/modules/properties/search/sections/filters/LabeledSelect";
import { FilterSelect } from "@/modules/properties/search/sections/filters/select";

import { ControlsSchema } from "../../schema";

interface FilterProps {
  form: UseFormReturn<ControlsSchema>;
  stateOptions: { value: string; label: string }[];
  cityOptions: { value: string; label: string }[];
  neighborhoodOptions: { value: string; label: string }[];
  onSubmit: SubmitHandler<ControlsSchema>;
}

export const Filters: FC<FilterProps> = ({
  form,
  stateOptions,
  cityOptions,
  neighborhoodOptions,
  onSubmit
}) => {
  const selectedState = form.watch("state");
  const selectedCity = form.watch("city");

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" type="button">
            Filtros
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[400px] overflow-y-auto px-6 pt-6 pb-2 sm:w-[540px]">
          <SheetTitle>Filtros</SheetTitle>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="mb-2 flex justify-end">
                <Button type="submit" className="w-fit">
                  Aplicar Filtros
                </Button>
              </div>
              <FilterSelect
                label="Estado"
                value={form.watch("state")}
                onChange={(value) => {
                  form.setValue("state", value);
                  form.setValue("city", "");
                  form.setValue("neighborhood", "");
                }}
                options={stateOptions}
                placeholder="Selecciona un estado"
                disabled={stateOptions.length === 0}
                className="mb-2"
              />
              <FilterSelect
                label="Ciudad"
                value={form.watch("city")}
                onChange={(value) => {
                  form.setValue("city", value);
                  form.setValue("neighborhood", "");
                }}
                options={cityOptions}
                placeholder="Selecciona una ciudad"
                disabled={!selectedState || cityOptions.length === 0}
                className="mb-2"
              />
              <FilterSelect
                label="Colonia"
                value={form.watch("neighborhood")}
                onChange={(value) => form.setValue("neighborhood", value)}
                options={neighborhoodOptions}
                placeholder="Selecciona una colonia"
                disabled={!selectedCity || neighborhoodOptions.length === 0}
                className="mb-2"
              />
              <div className="mb-2">
                <label className="mb-1 block text-sm font-medium">
                  Distancia (km): {form.watch("distance_km") ?? "N/A"}
                </label>
                <Slider
                  min={1}
                  max={100}
                  step={1}
                  value={[Number(form.watch("distance_km"))]}
                  onValueChange={(value) => form.setValue("distance_km", value[0].toString())}
                />
              </div>
              <DimensionInput
                label="Tamaño del Terreno"
                value={form.watch("land_size")}
                onValueChange={(v) => form.setValue("land_size", v)}
                unit={form.watch("land_unit")}
                onUnitChange={(v) => form.setValue("land_unit", v)}
                unitOptions={[
                  { value: "m2", label: "m²" },
                  { value: "ft2", label: "ft²" },
                  { value: "ha", label: "ha" }
                ]}
                placeholder="Ej: 200"
              />
              <DimensionInput
                label="Tamaño de Construcción"
                value={form.watch("house_size")}
                onValueChange={(v) => form.setValue("house_size", v)}
                unit={form.watch("house_unit")}
                onUnitChange={(v) => form.setValue("house_unit", v)}
                unitOptions={[
                  { value: "m2", label: "m²" },
                  { value: "ft2", label: "ft²" }
                ]}
                placeholder="Ej: 150"
              />
              <div className="grid grid-cols-2 gap-4">
                <LabeledSelect
                  label="Año de Construcción"
                  placeholder="Ej: 2005"
                  value={form.watch("constructionYear")}
                  onChange={(v) => form.setValue("constructionYear", v)}
                  options={Array.from({ length: 70 }, (_, i) => {
                    const year = `${new Date().getFullYear() - i}`;
                    return { value: year, label: year };
                  })}
                  className="mb-2"
                />
                <LabeledSelect
                  label="Habitaciones"
                  placeholder="Ej: 3"
                  value={form.watch("rooms")}
                  onChange={(v) => form.setValue("rooms", v)}
                  options={Array.from({ length: 10 }, (_, i) => {
                    const val = `${i + 1}`;
                    return { value: val, label: val };
                  })}
                  className="mb-2"
                />
                <LabeledSelect
                  label="Baños"
                  placeholder="Ej: 2"
                  value={form.watch("baths")}
                  onChange={(v) => form.setValue("baths", v)}
                  options={Array.from({ length: 10 }, (_, i) => {
                    const val = `${i + 1}`;
                    return { value: val, label: val };
                  })}
                  className="mb-2"
                />
                <DimensionInput
                  label="Estacionamiento"
                  value={form.watch("parking_size")}
                  onValueChange={(v) => form.setValue("parking_size", v)}
                  unit={form.watch("parking_unit")}
                  onUnitChange={(v) => form.setValue("parking_unit", v)}
                  unitOptions={[
                    { value: "count", label: "Cantidad" },
                    { value: "m2", label: "m² (área)" }
                  ]}
                  placeholder="Ej: 2"
                />
              </div>
              <SheetFooter className="mt-6">
                <SheetClose asChild>
                  <Button type="button" variant="outline">
                    Cancelar
                  </Button>
                </SheetClose>
              </SheetFooter>
            </form>
          </Form>
        </SheetContent>
      </Sheet>
    </>
  );
};
