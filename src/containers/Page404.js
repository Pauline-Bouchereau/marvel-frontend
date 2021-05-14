import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <main className="page404 container">
      <div>
        <iframe
          src="https://gfycat.com/ifr/AccurateUnfinishedBergerpicard"
          frameborder="0"
          scrolling="no"
          allowfullscreen
          width="500"
          height="526"
          title="Lost"
        ></iframe>
        <p>
          <a href="https://gfycat.com/discover/interesting-gifs">
            from Interesting GIFs
          </a>
        </p>
      </div>
      <div>
        <h1>Erreur 404 !</h1>
        <p>Désolé, la page que vous cherchez n'existe pas !</p>
        <p>Profitez-en pour en savoir plus sur mon parcours : </p>
        <a href="https://www.linkedin.com/in/pbouchereau/" target="blank">
          <img
            src="https://res.cloudinary.com/pauline-cloudinary/image/upload/v1620920650/usefull/logo-linkedin_vo1qf3.png"
            alt="Logo LinkedIn"
          />
        </a>
        <p>ou découvrir mes autres projets :</p>
        <a href="https://github.com/Pauline-Bouchereau" target="blank">
          <img
            src="https://res.cloudinary.com/pauline-cloudinary/image/upload/v1620920830/usefull/GitHub-Mark-Light-64px_w820io.png"
            alt="Logo Github"
          />
        </a>
        <p>
          Mais si vous voulez plus de Marvel, c'est par ici que ça se passe !
        </p>
        <Link to="/characters">
          <button>Personnages</button>
        </Link>
        <Link to="/comics">
          <button>Comics</button>
        </Link>
      </div>
    </main>
  );
};

export default Page404;
