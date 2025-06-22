import { BuildingType } from "@/types/enums/building-type";
import { TransactionType } from "@/types/enums/transaction-type";

export interface PropertyQueryParams {
  page?: number;
  order_by?: string;
  property_type?: keyof typeof BuildingType;
  search_type?: keyof typeof TransactionType;
  title?: string;
  state?: string;
  city?: string;
  neighborhood?: string;
  distance_km?: string;
  construction_year?: string;
  rooms?: string;
  baths?: string;
  land_size?: string;
  land_unit?: string;
  house_size?: string;
  house_unit?: string;
  parking_size?: string;
  parking_unit?: string;
}
