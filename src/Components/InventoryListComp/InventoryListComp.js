import "./InventoryListStyles.scss";
import axios from "axios";
import { useState, useEffect } from "react";

function InventoryListComp({ object }) {
  const [compstate, setCompState] = useState(true);
  const [invenstoryList, setInventoryList] = useState("");
  const [renderedList, setRenderedList] = useState("");
  // {object} is the array of objects that the this component will map
  // and render outbottom__right

  // remember to stop propigation for the delete and edit buttons
  function fetch() {
    axios.get("http://localhost:8080/api/inventories").then((res) => {
      console.log(res.data);
      setInventoryList(res.data);
      renderList();
    });
  }

  useEffect(() => {
    fetch();
  }, []);

  function renderList() {
    // let somelist = theList;
    const therender = invenstoryList.map((row) => (
      <section className="row" key={row.id.toString()}>
        <div className="row__left">
          <button className="row__left__item">{row.item_name}</button>
          <div className="row__left__category">{row.category}</div>
        </div>

        <div className="row__middle">
          <div className="row__middle__status">{row.status}</div>
          <div className="row__middle__quantity">{row.quantity}</div>
          <div className="row__middle__warehouselocation">
            {row.warehouse_name}
          </div>
        </div>

        <div className="row__bottom">
          <button className="row__bottom__deleteitem">delete button</button>
          <button className="row__bottom__edititem">edit button</button>
        </div>
      </section>
    ));
    setCompState(false);
    setRenderedList(therender);
  }

  return (
    <>
      {compstate ? (
        <section>Loading Data...</section>
      ) : (
        <div className="parentwrapper">
          <div className="top">
            <div className="top__title"></div>
            <div className="top__searchbar"></div>
            <div className="top__addinventory"></div>
          </div>

          <div id="bottomlist">{renderedList}</div>
        </div>
      )}
    </>
  );
}

export default InventoryListComp;
