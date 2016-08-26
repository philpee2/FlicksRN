import { API_KEY, BASE_DATA_URL } from './EndpointConstants';

function getUrl(endpoint) {
  return `${BASE_DATA_URL}/${endpoint}?api_key=${API_KEY}`
}

export function fetchMovies(endpoint) {
  const url = getUrl(endpoint);
  return fetch(url)
    .then(response => response.json())
    .then(moviesJson => moviesJson.results);
}
