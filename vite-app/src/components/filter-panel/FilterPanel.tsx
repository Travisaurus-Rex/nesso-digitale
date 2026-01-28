import React from "react";
import { WineType, FoodType, Region } from "../../types";
import "./FilterPanel.css";

interface FilterPanelProps {
  selectedWineTypes: WineType[];
  selectedRegions: Region[];
  selectedFoodTypes: FoodType[];
  onWineTypeChange: (values: WineType[]) => void;
  onRegionChange: (values: Region[]) => void;
  onFoodTypeChange: (values: FoodType[]) => void;
}

const toggleValue = <T,>(
  value: T,
  list: T[],
  setList: (values: T[]) => void,
) => {
  setList(
    list.includes(value) ? list.filter((v) => v !== value) : [...list, value],
  );
};

const FilterPanel: React.FC<FilterPanelProps> = ({
  selectedWineTypes,
  selectedRegions,
  selectedFoodTypes,
  onWineTypeChange,
  onRegionChange,
  onFoodTypeChange,
}) => {
  return (
    <div className="filter-panel">
      <div className="filter-group">
        <h4>Wine Type</h4>
        {Object.values(WineType).map((type) => (
          <button
            key={type}
            className={selectedWineTypes.includes(type) ? "active" : ""}
            onClick={() =>
              toggleValue(type, selectedWineTypes, onWineTypeChange)
            }
          >
            {type}
          </button>
        ))}
      </div>

      <div className="filter-group">
        <h4>Region</h4>
        {Object.values(Region).map((region) => (
          <button
            key={region}
            className={selectedRegions.includes(region) ? "active" : ""}
            onClick={() => toggleValue(region, selectedRegions, onRegionChange)}
          >
            {region}
          </button>
        ))}
      </div>

      <div className="filter-group">
        <h4>Food Type</h4>
        {Object.values(FoodType).map((food) => (
          <button
            key={food}
            className={selectedFoodTypes.includes(food) ? "active" : ""}
            onClick={() =>
              toggleValue(food, selectedFoodTypes, onFoodTypeChange)
            }
          >
            {food}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterPanel;
