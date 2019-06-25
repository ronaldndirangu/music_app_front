import { combineReducers } from 'redux';
import genresReducer from './genreReducer'
import artistsReducer from './artistsReducer'
import albumsReducer from './albumsReducer'
import songsReducer from './songsReducer'
import cartReducer from './cartReducer'

const rootReducer = combineReducers({
  artistsReducer,
  genresReducer,
  albumsReducer,
  songsReducer,
  cartReducer
});

export default rootReducer;