import React from 'react';
import './cartButtons.css';

function BeforeCart({addToCart}) {

  return (
    <div className="before-cart">
    <button className="add-cart-button" onClick={addToCart} >
       Add to cart
    </button>
 </div>
  );
}

export default BeforeCart;
