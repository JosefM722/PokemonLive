import { useState } from "react";
import "./App.css";

import PokemonApplication from "./components/PokemonApplication";


export default function App() {
  const [showApp, setShowApp] = useState(false);

  return (
    <div className="center-wrapper">
      
      {!showApp ? (
        <button onClick={() => setShowApp(true)}>
          Start Pokemon App
        </button>
      ) : (
        <PokemonApplication/>
      )}
      
    </div>
  );
}
