"use client";
import { FC } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { controlsSchema } from "../Schema";
import { BuildingType } from "@/types/enums/building-type";
import { TransactionType } from "@/types/enums/transaction-type";
import { ArrowUpDown, Search } from "lucide-react";
import { Filters } from "./filters";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { BreadcrumbPagination } from "@/components/breadcrumb-index";

export interface ControlsSectionProps {
  form: UseFormReturn<z.infer<typeof controlsSchema>>;
  onFormSubmit: (data: z.infer<typeof controlsSchema>) => void;
  stateOptions: { value: string; label: string }[];
  cityOptions: { value: string; label: string }[];
  neighborhoodOptions: { value: string; label: string }[];
}

export const ControlsSection: FC<ControlsSectionProps> = ({
  form,
  onFormSubmit,
  stateOptions,
  cityOptions,
  neighborhoodOptions,
}) => {
  function onSubmit(data: z.infer<typeof controlsSchema>) {
    onFormSubmit(data);
  }

  return (
    <div className="flex flex-col px-4 sm:px-8">
      <div className="mx-auto flex w-full max-w-[1112px] flex-col gap-4 px-2 pt-8 md:px-0">
        <BreadcrumbPagination />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            {/* Desktop Layout */}
            <div className="hidden md:flex md:flex-col md:gap-4">
              {/* Input for keyword and search button */}
              <div className="flex w-full flex-row gap-2">
                <FormField
                  control={form.control}
                  name="keywords"
                  render={({ field }) => (
                    <FormItem className="flex-grow">
                      <FormControl>
                        <Input
                          placeholder="Buscar por palabras clave"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="default">
                  <Search className="mr-1 size-5!" />
                  Buscar propiedades
                </Button>
              </div>

              {/* Selects and Order by button */}
              <div className="flex w-full flex-row items-center gap-4">
                <FormField
                  control={form.control}
                  name="property_type"
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value || ""}
                      >
                        <FormControl>
                          <SelectTrigger className="w-[200px]">
                            <SelectValue placeholder="Tipo de propiedad" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value={BuildingType.HOUSE}>
                            Casa
                          </SelectItem>
                          <SelectItem value={BuildingType.DEPARTMENT}>
                            Departamento
                          </SelectItem>
                          <SelectItem value={BuildingType.LAND}>
                            Terreno
                          </SelectItem>
                          <SelectItem value={BuildingType.COMMERCIAL}>
                            Local
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="transaction_type"
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value || ""}
                      >
                        <FormControl>
                          <SelectTrigger className="w-[200px]">
                            <SelectValue placeholder="Tipo de transacción" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value={TransactionType.BUY}>
                            Compra
                          </SelectItem>
                          <SelectItem value={TransactionType.RENT}>
                            Renta
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="font-normal" variant="outline" type="button">
                  <ArrowUpDown className="mr-1 size-5!" />
                  Ordenar por <span className="font-bold">Relevancia</span>
                </Button>
                <Filters
                  form={form}
                  stateOptions={stateOptions}
                  cityOptions={cityOptions}
                  neighborhoodOptions={neighborhoodOptions}
                  onSubmit={onSubmit}
                />
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="flex flex-col gap-4 md:hidden">
              {/* First row: Search input (full width) */}
              <FormField
                control={form.control}
                name="keywords"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder="Buscar por palabras clave"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Second row: Search button and filters */}
              <div className="flex w-full gap-2">
                <Button type="submit" className="flex-1">
                  <Search className="mr-1 size-5!" />
                  Buscar propiedades
                </Button>
                <Filters
                  form={form}
                  stateOptions={stateOptions}
                  cityOptions={cityOptions}
                  neighborhoodOptions={neighborhoodOptions}
                  onSubmit={onSubmit}
                />
              </div>
            </div>
          </form>
        </Form>
        <div className="border-primary flex w-full border"></div>

        {/* Mobile sorting button - appears below divider */}
        <div className="flex justify-end md:hidden">
          <Button variant="outline" className="font-normal" type="button">
            <ArrowUpDown className="mr-1 size-5!" />
            Ordenar por <span className="font-bold">Relevancia</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
