import React, { useState, useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";

export const SignPage = () => {
  return (
    <div className="wrapper">
      <div className="back">
        <Link to="/cart">{"<"}</Link>
      </div>
      <ul className="sign-page">
        <li>
          <Link to="/voiti">Войти</Link>
        </li>
        <li>
          <Link to="/register">Регистрация</Link>
        </li>
      </ul>
    </div>
  );
};
