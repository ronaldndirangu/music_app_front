import axios from 'axios';

const apiUrl = process.env.REACT_APP_APIURL;

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
