import { combineReducers } from 'redux';
import genresReducer from './genreReducer'
import artistsReducer from './artistsReducer'
import albumsReducer from './albumsReducer'
import songsReducer from './songsReducer'

const rootReducer = combineReducers({
  artistsReducer,
  genresReducer,
  albumsReducer,
  songsReducer
});

export default rootReducer;