import "./ContactDetailsForm.scss";
import React, { useState } from "react";
// import err from "../../Assets/Icons/error-24px.svg";

function ContactDetailsForm({ warehouseData, setWarehouseData, error }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setWarehouseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className="contact">
      <div className="contact__head">
        <h2 className="contact__head__name">Contact Details</h2>
      </div>
      <div className="contact__container">
        <label className="contact__container__label">Contact Name</label>
        <input
          className="contact__container__input"
          type="text"
          name="contact_name"
          value={warehouseData.contact_name}
          onChange={handleChange}
          placeholder="Contact Name"
        />
        <label className="contact__container__label">Position</label>
        <input
          className="contact__container__input"
          type="text"
          name="contact_position"
          value={warehouseData.contact_position}
          onChange={handleChange}
          placeholder="Position"
        />
        <label className="contact__container__label">Phone Number</label>
        <input
          className="contact__container__input"
          type="text"
          name="contact_phone"
          value={warehouseData.contact_phone}
          onChange={handleChange}
          placeholder="Phone Number"
        />
        <label className="contact__container__label">Email</label>
        <input
          className="contact__container__input"
          type="text"
          name="contact_email"
          value={warehouseData.contact_email}
          onChange={handleChange}
          placeholder="Email"
        />
      </div>
    </section>
  );
}

export default ContactDetailsForm;
