import "./InventoryDetailsStyles.scss";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

import leftChevron from "../../Assets/Icons/arrow_back-24px.svg";
import editicon from "../../Assets/Icons/edit-24px.svg";

function InventoryDetails() {
  const navigate = useNavigate();
  const [compstate, setCompState] = useState(true);
  const [iventoryDetailsObject, setInventoryDetailsObject] = useState("");
  const { id } = useParams();
  console.log(id);

  function selectinventoryitemfetch(idkeyword) {
    axios
      .get(`http://localhost:8080/api/inventories/${idkeyword}`)
      .then((res) => {
        let thedetails = res.data[0];
        console.log(thedetails);
        setInventoryDetailsObject(thedetails);
        setCompState(false);
      });
  }

  useEffect(() => {
    selectinventoryitemfetch(id);
  }, []);

  return (
    <>
      {compstate ? (
        <section className="inventorydetailsparentwrapper">
          Loading Page...
        </section>
      ) : (
        <>
          <div className="inventorydetailsparentwrapper">
            <section className="detailpageheader">
              <div className="detailpageheader__left">
                <button className="backbuttonn" onClick={() => navigate("/")}>
                  <img src={leftChevron} alt="Previous page icon" />
                </button>
                <h1 className="theitemname">
                  {iventoryDetailsObject.item_name}
                </h1>
              </div>

              <div className="detailpageheader__right">
                <button
                  className="editinventorybuttonn"
                  onClick={() => navigate(`/${id}/edit`)}
                >
                  <img src={editicon} alt="Previous page icon" />
                  <h3 className="editiconname">edit</h3>
                </button>
              </div>
            </section>

            <section className="detailpagebody">
              <div className="detailpagebody__one">
                <div className="descriptiondetailpanel">
                  <div className="descriptiondetailpanel__label">
                    item description:
                  </div>
                  <div className="descriptiondetailpanel__content">
                    {iventoryDetailsObject.description}
                  </div>
                </div>

                <div className="categorydetailpanel__label">category:</div>
                <div className="categorydetailpanel__content">
                  {iventoryDetailsObject.category}
                </div>
              </div>

              <div className="detailpagebody__two">
                <div className="statusdetailpanel">
                  <div className="statusdetailpanel__label">status:</div>
                  <div className="statusdetailpanel__content">
                    {iventoryDetailsObject.status}
                  </div>
                </div>
                <div className="quantitydetailpanel">
                  <div className="quantitydetailpanel__label">quantity:</div>
                  <div className="quantitydetailpanel__content">
                    {iventoryDetailsObject.quantity}
                  </div>
                </div>
                <div className="warehousedetailpanel">
                  <div className="warehousedetailpanel__label">warehouse:</div>
                  <div className="warehousedetailpanel__content">
                    {iventoryDetailsObject.warehouse_name}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );
}

export default InventoryDetails;
