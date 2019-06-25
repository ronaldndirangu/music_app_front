import axios from 'axios';

const apiUrl = process.env.REACT_APP_APIURL;

export const getCart = () => {
  return axios({
    method: 'get',
    url: `${apiUrl}/cart`
  })
}

export const addItemToCart = ({ item, type, itemId }) => {
  return axios({
    method: 'post',
    url: `${apiUrl}/cart`,
    data: { item, type, itemId }
  })
}
