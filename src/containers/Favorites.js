import { Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import CharacterFavorite from "../components/CharacterFavorite";
import ComicsFavorite from "../components/ComicsFavorite";
import Loading from "../components/Loading";

const Favorites = ({ serverUrl, userId, userToken }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${serverUrl}/user/favoritelists/${userId}`,
        {
          headers: { authorization: `Bearer ${userToken}` },
        }
      );
      setData(response.data);
      console.log(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [serverUrl, userId, userToken]);

  return (
    <div>
      {!userToken && <Redirect push to="/login-signup" />}
      {isLoading ? (
        <Loading />
      ) : (
        <main>
          <h1>Vos favoris de l'Univers Marvel</h1>
          <h3>Vos personnages préférés</h3>
          {data.favoriteListCharacter.length === 0 ? (
            <p>
              Tu n'as aucun personnage préféré 😞, clique sur le ❤️ de tes héros
              préférés pour les ajouter à ta liste de favoris !
            </p>
          ) : (
            data.favoriteListCharacter.map((character) => {
              return (
                <CharacterFavorite
                  key={character}
                  id={character}
                  serverUrl={serverUrl}
                />
              );
            })
          )}
          <h3>Vos comics préférés</h3>
          {data.favoriteListComics.length === 0 ? (
            <p>
              Tu n'as aucun comics préféré 😞, clique sur le ❤️ de tes titres
              préférés pour les ajouter à ta liste de favoris !
            </p>
          ) : (
            data.favoriteListComics.map((comic) => {
              return (
                <ComicsFavorite key={comic} id={comic} serverUrl={serverUrl} />
              );
            })
          )}
        </main>
      )}
    </div>
  );
};

export default Favorites;
