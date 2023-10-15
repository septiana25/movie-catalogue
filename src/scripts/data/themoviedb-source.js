import API_ENDPOINT from '../globals/api-endpoint';

class MovieDBSource {
  static async nowPlayingMovies() {
    const response = await fetch(API_ENDPOINT.nowPlaying);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async upcomingMovies() {
    const response = await fetch(API_ENDPOINT.upcoming);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async movieDetail(movie) {
    const response = await fetch(API_ENDPOINT.movieDetail(movie.id));
    const responseJson = await response.json();
    return responseJson;
  }
}

export default MovieDBSource;
