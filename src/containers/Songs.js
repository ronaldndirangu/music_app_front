import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchSongs } from '../redux/actions/songActions';

const Songs = ({ fetchSongs, songs }) => {
  console.log(songs)
  useEffect(() => {
    fetchSongs();
  }, [fetchSongs]);
  return (
    <React.Fragment>
      <div>Songs</div>
      <hr/>
      {
        songs && songs.map(song => <div key={song.id}>{song.title}</div>)
      }
    </React.Fragment>
  )
}

const mapStateToProps = ({ songsReducer }) => ({
  songs: songsReducer.songs
})

const mapDispatchToProps = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs())
})

export default connect(mapStateToProps, mapDispatchToProps)(Songs);