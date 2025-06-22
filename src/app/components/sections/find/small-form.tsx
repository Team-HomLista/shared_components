"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Text } from "@/components/ui/text";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { smallFormSchema } from "./schemas";

interface FindSmallFormProps {
  onComplete: (data: z.infer<typeof smallFormSchema>) => void;
}

export const FindSmallForm = ({ onComplete }: FindSmallFormProps) => {
  const form = useForm<z.infer<typeof smallFormSchema>>({
    resolver: zodResolver(smallFormSchema),
    defaultValues: {
      property_type: "",
      location: "",
      search_type: "",
      budget: 5000000,
    },
  });

  const onSubmit = (values: z.infer<typeof smallFormSchema>) => {
    onComplete(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-4"
      >
        <FormField
          control={form.control}
          name="property_type"
          render={({ field }) => (
            <FormItem className="flex w-full max-w-[428px] flex-col items-start">
              <FormLabel>
                <Text variant="label">Tipo de propiedad</Text>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full bg-white">
                    <SelectValue placeholder="Propiedad" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent position="popper">
                  <SelectItem value="casas">Casas</SelectItem>
                  <SelectItem value="departamentos">Departamentos</SelectItem>
                  <SelectItem value="terrenos">Terrenos</SelectItem>
                  <SelectItem value="locales">Locales</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Location field */}
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem className="flex w-full max-w-[428px] flex-col items-start">
              <FormLabel>
                <Text variant="label">Ubicación</Text>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full bg-white">
                    <SelectValue placeholder="Ubicación" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent position="popper">
                  <SelectItem value="cancun">Cancún</SelectItem>
                  <SelectItem value="playa-del-carmen">
                    Playa del Carmen
                  </SelectItem>
                  <SelectItem value="ciudad-de-mexico">
                    Ciudad de México
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Search type field */}
        <FormField
          control={form.control}
          name="search_type"
          render={({ field }) => (
            <FormItem className="flex w-full max-w-[428px] flex-col items-start">
              <FormLabel>
                <Text variant="label">Tipo de búsqueda</Text>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full bg-white">
                    <SelectValue placeholder="Compra" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent position="popper">
                  <SelectItem value="compra">Compra</SelectItem>
                  <SelectItem value="renta">Renta</SelectItem>
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
                minimumFractionDigits: 0,
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
                    onValueChange={(value) => field.onChange(value[0])}
                    className="w-full"
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
