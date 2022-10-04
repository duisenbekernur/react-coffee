import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import users from "./../assets/users.json";

export const Voiti = ({allPrice}) => {
  const [usersList, setUsersList] = useState([]);
  const [nickValue, setNickValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const [formPay, setFormPay] = useState("");
  const [toForm, setToForm] = useState(false);

  const isLogined = () => {
    usersList.forEach((item) => {
      console.log(item, "item");
      if (item.nick === nickValue) {
        if (item.password === passValue) {
          if (item.isAdmin) setFormPay("admin");
          else if (item.isKassir) setFormPay("kassir");
          else setFormPay("user-pay");
          setToForm(true);
          if (formPay === "user-pay") {
            axios.post(
              "https://631d745ccc652771a485e43e.mockapi.io/selledToday",
              { 'nick': nickValue, 'isOver': "в очереди", 'price': allPrice}
            );
          }
        }
      }
    });
  };

  useEffect(() => {
    fetch("https://631d745ccc652771a485e43e.mockapi.io/users")
      .then((res) => res.json())
      .then((res) => setUsersList(res));
  }, []);

  return (
    <div className="wrapper">
      <div className="back">
        <Link to="/sign">{"<"}</Link>
      </div>
      <div className="register-page">
        <h6>Войти</h6>
        <input
          onChange={(e) => setNickValue(e.target.value)}
          type="text"
          placeholder="Никнейм"
          value={nickValue}
        />
        <input
          onChange={(e) => setPassValue(e.target.value)}
          type="password"
          placeholder="Пароль"
          value={passValue}
        />
        <button onClick={isLogined}>
          <Link to={toForm && `/${formPay}`}>Войти</Link>
        </button>
      </div>
    </div>
  );
};
