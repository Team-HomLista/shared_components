"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Text } from "@/components/ui/text";
import { BUILDING_TYPE_ES } from "@/constants/building-type";
import { TRANSACTION_TYPE_GROUP_ES } from "@/constants/transaction-type";
import { SmallFormData, smallFormSchema } from "@/modules/home/sections/find/schemas";
import { getCities, getStates } from "@/services/legacy/property-locations";

interface FindSmallFormProps {
  onComplete: (data: SmallFormData) => void;
}

export const FindSmallForm = ({ onComplete }: FindSmallFormProps) => {
  const [states, setStates] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const form = useForm<z.infer<typeof smallFormSchema>>({
    resolver: zodResolver(smallFormSchema),
    defaultValues: {
      budget: 5000000
    }
  });

  const stateValue = form.watch("state");

  const onSubmit = (values: SmallFormData) => {
    onComplete(values);
  };

  async function getAllStates() {
    const states = await getStates();
    setStates(states ?? []);
  }

  async function getAllCities() {
    form.setValue("city", "");
    const cities = await getCities(stateValue);
    setCities(cities);
  }

  useEffect(() => {
    getAllStates();
  }, []);

  useEffect(() => {
    if (stateValue) {
      getAllCities();
    }
  }, [stateValue]);

  return (
    <Form {...form}>
      <form className="flex flex-col items-center gap-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="building_type"
          render={({ field }) => (
            <FormItem className="flex w-full max-w-[428px] flex-col items-start">
              <FormLabel>
                <Text variant="label">Tipo de propiedad</Text>
              </FormLabel>
              {}
              <Select defaultValue={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className="w-full bg-white">
                    <SelectValue placeholder="Selecciona el tipo de propiedad que buscas" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent position="popper">
                  {Object.entries(BUILDING_TYPE_ES).map(([type, label]) => (
                    <SelectItem key={type} value={type}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Estado field */}
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem className="flex w-full max-w-[428px] flex-col items-start">
              <FormLabel>
                <Text variant="label">Estado</Text>
              </FormLabel>
              <Select defaultValue={field.value} value={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className="w-full bg-white">
                    <SelectValue placeholder="Selecciona el estado donde buscas tu propiedad" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent position="popper">
                  {states.map((state, index) => (
                    <SelectItem key={index} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Ciudad field */}
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className="flex w-full max-w-[428px] flex-col items-start">
              <FormLabel>
                <Text variant="label">Ciudad</Text>
              </FormLabel>
              <Select defaultValue={field.value} value={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className="w-full bg-white">
                    <SelectValue placeholder="Selecciona la ciudad donde buscas tu propiedad" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent position="popper">
                  {cities.map((city, index) => (
                    <SelectItem key={index} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Search type field */}
        <FormField
          control={form.control}
          name="transaction_type_group"
          render={({ field }) => (
            <FormItem className="flex w-full max-w-[428px] flex-col items-start">
              <FormLabel>
                <Text variant="label">Tipo de búsqueda</Text>
              </FormLabel>
              {}
              <Select defaultValue={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className="w-full bg-white">
                    <SelectValue placeholder="Selecciona el tipo de búsqueda" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent position="popper">
                  {Object.entries(TRANSACTION_TYPE_GROUP_ES).map(([type, label]) => (
                    <SelectItem key={type} value={type}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Budget slider */}
        <FormField
          control={form.control}
          name="budget"
          render={({ field }) => {
            const displayValue =
              field.value?.toLocaleString?.("es-MX", {
                style: "currency",
                currency: "MXN",
                minimumFractionDigits: 0
              }) || "$0";

            return (
              <FormItem className="flex w-full max-w-[428px] flex-col items-start">
                <FormLabel>
                  <Text variant="label">Presupuesto: {displayValue} MXN</Text>
                </FormLabel>
                <FormControl>
                  <Slider
                    min={500000}
                    max={20000000}
                    step={100000}
                    value={[field.value || 5000000]}
                    className="w-full"
                    onValueChange={(value) => field.onChange(value[0])}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <Button type="submit" className="mt-4 w-fit">
          Recibe 5 sugerencias personalizadas gratis
        </Button>
      </form>
    </Form>
  );
};
