import { GET_CART_REQUEST, GET_CART_SUCCESS } from '../actions/types';

const initialState = {
  cart: null,
  fetching: false
}

const cartReducer = (state=initialState, action) => {
  switch (action.type) {
    case GET_CART_REQUEST:
      return {
        ...state,
        fetching: true
      }
    case GET_CART_SUCCESS:
      return {
        ...state,
        cart: action.cart
      }
    default:
      return state;
  }
}

export default cartReducer;
