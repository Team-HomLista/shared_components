import { BuildingType } from "@/types/enums/building-type";

export const BUILDING_TYPE_ES = {
  [BuildingType.HOUSE]: "Casa",
  [BuildingType.DEPARTMENT]: "Departamento",
  [BuildingType.COMMERCIAL]: "Comercial",
  [BuildingType.LAND]: "Terreno",
  [BuildingType.PENTHOUSE]: "Penthouse",
  [BuildingType.STUDIO]: "Estudio"
} as const satisfies Record<BuildingType, string>;
