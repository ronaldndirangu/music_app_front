import { GET_ARTISTS_REQUEST, GET_ARTISTS_SUCCESS} from '../actions/types';

const initialState = {
  artists: [],
  fetching: false
}

const artistsReducer = (state=initialState, action) => {
  switch (action.type) {
    case GET_ARTISTS_REQUEST:
      return {
        ...state,
        fetching: true,
        artists: false
      }
    case GET_ARTISTS_SUCCESS:
      return {
        ...state,
        fetching: true,
        artists: action.artists
      }
    default: 
      return state;
  }
}

export default artistsReducer;