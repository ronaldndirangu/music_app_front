import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchGenres } from '../../redux/actions/genreActions';
import Genre from '../../components/Genre';
import './home.scss';

const Home = ({ fetchGenres, genres }) => {
  useEffect(() => {
    fetchGenres();
  }, [fetchGenres]);
  return (
    <div className="genres">
      {
        genres && genres.map(genre => 
        <div key={genre.id}>
          <Genre name={genre.name} />
        </div>)
      }
    </div>
  )
}

const mapStateToProps = ({ genresReducer }) => ({
  genres: genresReducer.genres
})

const mapDispatchToProps = dispatch => ({
  fetchGenres: () => dispatch(fetchGenres())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);