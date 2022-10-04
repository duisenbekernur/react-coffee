import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// img
import cartImg from "../assets/img/cart.svg";
import logo from "./../assets/img/logo.webp";

// components
import Search from "./Search";

// context
import { SearchContext } from "../App";

export default function Header() {
  const { searchValue, setSearchValue } = useContext(SearchContext);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function myFetch() {
      const cartResponse = await axios.get(
        "https://631d745ccc652771a485e43e.mockapi.io/cartItems"
      );
      setCartItems(cartResponse.data);
      cartItems.forEach((elem) => (cartPrice += elem.price));
      window.scrollTo(0, 0);
    }
  }, []);

  let cartPrice = 0;

  return (
    <div className="header">
      <div className="container">
        <Link to="/home" className="header__logo">
          <img width="38" src={logo} alt="Pizza logo" />
          <div>
            <h1>ZEBRA COFFEE</h1>
            <p>самое вкусное кофе во вселенной</p>
          </div>
        </Link>

        {/* search */}

        <div className="header__cart">
          <Link to="/cart" className="button button--cart">
            <span>{cartPrice} ₸</span>
            <div className="button__delimiter"></div>
            <img src={cartImg} alt="cart" />
            <span>{cartItems.length}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
