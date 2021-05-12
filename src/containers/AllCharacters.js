import { useState, useEffect } from "react";
import axios from "axios";

import Loading from "../components/Loading";
import CharacterCard from "../components/CharacterCard";

const AllCharacters = ({ serverUrl }) => {
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
    <main className="characters-list container">
      <h1>Les personnages de l'Univers Marvel</h1>
      <div>
        {data.results.map((character) => {
          return (
            <CharacterCard key={character._id} characterInfo={character} />
          );
        })}
      </div>
    </main>
  );
};

export default AllCharacters;
