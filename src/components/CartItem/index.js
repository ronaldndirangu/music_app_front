import React from 'react';
import './index.scss';

const CartItem = ({ item, type }) => {
  return (
    <div className="cart-item">
      <div>
        {item}
      </div>
      <div>
        {type}
      </div>
    </div>
  )
}

export default CartItem;
