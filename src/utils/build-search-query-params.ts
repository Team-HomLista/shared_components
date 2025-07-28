import { PropertyQueryParams } from "@/types/property-query-params";

export function buildSearchQueryParams(params: PropertyQueryParams): string {
  const queryParams = new URLSearchParams();

  if (params.page !== undefined) {
    queryParams.append("page", String(params.page));
  }

  if (params.search_type !== undefined) {
    queryParams.append("search_type", params.search_type);
  }

  if (params.property_type !== undefined) {
    queryParams.append("property_type", params.property_type);
  }

  if (params.title !== undefined && params.title !== "") {
    queryParams.append("title", params.title);
  }

  if (params.state !== undefined && params.state !== "") {
    queryParams.append("state", params.state);
  }

  if (params.city !== undefined && params.city !== "") {
    queryParams.append("city", params.city);
  }

  if (params.neighborhood !== undefined && params.neighborhood !== "") {
    queryParams.append("neighborhood", params.neighborhood);
  }

  if (params.distance_km !== undefined && params.distance_km !== "") {
    queryParams.append("distance_km", params.distance_km);
  }

  if (
    params.construction_year !== undefined &&
    params.construction_year !== ""
  ) {
    queryParams.append("construction_year", params.construction_year);
  }

  if (params.rooms !== undefined && params.rooms !== "") {
    queryParams.append("rooms", params.rooms);
  }

  if (params.baths !== undefined && params.baths !== "") {
    queryParams.append("baths", params.baths);
  }

  if (params.land_size !== undefined && params.land_size !== "") {
    queryParams.append("land_size", params.land_size);
  }

  if (params.land_unit !== undefined && params.land_unit !== "") {
    queryParams.append("land_unit", params.land_unit);
  }

  if (params.house_size !== undefined && params.house_size !== "") {
    queryParams.append("house_size", params.house_size);
  }

  if (params.house_unit !== undefined && params.house_unit !== "") {
    queryParams.append("house_unit", params.house_unit);
  }

  if (params.parking_size !== undefined && params.parking_size !== "") {
    queryParams.append("parking_size", params.parking_size);
  }

  if (params.parking_unit !== undefined && params.parking_unit !== "") {
    queryParams.append("parking_unit", params.parking_unit);
  }

  if (params.order_by !== undefined && params.order_by !== "") {
    queryParams.append("order_by", params.order_by);
  }

  return queryParams.toString();
}
