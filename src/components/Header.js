import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logoMarvel from "../assets/img/marvel-logo.png";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={logoMarvel} alt="Logo Marvel" />
        </Link>
        <nav>
          <Link to="/characters">
            <button>Personnages</button>
          </Link>
          <Link to="/comics">
            <button>Comics</button>
          </Link>
          <Link to="/favorites">
            <button>Favoris</button>
          </Link>
        </nav>
        <Link>
          <FontAwesomeIcon icon="user-circle" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
