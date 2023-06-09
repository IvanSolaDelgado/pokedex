//import { ReactComponent as Pokemon } from "./ui/_images/pokemon/bulbasur.svg";
import bulbasur from "./ui/_images/pokemon/bulbasur.svg";
import bascula from "./ui/_images/iconos/bascula.svg";
import regla from "./ui/_images/iconos/regla.svg";

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

export default function Pokemon({ pokemon }) {
  console.log(pokemon);
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
          <img src={pokemon.src} className="card__pictures" />

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
