import "./WarehouseSelectInventoryStyles.scss";
import chevronRightIcon from "../../Assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../../Assets/Icons/delete_outline-24px.svg";
import editIcon from "../../Assets/Icons/edit-24px.svg";
import sortIcon from "../../Assets/Icons/sort-24px.svg";

import StockStatus from "../StockStatus/StockStatus";
import InventoryModel from "../InventoryModal/InventortyModel";
import axios from "axios";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function WarehouseSelectInventory({ object }) {
  const [warehouseInventories, setWarehouseInventory] = useState([]);
  const [compstate, setCompState] = useState(true);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [inventoryList, setInventoryList] = useState("");
  const [targetInformationArray, setTargetInformationArray] = useState("");

  function closeModalHandler() {
    setIsModelOpen(false);
  }

  function fetch() {
    axios.get("http://localhost:8080/api/inventories").then((res) => {
      let thelist = res.data;
      setWarehouseInventory(res.data);
    });
  }

  function deleteButtonHandler(number) {
    axios
      .delete(`http://localhost:8080/api/inventories/${number}`)
      .then((res) => {
        fetch();
      });
  }

  function deleteHandler(therowinfoarray) {
    setIsModelOpen(true);

    // console.log(therowinfoarray);
    setTargetInformationArray(therowinfoarray);
    fetch();

    // // FIXME:

    // console.log(targetInformationArray[1]);
  }
  // console.log(window.innerWidth);
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
        </div>

        <div className="row__second">
          <button
            className="deleteembutton modbutton"
            // onClick={() => deleteButtonHandler(row.id)}
            onClick={() => {
              deleteHandler([row.id, row.item_name]);
            }}
          >
            <img
              className="deleteembutton__icon modbutton__icon"
              src={deleteIcon}
              alt="edit icon"
            />
          </button>
          <Link to={`/${row.id}/edit`} className="edititembutton modbutton">
            <img
              className="edititembutton__icon modbutton__icon"
              src={editIcon}
              alt="edit icon"
            />
          </Link>
        </div>
      </section>
    ));

    setInventoryList(theRender);
    setCompState(false);
  }

  useEffect(() => {
    renderList(object);
    setCompState(false);
    if (targetInformationArray) {
      console.log(targetInformationArray);
    }
  }, [object, targetInformationArray]);
  //FIXME: missing dependencies, but adding it causes another error

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
                <img
                  className="sortingbarsorticon"
                  src={sortIcon}
                  alt="Sort Icon"
                />
              </div>
              <div className="sortingbar categorywrapper">
                <h4 className="sortingbarname">categcory</h4>
                <img
                  className="sortingbarsorticon"
                  src={sortIcon}
                  alt="Sort Icon"
                />
              </div>
              <div className="sortingbar statuswrapper">
                <h4 className="sortingbarname">status</h4>
                <img
                  className="sortingbarsorticon"
                  src={sortIcon}
                  alt="Sort Icon"
                />
              </div>
              <div className="sortingbar qtywrapper">
                <h4 className="sortingbarname">qty</h4>
                <img
                  className="sortingbarsorticon"
                  src={sortIcon}
                  alt="Sort Icon"
                />
              </div>
              <div className="sortingbar warehousewrapper">
                <h4 className="sortingbarname">warehouse</h4>
                <img
                  className="sortingbarsorticon"
                  src={sortIcon}
                  alt="Sort Icon"
                />
              </div>
            </section>

            <section className="secondsort">
              <div className="sortingbar actionswrapper">
                <h4 className="sortingbarname">actions</h4>
                <img
                  className="sortingbarsorticon"
                  src={sortIcon}
                  alt="Sort Icon"
                />
              </div>
            </section>
          </section>
          {inventoryList}

          <InventoryModel
            isModelOpen={isModelOpen}
            closeModalHandler={closeModalHandler}
            targetinformtion={targetInformationArray}
            deleteButtonHandler={deleteButtonHandler}
          />
        </>
      )}
    </>
  );
}

export default WarehouseSelectInventory;
