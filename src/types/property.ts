import { BuildingType } from "./enums/building-type";
import { TransactionType } from "./enums/transaction-type";


export interface Property {
  agency: PropertyAgency | null;
  agency_id: number | null;
  agent: PropertyAgent | null;
  agent_id: number | null;
  bathrooms: number;
  building_size: number | null;
  building_type: keyof typeof BuildingType;
  city: string;
  cover_image: string;
  description: string | null;
  floor: number | null;
  is_featured: boolean;
  land_size: number | null;
  parking_slots: number;
  price: number;
  price_currency: string;
  published_at: string;
  rooms: number;
  short_id: string;
  slug: string;
  state: string;
  title: string;
  transaction_type: keyof typeof TransactionType;
  uuid: string;
}

export interface DetailedProperty extends Property {
  multimedia: Array<string>;
}

export interface PropertyAgent {
  agency_id: number | null;
  avatar: string;
  email: string;
  franchise_id: number | null;
  full_name: string;
  id: number;
  is_external: boolean;
  phone: {
    number: string;
    lada: string;
    extension: string | null;
  };
  social_media: Array<{
    handler: string;
    type: string;
  }>;
}

export interface PropertyAgency {
  email: string;
  id: number;
  logo: string;
  name: string;
  phone: {
    number: string;
    lada: string;
    extension: string | null;
  };
  social_media: Array<{
    handler: string;
    type: string;
  }>;
}
