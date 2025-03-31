"use client";
import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Text } from "@/components/ui/text";
import { ChevronsUpDown, Search } from "lucide-react";

/**
 * Props for the SearchBar component.
 */
export interface SearchBarProps {}

/**
 * SearchBar is a React functional component that provides a search interface
 * for filtering properties based on property type, search type, and city.
 * It includes dropdowns for selecting property and search types, an input
 * field for entering the city, and a button to trigger the search.
 *
 * @component
 * @example
 * return (
 *   <SearchBar />
 * )
 *
 * @returns {JSX.Element}
 */
export const SearchBar: FC<SearchBarProps> = () => {
  /**
   * State for the selected property type (e.g., casas, departamentos).
   * @type {string}
   */
  const [propertyType, setPropertyType] = useState("casas");

  /**
   * State for the selected search type (e.g., compra, venta).
   * @type {string}
   */
  const [searchType, setSearchType] = useState("compra");

  /**
   * State for the entered city name.
   * @type {string}
   */
  const [city, setCity] = useState("");

  return (
    <div className="flex flex-row justify-center w-full py-16 px-8">
      <div
        className="flex flex-row p-4 bg-white border-4 border-secondary 
          rounded-2xl justify-center items-end gap-3 w-full max-w-[1024px]"
      >
        {/* Property Type Selection */}
        <div className="flex flex-col">
          <Text variant="label">Tipo de propiedad</Text>
          <Select
            value={propertyType}
            onValueChange={(v) => setPropertyType(v)}
          >
            <SelectTrigger className="w-[200px]">
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

        {/* Search Type Selection */}
        <div className="flex flex-col">
          <Text variant="label">Tipo de búsqueda</Text>
          <Select value={searchType} onValueChange={(v) => setSearchType(v)}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Búsqueda" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="compra">Compra</SelectItem>
              <SelectItem value="venta">Venta</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* City Input */}
        <div className="flex flex-col w-full">
          <Text variant="label">Ciudad</Text>
          <Input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Nombre de la ciudad"
            className="w-full border-2 border-secondary"
          />
        </div>

        {/* Search Button */}
        <Button
          className="has-[>svg]:px-6"
          size={"lg"}
          corner={"squared"}
          onClick={() => {
            /* handle submit */
          }}
        >
          <Search />
          Buscar propiedades
        </Button>
      </div>
    </div>
  );
};
