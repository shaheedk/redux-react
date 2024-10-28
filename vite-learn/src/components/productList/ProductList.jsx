import React, { useEffect, useState } from "react";
import "./ProductList.css";
import Products from "../../api/Products.json";
import BeforeCart from "./cartButton/BeforeCart";
import AfterCart from "./cartButton/AfterCart";

export default function ProductList() {
  const [count, setCount] = useState(0);
  const addToCart = () => {
    setCount(1);
  };
  useEffect(()=>{
    console.log('render')
    return ()=>{
      console.log('Un Mount')
    }
  },[])
  console.log(count);

  return (
    <section className="container">
   {Products?.map((product, key) => (
        <div className="product-container" key={key}>
          <img src={product?.image} alt="" />
          <h3>{product?.title}</h3>
       
        {count >0 ?   <AfterCart />: <BeforeCart addToCarts={addToCart} />}
        </div>
      ))}
    </section>
  );
}
