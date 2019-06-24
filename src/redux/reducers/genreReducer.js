import { GET_GENRES_REQUEST, GET_GENRES_SUCCESS } from '../actions/types';

const initialState = {
  genres: [],
  fetching: false
}

const genresReducer = (state=initialState, action) => {
  switch (action.type) {
    case GET_GENRES_REQUEST:
      return {
        ...state,
        fetching: true,
        genres: false
      }
    case GET_GENRES_SUCCESS:
      return {
        ...state,
        fetching: true,
        genres: action.genres
      }
    default: 
      return state;
  }
}

export default genresReducer;