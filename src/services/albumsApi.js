import axios from 'axios';

const apiUrl = process.env.REACT_APP_APIURL;

export const getAlbums = () => {
  return axios({
    method: 'get',
    url: `${apiUrl}/albums`
  })
}

export const getAlbum= (id) => {
  return axios({
    method: 'get',
    url: `${apiUrl}/albums/${id}`
  })
}
