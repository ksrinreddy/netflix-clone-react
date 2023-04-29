const api_key = "d2d2639c72f8b5bcf285fedb106a6c3f";

// requests
const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`,
  requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`,
};

export default requests;
