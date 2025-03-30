"use client";
import { FC, useState } from "react";
import { Text } from "@/components/ui/text";
import { Select, SelectGroup, SelectLabel } from "../ui/select";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";

export interface FindFormProps {}

/**
 * FindForm is a React functional component that provides a form
 * for selecting property-related options such as property type,
 * location, and search type. It uses Radix UI's Select components
 * for dropdown menus.
 *
 * @component
 * @example
 * return (
 *   <FindForm />
 * )
 */
export const FindForm: FC<FindFormProps> = ({}) => {
  // State for the selected property type (e.g., houses, apartments).
  const [propertyType, setPropertyType] = useState("casas");

  // State for the selected location (e.g., cancun, cdmx).
  const [location, setLocation] = useState("cancun");

  // State for the selected search type (e.g., buy, sell).
  const [searchType, setSearchType] = useState("compra");

  return (
    <div className="flex flex-row justify-center w-[512px] h-screen pb-16">
      <div className="flex flex-col w-full">
        {/* Property Type Selection */}
        <div className="flex flex-col w-full">
          <Text variant="label">Tipo de propiedad</Text>
          <Select
            value={propertyType}
            onValueChange={(v) => setPropertyType(v)}
          >
            <SelectTrigger className="w-full border-2 flex border-secondary">
              <SelectValue placeholder="Casas" />
            </SelectTrigger>
            <SelectGroup>
              <SelectContent position="popper">
                <SelectItem value="casas">Casas</SelectItem>
                <SelectItem value="departamentos">Departamentos</SelectItem>
                <SelectItem value="terrenos">Terrenos</SelectItem>
                <SelectItem value="locales">Locales</SelectItem>
              </SelectContent>
            </SelectGroup>
          </Select>
        </div>

        {/* Location Selection */}
        <div className="flex flex-col">
          <Text variant="label">Ubicación</Text>
          <Select value={location} onValueChange={(v) => setLocation(v)}>
            <SelectTrigger className="w-[200px] border-2 border-secondary">
              <SelectValue placeholder="Cancún" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="cdmx">CDMX</SelectItem>
              <SelectItem value="guadalajara">Guadalajara</SelectItem>
              <SelectItem value="monterrey">Monterrey</SelectItem>
              <SelectItem value="puebla">Puebla</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Search Type Selection */}
        <div className="flex flex-col w-full">
          <Text variant="label">Tipo de búsqueda</Text>
          <Select value={searchType} onValueChange={(v) => setSearchType(v)}>
            <SelectTrigger className="w-[200px] border-2 border-secondary">
              <SelectValue placeholder="Compra" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="compra">Compra</SelectItem>
              <SelectItem value="venta">Venta</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
