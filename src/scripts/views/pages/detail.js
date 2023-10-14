import MovieDBSource from '../../data/themoviedb-source';
import UrlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    return `
        <h2>Now Detail</h2>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movies = await MovieDBSource.detailMovie(url);
    console.log(movies);
  },
};

export default Detail;
