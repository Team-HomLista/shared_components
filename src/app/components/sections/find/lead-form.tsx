"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Input } from "../../../../components/ui/input";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Slider } from "../../../../components/ui/slider";
import {
  leadFormSchema,
  SmallFormData,
  LeadFormData,
} from "@/types/find-schemas";

interface LeadFormProps {
  initialData: SmallFormData;
  onClose: () => void;
  onSubmitSuccess?: (data: LeadFormData) => void;
}

export const LeadForm = ({
  initialData,
  onClose,
  onSubmitSuccess,
}: LeadFormProps) => {
  const form = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      ...initialData,
      lada: "52",
      whatsapp: "",
      email: "",
      contactConsent: false,
      dataConsent: false,
    },
  });

  const onSubmit = (data: LeadFormData) => {
    onSubmitSuccess?.(data);
    onClose();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-evenly gap-4 pb-8"
      >
        {/* Property type field */}
        <FormField
          control={form.control}
          name="propertyType"
          render={({ field }) => (
            <FormItem className="flex w-full max-w-[428px] flex-col items-start">
              <FormLabel>
                <Text variant="label">Tipo de propiedad</Text>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full bg-white">
                    <SelectValue placeholder="Propiedad" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent position="popper">
                  <SelectItem value="casas">Casas</SelectItem>
                  <SelectItem value="departamentos">Departamentos</SelectItem>
                  <SelectItem value="terrenos">Terrenos</SelectItem>
                  <SelectItem value="locales">Locales</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Location field */}
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem className="flex w-full max-w-[428px] flex-col items-start">
              <FormLabel>
                <Text variant="label">Ubicación</Text>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full bg-white">
                    <SelectValue placeholder="Ubicación" />
                  </SelectTrigger>
                </FormControl>
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
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Search type field */}
        <FormField
          control={form.control}
          name="searchType"
          render={({ field }) => (
            <FormItem className="flex w-full max-w-[428px] flex-col items-start">
              <FormLabel>
                <Text variant="label">Tipo de búsqueda</Text>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full bg-white">
                    <SelectValue placeholder="Compra" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent position="popper">
                  <SelectItem value="compra">Compra</SelectItem>
                  <SelectItem value="renta">Renta</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Budget slider */}
        <FormField
          control={form.control}
          name="budget"
          render={({ field }) => {
            const displayValue =
              field.value?.toLocaleString?.("es-MX", {
                style: "currency",
                currency: "MXN",
                minimumFractionDigits: 0,
              }) || "$0";

            return (
              <FormItem className="flex w-full max-w-[428px] flex-col items-start">
                <FormLabel>
                  <Text variant="label">Presupuesto: {displayValue}</Text>
                </FormLabel>
                <FormControl>
                  <Slider
                    min={500000}
                    max={20000000}
                    step={500000}
                    value={[field.value || 5000000]}
                    onValueChange={(value) => field.onChange(value[0])}
                    className="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        {/* WhatsApp field */}
        <FormField
          control={form.control}
          name="whatsapp"
          render={({ field }) => (
            <FormItem className="w-full max-w-[428px]">
              <FormLabel>
                <Text variant="label">WhatsApp</Text>
              </FormLabel>
              <div className="flex flex-row gap-2">
                <FormField
                  control={form.control}
                  name="lada"
                  render={({ field: phoneField }) => (
                    <Select
                      onValueChange={phoneField.onChange}
                      defaultValue={phoneField.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-fit">
                          <SelectValue placeholder="Código" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent position="popper">
                        <SelectItem value="52">+52 MX</SelectItem>
                        <SelectItem value="33">+33 FR</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                <FormControl>
                  <Input
                    placeholder="Número de WhatsApp"
                    {...field}
                    className="border-secondary border-2"
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Email field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex w-full max-w-[428px] flex-col items-start">
              <FormLabel>
                <Text variant="label">Correo electrónico</Text>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="nombre@correo.com"
                  {...field}
                  className="border-secondary border-2"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Contact consent checkbox */}
        <FormField
          control={form.control}
          name="contactConsent"
          render={({ field }) => (
            <FormItem className="flex w-full max-w-[428px] flex-row items-start space-y-0 space-x-3 rounded-md px-4 pt-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Consiento ser contactado por un asesor</FormLabel>
                <p className="text-muted-foreground text-sm">
                  Autorizo que un asesor certificado me contacte para brindarme
                  asistencia personalizada
                </p>
              </div>
            </FormItem>
          )}
        />
        {/* Data consent checkbox */}
        <FormField
          control={form.control}
          name="dataConsent"
          render={({ field }) => (
            <FormItem className="flex w-full max-w-[428px] flex-row items-start space-y-0 space-x-3 rounded-md px-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Autorizo el uso de mis datos personales</FormLabel>
                <p className="text-muted-foreground text-sm">
                  Acepto el tratamiento de mis datos personales conforme a la
                  Política de Privacidad y la Ley Federal de Protección de Datos
                  Personales (LFDPDP)
                </p>
              </div>
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-1 w-full max-w-[428px]">
          Recibe 5 sugerencias personalizadas gratis
        </Button>
        <p className="text-muted-foreground text-sm">
          No enviamos spam ni compartimos datos sensibles
        </p>
      </form>
    </Form>
  );
};
