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

export enum Region {
  Tuscany = "Tuscany",
  Piemonte = "Piemonte",
  Veneto = "Veneto",
  Sicilia = "Sicilia",
  Lombardia = "Lombardia",
  EmiliaRomagna = "Emilia-Romagna",
  Marche = "Marche",
  Campania = "Campania",
  Liguria = "Liguria",
}

export interface Pairing {
  id: number;
  wine: string;
  wineType: WineType;
  region: Region;
  food: string;
  foodType: FoodType;
  rating: number;
  image: string;
  description: string;
}
