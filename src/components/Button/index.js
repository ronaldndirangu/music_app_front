import React from 'react';
import './index.scss';

const Button = ({ action, label, icon }) => {
  return (
    <button onClick={action} className="btn-primary">{icon}{label}</button>
  )
}

export default Button;
