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

import { ControlsSchema } from "@/modules/properties/search/schema";
import { DimensionInput } from "@/modules/properties/search/sections/filters/DimensionInput";
import { LabeledSelect } from "@/modules/properties/search/sections/filters/LabeledSelect";
import { FilterSelect } from "@/modules/properties/search/sections/filters/select";

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
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="mb-2 flex justify-end">
                <Button type="submit" className="w-fit">
                  Aplicar Filtros
                </Button>
              </div>
              <FilterSelect
                label="Estado"
                value={form.watch("state")}
                options={stateOptions}
                placeholder="Selecciona un estado"
                disabled={stateOptions.length === 0}
                className="mb-2"
                onChange={(value) => {
                  form.setValue("state", value);
                  form.setValue("city", "");
                  form.setValue("neighborhood", "");
                }}
              />
              <FilterSelect
                label="Ciudad"
                value={form.watch("city")}
                options={cityOptions}
                placeholder="Selecciona una ciudad"
                disabled={!selectedState || cityOptions.length === 0}
                className="mb-2"
                onChange={(value) => {
                  form.setValue("city", value);
                  form.setValue("neighborhood", "");
                }}
              />
              <FilterSelect
                label="Colonia"
                value={form.watch("neighborhood")}
                options={neighborhoodOptions}
                placeholder="Selecciona una colonia"
                disabled={!selectedCity || neighborhoodOptions.length === 0}
                className="mb-2"
                onChange={(value) => form.setValue("neighborhood", value)}
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
                unit={form.watch("land_unit")}
                unitOptions={[
                  { value: "m2", label: "m²" },
                  { value: "ft2", label: "ft²" },
                  { value: "ha", label: "ha" }
                ]}
                placeholder="Ej: 200"
                onValueChange={(v) => form.setValue("land_size", v)}
                onUnitChange={(v) => form.setValue("land_unit", v)}
              />
              <DimensionInput
                label="Tamaño de Construcción"
                value={form.watch("house_size")}
                unit={form.watch("house_unit")}
                unitOptions={[
                  { value: "m2", label: "m²" },
                  { value: "ft2", label: "ft²" }
                ]}
                placeholder="Ej: 150"
                onValueChange={(v) => form.setValue("house_size", v)}
                onUnitChange={(v) => form.setValue("house_unit", v)}
              />
              <div className="grid grid-cols-2 gap-4">
                <LabeledSelect
                  label="Año de Construcción"
                  placeholder="Ej: 2005"
                  value={form.watch("constructionYear")}
                  options={Array.from({ length: 70 }, (_, i) => {
                    const year = `${new Date().getFullYear() - i}`;
                    return { value: year, label: year };
                  })}
                  className="mb-2"
                  onChange={(v) => form.setValue("constructionYear", v)}
                />
                <LabeledSelect
                  label="Habitaciones"
                  placeholder="Ej: 3"
                  value={form.watch("rooms")}
                  options={Array.from({ length: 10 }, (_, i) => {
                    const val = `${i + 1}`;
                    return { value: val, label: val };
                  })}
                  className="mb-2"
                  onChange={(v) => form.setValue("rooms", v)}
                />
                <LabeledSelect
                  label="Baños"
                  placeholder="Ej: 2"
                  value={form.watch("baths")}
                  options={Array.from({ length: 10 }, (_, i) => {
                    const val = `${i + 1}`;
                    return { value: val, label: val };
                  })}
                  className="mb-2"
                  onChange={(v) => form.setValue("baths", v)}
                />
                <DimensionInput
                  label="Estacionamiento"
                  value={form.watch("parking_size")}
                  unit={form.watch("parking_unit")}
                  unitOptions={[
                    { value: "count", label: "Cantidad" },
                    { value: "m2", label: "m² (área)" }
                  ]}
                  placeholder="Ej: 2"
                  onValueChange={(v) => form.setValue("parking_size", v)}
                  onUnitChange={(v) => form.setValue("parking_unit", v)}
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
