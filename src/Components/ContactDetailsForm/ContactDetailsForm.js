import "./ContactDetailsForm.scss";

function ContactDetailsForm({ warehouseData, setWarehouseData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setWarehouseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section>
      <div>
        <h2>Contact Details</h2>
      </div>
      <div>
        <label>Contact Name</label>
        <input
          type="text"
          name="contact_name"
          value={warehouseData.contact_name}
          onChange={handleChange}
          placeholder="Contact Name"
        />
        <label>Position</label>
        <input
          type="text"
          name="contact_position"
          value={warehouseData.contact_position}
          onChange={handleChange}
          placeholder="Position"
        />
        <label>Phone Number</label>
        <input
          type="text"
          name="contact_phone"
          value={warehouseData.contact_phone}
          onChange={handleChange}
          placeholder="Phone Number"
        />
        <label>Email</label>
        <input
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