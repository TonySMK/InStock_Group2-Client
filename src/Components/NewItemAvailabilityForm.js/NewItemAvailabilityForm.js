import React, { useState } from "react";

function NewItemAvailabilityForm() {
    const [status, setStatus] = useState("");
    const [quantity, setQuantity] = useState("");
    const [warehouse, setWarehouse] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({ status, quantity, warehouse });
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
          checked={status === "in stock"}
          onChange={() => setStatus("in stock")}
        />
        <label for="in stock">In stock</label>
      </div>
      <div>
        <input
          type="radio"
          name="status"
          value="out of stock"
          checked={status === "out of stock"}
          onChange={() => setStatus("out of stock")}
        />
        <label for="music">Out of stock</label>
      </div>
      {status === "in stock" && (
        <label>
          Quantity:
          <input
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="0"
          />
        </label>
      )}
      <label for="warehouse">
        Warehouse
        <select
          name="warehouse"
          value={warehouse}
          onChange={(e) => setWarehouse(e.target.value)}
        >
          <option value="">Please Select</option>
          {/* Add options for warehouses */}
        </select>
      </label>
    </div>
  );
}

export default NewItemAvailabilityForm;
