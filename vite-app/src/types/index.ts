export enum WineType {
  Red = "Red",
  White = "White",
  Sparkling = "Sparkling",
  Sweet = "Sweet",
}

export enum FoodType {
  Meat = "Meat",
  Seafood = "Seafood",
  Dessert = "Dessert",
}

export interface Pairing {
  id: number;
  wine: string;
  wineType: WineType;
  region: string;
  food: string;
  foodType: FoodType;
  rating: number;
  image: string;
  description: string;
}
