import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState, useEffect } from "react";

const ComicCard = ({
  comicInfo,
  serverUrl,
  userId,
  userToken,
  favComicsDB,
  setFavComicsDB,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Check if comic is already in Fav list
  const index = favComicsDB.indexOf(comicInfo._id);
  // if yes, set isFavorite to true so the heart icon will be red
  useEffect(() => {
    if (index !== -1) {
      setIsFavorite(true);
    }
  }, [index]);

  const handleClickIcon = async () => {
    const newFavComicsDB = [...favComicsDB];

    if (index === -1) {
      setIsFavorite(true);
      newFavComicsDB.push(comicInfo._id);
    } else {
      setIsFavorite(false);
      newFavComicsDB.splice(index, 1);
    }
    setFavComicsDB(newFavComicsDB);

    const favListStr = newFavComicsDB.join("**");

    await axios.put(
      `${serverUrl}/user/favoritecomiclist/update/${userId}`,
      {
        favoriteListComics: favListStr,
      },
      { headers: { authorization: `Bearer ${userToken}` } }
    );
  };

  return (
    <div className="comic-card">
      <div>
        <img
          src={`${comicInfo.thumbnail.path}.${comicInfo.thumbnail.extension}`}
          alt={comicInfo.title}
        />
        <div
          onClick={handleClickIcon}
          className={isFavorite ? "favorite" : "not-favorite"}
        >
          <FontAwesomeIcon icon="heart" />
        </div>
      </div>
      <h3>{comicInfo.title}</h3>
      <p>{comicInfo.description}</p>
    </div>
  );
};

export default ComicCard;
