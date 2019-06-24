import { GET_ARTISTS_REQUEST, GET_ARTISTS_SUCCESS, GET_ARTISTS_FAILURE } from './types';
import { getArtists } from '../../services/artistsApi';

export const fetchArtists = () => dispatch => {
  dispatch({ type: GET_ARTISTS_REQUEST });
  getArtists()
    .then(res => dispatch({ type: GET_ARTISTS_SUCCESS, artists: res.data.artists }))
    .catch(err => dispatch({ type: GET_ARTISTS_FAILURE, error: err.response.data}))
};
