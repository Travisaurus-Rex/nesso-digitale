import type { Pairing } from "../../types";
import "./PairingCard.css";

type PairingCardProps = {
  pairing: Pairing;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
};

export default function PairingCard({
  pairing,
  isFavorite,
  onToggleFavorite,
}: PairingCardProps) {
  return (
    <div className="pairing-card">
      <div className="image-container">
        <img src={pairing.image} alt={pairing.wine} className="pairing-image" />
      </div>
      <div className="card-content">
        <button
          className={`favorite-button ${isFavorite ? "active" : ""}`}
          onClick={() => onToggleFavorite(pairing.id)}
          aria-label="Toggle favorite"
        >
          ★
        </button>
        <h3>{pairing.wine}</h3>
        <p>{pairing.food}</p>
        <p>{pairing.region}</p>
      </div>
    </div>
  );
}
