import loading from "../assets/img/loading.svg";

const Loading = () => {
  return (
    <main className="loading">
      <img src={loading} alt="Gif de chargement" />
      <p>Un petit peu de patience, ton contenu arrive !</p>
    </main>
  );
};

export default Loading;
