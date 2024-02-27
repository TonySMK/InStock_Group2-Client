import "./InventoryListStyles.scss";
import chevronRightIcon from "../../Assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../../Assets/Icons/delete_outline-24px.svg";
import editIcon from "../../Assets/Icons/edit-24px.svg";
import { useState, useEffect } from "react";

function InventoryListComp({ object, deleteButtonHandler }) {
  const [compstate, setCompState] = useState(true);
  const [renderedList, setRenderedList] = useState("");

  //   console.log(object);
  useEffect(() => {
    renderList(object);
    setCompState(false);
  }, [object]);
  //   console.log(object);

  function renderList(someobject) {
    // console.log(someobject);
    const therender = someobject.map((row) => (
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
            <img className="deleteiconimage" src={deleteIcon} alt="edit icon" />
          </button>
          <button className="row__bottom__edititem">
            <img className="editiconimage" src={editIcon} alt="edit icon" />
          </button>
        </div>
      </section>
    ));
    setRenderedList(therender);
    setCompState(false);
  }

  return (
    <>{compstate ? <section>Loading Data...</section> : <>{renderedList}</>}</>
  );
}

export default InventoryListComp;
