import "./ui/_styles/reset.css";
import "./ui/_styles/reboot.css";
import "./styles.css";
import { ReactComponent as Pokemon } from "./ui/_images/pokemon/bulbasur.svg";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
</style>;
export default function App() {
  //console.log("IMAGEN: ", pokemon2);
  return (
    <div className="App">
      <div className="card">
        <section className="pokemonCard">
          <h1 className="pokemonName">Bulbasur</h1>
          <h2 className="pokemonIndex">#001</h2>
          <div className="pokemonTypes">
            <span className="grassType">Grass</span>
            <span className="poisonType">Poison</span>
          </div>
          <article className="description">
            There is a plant seed on its back right from the day this Pokémon is
            born.
          </article>
        </section>
        <div className="pokemon">
          <Pokemon />
        </div>
        <div className="descriptionCard">Grass Poison</div>
      </div>
    </div>
  );
}
