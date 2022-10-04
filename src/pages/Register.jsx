import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  const [usersList, setUsersList] = useState([]);
  const [nickValue, setNickValue] = useState("");
  const [passValue, setPassValue] = useState("");

  function registerUser() {
    axios.post("https://631d745ccc652771a485e43e.mockapi.io/users", {
      nick: nickValue,
      password: passValue,
      isAdmin: false,
      isKassir: false,
    });
  }

  return (
    <div>
      <div className="wrapper">
        <div className="back">
          <Link to="/sign">{"<"}</Link>
        </div>
        <div className="register-page">
          <h6>Регистрация</h6>
          <input
            onChange={(e) => setNickValue(e.target.value)}
            type="text"
            placeholder="Никнейм"
            value={nickValue}
          />
          <input type="text" placeholder="Номер" />
          <input
            onChange={(e) => setPassValue(e.target.value)}
            type="password"
            placeholder="Пароль"
            value={passValue}
          />
          <input
            onChange={(e) => setPassValue(e.target.value)}
            type="password"
            placeholder="Подтвердите пароль"
            value={passValue}
          />
          <button onClick={registerUser}>Регистрация</button>
        </div>
      </div>
    </div>
  );
};
