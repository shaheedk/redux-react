import React from 'react';
import './cartButtons.css';

function AfterCart() {
  return (
    <div className="after-cart">
      <button className="cart-count" style={{color:'black'}}>1</button>
      <button className="cart-counter-button">-</button>
    </div>
  );
}

export default AfterCart;
