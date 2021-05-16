import { useState, useEffect } from "react";
import axios from "axios";

import Loading from "../components/Loading";
import CharacterCard from "../components/CharacterCard";
import SearchCharacters from "../components/SearchCharacters";

const AllCharacters = ({ serverUrl, userId, userToken }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const [favCharDB, setFavCharDB] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${serverUrl}/characters/?skip=${skip}`);
      setData(response.data);

      const responseFav = await axios.get(
        `${serverUrl}/user/favoritelists/${userId}`,
        { headers: { authorization: `Bearer ${userToken}` } }
      );
      setFavCharDB(responseFav.data.favoriteListCharacter);

      setIsLoading(false);
    };
    fetchData();
  }, [serverUrl, skip, userId, userToken]);

  const handleClickNextPage = () => {
    setSkip(skip + 100);
  };
  const handleClickPreviousPage = () => {
    setSkip(skip - 100);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <main className="container characters-list">
      <h1>LES PERSONNAGES MARVEL</h1>
      <SearchCharacters />
      <div>
        {data.results.map((character) => {
          return (
            <CharacterCard
              key={character._id}
              characterInfo={character}
              userId={userId}
              userToken={userToken}
              favCharDB={favCharDB}
              setFavCharDB={setFavCharDB}
              serverUrl={serverUrl}
            />
          );
        })}
      </div>
      <div>
        <button
          onClick={handleClickPreviousPage}
          disabled={skip === 0}
          className={skip === 0 ? "disabled" : ""}
        >
          Page précédente
        </button>
        <button
          onClick={handleClickNextPage}
          disabled={Math.ceil(data.count / 100) < skip / 100}
        >
          Page suivante
        </button>
      </div>
    </main>
  );
};

export default AllCharacters;
