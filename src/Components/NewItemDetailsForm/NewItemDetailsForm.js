import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NewItemDetailsForm.scss";
import err from "../../Assets/Icons/error-24px.svg";

function NewItemsDetailsForm({ formData, setFormData, hasError }) {
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
      <>
        <section className="add-details">
            <h2 className="add-details__title">Item Details</h2>
          <div className="add-details__container">
            <label className="add-details__container__label">Item Name:</label>
            <input
              className={`item-name ${
                hasError("item_name") ? "formError" : null
              }`}
              type="text"
              name="item_name"
              value={formData.item_name}
              onChange={handleInputChange}
              placeholder="Item Name"
              id="item_name"
            />
            {hasError("item_name") && (
              <p className="validate">
                <img src={err} alt="errorIcon" />
                This field is required
              </p>
            )}

            <label className="add-etails__container__label">Description:</label>
            <input
              className={`description ${
                hasError("description") ? "formError" : null
              }`}
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Please enter a brief item description"
              id="description"
            />
            {hasError("description") && (
              <p className="validate">
                <img src={err} alt="errorIcon" />
                This field is required
              </p>
            )}
            <label className="add-details__container__label">Category:</label>
            <select
              className={`category ${
                hasError("category") ? "formError" : null
              }`}
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              id="category"
            >
              <option value="" className="category">Please Select</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {hasError("category") && (
              <p className="validate">
                <img src={err} alt="errorIcon" />
                This field is required
              </p>
            )}
          </div>
        </section>
      </>
    );
  }
}

export default NewItemsDetailsForm;
