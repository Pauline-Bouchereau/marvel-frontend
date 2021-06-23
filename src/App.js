import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

// Import containers & components
import Header from "./components/Header";
import Home from "./containers/Home";
import AllCharacters from "./containers/AllCharacters";
import AllComics from "./containers/AllComics";
import Character from "./containers/Character";
import Favorites from "./containers/Favorites";
import Footer from "./components/Footer";
import Page404 from "./containers/Page404";
import LoginSignUp from "./containers/Login-SignUp";

// Icons with FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHeart,
  faUserCircle,
  faBookOpen,
  faMask,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
library.add(faHeart, faUserCircle, faBookOpen, faMask, faEye, faEyeSlash);

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const [userId, setUserId] = useState(Cookies.get("userId") || null);
  const [search, setSearch] = useState("");

  // To go from dev mode to live mode --> change the serverUrl :
  // Local server : "http://localhost:3001"
  // Heroku server : "https://marvel-backend-pb.herokuapp.com"
  const serverUrl = "https://marvel-backend-pb.herokuapp.com";

  // Set token in Cookies
  const setUser = (token, id) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 7 });
      Cookies.set("userId", id, { expires: 7 });
      setUserToken(token);
      setUserId(id);
    } else {
      Cookies.remove("userToken");
      Cookies.remove("userId");
      setUserToken(null);
      setUserId(null);
    }
  };

  return (
    <Router>
      <Header userToken={userToken} setUser={setUser} />
      <Switch>
        <Route path="/characters">
          <AllCharacters
            serverUrl={serverUrl}
            userToken={userToken}
            userId={userId}
          />
        </Route>
        <Route path="/comics">
          <AllComics
            serverUrl={serverUrl}
            userToken={userToken}
            userId={userId}
            search={search}
            setSearch={setSearch}
          />
        </Route>
        <Route path="/favorites">
          <Favorites
            userToken={userToken}
            serverUrl={serverUrl}
            userId={userId}
          />
        </Route>
        <Route path="/character/:id">
          <Character
            serverUrl={serverUrl}
            userToken={userToken}
            userId={userId}
          />
        </Route>
        <Route path="/login-signup">
          <LoginSignUp
            serverUrl={serverUrl}
            userToken={userToken}
            setUser={setUser}
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
