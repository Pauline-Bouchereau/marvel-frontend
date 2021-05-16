import { useState, useEffect } from "react";
import axios from "axios";

import Loading from "../components/Loading";

const CharacterFavorite = ({ serverUrl, id }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${serverUrl}/character/${id}`);
        setData(response.data);
        console.log(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [serverUrl]);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="character-card">
      <img
        src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
        alt={data.name}
      />
      <h3>{data.name}</h3>
    </div>
  );
};

export default CharacterFavorite;
