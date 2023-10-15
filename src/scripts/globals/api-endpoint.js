import CONFIG from './config';

const API_ENDPOINT = {
  nowPlaying: `${CONFIG.BASE_URL}movie/now_playing?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
  upcoming: `${CONFIG.BASE_URL}movie/upcoming?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
  movieDetail: (id) => `${CONFIG.BASE_URL}movie/${id}?api_key=${CONFIG.KEY}`,
  search: (query) => `${CONFIG.BASE_URL}search/movie?query=${query}`,
};

export default API_ENDPOINT;
