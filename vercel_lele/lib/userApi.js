const BASE_URL = 'https://hmif.if.unram.ac.id/api/v3';
const PROJECT = 'geturgear';
const API_KEY = 'pk_geturgear_83354acb379cf0fa';

export async function userApiFetch(endpoint, options = {}) {
  const cleanEndpoint = endpoint.startsWith('/')
    ? endpoint
    : `/${endpoint}`;

  const url = `${BASE_URL}/${PROJECT}${cleanEndpoint}`;

  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-API-Key': API_KEY,
  };

  const response = await fetch(url, {
    ...options,
    headers: {
      ...headers,
      ...options.headers,
    },
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(
      data.message || `Request gagal: status ${response.status}`
    );
  }

  return data;
}