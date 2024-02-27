import React from "react";
import "./Inventory.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import InventoryListComp from "../../Components/InventoryListComp/InventoryListComp";
import searchIcon from "../../Assets/Icons/search-24px.svg";
function Inventory() {
  const [compstate, setCompState] = useState(true);
  const [invenstoryList, setInventoryList] = useState("");
  const [renderedList, setRenderedList] = useState("");

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
            <div className="top">
              <div className="top__title">Inventory</div>
              <form className="top__form">
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

              <div className="top__addinventory"></div>
            </div>

            <div id="bottomlist">{renderedList}</div>
            <InventoryListComp
              object={invenstoryList}
              deleteButtonHandler={deleteButtonHandler}
            />
          </div>
        </>
      )}
    </>
  );
}

export default Inventory;
