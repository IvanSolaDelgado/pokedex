import "./ui/_styles/reset.css";
import "./ui/_styles/reboot.css";
import "./styles.css";
//import { ReactComponent as Pokemon } from "./ui/_images/pokemon/bulbasur.svg";
import bulbasur from "./ui/_images/pokemon/bulbasur.svg";
import bascula from "./ui/_images/iconos/bascula.svg";
import regla from "./ui/_images/iconos/regla.svg";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
</style>;

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

const Chip = ({ type }) => {
  const styles = {
    backgroundColor: `var(--color-${type})`,
  };

  return (
    <span className="chip" style={styles}>
      {type}
    </span>
  );
};

export default function Pokemon() {
  const pokemonWeight = pokemon.weight + " kg";
  const pokemonHeight = pokemon.height + " m";
  const pokemonTypes = pokemon.types.map((type) => {
    return <Chip type={type} />;
  });
  const pokemonDescription = pokemon.description;
  return (
    <div className="App">
      <section className="card">
        <div className="card__pokemonIdentity">
          <h1 className="card__name">{pokemon.name}</h1>
          <h2 className="card__index">#{pokemon.id}</h2>
        </div>

        <div className="card__pokemonDescription">
          <img src={bulbasur} className="card__pictures" />

          <article className="card__stats">
            <div className="card__types">{pokemonTypes}</div>
            <span className="card__about">About</span>

            <div className="card__measurments">
              <div className="card__weight">
                <div className="iconWeight">
                  <img className="card__weightIcon" src={bascula}></img>
                  <span className="card__weightValue measurments">
                    {pokemonWeight}
                  </span>
                </div>
                <span className="card__weightTitle measurmentsTitle">
                  Weight
                </span>
              </div>
              <div className="card__height">
                <div className="iconHeight">
                  <img className="card__heightIcon" src={regla}></img>
                  <span className="card__heightValue measurments">
                    {pokemonHeight}
                  </span>
                </div>
                <span className="card__heightTitle measurmentsTitle">
                  Height
                </span>
              </div>
            </div>
            <footer className="card__description">{pokemonDescription}</footer>
          </article>
        </div>
      </section>
    </div>
  );
}
