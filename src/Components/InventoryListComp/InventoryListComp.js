import "./InventoryListStyles.scss";
import chevronRightIcon from "../../Assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../../Assets/Icons/delete_outline-24px.svg";
import editIcon from "../../Assets/Icons/edit-24px.svg";
import sortIcon from "../../Assets/Icons/sort-24px.svg";

import StockStatus from "../StockStatus/StockStatus";

import { useState, useEffect } from "react";

function InventoryListComp({ object, deleteButtonHandler }) {
  const [compstate, setCompState] = useState(true);
  const [renderedList, setRenderedList] = useState("");
  const [renderedSortList, setRenderedSortList] = useState("");
  const [windowWidth, setWindowWidth] = useState(0);
  // let windowwidth;
  // let arraykeys = Object.keys(object[0]);

  let sortbararray = [
    { name: "inventory item", altName: "inventorysortname" },
    { name: "categcory", altName: "categorysortname" },
    { name: "status", altName: "statussortname" },
    { name: "qty", altName: "qtysortname" },
    { name: "warehouse", altName: "warehousesortname" },
    { name: "actions", altName: "actionssortname" },
  ];
  // useEffect(() => {
  //   windowwidth = window.innerWidth;
  //   setWindowWidth(windowwidth);
  //   console.log(windowWidth);
  // }, [windowwidth]);

  console.log(window.innerWidth);
  useEffect(() => {
    renderList(object);
    renderSortList(sortbararray);
    setCompState(false);
  }, [object]);
  //FIXME: missing dependencies, but adding it cause another error

  function renderSortList(someObject) {
    const theSortListRender = someObject.map((index) => (
      <div className={`sortlistnamewrapper ${index.altName}`} key={index.name}>
        <div className="sortlistnamewrapper__name">{index.name}</div>
        <img className="sortlistnamewrapper__sorticon" src={sortIcon} />
      </div>
    ));

    setRenderedSortList(theSortListRender);
  }

  function renderList(someObject) {
    // let theRender;
    // console.log(someobject);
    const theRender = someObject.map((row) => (
      <section className="row" key={row.id.toString()}>
        <div className="row__first">
          <div className="infopanelone">
            <div className="contentpanel inventorypanel">
              <div className="contentpanel__name inventorylabel">
                inventory item
              </div>

              <button className="contentpanel__value inventorylabelnamebuttonwrapper">
                <div className="itembutton__name">{row.item_name}</div>
                <img
                  className="itembutton__icon"
                  src={chevronRightIcon}
                  alt="Chevron Right Icon"
                />
              </button>
            </div>

            <div className="contentpanel categorypanel">
              <div className="contentpanel__name categorylabel">category</div>
              <div className="contentpanel__value categorylabel__cotent">
                {row.category}
              </div>
            </div>
          </div>

          <div className="infopaneltwo statuspanel">
            <div className="contentpanel">
              <div className="contentpanel__name statuslabel">status</div>
              <StockStatus status={row.status} />
            </div>
            <div className="contentpanel quantitypanel">
              <div className="contentpanel__name quantitylabel">qty</div>
              <div className="contentpanel__value quantitylabel__content">
                {row.quantity}
              </div>
            </div>
            <div className="contentpanel warehouselocationpanel">
              <div className="contentpanel__name warehouselocationlabel">
                warehouse
              </div>
              <div className="contentpanel__value warehouselocationlabel__content">
                {row.warehouse_name}
              </div>
            </div>
          </div>
        </div>

        <div className="row__second actionspanel">
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
    // if (windowwidth < 767) {
    //   theRender = someObject.map((row) => (
    //     <section className="row" key={row.id.toString()}>
    //       <div className="row__first">
    //         <div className="infopanelone">
    //           <div className="contentpanel">
    //             <div className="contentpanel__name inventorylabel">
    //               inventory item
    //             </div>

    //             <button className="contentpanel__value inventorylabelnamebuttonwrapper">
    //               <div className="itembutton__name">{row.item_name}</div>
    //               <img
    //                 className="itembutton__icon"
    //                 src={chevronRightIcon}
    //                 alt="Chevron Right Icon"
    //               />
    //             </button>
    //           </div>

    //           <div className="contentpanel">
    //             <div className="contentpanel__name categorylabel">category</div>
    //             <div className="contentpanel__value categorylabel__cotent">
    //               {row.category}
    //             </div>
    //           </div>
    //         </div>

    //         <div className="infopaneltwo">
    //           <div className="contentpanel">
    //             <div className="contentpanel__name statuslabel">status</div>
    //             <StockStatus status={row.status} />
    //           </div>
    //           <div className="contentpanel">
    //             <div className="contentpanel__name quantitylabel">qty</div>
    //             <div className="contentpanel__value quantitylabel__content">
    //               {row.quantity}
    //             </div>
    //           </div>
    //           <div className="contentpanel">
    //             <div className="contentpanel__name warehouselocationlabel">
    //               warehouse
    //             </div>
    //             <div className="contentpanel__value warehouselocationlabel__content">
    //               {row.warehouse_name}
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="row__second">
    //         <button
    //           className="deleteembutton modbutton"
    //           onClick={() => deleteButtonHandler(row.id)}
    //         >
    //           <img
    //             className="deleteembutton__icon modbutton__icon"
    //             src={deleteIcon}
    //             alt="edit icon"
    //           />
    //         </button>
    //         <button className="edititembutton modbutton">
    //           <img
    //             className="edititembutton__icon modbutton__icon"
    //             src={editIcon}
    //             alt="edit icon"
    //           />
    //         </button>
    //       </div>
    //     </section>
    //   ));
    // } else if (windowWidth > 767) {
    //   theRender = someObject.map((row) => (
    //     <section className="row" key={row.id.toString()}>
    //       <div className="row__first">
    //         <div className="infopanelone">
    //           <div className="contentpanel">
    //             <div className="contentpanel__name inventorylabel">
    //               inventory item
    //             </div>

    //             <button className="contentpanel__value inventorylabelnamebuttonwrapper">
    //               <div className="itembutton__name">{row.item_name}</div>
    //               <img
    //                 className="itembutton__icon"
    //                 src={chevronRightIcon}
    //                 alt="Chevron Right Icon"
    //               />
    //             </button>
    //           </div>

    //           <div className="contentpanel">
    //             <div className="contentpanel__name categorylabel">category</div>
    //             <div className="contentpanel__value categorylabel__cotent">
    //               {row.category}
    //             </div>
    //           </div>
    //         </div>

    //         <div className="infopaneltwo">
    //           <div className="contentpanel">
    //             <div className="contentpanel__name statuslabel">status</div>
    //             <StockStatus status={row.status} />
    //           </div>
    //           <div className="contentpanel">
    //             <div className="contentpanel__name quantitylabel">qty</div>
    //             <div className="contentpanel__value quantitylabel__content">
    //               {row.quantity}
    //             </div>
    //           </div>
    //           <div className="contentpanel">
    //             <div className="contentpanel__name warehouselocationlabel">
    //               warehouse
    //             </div>
    //             <div className="contentpanel__value warehouselocationlabel__content">
    //               {row.warehouse_name}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   ));
    // }

    setRenderedList(theRender);
    setCompState(false);
  }

  return (
    <>
      {compstate ? (
        <section>Loading Data...</section>
      ) : (
        <>
          <section className="sortingbarwrappper">{renderedSortList}</section>
          {renderedList}
        </>
      )}
    </>
  );
}

export default InventoryListComp;
