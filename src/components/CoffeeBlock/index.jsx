import React, { useState, useContext } from "react";
import axios from "axios";

import { CartContext } from "../../pages/Home";

export default function coffeeBlock({
  obj,
  title,
  imageUrl,
  price,
  category,
  rating,
}) {
  function addCart() {
    axios.post("https://631d745ccc652771a485e43e.mockapi.io/cartItems", obj);
  }

  return (
    <div className="coffee-block">
      <img className="coffee-block__image" src={imageUrl} alt="coffee" />

      <div className="coffee-block__bot">
        <h4 className="coffee-block__title">{title}</h4>
        <div className="coffee-block__bottom">
          <div className="coffee-block__price">от {price} ₸</div>
          <button className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span onClick={addCart}>Добавить</span>
          </button>
        </div>
      </div>
    </div>
  );
}
