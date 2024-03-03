import React from "react";
import "./WarehouseDetailsForm.scss";
import err from "../../Assets/Icons/error-24px.svg";

function WarehouseDetailsForm({ warehouseData, setWarehouseData, hasError }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setWarehouseData((prevData) => ({
      ...prevData,
      [name]: value,
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
          className={`details__container__input ${
            hasError("warehouse_name") ? "formError" : null
          }`}
          type="text"
          name="warehouse_name"
          value={warehouseData.warehouse_name}
          onChange={handleChange}
          placeholder="Warehouse Name"
        />
        {hasError("warehouse_name") && (
          <p className="validate">
            <img src={err} alt="errorIcon" />
            This field is required
          </p>
        )}
        <label className="details__container__label">Street Address</label>
        <input
          className={`details__container__input ${
            hasError("address") ? "formError" : null
          }`}
          type="text"
          name="address"
          value={warehouseData.address}
          onChange={handleChange}
          placeholder="Street Address"
        />
        {hasError("address") && (
          <p className="validate">
            <img src={err} alt="errorIcon" />
            This field is required
          </p>
        )}

        <label className="details__container__label">City</label>
        <input
          className={`details__container__input ${
            hasError("city") ? "formError" : null
          }`}
          type="text"
          name="city"
          value={warehouseData.city}
          onChange={handleChange}
          placeholder="City"
        />
        {hasError("city") && (
          <p className="validate">
            <img src={err} alt="errorIcon" />
            This field is required
          </p>
        )}
        <label className="details__container__label">Country:</label>
        <input
          className={`details__container__input ${
            hasError("country") ? "formError" : null
          }`}
          type="text"
          name="country"
          value={warehouseData.country}
          onChange={handleChange}
          placeholder="Country"
        />
        {hasError("country") && (
          <p className="validate">
            <img src={err} alt="errorIcon" />
            This field is required
          </p>
        )}
      </div>
      <div className="details__division">
        <div className="details__division__line"></div>
      </div>
    </section>
  );
}

export default WarehouseDetailsForm;
