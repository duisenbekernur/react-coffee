import React, { useState } from "react";

export default function Categories({ activeCategory, setActiveCategory }) {
  const categories = [
    "Все",
    "Напитки",
    "Десерт",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((item, i) => (
          <li
            key={i}
            onClick={() => setActiveCategory(i)}
            className={activeCategory === i ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
