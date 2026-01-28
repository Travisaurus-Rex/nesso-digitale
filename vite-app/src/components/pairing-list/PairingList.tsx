import React from "react";
import type { Pairing } from "../../types";
import "./PairingList.css";
import PairingCard from "../pairing-card/PairingCard";

interface PairingListProps {
  pairings: Pairing[];
  favorites: number[];
  onToggleFavorite: (id: number) => void;
}

const PairingList: React.FC<PairingListProps> = ({
  pairings,
  favorites,
  onToggleFavorite,
}) => {
  if (pairings.length === 0) {
    return <div className="empty-state">No pairings match your filters.</div>;
  }

  return (
    <div className="pairing-list">
      {pairings.map((p) => (
        <PairingCard
          key={p.id}
          pairing={p}
          isFavorite={favorites.includes(p.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

export default PairingList;
