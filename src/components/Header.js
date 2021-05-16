import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logoMarvel from "../assets/img/marvel-logo.png";

const Header = ({ userToken, setUser }) => {
  const handleClickLogout = () => {
    setUser(null);
  };
  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={logoMarvel} alt="Logo Marvel" />
        </Link>
        <nav>
          <Link to="/characters">
            <button>
              {" "}
              <FontAwesomeIcon icon="mask" className="icon" />
              Personnages
            </button>
          </Link>
          <Link to="/comics">
            <button>
              {" "}
              <FontAwesomeIcon icon="book-open" className="icon" />
              Comics
            </button>
          </Link>
          <Link to="/favorites">
            <button>
              <FontAwesomeIcon icon="heart" className="icon" /> Favoris
            </button>
          </Link>
        </nav>
        {!userToken ? (
          <Link to="/login-signup">
            <button className="login">
              <FontAwesomeIcon icon="user-circle" className="icon" /> S'inscrire
              | Se connecter
            </button>
          </Link>
        ) : (
          <button onClick={handleClickLogout}>Se déconnecter</button>
        )}
      </div>
    </header>
  );
};

export default Header;
