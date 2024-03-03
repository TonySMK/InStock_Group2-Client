import React, { useState } from "react";
import NewItemsDetailsForm from "../NewItemDetailsForm/NewItemDetailsForm";
import NewItemAvailabilityForm from "../NewItemAvailabilityForm.js/NewItemAvailabilityForm";
import axios from "axios";
import "./InventoryAddItemBody.scss";
import back from "../../Assets/Icons/arrow_back-24px.svg";
import { Link, useNavigate } from "react-router-dom";

function InventoryAddItemBody() {
  const navigate = useNavigate();
  const initialFormData = {
    item_name: "",
    description: "",
    category: "",
    status: "",
    quantity: 0,
    warehouse_id: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    setHasSubmitted(true);
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
      return;
    }
    try {
      // Backend request
      const response = await axios.post(
        "http://localhost:8080/api/inventories/",
        {
          ...formData,
          quantity: formData.status === "Out of Stock" ? 0 : formData.quantity,
        }
      );
      console.log("Item added successfully:", response.data);
      // Reset form data after successful submission
      setFormData(initialFormData);
      setHasSubmitted(false);
    } catch (error) {
      console.error("Error adding new item: ", error);
    }
  };

  const hasError = (fieldName) => {
    return formData[fieldName] === "" && hasSubmitted;
  };

  const handleCancel = () => {
    navigate("/warehouses");
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
          <NewItemsDetailsForm
            formData={formData}
            setFormData={setFormData}
            hasError={hasError}
          />
          <NewItemAvailabilityForm
            formData={formData}
            setFormData={setFormData}
            hasError={hasError}
          />
        </div>
        <div className="body__buttons">
          <div className="body__buttons__container">
            <button
              className="body__buttons__container__cancel"
              onClick={handleCancel}
            >
              Cancel
            </button>
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
