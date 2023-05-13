import "./ui/_styles/reset.css";
import "./ui/_styles/reboot.css";
import "./styles.css";
import { ReactComponent as Pokemon } from "./ui/_images/pokemon/bulbasur.svg";
//import bulbasur from "./ui/_images/pokemon/bulbasur.svg";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
</style>;

const Chip = ({ type }) => {
  const styles = {
    backgroundColor: `var(--color${type})`,
  };

  return (
    <span className="chip" style={styles}>
      {type}
    </span>
  );
};

export default function App() {
  return (
    <div className="App">
      <div className="card">
        <section className="card__pokemonIdentity">
          <h1 className="card__name">Bulbasur</h1>
          <h2 className="card__index">#001</h2>
          <div className="card__pictures">
            <Pokemon />
          </div>
        </section>
        <section className="card__pokemonDescription">
          <artcile className="card__stats">
            <div className="card__types">
              <Chip type="Grass" />
              <Chip type="Poison" />
            </div>
            <span className="card__about">card__about</span>
            <div className="card__measurments">
              <div className="card__weight">
                <img className="card__weightIcon" src="#"></img>
                <span className="card__weightValue">6.9 kg</span>
                <span className="card__weightTitle">Weight</span>
              </div>
              <div className="card__height">
                <img className="card__heightIcon" src="#"></img>
                <span className="card__heightValue">0.7 m</span>
                <span className="card__heightTitle">Height</span>
              </div>
            </div>
            <footer className="card__description">
              There is a plant seed on its back right from the day this Pokémon
              is born.
            </footer>
          </artcile>
        </section>
      </div>
    </div>
  );
}
