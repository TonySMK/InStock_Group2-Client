import React, { useState, useEffect } from "react";
import WarehouseDetailsForm from "../WarehouseDetailsForm/WarehouseDetailsForm";
import ContactDetailsForm from "../ContactDetailsForm/ContactDetailsForm";
import axios from "axios";
import "./EditWarehousesBody.scss"; 
import back from "../../Assets/Icons/arrow_back-24px.svg";


function EditWarehouseBody() {
    const [warehouseData, setWarehouseData] = useState({
      id: "",
      warehouse_name: "",
      address: "",
      city: "",
      country: "",
      contact_name: "",
      contact_position: "",
      contact_phone: "",
      contact_email: "",
    });

    useEffect(() => {
      axios
        .get("http://localhost:8080/warehouses/:id/edit")
        .then((response) =>  setWarehouseData(response.data))
        .catch((error) =>
          console.error("Error fetching warehouse data:", error)
        );
    }, []);

    const handleSubmit = () => {
      axios
        .put("http://localhost:8080/warehouses/:id/edit", warehouseData)
        .then((response) => {
          console.log("Warehouse data updated successfully");
        })
        .catch((error) =>
          console.error("Error updating warehouse data:", error)
        );
    };
  return (
    <section>
      <div className="warehouse">
        <div className="warehouse__head">
          <div className="warehouse__head__img">
            <img
              className="warehouse__head__img__arrow"
              src={back}
              alt="back_arrow"
            />
          </div>
          <div className="warehouse__head__title">
            <h1 className="warehouse__head__title__name">Edit Warehouse</h1>
          </div>
        </div>
      </div>
      <div>
        <form>
          <WarehouseDetailsForm
            warehouseData={warehouseData}
            setWarehouseData={setWarehouseData}
          />
          <ContactDetailsForm
            warehouseData={warehouseData}
            setWarehouseData={setWarehouseData}
          />
        </form>
      </div>
      <div>
        <div>
          <button>Cancel</button>
        </div>
        <div>
          <button onClick={handleSubmit} type="submit">
            Save
          </button>
        </div>
      </div>
    </section>
  );
}

export default EditWarehouseBody;
