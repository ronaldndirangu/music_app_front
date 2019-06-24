import axios from 'axios';

const apiUrl = 'http://localhost:8000/api/v1'

export const getGenres = () => {
  return axios({
    method: 'get',
    url: `${apiUrl}/genres`
  })
}

export const getGenre = (id) => {
  return axios({
    method: 'get',
    url: `${apiUrl}/genres/${id}`
  })
}
