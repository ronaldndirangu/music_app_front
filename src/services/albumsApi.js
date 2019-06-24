import axios from 'axios';

const apiUrl = 'http://localhost:8000/api/v1'

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
