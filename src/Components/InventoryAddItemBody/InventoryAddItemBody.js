import React, { useState } from "react";
import NewItemsDetailsForm from "../NewItemDetailsForm/NewItemDetailsForm";
import NewItemAvailabilityForm from "../NewItemAvailabilityForm.js/NewItemAvailabilityForm";
import axios from "axios";
import "./InventoryAddItemBody.scss";
import back from "../../Assets/Icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";

function InventoryAddItemBody() {
  const [formData, setFormData] = useState({
    item_name: "",
    description: "",
    category: "",
    status: "",
    quantity: "",
    warehouse_id: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Frontend validation
    if (
      !formData.item_name ||
      !formData.description ||
      !formData.category ||
      !formData.status ||
      (formData.status === "in stock" && !formData.quantity) ||
      !formData.warehouse_id
    ) {
      alert("Please fill in all required fields.");
      //   return;
    }
    try {
      // Backend request
      const response = await axios.post(
        "http://localhost:8080/api/inventories/",
        formData
      );
      console.log("Item added successfully:", response.data);
      // Reset form data after successful submission
      setFormData({
        item_name: "",
        description: "",
        category: "",
        status: "",
        quantity: "",
        warehouse_id: "",
      });
    } catch (error) {
      console.error("Error adding new item: ", error);
    }
  };

  return (
    <section className="body">
      <div className="body__wrapper">
        <div className="body__wrapper__arrow">
          <Link to={"/"}>
            <img src={back} alt="arrow-back" />
          </Link>
        </div>
        <div className="body__wrapper__header">
          <h1 className="body__wrapper__header__title">
            Add New Inventory Item
          </h1>
        </div>
      </div>
      <div className="body__division">
        <div className="body__division__line"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="body__forms-wrapper">
          <NewItemsDetailsForm formData={formData} setFormData={setFormData} />
          <NewItemAvailabilityForm
            formData={formData}
            setFormData={setFormData}
          />
        </div>
        <div className="body__buttons">
          <div className="body__buttons__container">
            <button className="body__buttons__container__cancel">Cancel</button>
          </div>
          <div className="body__buttons__container">
            <button className="body__buttons__container__add" type="submit">
              + Add Item
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default InventoryAddItemBody;
