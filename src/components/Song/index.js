import React from 'react';
import songImg from '../../assets/music.png';
import './index.scss';
import Button from '../Button';

const Song = ({ id, title, artist, addItemToCart }) => {
  return (
    <div className="song-card">
      <img src={songImg} alt="song" style={{ width: "100px", height: "50px"}}></img>
      <div className="song-card__name">
        {title}
      </div>
      <div className="song-card__btn">
        <Button 
          label="Add to cart" 
          icon={<i className="fas fa-plus-circle"></i>} 
          action={() => addItemToCart({ item: title, itemId: id, type: 'song' })}
        />
      </div>
    </div>
  );
}

export default Song;
