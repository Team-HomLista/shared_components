"use client";
import { FC, useState } from "react";
import { Text } from "@/components/ui/text";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export interface FindFormProps {}

/**
 * FindForm is a React functional component that provides a form
 * for selecting property-related options such as property type,
 * location, and search type.
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
    <div className="flex flex-col items-center justify-evenly gap-4 pb-8">
      <div className="flex flex-col items-start">
        <Text variant="label">Tipo de propiedad</Text>
        <Select>
          <SelectTrigger className="w-[428px] bg-white">
            <SelectValue placeholder="Propiedad" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="casas">Casas</SelectItem>
            <SelectItem value="departamentos">Departamentos</SelectItem>
            <SelectItem value="terrenos">Terrenos</SelectItem>
            <SelectItem value="locales">Locales</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col">
        <Text variant="label">Ubicación</Text>
        <Select>
          <SelectTrigger className="w-[428px] bg-white">
            <SelectValue placeholder="Ubicación" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="cancun">Cancún</SelectItem>
            <SelectItem value="playa-del-carmen">Playa del Carmen</SelectItem>
            <SelectItem value="ciudad-de-mexico">Ciudad de México</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col">
        <Text variant="label">Tipo de búsqueda</Text>
        <Select>
          <SelectTrigger className="w-[428px] bg-white">
            <SelectValue placeholder="Compra" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="compra">Compra</SelectItem>
            <SelectItem value="renta">Renta</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
