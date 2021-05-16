import { useState, useEffect } from "react";
import axios from "axios";

import Loading from "../components/Loading";
import ComicCard from "../components/ComicCard";
import SearchComics from "../components/SearchComics";

const AllComics = ({ serverUrl, userToken, userId, search, setSearch }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const [favComicsDB, setFavComicsDB] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      let response;
      if (search) {
        response = await axios.get(
          `${serverUrl}/comics/?skip=${skip}/?title=${search}`
        );
      } else {
        response = await axios.get(`${serverUrl}/comics/?skip=${skip}`);
      }
      setData(response.data);

      const responseFav = await axios.get(
        `${serverUrl}/user/favoritelists/${userId}`,
        { headers: { authorization: `Bearer ${userToken}` } }
      );
      setFavComicsDB(responseFav.data.favoriteListComics);
      setIsLoading(false);
    };
    fetchData();
  }, [serverUrl, skip, search, userId, userToken]);

  const handleClickNextPage = () => {
    setSkip(skip + 100);
  };
  const handleClickPreviousPage = () => {
    setSkip(skip - 100);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <main className="container comics-list">
      <h1>Les comics de l'Univers Marvel</h1>
      <SearchComics search={search} setSearch={setSearch} />
      <div>
        {data.results.map((comic) => {
          return (
            <ComicCard
              key={comic._id}
              comicInfo={comic}
              serverUrl={serverUrl}
              userId={userId}
              userToken={userToken}
              favComicsDB={favComicsDB}
              setFavComicsDB={setFavComicsDB}
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

export default AllComics;
