import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <main className="homepage">
      <div>
        <h1>BIENVENUE DANS L'UNIVERS MARVEL !</h1>
      </div>
      <div className="container">
        <div>
          <h2>Découvrir tous les personnages</h2>
          <Link to="/characters">
            <button>Personnages</button>
          </Link>
          <p>
            Tu veux en savoir plus sur les personnages de ton univers préféré,
            c'est par ici, clique sur la vignette d'un personnage pour savoir
            dans quels comics tu peux le retrouver !
          </p>
        </div>
        <div>
          <h2>Retrouvez tous les comics</h2>
          <Link to="/comics">
            <button>Comics</button>
          </Link>
          <p>TOUS les comics Marvel sont ici !</p>
        </div>
        <div>
          <h2>Retrouver vos favoris</h2>
          <Link to="/favorites">
            <button>Favoris</button>
          </Link>
          <p>
            Crée un compte et clique sur le{" "}
            <span>
              <FontAwesomeIcon icon="heart" />
            </span>{" "}
            pour mettre un personnage ou un comic en Favoris !{" "}
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
