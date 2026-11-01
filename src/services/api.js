const API_KEY = "22468eedcf2c3ef8ebf6e986c7abcd93";
const BASE_URL = 'https://api.themoviedb.org/3';

async function request(path, params = {}) {
  const search = new URLSearchParams({ api_key: API_KEY, ...params });
  const response = await fetch(`${BASE_URL}${path}?${search}`);
  if (!response.ok) {
    throw new Error('Something went wrong');
  }
  return response.json();
}

export const getTrending = () => request('/trending/movie/day');
export const searchMovies = query => request('/search/movie', { query });
export const getMovieDetails = id => request(`/movie/${id}`);
export const getMovieCredits = id => request(`/movie/${id}/credits`);
export const getMovieReviews = id => request(`/movie/${id}/reviews`);
