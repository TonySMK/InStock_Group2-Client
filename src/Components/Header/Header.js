import React from "react";
import "./Header.scss";
import InStockLogo from "../../Assets/Logo/InStock-Logo_2x.png";
import { useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <section className="header">
        <div className="header__container">
          <img className="header__logo" src={InStockLogo}></img>
          <div className="header__button-container">
            <button
              className="header__nav-warehouses"
              onClick={() => navigate("/warehouses")}
            >
              Warehouses
            </button>
            <button
              className="header__nav-inventory"
              onClick={() => navigate("/")}
            >
              Inventory
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
