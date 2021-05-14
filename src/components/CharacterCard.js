import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const CharacterCard = ({ characterInfo, favoriteList, setFavoriteList }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const history = useHistory();

  const handleClickIcon = () => {
    const newFavoriteList = [...favoriteList];
    if (!isFavorite) {
      newFavoriteList.push({ characterId: characterInfo._id, comicId: null });
    }
    setFavoriteList(newFavoriteList);
    console.log(newFavoriteList);
    setIsFavorite(!isFavorite);
  };

  const handleClickCard = () => {
    history.push(`/character/${characterInfo._id}`);
  };

  return (
    <div className="character-card">
      <h3 onClick={handleClickCard}>{characterInfo.name}</h3>
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
      </div>
      <p onClick={handleClickCard}>{characterInfo.description}</p>
    </div>
  );
};

export default CharacterCard;
