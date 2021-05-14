import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ComicCard = ({ comicInfo }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClickIcon = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="comic-card">
      <h3>{comicInfo.title}</h3>
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
      <p>{comicInfo.description}</p>
    </div>
  );
};

export default ComicCard;
