import React from "react";
import "./Header.scss";
import InStockLogo from "../../Assets/Logo/InStock-Logo_2x.png";

function Header() {
const navigateTo = (path) => {
  window.location.href = path;
}
  return (
    <>
      <section className="header">
        <div className="header__container">
          <img className="header__logo" src={InStockLogo}></img>
          <div className="header__button-container">
            <button className="header__nav-warehouses" onClick={() => navigateTo("/warehouses")}>Warehouses</button>
            <button className="header__nav-inventory" onClick={() => navigateTo("/")}>Inventory</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
