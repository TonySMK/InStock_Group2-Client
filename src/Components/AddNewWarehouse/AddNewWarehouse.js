import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddNewWarehouse.scss";
import ValidateWarehouse from "../ValidateWarehouse/ValidateWarehouse";
import err from "../../Assets/Icons/error-24px.svg";

const AddNewWarehouse = () => {
  const initialFormData = {
    warehouse_name: "",
    address: "",
    city: "",
    country: "",
    contact_name: "",
    contact_position: "",
    contact_phone: "",
    contact_email: "",

  }
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState({});
    const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancel = () => {
    setFormData(initialFormData)
    setError({});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateError = ValidateWarehouse(formData);
    if(Object.keys(validateError).length === 0){
      axios
      .post("http://localhost:8080/api/warehouses", formData)
      .then((res) => {
        console.log(res.data);
        setFormData(initialFormData);
        setError({})
        navigate("/warehouses");
      })
      .catch((error) => {
        console.error(error);
      });
    } else {
      setError(validateError);
    }
  };


  return (
    <div className="add-warehouse">
      <form className="add-warehouse_form" onSubmit={handleSubmit}>
        <section className="add-warehouse_form-details">
          <h2>Warehouse Details</h2>
          <label>
            Warehouse Name
            <input
              className={error.warehouse_name ? "error" : ""}
              placeholder="Warehouse Name"
              type="text"
              name="warehouse_name"
              value={formData.warehouse_name}
              onChange={handleInputChange}
            />
            {error.warehouse_name && (
              <p className="validate">
                <img src={err} alt="errorIcon" />
                {error.warehouse_name}
              </p>
            )}
          </label>
          <label>
            Street Address
            <input
              className={error.address ? "error" : ""}
              placeholder="Street Address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
            {error.address && (
              <p className="validate">
                <img src={err} alt="errorIcon" />
                {error.address}
              </p>
            )}
          </label>
          <label>
            City
            <input
              className={error.city ? "error" : ""}
              placeholder="City"
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
            />
            {error.city && (
              <p className="validate">
                <img src={err} alt="errorIcon" />
                {error.city}
              </p>
            )}
          </label>
          <label>
            Country
            <input
              className={error.country ? "error" : ""}
              placeholder="Country"
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
            />
            {error.country && (
              <p className="validate">
                <img src={err} alt="errorIcon" />
                {error.country}
              </p>
            )}
          </label>
        </section>
        <section className="add-warehouse_form-contact">
          <h2>Contact Details</h2>
          <label>
            Contact Name
            <input
              className={error.contact_name ? "error" : ""}
              placeholder="Contact Name"
              type="text"
              name="contact_name"
              value={formData.contact_name}
              onChange={handleInputChange}
            />
            {error.contact_name && (
              <p className="validate">
                <img src={err} alt="errorIcon" />
                {error.contact_name}
              </p>
            )}
          </label>
          <label>
            Position
            <input
              className={error.contact_position ? "error" : ""}
              placeholder="Position"
              type="text"
              name="contact_position"
              value={formData.contact_position}
              onChange={handleInputChange}
            />
            {error.contact_position && (
              <p className="validate">
                <img src={err} alt="errorIcon" />
                {error.contact_position}
              </p>
            )}
          </label>
          <label>
            Phone Number
            <input
              className={error.contact_phone ? "error" : ""}
              placeholder="Phone Number"
              type="tel"
              name="contact_phone"
              value={formData.contact_phone}
              onChange={handleInputChange}
            />
            {error.contact_phone && (
              <p className="validate">
                <img src={err} alt="errorIcon" />
                {error.contact_phone}
              </p>
            )}
          </label>
          <label>
            Email
            <input
              className={error.contact_email ? "error" : ""}
              placeholder="Email"
              type="email"
              name="contact_email"
              value={formData.contact_email}
              onChange={handleInputChange}
            />
            {error.contact_email && (
              <p className="validate">
                <img src={err} alt="errorIcon" />
                {error.contact_email}
              </p>
            )}
          </label>
        </section>
        <section className="add-warehouse_form-buttons">
          <button type="button" className="cancel" onClick={handleCancel}>Cancel</button>
          <button type="submit" className="add">+ Add Warehouse</button>
        </section>
      </form>
    </div>
  );
};

export default AddNewWarehouse;
