import EditInventoryForm from "../EditInventoryForm/EditInventoryForm";
import EditItemAvailabilityForm from "../EditItemAvailabilityForm/EditItemAvailabilityForm";
import axios from "axios";
import back from "../../Assets/Icons/arrow_back-24px.svg";
import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./EditInventoryItemBody.scss";

function EditInventoryItemBody() {
  const { id } = useParams();
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const initialFormData = {
    id: "",
    item_name: "",
    description: "",
    category: "",
    status: "",
    quantity: 0,
    warehouse_id: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/inventories/${id}`)
      .then((response) => {
        const inventory = response.data[0];
        setFormData({ ...inventory });
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Frontend validation
    if (
      !formData.item_name ||
      !formData.description ||
      !formData.category ||
      !formData.status ||
      !(formData.status === "in stock" && formData.quantity > 0) ||
      !formData.warehouse_id
    ) {
      return;
    }
    try {
      console.log(formData);
      const response = await axios.put(
        `http://localhost:8080/api/inventories/${id}`,
        {
          ...formData,
          quantity: formData.status === "Out of Stock" ? 0 : formData.quantity,
        }
      );
      console.log("Item edited successfully:", response.data);
    } catch (error) {
      console.error("Error editing new item: ", error);
    }
  };
  const hasError = (fieldName) => {
    return formData[fieldName] === "" && hasSubmitted;
  };

  return (
    <section className="edit">
      <div className="edit-header">
        <Link to={"/"}>
          <img src={back} alt="arrow-back" className="back" />
        </Link>
        <h1>Edit Inventory Item</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <EditInventoryForm
          formData={formData}
          setFormData={setFormData}
          hasError={hasError}
          className="left"
        />
        <EditItemAvailabilityForm
          formData={formData}
          setFormData={setFormData}
          hasError={hasError}
          className="right"
        />
        <div className="body__buttons">
          <div className="body__buttons__container">
            <button className="body__buttons__container__cancel">Cancel</button>
          </div>
          <div className="body__buttons__container">
            <button className="body__buttons__container__save" type="submit">
              <div></div>
              Save
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default EditInventoryItemBody;
