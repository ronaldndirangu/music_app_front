import React from 'react';
import albumImg from '../../assets/album.jpg';
import './index.scss';
import Button from '../Button';

const Album = ({ id, title, artist, addItemToCart }) => {
  return (
    <div className="album-card">
      <img src={albumImg} alt="Album" style={{ width: "190px", height: "150px"}}></img>
      <div className="album-card__name">
        <div className="album-card__title">
          {title}
        </div>
        <div>
          <Button 
            label="Add to cart" 
            icon={<i className="fas fa-plus-circle"></i>}
            action={() => addItemToCart({ item: title, itemId: id, type: 'album' })}
          />
        </div>
      </div>
    </div>
  );
}

export default Album;
