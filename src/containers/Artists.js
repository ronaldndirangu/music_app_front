import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchArtists } from '../redux/actions/artistActions';

const Artists = ({ fetchArtists, artists }) => {
  console.log(artists)
  useEffect(() => {
    fetchArtists();
  }, [fetchArtists]);
  return (
    <React.Fragment>
      <div>Artists</div>
      <hr/>
      {
        artists && artists.map(artist => <div key={artist.id}>{artist.name}</div>)
      }
    </React.Fragment>
  )
}

const mapStateToProps = ({ artistsReducer }) => ({
  artists: artistsReducer.artists
})

const mapDispatchToProps = dispatch => ({
  fetchArtists: () => dispatch(fetchArtists())
})

export default connect(mapStateToProps, mapDispatchToProps)(Artists);