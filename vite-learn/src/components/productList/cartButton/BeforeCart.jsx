import React from 'react';
import './cartButtons.css';

function BeforeCart({addToCarts}) {
  return (
    <div className="before-cart">
    <button className="add-cart-button" onClick={addToCarts} >
       Add to cart
    </button>
 </div>
  );
}

export default BeforeCart;
