import React, { useState } from "react";
import "./SearchBar.scss";

import search from "../../Assets/Icons/search-24px.svg";
const SearchBar = () => {
  const [active, setActive] = useState(false);

  const handleIconClick = (e) => {
    e.preventDefault();
    setActive(!active);
  };

  return (
    <div className="search">
      <form className="search-bar">
        <input
          type="text"
          className={active ? "input active" : "input"}
          placeholder="Search..."
        />
        <button className="btn" type="submit" onClick={handleIconClick}>
          <img src={search} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
