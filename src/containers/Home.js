import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchGenres } from '../redux/actions/genreActions';

const Home = ({ fetchGenres, genres }) => {
  console.log(genres)
  useEffect(() => {
    fetchGenres();
  }, [fetchGenres]);
  return (
    <React.Fragment>
      <div>Genres</div>
      <hr/>
      {
        genres && genres.map(genre => <div key={genre.id}>{genre.name}</div>)
      }
    </React.Fragment>
  )
}

const mapStateToProps = ({ genresReducer }) => ({
  genres: genresReducer.genres
})

const mapDispatchToProps = dispatch => ({
  fetchGenres: () => dispatch(fetchGenres())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);