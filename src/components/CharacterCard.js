import { Link } from "react-router-dom";

const CharacterCard = ({ characterInfo }) => {
  return (
    <Link to={`/character/${characterInfo._id}`}>
      <div className="character-card">
        <h3>{characterInfo.name}</h3>
        <img
          src={`${characterInfo.thumbnail.path}.${characterInfo.thumbnail.extension}`}
          alt={characterInfo.name}
        />
        <p>{characterInfo.description}</p>
      </div>
    </Link>
  );
};

export default CharacterCard;
