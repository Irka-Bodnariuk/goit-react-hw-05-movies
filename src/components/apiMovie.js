import axios from 'axios';

const APIKEY = 'b2757639556b9386e0e3f80509eb3f2a';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(`trending/movie/day?api_key=${APIKEY}`);
  return data;
};
export const fetchSearchMovie = async query => {
  const { data } = await axios.get(
    `search/movie?api_key=${APIKEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return data;
};

export const fetchMovieId = async id => {
  const { data } = await axios.get(
    `movie/${id}?api_key=${APIKEY}&language=en-US`
  );
  return data;
};

export const fetchCastMovie = async id => {
  const { data } = await axios.get(
    `movie/${id}/credits?api_key=${APIKEY}&language=en-US`
  );
  return data;
};

export const fetchReviewsMovie = async id => {
  const { data } = await axios.get(
    `movie/${id}/reviews?api_key=${APIKEY}&language=en-US&page=1`
  );
  return data;
};
