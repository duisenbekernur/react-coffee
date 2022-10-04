import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";

//components
import Categories from "../components/Categories";
import CoffeeBlock from "../components/CoffeeBlock";
import Sort from "../components/Sort";
import Sceleton from "../components/CoffeeBlock/Sceleton.jsx";
import Pagination from "../components/Pagination";
import Cart from "./Cart";

//context
import { SearchContext } from "../App";

export const CartContext = createContext();

// export const CartContext = createContext();

// redux
// import { filter } from "../redux/store";

export default function Home() {
  // states
  const [coffees, setCoffees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSort, setActiveSort] = useState(0);
  const [sortType, setSortType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  // useContext
  const { searchValue, setSearchValue } = useContext(SearchContext);

  // get coffes from mockapi
  useEffect(() => {
    async function myFetch() {
      setIsLoading(true);
      const itemsResponse = await axios.get(
        `https://631d745ccc652771a485e43e.mockapi.io/coffes?page=${currentPage}&limit=8&${
          activeCategory > 0 ? `category=${activeCategory}` : ``
        }&sortBy=${sortType}&order=desc`
      );
      const cartResponse = await axios.get(
        "https://631d745ccc652771a485e43e.mockapi.io/cartItems"
      );

      setIsLoading(false);

      setCartItems(cartResponse.data);
      setCoffees(itemsResponse.data);
      window.scrollTo(0, 0);
    }

    myFetch();
  }, [activeCategory, sortType, currentPage]);

  return (
    <CartContext.Provider value={{ cartItems }}>
      <div className="container">
        <div className="content__top">
          {/* categories and sort */}
          <Categories
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          <Sort
            setSortType={setSortType}
            activeSort={activeSort}
            setActiveSort={setActiveSort}
          />
        </div>

        {/* coffees */}
        <div className="content__title">
          <h2>Все кофе</h2>
          <h2>Страница: {currentPage}</h2>
        </div>
        <div className="content__items">
          {isLoading
            ? [...new Array(6)].map((_, i) => <Sceleton key={i} />)
            : coffees
                .filter((item) =>
                  item.title.toLowerCase().includes(searchValue.toLowerCase())
                )
                .map((obj, i) => (
                  <CoffeeBlock key={obj.id} obj={obj} {...obj} />
                ))}
        </div>

        {/* // pagination */}
        <Pagination onChangePagination={(page) => setCurrentPage(page)} />
      </div>
    </CartContext.Provider>
  );
}
