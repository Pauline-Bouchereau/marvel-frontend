import { useState } from "react";

const SearchComics = ({ search, setSearch }) => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    setSearch(text);
  };

  return (
    <form onSubmit={handleSubmit} className="search">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Cherche les comics Marvel par titre"
      />
      <input type="submit" value="Rechercher" />
    </form>
  );
};

export default SearchComics;
