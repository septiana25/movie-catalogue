import MovieDBSource from '../../data/themoviedb-source';

const Upcoming = {
  async render() {
    return `
        <h2>Now Upcoming</h2>
    `;
  },

  async afterRender() {
    const movies = await MovieDBSource.upcomingMovies();
    console.log(movies);
  },
};

export default Upcoming;
