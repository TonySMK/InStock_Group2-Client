import React, { useState, useEffect } from "react";
import axios from "axios";

function NewItemAvailabilityForm({ formData, setFormData }) {
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
      <div>
        <h2>Item Availability</h2>
        <div>
          <h3>Status</h3>
        </div>
        <div>
          <input
            type="radio"
            name="status"
            value="in stock"
            checked={formData.status === "in stock"}
            onChange={handleInputChange}
          />
          <label>In stock</label>
        </div>
        <div>
          <input
            type="radio"
            name="status"
            value="out of stock"
            checked={formData.status === "out of stock"}
            onChange={handleInputChange}
          />
          <label>Out of stock</label>
        </div>
        {formData.status === "in stock" && (
          <label>
            Quantity:
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              placeholder="0"
            />
          </label>
        )}
        <label>
          Warehouse:
          <select
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
    );
  }
}

export default NewItemAvailabilityForm;
