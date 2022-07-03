export const API_BASE = import.meta.env.VITE_API_BASE;
export const API_TOKEN = import.meta.env.VITE_API_TOKEN;

const RequisitionToApi = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const RespJson = await req.json();
  return RespJson;
};

export default {
  DatabaseNetflix: async () => {
    return [
      {
        type: "originals-netflix",
        titulo: "Originais Netflix",
        items: await RequisitionToApi(
          `/discover/tv?with_network=123&language=pt-BR&api_key=${API_TOKEN}`
        ),
      },
      {
        type: "trending",
        titulo: "Recomendados para você",
        items: await RequisitionToApi(
          `/trending/all/week?language=pt-BR&api_key=${API_TOKEN}`
        ),
      },
      {
        type: "toprated",
        titulo: "Em alta",
        items: await RequisitionToApi(
          `/movie/top_rated?language=pt-BR&api_key=${API_TOKEN}`
        ),
      },
      {
        type: "action",
        titulo: "Ação",
        items: await RequisitionToApi(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_TOKEN}`
        ),
      },
      {
        type: "comedy",
        titulo: "Comédia",
        items: await RequisitionToApi(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_TOKEN}`
        ),
      },
      {
        type: "horror",
        titulo: "Terror",
        items: await RequisitionToApi(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_TOKEN}`
        ),
      },
      {
        type: "romance",
        titulo: "Romance",
        items: await RequisitionToApi(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_TOKEN}`
        ),
      },
      {
        type: "documentaries",
        titulo: "Documentários",
        items: await RequisitionToApi(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_TOKEN}`
        ),
      },
    ];
  },
  getMovieInfo: async (movieId, type)=>{
    let info={};

    if(movieId){
      switch (type) {
        case 'movie':
          info= await RequisitionToApi(`/movie/${movieId}?language=pt-BR&api_key=${API_TOKEN}`);
          break;
        case 'tv':
          info= await RequisitionToApi(`/tv/${movieId}?language=pt-BR&api_key=${API_TOKEN}`);
          break
      }
    }
    return info
  }
};
