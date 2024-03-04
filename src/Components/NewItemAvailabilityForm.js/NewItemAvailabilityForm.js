import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NewItemAvailabilityForm.scss";
import err from "../../Assets/Icons/error-24px.svg";

function NewItemAvailabilityForm({ formData, setFormData, hasError }) {
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/warehouses/`)
      .then((response) => {
        setWarehouses(response.data);
      })
      .catch((error) => {
        console.error("Error when fetching warehouses:", error);
      });
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  if (warehouses == null) {
    <h1>LOADING</h1>;
  } else {
    return (
      <section className="new-availability">
          <h2 className="new-availability__title">Item Availability</h2>
        <div className="new-availability__status">
          <h3 className="new-availability__status__title">Status</h3>
        </div>
        <div
          className={`new-availability__container ${
            hasError("status") ? "formError" : null
          }`}
        >
          <div className="new-availability__container__instock">
            <input
              type="radio"
              name="status"
              value="in stock"
              checked={formData.status === "in stock"}
              onChange={handleInputChange}
              id="input"
            />
            <label className="new-availability__container__instock__label">
              In stock
            </label>
          </div>
          <div className="new-availability__container__out">
            <input
              type="radio"
              name="status"
              value="Out of Stock"
              checked={formData.status === "Out of Stock"}
              onChange={handleInputChange}
              id="input"
            />
            <label className="new-availability__container__out__label">
              Out of stock
            </label>
          </div>
        </div>
        {hasError("status") && (
          <p className="validate">
            <img src={err} alt="errorIcon" />
            This field is required
          </p>
        )}
        {formData.status === "in stock" && (
          <div className="new-availability__quantity">
            <label className="new-availability__quantity__label">Quantity:</label>
            <input
              className={`new-availability__quantity__input ${
                hasError("quantity") ? "formError" : null
              }`}
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              placeholder="0"
            />
          </div>
        )}
        <div className="new-availability__warehouse">
          <label className="new-availability__warehouse__label">Warehouse:</label>
          <select
            className={`new-availability__warehouse__select ${
              hasError("warehouse_id") ? "formError" : null
            }`}
            name="warehouse_id"
            value={formData.warehouse_id}
            onChange={handleInputChange}
          >
            <option value="">Please Select</option>
            {warehouses.map((warehouse) => (
              <option key={warehouse.id} value={warehouse.id}>
                {warehouse.warehouse_name}
              </option>
            ))}
          </select>
        </div>
        {hasError("warehouse_id") && (
          <p className="validate">
            <img src={err} alt="errorIcon" />
            This field is required
          </p>
        )}
      </section>
    );
  }
}

export default NewItemAvailabilityForm;
