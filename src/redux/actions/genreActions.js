import { GET_GENRES_REQUEST, GET_GENRES_SUCCESS, GET_GENRES_FAILURE } from './types';
import { getGenres } from '../../services/genresApi';

export const fetchGenres = () => dispatch => {
  dispatch({ type: GET_GENRES_REQUEST });
  getGenres()
    .then(res => dispatch({ type: GET_GENRES_SUCCESS, genres: res.data.genres }))
    .catch(err => dispatch({ type: GET_GENRES_FAILURE, error: err.response.data}))
};
