import React from 'react';
import './ProductList.css';
import Products from '../../api/Products.json';
import BeforeCart from './cartButton/BeforeCart';
import AfterCart from './cartButton/AfterCart';

export default function ProductList() {
  return (
    <section className='product-list'>
      {Products?.map((product, key) => (
        <div className="product-container" key={key}>
          <img src={product.image} alt="" />
          <h3>{product?.title}</h3>
        </div>
      ))}
      <BeforeCart/>
      <AfterCart/>
    </section>
  );
}
