import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Loading from "../components/Loading";
import ComicsInfo from "../components/ComicsInfo";

const Character = ({ serverUrl, favoriteList, setFavoriteList }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${serverUrl}/comics/${id}`);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id, serverUrl]);

  const handleClickIcon = () => {
    const newFavoriteList = [...favoriteList];
    if (!isFavorite) {
      newFavoriteList.push({ characterId: data._id, comicId: null });
    } else {
      const indexFavorite = newFavoriteList.indexOf({
        characterId: data._id,
        comicId: null,
      });
      console.log(indexFavorite);
      newFavoriteList.splice((indexFavorite, 1));
    }
    console.log(newFavoriteList);
    setFavoriteList(newFavoriteList);
    setIsFavorite(!isFavorite);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <main className="container character-page">
      <div>
        <img
          src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
          alt={data.name}
        />
        <div
          onClick={handleClickIcon}
          className={isFavorite ? "favorite" : "not-favorite"}
        >
          <FontAwesomeIcon icon="heart" />
        </div>
      </div>
      <div>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        {data.comics.length > 1 && <h3>Retrouvez-le dans les comics : </h3>}
        <div>
          {data.comics.map((comicInfo) => {
            return (
              <ComicsInfo
                key={comicInfo._id}
                comicTitle={comicInfo.title}
                comicPicture={comicInfo.thumbnail}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Character;
