import React from "react";

function NewItemsDetailsForm({ formData, setFormData }) {
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Item Details</h2>
      <label>
        Item Name:
        <input
          type="text"
          name="itemName"
          value={formData.itemName}
          onChange={handleInputChange}
          placeholder="Item Name"
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Please enter a brief item description"
        />
      </label>
      <label>
        Category:
        <select
          name="category"
          value={formData.category}
          onChange={handleInputChange}
        >
          <option value="">Please Select</option>
          {/* Add options for categories */}
        </select>
      </label>
    </div>
  );
}

export default NewItemsDetailsForm;
