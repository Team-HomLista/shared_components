export enum Feature {
  Rooms = "Rooms",
  Bathrooms = "Bathrooms",
  ParkingSlots = "ParkingSlots",
  LandingSize = "LandingSize",
  ShowerHead = "ShowerHead",
}

export interface PropertyFeature {
  type: keyof typeof Feature;
  value: number | string;
}
