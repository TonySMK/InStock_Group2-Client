import "./InventoryListStyles.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import chevronRightIcon from "../../Assets/Icons/chevron_right-24px.svg";

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
      let thelist = res.data;
      setCompState(false);
      renderList(res.data);
    });
  }

  function deleteButtonHandler(number) {
    console.log(number);
    axios
      .delete(`http://localhost:8080/api/inventories/${number}`)
      .then((res) => {
        fetch();
      });
  }

  useEffect(() => {
    fetch();
  }, []);

  function renderList(list) {
    const therender = list.map((row) => (
      <section className="row" key={row.id.toString()}>
        <div className="row__left">
          <button className="row__left__item">
            <div className="itemname">{row.item_name}</div>
            <img src={chevronRightIcon} alt="Chevron Right Icon" />
          </button>
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
          <button
            className="row__bottom__deleteitem"
            onClick={() => deleteButtonHandler(row.id)}
          >
            delete button
          </button>
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
