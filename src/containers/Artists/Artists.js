import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchArtists } from '../../redux/actions/artistActions';
import Artist from '../../components/Artist';
import './artists.scss';

const Artists = ({ fetchArtists, artists }) => {
  useEffect(() => {
    fetchArtists();
  }, [fetchArtists]);
  return (
    <div className="genres">
      {
        artists && artists.map(artist => 
        <div key={artist.id}>
          <Artist name={artist.name} />
        </div>)
      }
    </div>
  )
}

const mapStateToProps = ({ artistsReducer }) => ({
  artists: artistsReducer.artists
})

const mapDispatchToProps = dispatch => ({
  fetchArtists: () => dispatch(fetchArtists())
})

export default connect(mapStateToProps, mapDispatchToProps)(Artists);