import { Divider } from "@/components/divider";
import { FindForm } from "@/components/find-section-form";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Text } from "@/components/ui/text";
import { Slider } from "@/components/ui/slider";

interface FindSectionProps {}

export const FindSection: FC<FindSectionProps> = ({}) => {
  return (
    <section>
      <div className="bg-[#F5F5F5]">
        <SectionHeader
          title="Encuentra"
          description="¿Aún no encuentras lo que buscas? Deja que nuestra IA te 
        recomiende opciones o encuentre el mejor asesor para ti"
          orientation="left"
        ></SectionHeader>
        <div className="flex flex-col gap-4 justify-evenly items-center pb-8">
          <div className="items-start">
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
          <div>
            <Text variant="label">Ubicación</Text>
            <Select>
              <SelectTrigger className="w-[428px] bg-white">
                <SelectValue placeholder="Ubicación" />
              </SelectTrigger>
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
          </div>
          <div>
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
          <div className="w-[428px]">
            <Text variant="label" className="gap-2.5">
              Presupuesto de: $ 200,000,000 MXN
            </Text>
            <Slider defaultValue={[20]} max={100} step={1} />
            <Button variant="default" className="w-full mt-4">
              Recibe 5 sugerencias personalizadas gratis
            </Button>
          </div>
        </div>
        {/* Dialog must be here */}
      </div>
    </section>
  );
};
