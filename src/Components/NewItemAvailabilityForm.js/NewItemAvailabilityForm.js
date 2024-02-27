import React from "react";

function NewItemAvailabilityForm({ formData, setFormData }) {
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
          name="warehouse"
          value={formData.warehouse}
          onChange={handleInputChange}
        >
          <option value="">Please Select</option>
          {/* Add options for warehouses */}
        </select>
      </label>
    </div>
  );
}

export default NewItemAvailabilityForm;
