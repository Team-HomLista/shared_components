import { FC, useState } from "react";
import { Text } from "@/components/ui/text";
import { Slider } from "../ui/slider";
import { Button } from "../ui/button";

interface SliderFormProps {}

export const SliderForm: FC<SliderFormProps> = ({}) => {
  const min = 500000;
  const max = 20000000;

  const defaultValue = Math.round(min + 0.2 * (max - min));
  const [value, setValue] = useState<number>(defaultValue);

  const formatCurrency = (amount: number) =>
    amount.toLocaleString("es-MX", {
      style: "currency",
      currency: "MXN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

  return (
    <div className="w-[428px]">
      <Text variant="label" className="gap-2.5">
        Presupuesto de: {formatCurrency(value)} MXN
      </Text>
      <Slider
        value={[value]}
        onValueChange={([val]) => setValue(val)}
        min={min}
        max={max}
        step={500000}
      />
      <Button variant="default" className="mt-4 w-full">
        Recibe 5 sugerencias personalizadas gratis
      </Button>
    </div>
  );
};
