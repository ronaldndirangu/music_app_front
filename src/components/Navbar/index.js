import React, { useState } from 'react';
import { connect } from 'react-redux';
import './index.scss'
import { fetchCartItems } from '../../redux/actions/cartActions';
import CartItem from '../CartItem';

const Navbar = ({ cart, getCart }) => {
  const [show, setShow] = useState(false);
  console.log(cart);

  return (
    <div className="nav">
      <div>
        MusicApp
      </div>
      <div onClick={() => {
          setShow(!show);
          !show && getCart();
        }}>
        <i className="fas fa-cart-plus"></i>
        {
          show && (
            <div className="cart">
              <div className="cart-header">
                <div>Title</div>
                <div>Type</div>
              </div>
              { cart && cart.map(cartItem => (
                  <CartItem type={cartItem.type} item={cartItem.item} />
                )
              )}
            </div>  
          )
        }
      </div>
    </div>
  )
}

const mapStateToProps = ({ cartReducer }) => ({
  cart: cartReducer.cart
})

const mapDispatchToProps = dispatch => ({
  getCart: () => dispatch(fetchCartItems())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);