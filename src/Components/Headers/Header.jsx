import React from 'react'
import { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { Cart } from '../Cart/Cart';


export const Header = () => {
  let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
      <div>
        <span className="logo">House Staff</span>
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />

        {cartOpen && <div className="shop-cart">
        <Cart />
        {/* <h1>Kairat</h1> */}
        </div>}
      </div>
      <div className="presentation"></div>
    </header>
  );
}


