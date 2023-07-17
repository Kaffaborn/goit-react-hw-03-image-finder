const BASE_URL = 'https://pixabay.com/api/';
const PUBLIC_KEY = '35073807-6e0c78c0f1d8a4d5139e72432';

export function getImage({ query, page = 1 }) {
  return fetch(
    `${BASE_URL}?q=${query}&page=${page}&key=${PUBLIC_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => response.json());
}
