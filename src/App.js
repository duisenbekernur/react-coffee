import React, { useState, useEffect, createContext } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./scss/app.scss";

//  COMPONENTS
import Header from "./components/Header";

//PAGES
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { SignPage } from "./pages/SignPage";
import { Register } from "./pages/Register";
import { Voiti } from "./pages/Voiti";
import { Pay } from "./pages/Pay";
import { Kassir } from "./pages/Kassir";
import { Admin } from "./pages/Admin";

// context
export const SearchContext = createContext();
export const CartContext = createContext();

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [isLogined, setIsLogined] = useState(false);

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <CartContext.Provider>
        <div className="wrapper">
          {( window.location.pathname === '/home' || window.location.pathname === '/cart')  && <Header />}
          <div className="content">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route
                path="cart"
                element={<Cart setIsLogined={setIsLogined} />}
              />
            </Routes>
          </div>
        </div>
        <>
          <Routes>
            <Route path="/sign" element={<SignPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/voiti" element={<Voiti />} />
            <Route path="/user-pay" element={<Pay />}/>
            <Route path="/kassir" element={<Kassir />}/>
            <Route path="/admin" element={<Admin />}/>
          </Routes>
        </>
      </CartContext.Provider>
    </SearchContext.Provider>
  );
}

export default App;
