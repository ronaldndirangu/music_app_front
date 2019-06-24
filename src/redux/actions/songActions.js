import { GET_SONGS_REQUEST, GET_SONGS_FAILURE, GET_SONGS_SUCCESS} from './types';
import { getSongs } from '../../services/songsApi';

export const fetchSongs = () => dispatch => {
  dispatch({ type: GET_SONGS_REQUEST});
  getSongs()
    .then(res => dispatch({ type: GET_SONGS_SUCCESS, songs: res.data.songs }))
    .catch(err => dispatch({ type: GET_SONGS_FAILURE, error: err.response.data}))
};
