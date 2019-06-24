import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchAlbums } from '../redux/actions/albumActions';

const Albums = ({ fetchAlbums, albums }) => {
  console.log(albums)
  useEffect(() => {
    fetchAlbums();
  }, [fetchAlbums]);
  return (
    <React.Fragment>
      <div>Albums</div>
      <hr/>
      {
        albums && albums.map(album => <div key={album.id}>{album.title}</div>)
      }
    </React.Fragment>
  )
}

const mapStateToProps = ({ albumsReducer }) => ({
  albums: albumsReducer.albums
})

const mapDispatchToProps = dispatch => ({
  fetchAlbums: () => dispatch(fetchAlbums())
})

export default connect(mapStateToProps, mapDispatchToProps)(Albums);