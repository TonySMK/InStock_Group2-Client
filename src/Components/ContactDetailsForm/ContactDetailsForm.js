import "./ContactDetailsForm.scss";
import err from "../../Assets/Icons/error-24px.svg";

function ContactDetailsForm({
  warehouseData,
  setWarehouseData,
  error,
  hasError,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setWarehouseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className="contactdetails">
      <div className="contactdetails__head">
        <h2 className="contactdetails__head__name">Contact Details</h2>
      </div>
      <div className="contactdetails__container">
        <label className="contactdetails__container__label">Contact Name</label>
        <input
          className={`contactdetails__container__input ${
            hasError("contact_name") ? "formError" : "contactformPass"
          }`}
          type="text"
          name="contact_name"
          value={warehouseData.contact_name}
          onChange={handleChange}
          placeholder="Contact Name"
        />
        {hasError("contact_name") && (
          <p className="validate">
            <img src={err} alt="errorIcon" />
            This field is required
          </p>
        )}
        <label className="contactdetails__container__label">Position</label>
        <input
          className={`contactdetails__container__input ${
            hasError("contact_position") ? "formError" : "contactformPass"
          }`}
          type="text"
          name="contact_position"
          value={warehouseData.contact_position}
          onChange={handleChange}
          placeholder="Position"
        />
        {hasError("contact_position") && (
          <p className="validate">
            <img src={err} alt="errorIcon" />
            This field is required
          </p>
        )}
        <label className="contactdetails__container__label">Phone Number</label>
        <input
          className={`contactdetails__container__input ${
            hasError("contact_phone") ? "formError" : "contactformPass"
          }`}
          type="text"
          name="contact_phone"
          value={warehouseData.contact_phone}
          onChange={handleChange}
          placeholder="Phone Number"
        />
        {hasError("contact_phone") && (
          <p className="validate">
            <img src={err} alt="errorIcon" />
            This field is required
          </p>
        )}
        <label className="contactdetails__container__label">Email</label>
        <input
          className={`contactdetails__container__input ${
            hasError("contact_email") ? "formError" : "contactformPass"
          }`}
          type="text"
          name="contact_email"
          value={warehouseData.contact_email}
          onChange={handleChange}
          placeholder="Email"
        />
        {hasError("contact_email") && (
          <p className="validate">
            <img src={err} alt="errorIcon" />
            This field is required
          </p>
        )}
      </div>
    </section>
  );
}

export default ContactDetailsForm;
