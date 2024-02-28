import React, { useState, useEffect } from "react";
import axios from "axios";

function EditItemAvailabilityForm({ formData, setFormData }) {
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
        <div className="availability__subheader">
          <h2 className="availability__subheader__title">Item Availability</h2>
        </div>
        <div className="availability__status">
          <h3 className="availability__status__title">Status</h3>
        </div>
        <div className="availability__container">
          <div className="availability__container__instock">
            <input
              type="radio"
              name="status"
              value="in stock"
              checked={formData.status === "in stock"}
              onChange={handleInputChange}
            />
            <label className="availability__container__instock__label">
              In stock
            </label>
          </div>
          <div className="availability__container__out">
            <input
              type="radio"
              name="status"
              value="Out of Stock"
              checked={formData.status === "Out of Stock"}
              onChange={handleInputChange}
            />
            <label className="availability__container__out__label">
              Out of stock
            </label>
          </div>
        </div>
        {formData.status === "in stock" && (
          <div className="availability__quantity">
            <label className="availability__quantity__label">
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
          <label className="availability__warehouse__label">
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
        </div>
      </section>
    );
  }
}

export default EditItemAvailabilityForm;