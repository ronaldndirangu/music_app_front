import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchAlbums } from '../../redux/actions/albumActions';
import Album from '../../components/Album';
import './albums.scss';
import { addItem } from '../../redux/actions/cartActions';

const Albums = ({ fetchAlbums, albums, addItemToCart }) => {
  useEffect(() => {
    fetchAlbums();
  }, [fetchAlbums]);
  return (
    <div className="albums">
      {
        albums && albums.map(album => 
        <div key={album.id}>
          <Album id={album.id} title={album.title} artist={'John Doe'} addItemToCart={addItemToCart} />
        </div>)
      }
    </div>
  )
}

const mapStateToProps = ({ albumsReducer }) => ({
  albums: albumsReducer.albums
})

const mapDispatchToProps = dispatch => ({
  fetchAlbums: () => dispatch(fetchAlbums()),
  addItemToCart: ({ item, itemId, type }) => dispatch(addItem({ item, itemId, type }))
})

export default connect(mapStateToProps, mapDispatchToProps)(Albums);