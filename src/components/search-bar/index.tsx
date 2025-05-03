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
import { Search } from "lucide-react";
import Link from "next/link";

export interface SearchBarProps {}

/** SearchBar is a React functional component that provides a search interface
 * for filtering properties based on property type, search type, and city.
 * It includes dropdowns for selecting property and search types, an input
 * field for entering the city, and a button to trigger the search.
 */
export const SearchBar: FC<SearchBarProps> = () => {
  const [propertyType, setPropertyType] = useState("casas");
  const [searchType, setSearchType] = useState("compra");
  const [city, setCity] = useState("");

  return (
    <div className="flex w-full flex-row justify-center px-8 py-16">
      <div className="border-secondary flex w-full max-w-[1024px] flex-row items-end justify-center gap-3 rounded-2xl border-4 bg-white p-4">
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
        <div className="flex w-full flex-col">
          <Text variant="label">Ciudad</Text>
          <Input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Nombre de la ciudad"
            className="border-secondary w-full border-2"
          />
        </div>

        {/* Search Button */}
        <Button
          asChild
          className="has-[>svg]:px-6"
          size={"lg"}
          corner={"squared"}
        >
          <Link
            href={`/properties?property_type=${propertyType}&search_type=${searchType}&city=${city}`}
          >
            <Search />
            Buscar propiedades
          </Link>
        </Button>
      </div>
    </div>
  );
};
