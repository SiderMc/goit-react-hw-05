import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const Authorization =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWUxYTQ1NDQzYzYxNDFiMDM3YjZhZTkxMmYzYzJhZiIsIm5iZiI6MTcyNjMyNjU2OC4yNjU3NTgsInN1YiI6IjY0NjYwNTNhZDE4NTcyMDEwMTk2OTQzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p6Uwvh5RMdLU5finOyQu_FqNdpt4cVm5qBG6okvLx4Q';

export async function trendingMovies() {
  const response = await axios.get('/trending/movie/day', {
    headers: {
      Authorization: Authorization,
    },
  });
  return response.data;
}

export async function searchMovies(query, page = 1) {
  const response = await axios.get('/search/movie', {
    headers: {
      Authorization: Authorization,
    },
    params: {
      query,
      page,
    },
  });
  return response.data;
}

export async function detailsMovies(id) {
  const response = await axios.get(`/movie/${id}`, {
    headers: {
      Authorization: Authorization,
    },
  });
  return response.data;
}

export async function creditsMovies(id) {
  const response = await axios.get(`/movie/${id}/credits`, {
    headers: {
      Authorization: Authorization,
    },
  });
  return response.data;
}

export async function reviewsMovies(id) {
  const response = await axios.get(`/movie/${id}/reviews`, {
    headers: {
      Authorization: Authorization,
    },
  });
  return response.data;
}
