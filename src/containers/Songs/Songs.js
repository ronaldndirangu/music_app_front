import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchSongs } from '../../redux/actions/songActions';
import Song from '../../components/Song';
import './songs.scss';
import { addItem } from '../../redux/actions/cartActions';

const Songs = ({ fetchSongs, songs, addItemToCart }) => {
  useEffect(() => {
    fetchSongs();
  }, [fetchSongs]);
  return (
    <div className="songs">
      {
        songs && songs.map(song => 
        <div key={song.id}>
          <Song id={song.id} title={song.title} artist={'Jane Doe'} addItemToCart={addItemToCart} />
        </div>)
      }
    </div>
  )
}

const mapStateToProps = ({ songsReducer }) => ({
  songs: songsReducer.songs
})

const mapDispatchToProps = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs()),
  addItemToCart: ({ item, itemId, type }) => dispatch(addItem({ item, itemId, type }))
})

export default connect(mapStateToProps, mapDispatchToProps)(Songs);