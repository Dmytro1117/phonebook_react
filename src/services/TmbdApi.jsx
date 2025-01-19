import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '4202ba49f9ca3f0cb877db41381d2d2b';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

export const fetchTrailer = async movieId => {
  try {
    const config = {
      url: `movie/${movieId}/videos`,
    };
    const { data } = await axios(config, movieId);

    return data;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
};

export const fetchTrending = async page => {
  try {
    const config = {
      url: `trending/movie/day`,
      params: {
        page,
      },
    };
    const { data } = await axios(config, page);
    return data;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
};

export const fetchSearchByKeyword = async (query, page) => {
  try {
    const config = {
      url: `search/movie`,
      params: {
        query,
        page: 1,
      },
    };
    const { data } = await axios(config, query, page);
    return data.results;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
};

export const fetchMovieDetails = async movieId => {
  try {
    const config = {
      url: `movie/${movieId}`,
    };
    const { data } = await axios(config, movieId);
    return data;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
};

export const fetchActors = async movieId => {
  try {
    const config = {
      url: `movie/${movieId}/credits`,
    };
    const { data } = await axios(config, movieId);
    return data.cast;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
};

export const fetchReviews = async movieId => {
  try {
    const config = {
      url: `movie/${movieId}/reviews`,
    };
    const { data } = await axios(config, movieId);
    return data.results;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
};
