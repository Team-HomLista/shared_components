import { z } from "zod";

export const controlsSchema = z.object({
  keywords: z.string().optional(),
  order_by: z.string().optional(),
  property_type: z.string().optional(),
  transaction_type: z.string().optional(),
  state: z.string().optional(),
  city: z.string().optional(),
  neighborhood: z.string().optional(),
  distance_km: z.string().optional(),
  constructionYear: z.string().optional(),
  rooms: z.string().optional(),
  baths: z.string().optional(),
  land_size: z.string().optional(),
  land_unit: z.string().optional(),
  house_size: z.string().optional(),
  house_unit: z.string().optional(),
  parking_size: z.string().optional(),
  parking_unit: z.string().optional(),
});

export type ControlsSchema = z.infer<typeof controlsSchema>;
