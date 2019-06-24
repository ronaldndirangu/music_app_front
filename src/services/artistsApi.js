import axios from 'axios';

const apiUrl = 'http://localhost:8000/api/v1'

export const getArtists = () => {
  return axios({
    method: 'get',
    url: `${apiUrl}/artists`
  })
}

export const getArtist = (id) => {
  return axios({
    method: 'get',
    url: `${apiUrl}/artists/${id}`
  })
}
