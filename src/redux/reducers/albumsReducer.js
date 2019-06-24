import { GET_ALBUMS_REQUEST, GET_ALBUMS_SUCCESS} from '../actions/types';

const initialState = {
  albums: [],
  fetching: false
}

const albumsReducer = (state=initialState, action) => {
  switch (action.type) {
    case GET_ALBUMS_REQUEST:
      return {
        ...state,
        fetching: true,
        albums: false
      }
    case GET_ALBUMS_SUCCESS:
      return {
        ...state,
        fetching: true,
        albums: action.albums
      }
    default: 
      return state;
  }
}

export default albumsReducer;