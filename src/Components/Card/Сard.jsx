import React from "react";
import { useCart } from "react-use-cart";


export const Card = (props) => {
  const { addItem } = useCart()
  return (
    <>
      <div className="item">
        <img src={props.img} className="img" />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <b>{props.price}$</b>
        <div className="add-to-card" onClick={()=> addItem(props.item)}>+</div>
      </div>
      
    </>
  );
}

