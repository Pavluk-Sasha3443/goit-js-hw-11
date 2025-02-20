const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '46935717-685ea9342bebfa50d29cf3184';

export default function fetchData(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  });
}
