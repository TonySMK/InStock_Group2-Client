import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NewItemDetailsForm.scss";

function NewItemsDetailsForm({ formData, setFormData }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/inventories/list/name/`)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error when fetching categories:", error);
      });
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //   if (categories == null) {
  if (categories == null) {
    <h1>LOADING</h1>;
  } else {
    return (
      <section className="details">
        <div className="details__subheader">
          <h2 className="details__subheader__title">Item Details</h2>
        </div>
        <div className="details__container">
          <label className="details__container__label">
            Item Name:
            <input className="item-name"
              type="text"
              name="item_name"
              value={formData.item_name}
              onChange={handleInputChange}
              placeholder="Item Name"
            />
          </label>
          <label className="details__container__label">
            Description:
            <input className="description"
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Please enter a brief item description"
            />
          </label>
          <label className="details__container__label">
            Category:
            <select className="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            >
              <option value="">Please Select</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="details__division">
          <div className="details__division__line"></div>
        </div>
      </section>
    );
  }
}

export default NewItemsDetailsForm;
