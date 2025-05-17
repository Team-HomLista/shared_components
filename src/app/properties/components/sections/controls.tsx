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
import { ArrowUpDown, ListFilter, Search } from "lucide-react";
import { BuildingType } from "@/types/enums/building-type";
import { TransactionType } from "@/types/enums/transaction-type";
import { useRouter, useSearchParams } from "next/navigation";
import { Filters } from "./filters";

export interface PropertiesSearchControlsSectionProps {}

export const PropertiesSearchControlsSection: FC<
  PropertiesSearchControlsSectionProps
> = ({}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [propertyType, setPropertyType] = useState<keyof typeof BuildingType>(
    (searchParams.get("property_type") as keyof typeof BuildingType) || "HOUSE",
  );
  const [transactionType, setTransactionType] = useState<
    keyof typeof TransactionType
  >((searchParams.get("search_type") as keyof typeof TransactionType) || "BUY");
  const [keywords, setKeywords] = useState(searchParams.get("title") || "");
  const [orderBy, setOrderBy] = useState("reelevancia");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (propertyType) params.set("property_type", propertyType);
    if (transactionType) params.set("search_type", transactionType);
    if (keywords) params.set("title", keywords);

    router.push(`/properties?${params.toString()}`);
  };

  return (
    <div className="flex flex-col px-32">
      <div className="flex w-full flex-col gap-4 pt-8">
        {/* Input for keyword and search button */}
        <div className="flex w-full flex-row gap-2">
          <Input
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="Buscar por palabras clave"
            className="border-secondary w-full border-2"
            title="title"
          />
          <Button size="lg" corner="squared" onClick={handleSearch}>
            <Search className="mr-2" />
            Buscar propiedades
          </Button>
        </div>
        {/* Selects and controls */}
        <div className="flex w-full flex-row items-center gap-4">
          {/* Select property_type */}
          <Select
            value={propertyType}
            onValueChange={(v) =>
              setPropertyType(v as keyof typeof BuildingType)
            }
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Tipo de propiedad" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={BuildingType.HOUSE}>Casa</SelectItem>
              <SelectItem value={BuildingType.APARTMENT}>
                Departamento
              </SelectItem>
              <SelectItem value={BuildingType.LAND}>Terreno</SelectItem>
              <SelectItem value={BuildingType.COMMERCIAL}>Local</SelectItem>
            </SelectContent>
          </Select>
          {/* Select transaction_type */}
          <Select
            value={transactionType}
            onValueChange={(v) =>
              setTransactionType(v as keyof typeof TransactionType)
            }
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Tipo de transacción" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={TransactionType.BUY}>Compra</SelectItem>
              <SelectItem value={TransactionType.RENT}>Renta</SelectItem>
            </SelectContent>
          </Select>
          {/* Order by button */}
          <Button variant="default" className="font-normal">
            <ArrowUpDown />
            Orden por <span className="ml-1 font-bold">Relevancia</span>
          </Button>
          {/* Filters button */}
          <Filters />
        </div>
        <div className="border-secondary flex w-full border"></div>
      </div>
    </div>
  );
};
