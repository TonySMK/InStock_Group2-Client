import React, { useState } from "react";
// import AddItemForm from "../AddItemForm/AddItemForm";
import NewItemsDetailsForm from "../NewItemDetailsForm/NewItemDetailsForm";
import NewItemAvailabilityForm from "../NewItemAvailabilityForm.js/NewItemAvailabilityForm";
import axios from "axios";

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

  const inventoryId = 1;
  return (
    <div>
      <h1>Add New Inventory Item</h1>
      <form onSubmit={handleSubmit}>
        <NewItemsDetailsForm
          formData={formData}
          setFormData={setFormData}
          inventoryId={inventoryId}
        />
        <NewItemAvailabilityForm
          formData={formData}
          setFormData={setFormData}
        />
        <button>Cancel</button>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default InventoryAddItemBody;
