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
    <section className="details">
      <div className="details__title">
        <h2 className="details__title__name">Warehouse Details</h2>
      </div>
      <div className="details__container">
        <label className="details__container__label">Warehouse Name</label>
        <input
          className="details__container__input"
          type="text"
          name="warehouse_name"
          value={warehouseData.warehouse_name}
          onChange={handleChange}
          placeholder="Warehouse Name"
        />
        <label className="details__container__label">Street Address</label>
        <input
          className="details__container__input"
          type="text"
          name="address"
          value={warehouseData.address}
          onChange={handleChange}
          placeholder="Street Address"
        />
        <label className="details__container__label">City</label>
        <input
          className="details__container__input"
          type="text"
          name="city"
          value={warehouseData.city}
          onChange={handleChange}
          placeholder="City"
        />
        <label className="details__container__label">Country:</label>
        <input
          className="details__container__input"
          type="text"
          name="country"
          value={warehouseData.country}
          onChange={handleChange}
          placeholder="Country"
        />
      </div>
      <div className="details__division">
        <div className="details__division__line"></div>
      </div>
    </section>
  );
}


export default WarehouseDetailsForm;