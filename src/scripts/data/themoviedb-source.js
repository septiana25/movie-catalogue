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

  static async movieDetail(id) {
    const response = await fetch(API_ENDPOINT.movieDetail(id));
    const responseJson = await response.json();
    return responseJson;
  }
}

export default MovieDBSource;
