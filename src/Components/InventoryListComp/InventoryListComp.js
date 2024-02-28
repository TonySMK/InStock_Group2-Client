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
  //FIXME: missing dependencies, but adding it cause another error

  function renderList(someobject) {
    // console.log(someobject);
    const therender = someobject.map((row) => (
      <section className="row" key={row.id.toString()}>
        <div className="row__first">
          <div className="infopanelone">
            <div className="contentpanel">
              <div className="contentpanel__name inventorylabel">
                inventory item
              </div>
              <button className="contentpanel__value inventorylabel__contentbutton">
                <div className="itembutton__name">{row.item_name}</div>
                <img
                  className="itembutton__icon"
                  src={chevronRightIcon}
                  alt="Chevron Right Icon"
                />
              </button>
            </div>
            <div className="contentpanel">
              <div className="contentpanel__name categorylabel">category</div>
              <div className="contentpanel__value categorylabel__cotent">
                {row.category}
              </div>
            </div>
          </div>

          <div className="infopaneltwo">
            <div className="contentpanel">
              <div className="contentpanel__name statuslabel">status</div>
              <div className="contentpanel__value statuslabel__content">
                {row.status}
              </div>
            </div>
            <div className="contentpanel">
              <div className="contentpanel__name quantitylabel">qty</div>
              <div className="contentpanel__value quantitylabel__content">
                {row.quantity}
              </div>
            </div>
            <div className="contentpanel">
              <div className="contentpanel__name warehouselocationlabel">
                warehouse
              </div>
              <div className="contentpanel__value warehouselocationlabel__content">
                {row.warehouse_name}
              </div>
            </div>
          </div>
        </div>

        <div className="row__second">
          <button
            className="deleteembutton modbutton"
            onClick={() => deleteButtonHandler(row.id)}
          >
            <img
              className="deleteembutton__icon"
              src={deleteIcon}
              alt="edit icon"
            />
          </button>
          <button className="edititembutton modbutton">
            <img
              className="edititembutton__icon"
              src={editIcon}
              alt="edit icon"
            />
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
