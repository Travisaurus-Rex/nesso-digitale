import React, { useMemo, useState } from "react";
import PairingList from "./components/pairing-list/PairingList";
import FilterPanel from "./components/filter-panel/FilterPanel";
import { pairings as initialPairings } from "./data/pairings";
import { WineType, FoodType, Region, type Pairing } from "./types";
import "./App.css";

const App: React.FC = () => {
  const [pairings] = useState<Pairing[]>(initialPairings);

  const [selectedWineTypes, setSelectedWineTypes] = useState<WineType[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<Region[]>([]);
  const [selectedFoodTypes, setSelectedFoodTypes] = useState<FoodType[]>([]);

  const filteredPairings = useMemo(() => {
    return pairings.filter((p) => {
      const wineMatch =
        selectedWineTypes.length === 0 ||
        selectedWineTypes.includes(p.wineType);

      const regionMatch =
        selectedRegions.length === 0 || selectedRegions.includes(p.region);

      const foodMatch =
        selectedFoodTypes.length === 0 ||
        selectedFoodTypes.includes(p.foodType);

      return wineMatch && regionMatch && foodMatch;
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

      <PairingList pairings={filteredPairings} />
    </div>
  );
};

export default App;
