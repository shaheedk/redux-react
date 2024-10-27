import React, { useState } from "react";
import "./ProductList.css";
import Products from "../../api/Products.json";
import BeforeCart from "./cartButton/BeforeCart";
import AfterCart from "./cartButton/AfterCart";

export default function ProductList() {
  const [count, setCount] = useState(0);
  const addToCart = () => {
    setCount(1);
  };
  console.log(count);
  
  return (
    <section className="container">
   {Products?.map((product, key) => (
        <div className="product-container" key={key}>
          <img src={product?.image} alt="" />
          <h3>{product?.title}</h3>
          <BeforeCart addToCart={addToCart} />
          <AfterCart />
        </div>
      ))}
    </section>
  );
}
