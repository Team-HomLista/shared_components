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
import { BuildingType } from "@/types/enums/building-type";
import { TransactionType } from "@/types/enums/transaction-type";

export interface SearchBarProps {}

/** SearchBar is a React functional component that provides a search interface
 * for filtering properties based on property type, search type, and city.
 * It includes dropdowns for selecting property and search types, an input
 * field for entering the city, and a button to trigger the search.
 */
export const SearchBar: FC<SearchBarProps> = () => {
  const [propertyType, setPropertyType] =
    useState<keyof typeof BuildingType>("HOUSE");
  const [searchType, setSearchType] =
    useState<keyof typeof TransactionType>("BUY");
  const [city, setCity] = useState("");

  return (
    <div className="flex w-full flex-row justify-center px-4 py-4 md:px-8 md:py-16">
      <div className="border-secondary flex w-full max-w-[1024px] flex-col items-stretch justify-center gap-4 rounded-2xl border-4 bg-white p-4 md:flex-row md:items-end md:gap-3">
        {/* Property Type Selection */}
        <div className="flex flex-col">
          <Text variant="label">Tipo de propiedad</Text>
          <Select
            value={propertyType}
            onValueChange={(v) =>
              setPropertyType(v as keyof typeof BuildingType)
            }
          >
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Propiedad" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value={BuildingType.HOUSE}>Casas</SelectItem>
              <SelectItem value={BuildingType.DEPARTMENT}>
                Departamentos
              </SelectItem>
              <SelectItem value={BuildingType.LAND}>Terrenos</SelectItem>
              <SelectItem value={BuildingType.COMMERCIAL}>Locales</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Search Type Selection */}
        <div className="flex flex-col">
          <Text variant="label">Tipo de búsqueda</Text>
          <Select
            value={searchType}
            onValueChange={(v) =>
              setSearchType(v as keyof typeof TransactionType)
            }
          >
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Búsqueda" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value={TransactionType.BUY}>Compra</SelectItem>
              <SelectItem value={TransactionType.RENT}>Venta</SelectItem>
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
          className="w-full has-[>svg]:px-6 md:w-auto"
          size={"lg"}
          corner={"squared"}
        >
          <Link
            href={`/propiedades?property_type=${propertyType}&search_type=${searchType}&city=${city}`}
          >
            <Search />
            Buscar propiedades
          </Link>
        </Button>
      </div>
    </div>
  );
};
