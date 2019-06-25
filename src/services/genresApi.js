import axios from 'axios';

const apiUrl = process.env.REACT_APP_APIURL;

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
