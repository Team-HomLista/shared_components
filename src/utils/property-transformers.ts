import { DetailedProperty, PropertyPrice, PropertyPriceType } from "@/types/property";

/**
 * Transform a detailed property into a PropertyPrice object
 *
 * @param property - The detailed property object
 * @returns PropertyPrice object with normalized pricing data
 */
export function transformPropertyPrice(property: DetailedProperty): PropertyPrice {
  return {
    type: PropertyPriceType.Normal,
    after: null,
    current: property?.price ?? 0,
    currency: property?.price_currency ?? "USD"
  };
}

/**
 * Create property location string from property data
 *
 * @param property - The detailed property object
 * @returns Formatted location string
 */
export function formatPropertyLocation(
  property: Pick<DetailedProperty, "state" | "city" | "neighborhood">
): string {
  return `${property.state}, ${property.city}, ${property.neighborhood}`;
}
