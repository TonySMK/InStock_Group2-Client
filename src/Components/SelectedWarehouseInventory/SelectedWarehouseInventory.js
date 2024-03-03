import "./SelectedWarehouseInventory.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import StockStatus from '../../Components/StockStatus/StockStatus'
import { Link } from "react-router-dom";
import editIcon from "../../Assets/Icons/edit-24px.svg";
import deleteIcon from "../../Assets/Icons/delete_outline-24px.svg";
import chevronRightIcon from "../../Assets/Icons/chevron_right-24px.svg";
import sortIcon from '../../Assets/Icons/sort-24px.svg';
import InventoryModel from '../../Components/InventoryModal/InventortyModel';

const SelectedWarehouseInventory = ({id, deleteButtonHandler}) => {
  const [warehouseInventories, setWarehouseInventory] = useState([]);
  const [renderedList, setRenderedList] = useState("");
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [targetInformationArray, setTargetInformationArray] = useState(null);

  // console.log(eTarget);
  function closeModalHandler() {
    setIsModelOpen(false);
  }

  function deleteHandler(therowinfoarray) {
    setIsModelOpen(true);

    // console.log(therowinfoarray);
    setTargetInformationArray(therowinfoarray);

    // // FIXME:

    // console.log(targetInformationArray[1]);
  }

  useEffect(() => {
    axios
    .get(`http://localhost:8080/api/inventories/${id}`)
    .then((res) => {
      let inventoryDetails = res.data;
      console.log(inventoryDetails);
      setWarehouseInventory(inventoryDetails);
    })
    .catch((err) => {
      console.error(err)
    });
    
},[warehouseInventories])

  if (!warehouseInventories) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <section className="sortingbarwrappper">
            <section className="fistsort">
              <div className="sortingbar inventorywrapper">
                <h4 className="sortingbarname">inventory item</h4>
                <img
                  className="sortingbarsorticon"
                  src={sortIcon}
                  alt="Sort Icon"
                />
              </div>
              <div className="sortingbar categorywrapper">
                <h4 className="sortingbarname">category</h4>
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

    <section className="selected-warehouse">
      {warehouseInventories.map((warehouseInventory) => {
        return (
          <section className="row" key={warehouseInventory.id.toString()}>
        <div className="row__first">
          <div className="contentpanel inventorypanel">
            <div className="contentpanel__name inventorylabel">
              inventory item
            </div>

            <Link to={`/${warehouseInventory.id}/details`}>
              <button className="contentpanel__value inventorylabelnamebuttonwrapper">
                <h3 className="itembutton__name">{warehouseInventory.item_name}</h3>
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
              {warehouseInventory.category}
            </h3>
          </div>

          <div className="contentpanel placeholderpanel"></div>

          <div className="contentpanel statuspanel">
            <div className="contentpanel__name statuslabel">status</div>
            <StockStatus status={warehouseInventory.status} />
          </div>

          <div className="contentpanel qtypanel">
            <div className="contentpanel__name qtylabel">qty</div>
            <h3 className="contentpanel__value qtylabel__content">
              {warehouseInventory.quantity}
            </h3>
          </div>
        </div>

        <div className="row__second">
          <button
            className="deleteembutton modbutton"
            onClick={() => deleteHandler(warehouseInventory.id, warehouseInventory.item_name)}
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
        );
      })}
    </section>
    <InventoryModel
            isModelOpen={isModelOpen}
            closeModalHandler={closeModalHandler}
            targetinformtion={targetInformationArray}
            deleteButtonHandler={deleteButtonHandler}
          />
    </>
  );
};

export default SelectedWarehouseInventory;
