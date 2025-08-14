import { z } from "zod";

import { BuildingType } from "@/types/enums/building-type";
import { TransactionType } from "@/types/enums/transaction-type";

export const smallFormSchema = z.object({
  building_type: z.enum(BuildingType, {
    error: "No has seleccionado ningún tipo de propiedad."
  }),
  state: z
    .string({ error: "No has ingresado el estado." })
    .nonempty("El nombre del estado no puede estar vacio."),
  city: z
    .string({ error: "No has ingresado la ciudad." })
    .nonempty("El nombre de la ciudad no puede estar vacio."),
  transaction_type_group: z.enum(TransactionType, {
    error: "No has ingresado ningún tipo de transacción para la propiedad."
  }),
  budget: z.number().min(500000, "El presupuesto es insuficiente. Ingresa al menos $500,000 MXN.")
});

export const leadFormSchema = z.object({
  ...smallFormSchema.shape,
  lada: z.string().min(1, "No seleccionaste un código de país. Elige uno para continuar."),
  whatsapp: z
    .string()
    .min(10, "El número de WhatsApp es incorrecto. Ingresa uno válido con al menos 10 dígitos."),
  email: z.email("El correo electrónico es inválido. Ingresa uno correcto."),
  contactConsent: z
    .boolean()
    .refine((val) => val, "No diste tu consentimiento para el contacto. Acepta para continuar."),
  dataConsent: z
    .boolean()
    .refine((val) => val, "No autorizaste el uso de tus datos. Autoriza para continuar.")
});

export type SmallFormData = z.infer<typeof smallFormSchema>;
export type LeadFormData = z.infer<typeof leadFormSchema>;
