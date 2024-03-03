import React, { useState, useEffect } from "react";
import axios from "axios";
import "./EditItemAvailabilityForm.scss";
import err from "../../Assets/Icons/error-24px.svg";

function EditItemAvailabilityForm({ formData, setFormData, hasError }) {
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
      <section className="availability">
        <h2 className="availability__subheader__title">Item Availability</h2>
        <div className="availability__status">
          <h3 className="availability__status__title">Status</h3>
        </div>
        <div
          className={`availability__container ${
            hasError("status") ? "formError" : null
          }`}
        >
          <div className="availability__container__instock">
            <input
              type="radio"
              name="status"
              value="in stock"
              checked={formData.status === "in stock"}
              onChange={handleInputChange}
            />
            <p className="availability__container__instock__label">In stock</p>
          </div>
          <div className="availability__container__out">
            <input
              type="radio"
              name="status"
              value="Out of Stock"
              checked={formData.status === "Out of Stock"}
              onChange={handleInputChange}
            />
            <p className="availability__container__out__p">Out of stock</p>
          </div>
        </div>
        {formData.status === "in stock" && (
          <div className="availability__quantity">
            <label
              className={`availability__quantity__label ${
                hasError("warehouse_id") ? "formError" : null
              }`}
            >
              Quantity:
              <input
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                placeholder="0"
              />
            </label>
          </div>
        )}
        <div className="availability__warehouse">
          <label
            className={`availability__warehouse__label ${
              hasError("warehouse_id") ? "formError" : null
            }`}
          >
            Warehouse:
            <select
              className="availability__warehouse__select"
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
          </label>
          {hasError("warehouse_id") && (
            <p className="validate">
              <img src={err} alt="errorIcon" />
              This field is required
            </p>
          )}
        </div>
      </section>
    );
  }
}

export default EditItemAvailabilityForm;
