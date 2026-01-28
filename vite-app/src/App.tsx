import React, { useState } from "react";
import PairingList from "./components/pairing-list/PairingList";
import { pairings as initialPairings } from "./data/pairings";
import type { Pairing } from "./types";
import "./App.css";

const App: React.FC = () => {
  const [pairings, setPairings] = useState<Pairing[]>(initialPairings);

  return (
    <div className="app-container">
      <h1>Wine & Food Pairing Explorer</h1>
      <PairingList pairings={pairings} />
    </div>
  );
};

export default App;
