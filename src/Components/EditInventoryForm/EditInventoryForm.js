import React, { useState, useEffect } from "react";
import axios from "axios";
import "./EditInventoryForm.scss";
import err from "../../Assets/Icons/error-24px.svg";

function EditInventoryForm({ formData, setFormData, hasError }) {
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

  if (categories == null) {
    <h1>LOADING</h1>;
  } else {
    return (
      <section className="details">
        <h2 className="details__subheader__title">Item Details</h2>
        <div className="details__container">
          <label className="details__container__label">
            Item Name:
            <input
              className={`item-name ${
                hasError("item_name") ? "formError" : null
              }`}
              type="text"
              name="item_name"
              value={formData.item_name}
              onChange={handleInputChange}
              placeholder="Item Name"
            />
          </label>
          {hasError("item_name") && (
            <p className="validate">
              <img src={err} alt="errorIcon" />
              This field is required
            </p>
          )}
          <label className="details__container__label">
            Description:
            <input
              className="description"
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Please enter a brief item description"
            />
          </label>
          {hasError("description") && (
            <p className="validate">
              <img src={err} alt="errorIcon" />
              This field is required
            </p>
          )}
          <label className="details__container__label">
            Category:
            <select
              className="category"
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
          {hasError("category") && (
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

export default EditInventoryForm;
