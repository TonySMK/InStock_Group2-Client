import React from "react";
import "./Header.scss";
import InStockLogo from "../../Assets/Logo/InStock-Logo_2x.png";
import { useNavigate, useLocation } from "react-router";

function Header() {
  const navigate = useNavigate();
  const location =useLocation();
  const currentPage = location.pathname;

  let warehousesButtonClass = 'header__nav-warehouses';
  let inventoryButtonClass = 'header__nav-inventory';

  // Setting button classes based on the current page reference
  if (currentPage === '/warehouses') {
    warehousesButtonClass = 'header__nav-warehouses--active';
  } else if (currentPage === '/') {
    inventoryButtonClass = 'header__nav-inventory--active';
  }

  return (
    <>
      <section className="header">
        <div className="header__container">
          <img className="header__logo" src={InStockLogo}></img>
          <div className="header__button-container">
            <button
              className={warehousesButtonClass}
              onClick={() => navigate("/warehouses")}
            >
              Warehouses
            </button>
            <button
              className={inventoryButtonClass}
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
