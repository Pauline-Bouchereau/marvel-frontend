import { useState, useEffect } from "react";
import axios from "axios";

import Loading from "../components/Loading";
import ComicCard from "../components/ComicCard";

const AllComics = ({ serverUrl }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${serverUrl}/comics`);
      setData(response.data);
      console.log(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [serverUrl]);
  return isLoading ? (
    <Loading />
  ) : (
    <main>
      <h1>Les comics de l'Univers Marvel</h1>
      {data.results.map((comic) => {
        return <ComicCard key={comic._id} comicInfo={comic} />;
      })}
    </main>
  );
};

export default AllComics;
