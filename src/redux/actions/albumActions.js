import { GET_ALBUMS_REQUEST, GET_ALBUMS_FAILURE, GET_ALBUMS_SUCCESS} from './types';
import { getAlbums } from '../../services/albumsApi';

export const fetchAlbums = () => dispatch => {
  dispatch({ type: GET_ALBUMS_REQUEST });
  getAlbums()
    .then(res => dispatch({ type: GET_ALBUMS_SUCCESS, albums: res.data.albums }))
    .catch(err => dispatch({ type: GET_ALBUMS_FAILURE, error: err.response.data}))
};
