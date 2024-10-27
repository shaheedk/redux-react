import React from 'react';
import './cartButtons.css';
function AfterCart() {
  return (
    <div className="after-cart">
      <button className="cart-counter-button" style={{color:'black',marginRight:3}}>1</button>
      <button className="cart-counter-button">- </button>
    </div>
  );
}
export default AfterCart;
