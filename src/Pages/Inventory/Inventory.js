import React from "react";
import "./Inventory.scss";
import InventoryListComp from "../../Components/InventoryListComp/InventoryListComp";
import searchIcon from "../../Assets/Icons/search-24px.svg";
import axios from "axios";
import { useState, useEffect } from "react";

function Inventory() {
  const [compstate, setCompState] = useState(true);
  const [invenstoryList, setInventoryList] = useState("");

  function fetch() {
    axios.get("http://localhost:8080/api/inventories").then((res) => {
      //   console.log(res.data);
      let thelist = res.data;
      setCompState(false);
      setInventoryList(res.data);
    });
  }

  function deleteButtonHandler(number) {
    // console.log(number);
    axios
      .delete(`http://localhost:8080/api/inventories/${number}`)
      .then((res) => {
        fetch();
      });
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      {compstate ? (
        <section>Loading Page...</section>
      ) : (
        <>
          <div className="parentwrapper">
            <div className="parentwrapper__top">
              <h2 className="title">Inventory</h2>
              <form className="form">
                <div className="searchbarwrapper">
                  <input className="searchbarinput" placeholder="Search..." />
                  <button className="searchbarbutton">
                    <img
                      className="searchbarbutton__icon"
                      src={searchIcon}
                      alt="search icon"
                    />
                  </button>
                </div>
              </form>

              <button className="addinventory">+ Add New Item</button>
            </div>

            <div id="parentwrapper__bottomlist">
              <InventoryListComp
                object={invenstoryList}
                deleteButtonHandler={deleteButtonHandler}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Inventory;
