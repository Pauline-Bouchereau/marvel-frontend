import { useState, useEffect } from "react";
import axios from "axios";

import Loading from "../components/Loading";
import CharacterCard from "../components/CharacterCard";

const AllCharacters = ({ serverUrl, favoriteList, setFavoriteList }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${serverUrl}/characters`);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [serverUrl]);

  return isLoading ? (
    <Loading />
  ) : (
    <main className="container characters-list">
      <h1>LES PERSONNAGES MARVEL</h1>
      <div>
        {data.results.map((character) => {
          return (
            <CharacterCard
              key={character._id}
              characterInfo={character}
              favoriteList={favoriteList}
              setFavoriteList={setFavoriteList}
            />
          );
        })}
      </div>
    </main>
  );
};

export default AllCharacters;
