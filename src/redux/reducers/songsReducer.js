import { GET_SONGS_REQUEST, GET_SONGS_SUCCESS } from '../actions/types';

const initialState = {
  songs: [],
  fetching: false
}

const songsReducer = (state=initialState, action) => {
  switch (action.type) {
    case GET_SONGS_REQUEST:
      return {
        ...state,
        fetching: true,
        songs: false
      }
    case GET_SONGS_SUCCESS:
      return {
        ...state,
        fetching: true,
        songs: action.songs
      }
    default: 
      return state;
  }
}

export default songsReducer;