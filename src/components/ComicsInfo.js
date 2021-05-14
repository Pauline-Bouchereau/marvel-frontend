const ComicsInfo = ({ comicTitle, comicPicture }) => {
  return (
    <div className="comic-info">
      <img
        src={`${comicPicture.path}.${comicPicture.extension}`}
        alt={comicTitle}
      />
      <h4>{comicTitle}</h4>
    </div>
  );
};

export default ComicsInfo;
