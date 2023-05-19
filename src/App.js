import "./ui/_styles/reset.css";
import "./ui/_styles/reboot.css";
import "./styles.css";
import Pokemon from "./Pokemon";
import axios from "axios";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
</style>;

const pokemons = [
  {
    id: "001",
    name: "Bulbasaur",
    height: 4.3,
    weight: 6.5,
    types: ["grass", "poison"],
    src: "https://...",
    description:
      "There is a plant seed on its back right from the day this Pokémon is born.",
  },
];

// axios
axios.get("https://pokeapi.co/api/v2/pokemon?limit=10").then(
  (response) => {
    axios.get(response.data.results[1].url).then(
      (response) => {
        console.log(response); // response.data ya es un JSON
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);

export default function App({}) {
  return pokemons.map((pokemon) => {
    return <Pokemon pokemon={pokemon} />;
  });
}
