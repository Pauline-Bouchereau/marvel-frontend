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
import { faHeart } from "@fortawesome/free-solid-svg-icons";
library.add(faHeart);

function App() {
  const [favoriteList, setFavoriteList] = useState([
    { characterId: "test", comicId: null },
  ]);

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
            favoriteList={favoriteList}
            setFavoriteList={setFavoriteList}
          />
        </Route>
        <Route path="/comics">
          <AllComics
            serverUrl={serverUrl}
            favoriteList={favoriteList}
            setFavoriteList={setFavoriteList}
          />
        </Route>
        <Route path="/favorites">
          <Favorites favoriteList={favoriteList} />
        </Route>
        <Route path="/character/:id">
          <Character
            serverUrl={serverUrl}
            favoriteList={favoriteList}
            setFavoriteList={setFavoriteList}
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
