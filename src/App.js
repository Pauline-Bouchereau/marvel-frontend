import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

// Import containers & components
import Header from "./components/Header";
import Home from "./containers/Home";
import AllCharacters from "./containers/AllCharacters";
import AllComics from "./containers/AllComics";
import Character from "./containers/Character";
import Favorites from "./containers/Favorites";
import Footer from "./components/Footer";
import Page404 from "./containers/Page404";

// Icons with FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart, faUserCircle } from "@fortawesome/free-solid-svg-icons";
library.add(faHeart, faUserCircle);

function App() {
  const [favoriteListCharacter, setFavoriteListCharacter] = useState([]);
  const [favoriteListComics, setFavoriteListComics] = useState([]);

  // To go from dev mode to live mode --> change value of serverUrl :
  // Local server : "http://localhost:3001"
  // Heroku server : "https://marvel-backend-pb.herokuapp.com/"
  const serverUrl = "http://localhost:3001";

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/characters">
          <AllCharacters
            serverUrl={serverUrl}
            favoriteListCharacter={favoriteListCharacter}
            setFavoriteListCharacter={setFavoriteListCharacter}
          />
        </Route>
        <Route path="/comics">
          <AllComics
            serverUrl={serverUrl}
            favoriteListComics={favoriteListComics}
            setFavoriteListComics={setFavoriteListComics}
          />
        </Route>
        <Route path="/favorites">
          <Favorites
            favoriteListCharacter={favoriteListCharacter}
            setFavoriteListCharacter={setFavoriteListCharacter}
            favoriteListComics={favoriteListComics}
            setFavoriteListComics={setFavoriteListComics}
          />
        </Route>
        <Route path="/character/:id">
          <Character
            serverUrl={serverUrl}
            favoriteListCharacter={favoriteListCharacter}
            setFavoriteListCharacter={setFavoriteListCharacter}
          />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
