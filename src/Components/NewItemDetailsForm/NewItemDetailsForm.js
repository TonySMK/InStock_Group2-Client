import React, { useState } from "react";

function NewItemsDetailsForm() {
    const [itemName, setItemName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

  return (
    <div>
      <h2>Item Details</h2>
      <label>
        Item Name:
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder=" Item Name"
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Please enter a brief item description"
        />
      </label>
      <label for="category">
        Category
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Please Select</option>
        </select>
      </label>
    </div>
  );
}

export default NewItemsDetailsForm;
