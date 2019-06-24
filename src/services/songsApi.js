import axios from 'axios';

const apiUrl = 'http://localhost:8000/api/v1'

export const getSongs = () => {
  return axios({
    method: 'get',
    url: `${apiUrl}/songs`
  })
}

export const getSong= (id) => {
  return axios({
    method: 'get',
    url: `${apiUrl}/songs/${id}`
  })
}
