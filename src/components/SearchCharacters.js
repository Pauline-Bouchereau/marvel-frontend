const SearchCharacters = () => {
  return (
    <form className="search">
      <input type="text" placeholder="Cherche les personnages Marvel par nom" />
      <input type="submit" value="Rechercher" />
    </form>
  );
};

export default SearchCharacters;
