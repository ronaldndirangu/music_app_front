import React from 'react';
import genreImg from '../../assets/music-left.png';
import './index.scss';

const Genre = ({ name }) => {
  return (
    <div className="genre-card">
      <img src={genreImg} alt="Genre" style={{ width: "150px", height: "150px"}}></img>
      <div className="genre-card__name">
        {name}
      </div>
    </div>
  );
}

export default Genre;
