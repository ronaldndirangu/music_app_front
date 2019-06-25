import { 
  ADD_TO_CART_REQUEST, 
  ADD_TO_CART_SUCCESS, 
  ADD_TO_CART_FAILURE, 
  GET_CART_REQUEST, 
  GET_CART_SUCCESS, 
  GET_CART_FAILURE
} from './types'
import { getCart, addItemToCart } from '../../services/cartApi';

export const fetchCartItems = () => dispatch => {
  dispatch({ type: GET_CART_REQUEST });
  getCart()
    .then(res => dispatch({ type: GET_CART_SUCCESS, cart: res.data.cart }))
    .catch(err => dispatch({ type: GET_CART_FAILURE, error: err.response.data}))
}

export const addItem = ({ item, itemId, type }) => dispatch => {
  dispatch({ type: ADD_TO_CART_REQUEST});
  addItemToCart({ item, itemId, type })
    .then(res => dispatch({ type: ADD_TO_CART_SUCCESS, cart: res.data.cart }))
    .catch(err => dispatch({ type: ADD_TO_CART_FAILURE, error: err.response.data}))
}