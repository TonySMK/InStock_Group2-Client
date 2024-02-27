import React, { useState, useEffect } from "react";
import axios from "axios";

function NewItemsDetailsForm({ formData, setFormData, inventoryId }) {
  const [categories, setCategories] = useState([]);

  const cats = [
    { id: "ELe", value: "ELE" },
    { id: "aaa", value: "AAA" },
  ];
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/inventories/${inventoryId}`)
      .then((response) => {
        setCategories(response.data.categories);
      })
      .catch((error) => {
        console.error("Error when fetching categories:", error);
      });
  }, [inventoryId]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //   if (categories == null) {
  if (cats == null) {
    <h1>LOADING</h1>;
  } else {
    return (
      <div>
        <h2>Item Details</h2>
        <label>
          Item Name:
          <input
            type="text"
            name="item_name"
            value={formData.item_name}
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
            {cats.map((category) => (
              <option key={category.id} value={category.id}>
                {category.value}
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  }
}

export default NewItemsDetailsForm;
