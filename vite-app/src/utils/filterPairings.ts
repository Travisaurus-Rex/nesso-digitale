import type { FoodType, Pairing, Region, WineType } from "../types";

interface FilterOptions {
  wineTypes: WineType[];
  regions: Region[];
  foodTypes: FoodType[];
}

export function filterPairings(
  pairings: Pairing[],
  filters: FilterOptions,
): Pairing[] {
  const { wineTypes, regions, foodTypes } = filters;

  return pairings.filter((p) => {
    const wineMatch = wineTypes.length === 0 || wineTypes.includes(p.wineType);

    const regionMatch = regions.length === 0 || regions.includes(p.region);

    const foodMatch = foodTypes.length === 0 || foodTypes.includes(p.foodType);

    return wineMatch && regionMatch && foodMatch;
  });
}
