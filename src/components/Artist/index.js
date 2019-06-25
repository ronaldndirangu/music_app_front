import React from 'react';
import artistImg from '../../assets/artist.png';
import '../Genre/index.scss';

const Artist = ({ name }) => {
  return (
    <div className="genre-card">
      <img src={artistImg} alt="Artist" style={{ width: "150px", height: "150px"}}></img>
      <div className="genre-card__name">
        {name}
      </div>
    </div>
  );
}

export default Artist;
