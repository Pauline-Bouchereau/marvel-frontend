import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import containers & components
import Header from "./components/Header";
import Home from "./containers/Home";
import AllCharacters from "./containers/AllCharacters";
import AllComics from "./containers/AllComics";
import Character from "./containers/Character";
import Favorites from "./containers/Favorites";
import Footer from "./components/Footer";

function App() {
  // To go from dev mode to live mode : change value of serverUrl :
  // Local server : "http://localhost:3001"
  // Heroku server : "https://marvel-backend-pb.herokuapp.com/"
  const serverUrl = "http://localhost:3001";

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/characters">
          <AllCharacters serverUrl={serverUrl} />
        </Route>
        <Route path="/comics">
          <AllComics />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/character/:id">
          <Character serverUrl={serverUrl} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
