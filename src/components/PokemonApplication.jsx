import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

export default function PokemonApplication() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState(null);

  // Hämta alla 151 Pokémon
  useEffect(() => {
    async function fetchAllPokemon() {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const data = await res.json();
      console.log("Alla Pokémon hämtade:", data.results);

      setPokemonList(data.results);
    }

    fetchAllPokemon();
  }, []);

  async function handleFetchPokemon() {
    if (!selectedPokemon) return;

    console.log("Du valde:", selectedPokemon);

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`);
    const data = await res.json();

    console.log("Hämtad Pokémon-data:", data);

    setPokemonData(data);
  }

 return (
  <div className="poke-app">
    <h2>Välj en Pokémon</h2>

    <select
      className="poke-select"
      value={selectedPokemon}
      onChange={(e) => setSelectedPokemon(e.target.value)}
    >
      <option value="">-- Välj --</option>
      {pokemonList.map((p) => (
        <option key={p.name} value={p.name}>
          {p.name}
        </option>
      ))}
    </select>

    <button className="poke-btn" onClick={handleFetchPokemon}>
      Hämta Pokémon
    </button>

    {pokemonData && <Pokemon data={pokemonData} />}
  </div>
);  

}
