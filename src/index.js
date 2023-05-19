import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Pokemon from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const pokemon = {
  id: "001",
  name: "Bulbasaur",
  height: 4.3,
  weight: 6.5,
  types: ["grass", "poison"],
  src: "https://...",
  description:
    "There is a plant seed on its back right from the day this Pokémon is born.",
};
root.render(
  <StrictMode>
    <Pokemon pokemon={pokemon} />
  </StrictMode>
);
