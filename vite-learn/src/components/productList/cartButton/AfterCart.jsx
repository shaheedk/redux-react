import React from 'react';
import './cartButtons.css';
function AfterCart() {
  return (
    <div className="after-cart">
      <button className="cart-counter-button" >+</button>
      <button className="cart-counter-button">- </button>
    </div>
  );
}
export default AfterCart;
