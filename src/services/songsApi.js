import axios from 'axios';

const apiUrl = process.env.REACT_APP_APIURL;

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
