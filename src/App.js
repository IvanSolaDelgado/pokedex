import "./ui/_styles/reset.css";
import "./ui/_styles/reboot.css";
import "./styles.css";
import Pokemon from "./Pokemon";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
</style>;

/*
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
*/
export default function App({}) {
  const [pokemons, setPokemons] = React.useState([]);
  const getPokemon = async (pokemonUrl) => {
    const pokemonResponse = await axios.get(pokemonUrl);
    console.log(pokemonResponse.data);

    const pokemonData = pokemonResponse.data;
    return {
      name: pokemonData.name,
      id: pokemonData.id,
      height: pokemonData.height,
      weight: pokemonData.weight,
      types: pokemonData.types.map((type) => type.type.name),
      src: pokemonData.sprites.other.dream_world.front_default,
    };
  };
  const getPokemons = async () => {
    const pokemonsResponse = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=10"
    );
    console.log(pokemonsResponse.data);
    const pokemonsUrls = pokemonsResponse.data.results.map(
      (pokemon) => pokemon.url
    );
    console.log(pokemonsUrls);

    const pokemonsData = await Promise.all(
      pokemonsUrls.map(async (pokemonUrl) => await getPokemon(pokemonUrl))
    );
    setPokemons(pokemonsData);
  };

  React.useEffect(() => {
    getPokemons();
  }, []);
  return pokemons.map((pokemon) => {
    return <Pokemon pokemon={pokemon} />;
  });
}
