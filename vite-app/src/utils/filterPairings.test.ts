import { describe, it, expect } from "vitest";
import { FoodType, Region, WineType, type Pairing } from "../types";
import { filterPairings } from "./filterPairings";

const mockPairings: Pairing[] = [
  {
    id: 1,
    wine: "Chianti",
    wineType: WineType.Red,
    region: Region.Tuscany,
    food: "Steak",
    foodType: FoodType.Meat,
    rating: 4.5,
    image: "",
    description: "",
  },
  {
    id: 2,
    wine: "Prosecco",
    wineType: WineType.Sparkling,
    region: Region.Veneto,
    food: "Shrimp",
    foodType: FoodType.Seafood,
    rating: 4.0,
    image: "",
    description: "",
  },
  {
    id: 3,
    wine: "Parmigiano Wine",
    wineType: WineType.White,
    region: Region.EmiliaRomagna,
    food: "Parmigiano Reggiano",
    foodType: FoodType.Meat,
    rating: 4.7,
    image: "",
    description: "",
  },
];

describe("filterPairings", () => {
  it("returns all pairings when no filters are applied", () => {
    const result = filterPairings(mockPairings, {
      wineTypes: [],
      regions: [],
      foodTypes: [],
    });

    expect(result).toHaveLength(3);
  });

  it("filters by wine type", () => {
    const result = filterPairings(mockPairings, {
      wineTypes: [WineType.Red],
      regions: [],
      foodTypes: [],
    });

    expect(result).toHaveLength(1);
    expect(result[0].wine).toBe("Chianti");
  });

  it("filters by region", () => {
    const result = filterPairings(mockPairings, {
      wineTypes: [],
      regions: [Region.Veneto],
      foodTypes: [],
    });

    expect(result).toHaveLength(1);
    expect(result[0].wine).toBe("Prosecco");
  });

  it("filters by multiple criteria", () => {
    const result = filterPairings(mockPairings, {
      wineTypes: [WineType.White],
      regions: [Region.EmiliaRomagna],
      foodTypes: [FoodType.Meat],
    });

    expect(result).toHaveLength(1);
    expect(result[0].wine).toBe("Parmigiano Wine");
  });

  it("returns an empty array when no pairings match", () => {
    const result = filterPairings(mockPairings, {
      wineTypes: [WineType.Red],
      regions: [Region.Liguria],
      foodTypes: [FoodType.Seafood],
    });

    expect(result).toEqual([]);
  });
});
