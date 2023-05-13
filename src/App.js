import "./ui/_styles/reset.css";
import "./ui/_styles/reboot.css";
import "./styles.css";
import { ReactComponent as Pokemon } from "./ui/_images/pokemon/bulbasur.svg";
//import bulbasur from "./ui/_images/pokemon/bulbasur.svg";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
</style>;
export default function App() {
  //console.log("IMAGEN: ", pokemon2);
  return (
    <div className="App">
      <div className="card">
        <section className="card__pokemonIdentity">
          <h1 className="card__pokemonIdentity__name">Bulbasur</h1>
          <h2 className="card__pokemonIdentity__index">#001</h2>
          <div className="card__pokemonIdentity__pictures">
            <Pokemon />
          </div>
        </section>
        <section className="pokemonDescription">
          <artcile className="pokemonStats">
            <div className="pokemonTypes">
              <span className="grassType">Grass</span>
              <span className="poisonType">Poison</span>
            </div>
            <span className="about">About</span>
            <div className="pokemonMeasurments">
              <div className="pokemonWeigth">
                <img className="iconWeight" src="#"></img>
                <span className="pokemonWeight">6.9 kg</span>
                <span className="pokemonTitleWeight">Weight</span>
              </div>
              <div className="pokemonHeight">
                <img className="iconHeight" src="#"></img>
                <span className="pokemonHeight">0.7 m</span>
                <span className="pokemonTitleHeight">Height</span>
              </div>
            </div>
            <footer className="description">
              There is a plant seed on its back right from the day this Pokémon
              is born.
            </footer>
          </artcile>
        </section>
      </div>
    </div>
  );
}
