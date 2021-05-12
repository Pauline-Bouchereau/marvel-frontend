import { Link } from "react-router-dom";

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
      </div>
    </header>
  );
};

export default Header;
