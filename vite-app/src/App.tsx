import React, { useMemo, useState } from "react";
import PairingList from "./components/pairing-list/PairingList";
import FilterPanel from "./components/filter-panel/FilterPanel";
import { pairings as initialPairings } from "./data/pairings";
import { WineType, FoodType, Region, type Pairing } from "./types";
import "./App.css";
import { useFavorites } from "./hooks/useFavorites";
import { filterPairings } from "./utils/filterPairings";

const App: React.FC = () => {
  const [pairings] = useState<Pairing[]>(initialPairings);
  const { favorites, toggleFavorite } = useFavorites();

  const [selectedWineTypes, setSelectedWineTypes] = useState<WineType[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<Region[]>([]);
  const [selectedFoodTypes, setSelectedFoodTypes] = useState<FoodType[]>([]);

  const filteredPairings = useMemo(() => {
    return filterPairings(pairings, {
      wineTypes: selectedWineTypes,
      regions: selectedRegions,
      foodTypes: selectedFoodTypes,
    });
  }, [pairings, selectedWineTypes, selectedRegions, selectedFoodTypes]);

  return (
    <div className="app-container">
      <h1>Wine & Food Pairing Explorer</h1>

      <FilterPanel
        selectedWineTypes={selectedWineTypes}
        selectedRegions={selectedRegions}
        selectedFoodTypes={selectedFoodTypes}
        onWineTypeChange={setSelectedWineTypes}
        onRegionChange={setSelectedRegions}
        onFoodTypeChange={setSelectedFoodTypes}
      />

      <PairingList
        pairings={filteredPairings}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default App;
