import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import axios from "axios";

const CharacterCard = ({
  characterInfo,
  serverUrl,
  userId,
  userToken,
  favCharDB,
  setFavCharDB,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  let index;
  if (favCharDB.length > 0) {
    // Check if character is already in Fav list
    index = favCharDB.indexOf(characterInfo._id);
  }

  // if yes, set isFavorite to true so the heart icon will be red
  useEffect(() => {
    if (index !== -1) {
      setIsFavorite(true);
    }
  }, [index]);

  const handleClickIcon = async () => {
    if (favCharDB.length > 0) {
      const newFavCharDB = [...favCharDB];

      if (index === -1) {
        setIsFavorite(true);
        newFavCharDB.push(characterInfo._id);
      } else {
        setIsFavorite(false);
        newFavCharDB.splice(index, 1);
      }
      setFavCharDB(newFavCharDB);
      console.log(newFavCharDB);
      const favListStr = newFavCharDB.join("**");

      await axios.put(
        `${serverUrl}/user/favoritecharacterlist/update/${userId}`,
        {
          favoriteListCharacters: favListStr,
        },
        { headers: { authorization: `Bearer ${userToken}` } }
      );
    } else {
      setErrorMessage(
        "Pour ajouter un personnage en favoris, crée-toi un compte !"
      );
    }
  };

  const handleClickCard = () => {
    history.push(`/character/${characterInfo._id}`);
  };

  return (
    <div className="character-card">
      {errorMessage && <p>{errorMessage}</p>}
      <div>
        <img
          src={`${characterInfo.thumbnail.path}.${characterInfo.thumbnail.extension}`}
          alt={characterInfo.name}
          onClick={handleClickCard}
        />
        <div
          onClick={handleClickIcon}
          className={isFavorite ? "favorite" : "not-favorite"}
        >
          <FontAwesomeIcon icon="heart" />
        </div>
        <h3 onClick={handleClickCard}>{characterInfo.name}</h3>
      </div>
      <p onClick={handleClickCard}>{characterInfo.description}</p>
    </div>
  );
};

export default CharacterCard;
