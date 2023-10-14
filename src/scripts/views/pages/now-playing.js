import MovieDBSource from '../../data/themoviedb-source';

const NowPlaying = {
  async render() {
    return `
        <h2>Now Playing</h2>
    `;
  },

  async afterRender() {
    const movies = await MovieDBSource.nowPlayingMovies();
    console.log(movies);
  },
};

export default NowPlaying;
