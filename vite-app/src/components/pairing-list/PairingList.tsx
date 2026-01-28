import React from "react";
import type { Pairing } from "../../types";
import "./PairingList.css";

interface PairingListProps {
  pairings: Pairing[];
}

const PairingList: React.FC<PairingListProps> = ({ pairings }) => {
  if (pairings.length === 0) {
    return <div className="empty-state">No pairings match your filters.</div>;
  }

  return (
    <div className="pairing-list">
      {pairings.map((p) => (
        <div key={p.id} className="pairing-card">
          <div className="image-container">
            <img src={p.image} alt={p.wine} className="pairing-image" />
          </div>
          <div className="card-content">
            <h3>{p.wine}</h3>
            <p>{p.food}</p>
            <p>{p.region}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PairingList;
