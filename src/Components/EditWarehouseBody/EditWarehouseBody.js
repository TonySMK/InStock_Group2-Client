import React, { useState, useEffect } from "react";
import WarehouseDetailsForm from "../WarehouseDetailsForm/WarehouseDetailsForm";
import ContactDetailsForm from "../ContactDetailsForm/ContactDetailsForm";
import axios from "axios";
import "./EditWarehousesBody.scss";


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

    const handleSave = () => {
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
      <div>
        <div>
          <div><img src="" alt=""/></div>
        </div>
        <div>
          <h1>Edit Warehouse</h1>
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
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </section>
  );
}

export default EditWarehouseBody;
