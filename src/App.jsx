import { useEffect, useState } from "react";
import tmdbDatabase from "./Tmdb-Api/tmdbDatabase";

//components
import { GlobalStyle } from "./style/globalStyle";
import { Header } from "./components/header";
import { FeatureMovie } from "./components/FeaturedMovie";
import { ListOfilms } from "./components/ListFilms";
import { Footer } from "./components/Footer";

function App() {
  const [Movielist, setMovielist] = useState([]);
  const [featuredData, setfeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      //pegando todas as listas de filmes.
      let netflixRepositories = await tmdbDatabase.DatabaseNetflix();
      setMovielist(netflixRepositories);

      //pegando o filme em destaque netflix
      let originalsNetflix = netflixRepositories.filter(
        (repo) => repo.type === "originals-netflix"
      );
      //sorteando o filme em destaque
      let randomChosen = Math.floor(
        Math.random() * (originalsNetflix[0].items.results.length - 1)
      );
      let TheChosen = originalsNetflix[0].items.results[randomChosen];
      let ChosenInfo = await tmdbDatabase.getMovieInfo(TheChosen.id, "tv");
      setfeaturedData(ChosenInfo);
    };
    loadAll();
  }, []);

  useEffect(() => {
    const scrollEvent = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener("scroll", scrollEvent);
    return () => {
      window.removeEventListener("scrool", scrollEvent);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      
      <Header blackHeader={blackHeader} />

      {featuredData && <FeatureMovie item={featuredData} />}

      <div className="films--section">
        <div className="lists--Films">
          {Movielist.map((item, key) => {
            return (
              <div className="listFilm--item">
                <ListOfilms
                  title={item.titulo}
                  listOfilms={item.items}
                  key={key}
                />
              </div>
            );
          })}
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default App;
