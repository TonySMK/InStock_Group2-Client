import "./InventoryListStyles.scss";
import chevronRightIcon from "../../Assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../../Assets/Icons/delete_outline-24px.svg";
import editIcon from "../../Assets/Icons/edit-24px.svg";
import sortIcon from "../../Assets/Icons/sort-24px.svg";

import StockStatus from "../StockStatus/StockStatus";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function InventoryListComp({ object, deleteButtonHandler }) {
  const [compstate, setCompState] = useState(true);
  const [renderedList, setRenderedList] = useState("");

  console.log(window.innerWidth);
  useEffect(() => {
    renderList(object);
    setCompState(false);
  }, [object]);
  //FIXME: missing dependencies, but adding it causes another error

  function renderList(someObject) {
    const theRender = someObject.map((row) => (
      <section className="row" key={row.id.toString()}>
        <div className="row__first">
          <div className="contentpanel inventorypanel">
            <div className="contentpanel__name inventorylabel">
              inventory item
            </div>

            <Link to={`/${row.id}/details`}>
              <button className="contentpanel__value inventorylabelnamebuttonwrapper">
                <h3 className="itembutton__name">{row.item_name}</h3>
                <img
                  className="itembutton__icon"
                  src={chevronRightIcon}
                  alt="Chevron Right Icon"
                />
              </button>
            </Link>
          </div>

          <div className="contentpanel categorypanel">
            <div className="contentpanel__name categorylabel">category</div>
            <h3 className="contentpanel__value categorylabel__cotent">
              {row.category}
            </h3>
          </div>

          <div className="contentpanel placeholderpanel"></div>

          <div className="contentpanel statuspanel">
            <div className="contentpanel__name statuslabel">status</div>
            <StockStatus status={row.status} />
          </div>

          <div className="contentpanel qtypanel">
            <div className="contentpanel__name qtylabel">qty</div>
            <h3 className="contentpanel__value qtylabel__content">
              {row.quantity}
            </h3>
          </div>

          <div className="contentpanel warehousepanel">
            <div className="contentpanel__name warehouselocationlabel">
              warehouse
            </div>
            <h3 className="contentpanel__value warehouselocationlabel__content">
              {row.warehouse_name}
            </h3>
          </div>
        </div>

        <div className="row__second">
          <button
            className="deleteembutton modbutton"
            onClick={() => deleteButtonHandler(row.id)}
          >
            <img
              className="deleteembutton__icon modbutton__icon"
              src={deleteIcon}
              alt="edit icon"
            />
          </button>
          <button className="edititembutton modbutton">
            <img
              className="edititembutton__icon modbutton__icon"
              src={editIcon}
              alt="edit icon"
            />
          </button>
        </div>
      </section>
    ));

    setRenderedList(theRender);
    setCompState(false);
  }

  return (
    <>
      {compstate ? (
        <section>Loading Data...</section>
      ) : (
        <>
          <section className="sortingbarwrappper">
            <section className="fistsort">
              <div className="sortingbar inventorywrapper">
                <h4 className="sortingbarname">iventory item</h4>
                <img className="sortingbarsorticon" src={sortIcon} />
              </div>
              <div className="sortingbar categorywrapper">
                <h4 className="sortingbarname">categcory</h4>
                <img className="sortingbarsorticon" src={sortIcon} />
              </div>
              <div className="sortingbar statuswrapper">
                <h4 className="sortingbarname">status</h4>
                <img className="sortingbarsorticon" src={sortIcon} />
              </div>
              <div className="sortingbar qtywrapper">
                <h4 className="sortingbarname">qty</h4>
                <img className="sortingbarsorticon" src={sortIcon} />
              </div>
              <div className="sortingbar warehousewrapper">
                <h4 className="sortingbarname">warehouse</h4>
                <img className="sortingbarsorticon" src={sortIcon} />
              </div>
            </section>

            <section className="secondsort">
              <div className="sortingbar actionswrapper">
                <h4 className="sortingbarname">actions</h4>
                <img className="sortingbarsorticon" src={sortIcon} />
              </div>
            </section>
          </section>
          {renderedList}
        </>
      )}
    </>
  );
}

export default InventoryListComp;
