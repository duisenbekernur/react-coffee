import React, { useState, useContext } from "react";

// styles
import styles from "./Search.module.scss";

// context
import { SearchContext } from "../../App";


export default function Search() {
  const { searchValue, setSearchValue } = useContext(SearchContext);

  return (
    <div className={styles.root}>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        placeholder="Введит название"
      />
      {searchValue.length > 0 ? (
        <img
          onClick={() => setSearchValue("")}
          src="/img/delete.png"
          alt="Delete"
        />
      ) : (
        ""
      )}
    </div>
  );
}
