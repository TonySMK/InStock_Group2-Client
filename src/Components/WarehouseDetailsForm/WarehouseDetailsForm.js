import React from "react";
import "./WarehouseDetailsForm.scss"

function WarehouseDetailsForm({ warehouseData, setWarehouseData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setWarehouseData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };


  return (
    <section>
      <div>
        <h2>Warehouse Details</h2>
      </div>
      <div>
        <label>Warehouse Name</label>
        <input
          className="warehouse-name"
          type="text"
          name="warehouse_name"
          value={warehouseData.warehouse_name}
          onChange={handleChange}
          placeholder="Warehouse Name"
        />
        <label>Street Address</label>
        <input
          className="address"
          type="text"
          name="address"
          value={warehouseData.address}
          onChange={handleChange}
          placeholder="Street Address"
        />
        <label>City</label>
        <input
          className="city"
          type="text"
          name="city"
          value={warehouseData.city}
          onChange={handleChange}
          placeholder="City"
        />
        <label>Country:</label>
        <input
          className="country"
          type="text"
          name="country"
          value={warehouseData.country}
          onChange={handleChange}
          placeholder="Country"
        />
      </div>
    </section>
  );
}


export default WarehouseDetailsForm;