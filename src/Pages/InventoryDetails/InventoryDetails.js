import "./InventoryDetailsStyles.scss";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import leftChevron from "../../Assets/Icons/arrow_back-24px.svg";
import editicon from "../../Assets/Icons/edit-white-24px.svg";

import StockStatus from "../../Components/StockStatus/StockStatus";

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
  }, [id]);

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
                  <img
                    className="backbuttonnicon"
                    src={leftChevron}
                    alt="Previous page icon"
                  />
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
                  <img
                    className="editbuttonicon"
                    src={editicon}
                    alt="Previous page icon"
                  />
                  <h3 className="editiconname">edit</h3>
                </button>
              </div>
            </section>

            <section className="detailpagebody">
              <div className="detailpagebody__one">
                <div className="descriptiondetailpanel">
                  <h4 className="descriptiondetailpanel__label someplacholderlabel someplacholder">
                    item description:
                  </h4>
                  <div className="descriptiondetailpanel__content someplacholdercontent someplacholder">
                    {iventoryDetailsObject.description}
                  </div>
                </div>

                <div className="categorydetailpanel">
                  <h4 className="categorydetailpanel__label someplacholderlabel someplacholder">
                    category:
                  </h4>
                  <div className="categorydetailpanel__content someplacholdercontent someplacholder">
                    {iventoryDetailsObject.category}
                  </div>
                </div>
              </div>

              <div className="detailpagebody__two">
                <div className="statusdetailpanel">
                  <h4 className="statusdetailpanel__label someplacholderlabel someplacholder">
                    status:
                  </h4>
                  <div className="statusdetailpanel__content someplacholdercontent someplacholder">
                    <StockStatus status={iventoryDetailsObject.status} />
                  </div>
                </div>
                <div className="quantitydetailpanel">
                  <h4 className="quantitydetailpanel__label someplacholderlabel someplacholder">
                    quantity:
                  </h4>
                  <div className="quantitydetailpanel__content someplacholdercontent someplacholder">
                    {iventoryDetailsObject.quantity}
                  </div>
                </div>
                <div className="warehousedetailpanel">
                  <h4 className="warehousedetailpanel__label someplacholderlabel someplacholder">
                    warehouse:
                  </h4>
                  <div className="warehousedetailpanel__content someplacholdercontent someplacholder">
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
