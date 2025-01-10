import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

axios.defaults.params = {
  key: '31420131-aff65dfb3f4bd8a8d020782c7',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
  order: 'latest',
  safesearch: true,
};

export const getImages = async (query, page) => {
  const response = await axios.get(`?q=${query}&page=${page}`);
  return response.data;
};
