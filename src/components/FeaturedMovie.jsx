import { FeatureMovieMain } from "../style/FeatureMovieStyle";

export const FeatureMovie = ({ item }) => {
  const dateOfilm= new Date(item.first_air_date);

  const genres= []
  for(let i in item.genres){
    genres.push(item.genres[i].name)
  }

  return (
    <FeatureMovieMain>
      <div className="featured" style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`

      }}>
        <div className="degrade--horizontal">
          <div className="degrade--vertical">
            <div className="featured--name">
              {item.name}
            </div>
            <div className="featured--info">
                 <div className="featured--points">{item.vote_average} pontos</div>
                 <div className="featured--year">{dateOfilm.getFullYear()}</div>
                 <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
            </div>
            <div className="featured--description">
              {item.overview}
            </div>
            <div className="featured--buttons">
              <button className="buttonWatch"> <a >► Assistir</a> </button>
              <button className="buttonMyList"> <a>+ minha lista</a> </button>
            </div>
            <div className="featured--genres">
              <strong>Gêneros:</strong> {genres.join(', ')}
            </div>
          </div> 
        </div>
      </div>
    </FeatureMovieMain>
  );
};
