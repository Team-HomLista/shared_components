import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ListFilter } from "lucide-react";
import { FC, useState } from "react";
import { FilterSelect } from "../components/select";
import { MEXICO_LOCATIONS } from "../components/mexico-locations";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LabeledSelect } from "./LabeledSelect";
import { LabeledToggleGroup } from "./LabeledToggleGroup";
import { DimensionInput } from "./DimensionInput";

export interface FilterProps {}

export const Filters: FC<FilterProps> = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedMunicipality, setSelectedMunicipality] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [sliderValue, setSliderValue] = useState([25]);
  const [year, setYear] = useState("");
  const [rooms, setRooms] = useState("");
  const [baths, setBaths] = useState("");
  const [landSize, setLandSize] = useState("");
  const [landUnit, setLandUnit] = useState("m2");
  const [houseSize, setHouseSize] = useState("");
  const [houseUnit, setHouseUnit] = useState("m2");
  const [parkingSize, setParkingSize] = useState("");
  const [parkingUnit, setParkingUnit] = useState("m2");

  const stateOptions = MEXICO_LOCATIONS.map((s) => ({
    value: s.state,
    label: s.state,
  }));

  const municipalityOptions =
    MEXICO_LOCATIONS.find((s) => s.state === selectedState)?.municipalities.map(
      (m) => ({
        value: m.municipality,
        label: m.municipality,
      }),
    ) || [];

  const cityOptions =
    MEXICO_LOCATIONS.find((s) => s.state === selectedState)
      ?.municipalities.find((m) => m.municipality === selectedMunicipality)
      ?.cities.map((c) => ({
        value: c,
        label: c,
      })) || [];

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button corner={"rounded"} size={"icon"}>
            <ListFilter className="h-2 w-2">Filtros</ListFilter>
          </Button>
        </SheetTrigger>
        <SheetContent
          headerActions={
            <Button corner="squared" size="sm">
              Aplicar filtros
            </Button>
          }
        >
          <div className="max-h-[calc(100vh-64px)] flex-1 overflow-y-auto">
            <SheetTitle className="sr-only">Filtros</SheetTitle>
            <SheetDescription className="sr-only">
              Configura la busqueda a tu manera.
            </SheetDescription>
            <div className="flex flex-col gap-4 px-3">
              <div className="flex flex-col gap-2">
                <label>Solo propiedades destacadas</label>
                <Switch className="peer data-[state=checked]:bg-secondary" />
              </div>
              <FilterSelect
                label="Estado"
                placeholder="Elegir un estado"
                value={selectedState}
                onChange={(value) => {
                  setSelectedState(value);
                  setSelectedMunicipality("");
                  setSelectedCity("");
                }}
                options={stateOptions}
              />
              <FilterSelect
                label="Municipio"
                placeholder="Elegir un municipio"
                value={selectedMunicipality}
                onChange={(value) => {
                  setSelectedMunicipality(value);
                  setSelectedCity("");
                }}
                options={municipalityOptions}
                className={
                  municipalityOptions.length === 0
                    ? "pointer-events-none opacity-50"
                    : ""
                }
              />
              <FilterSelect
                label="Ciudad"
                placeholder="Elegir una ciudad"
                value={selectedCity}
                onChange={setSelectedCity}
                options={cityOptions}
                className={
                  cityOptions.length === 0
                    ? "pointer-events-none opacity-50"
                    : ""
                }
              />
              <div className="flex flex-col gap-2.5">
                <label>A cuántos km cerca de mi: {sliderValue[0]} km</label>
                <Slider
                  value={sliderValue}
                  onValueChange={setSliderValue}
                  max={50}
                  step={1}
                  className="w-full"
                />
              </div>
              <div className="flex flex-col">
                <label>Detalles de propiedad</label>
                <div className="border-secondary w-full border-[1px]"></div>
              </div>
              <LabeledSelect
                label="Año de construcción"
                placeholder="Elegir un año"
                value={year}
                onChange={setYear}
                options={[
                  { value: "2023", label: "2023" },
                  { value: "2022", label: "2022" },
                  { value: "2021", label: "2021" },
                ]}
              />
              <LabeledToggleGroup
                label="Número de habitaciones"
                value={rooms}
                onChange={setRooms}
                options={[
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                  { value: "4", label: "4" },
                  { value: "5", label: "5+" },
                ]}
              />
              <LabeledToggleGroup
                label="Número de baños"
                value={baths}
                onChange={setBaths}
                options={[
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                  { value: "4", label: "4" },
                  { value: "5", label: "5+" },
                ]}
              />
              <div className="flex flex-col">
                <label>Detalles de propiedad</label>
                <div className="border-secondary w-full border-[1px]"></div>
              </div>
              <DimensionInput
                label="Tamaño del terreno"
                value={landSize}
                onValueChange={setLandSize}
                unit={landUnit}
                onUnitChange={setLandUnit}
                placeholder="Dimensión del terreno en m²"
              />
              <DimensionInput
                label="Tamaño de la casa construida"
                value={houseSize}
                onValueChange={setHouseSize}
                unit={houseUnit}
                onUnitChange={setHouseUnit}
                placeholder="Dimensión de la casa en m²"
              />
              <DimensionInput
                label="Tamaño del estacionamiento construido"
                value={parkingSize}
                onValueChange={setParkingSize}
                unit={parkingUnit}
                onUnitChange={setParkingUnit}
                placeholder="Dimensión del estacionamiento en m²"
              />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
