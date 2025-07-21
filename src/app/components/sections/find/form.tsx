"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@shared/components/ui/button";
import { Text } from "@shared/components/ui/text";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@shared/components/ui/form";
import { LeadFormData, leadFormSchema, SmallFormData } from "./schemas";
import { InquiryService } from "@/app/services/inquiry";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@shared/components/ui/select";
import { Slider } from "@shared/components/ui/slider";
import { Input } from "@shared/components/ui/input";
import { Checkbox } from "@shared/components/ui/checkbox";
import { FINGERPRINT_STORAGE_KEY } from "@/constants/localstorage";
import { BUILDING_TYPE_ES } from "@/constants/building-type";
import { TRANSACTION_TYPE_GROUP_ES } from "@/constants/transaction-type";
import { useEffect, useState } from "react";
import { getCities, getStates } from "@/app/services/propertyLocations";

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
  const [states, setStates] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

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

  const stateValue = form.watch("state");

  const onSubmit = (data: LeadFormData) => {
    let anonymousId = localStorage.getItem(FINGERPRINT_STORAGE_KEY);

    if (anonymousId !== null) {
      InquiryService.postGeneral(anonymousId, data);
    }
    onSubmitSuccess?.(data);
    onClose();
  };

  async function getAllStates() {
    const states = await getStates();
    setStates(states);
  }

  async function getAllCities() {
    // TODO: SETEAR EL VALOR DE LA CIUDAD POR DEFAULT
    form.setValue("city", "");
    const cities = await getCities(stateValue);
    setCities(cities);
  }

  useEffect(() => {
    getAllStates();
  }, []);

  useEffect(() => {
    if (stateValue) {
      getAllCities();
    }
  }, [stateValue]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-evenly gap-4 pb-8"
      >
        <FormField
          control={form.control}
          name="building_type"
          render={({ field }) => (
            <FormItem className="flex w-full max-w-[428px] flex-col items-start">
              <FormLabel>
                <Text variant="label">Tipo de propiedad</Text>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full bg-white">
                    <SelectValue placeholder="Selecciona el tipo de propiedad que buscas" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent position="popper">
                  {Object.entries(BUILDING_TYPE_ES).map(([type, label]) => (
                    <SelectItem key={type} value={type}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Estado field */}
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem className="flex w-full max-w-[428px] flex-col items-start">
              <FormLabel>
                <Text variant="label">Estado</Text>
              </FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger className="w-full bg-white">
                    <SelectValue placeholder="Selecciona el estado donde buscas tu propiedad" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent position="popper">
                  {states.map((state, index) => (
                    <SelectItem key={index} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Ciudad field */}
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className="flex w-full max-w-[428px] flex-col items-start">
              <FormLabel>
                <Text variant="label">Ciudad</Text>
              </FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger className="w-full bg-white">
                    <SelectValue placeholder="Selecciona la ciudad donde buscas tu propiedad" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent position="popper">
                  {cities.map((city, index) => (
                    <SelectItem key={index} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Search type field */}
        <FormField
          control={form.control}
          name="transaction_type_group"
          render={({ field }) => (
            <FormItem className="flex w-full max-w-[428px] flex-col items-start">
              <FormLabel>
                <Text variant="label">Tipo de búsqueda</Text>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full bg-white">
                    <SelectValue placeholder="Selecciona el tipo de búsqueda" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent position="popper">
                  {Object.entries(TRANSACTION_TYPE_GROUP_ES).map(
                    ([type, label]) => (
                      <SelectItem key={type} value={type}>
                        {label}
                      </SelectItem>
                    ),
                  )}
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
                  <Input placeholder="Número de WhatsApp" {...field} />
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
                <Input placeholder="nombre@correo.com" {...field} />
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
        <Button type="submit" className="mt-1 w-fit">
          Recibe 5 sugerencias personalizadas gratis
        </Button>
        <p className="text-muted-foreground text-sm">
          No enviamos spam ni compartimos datos sensibles
        </p>
      </form>
    </Form>
  );
};
