import React, { useState } from "react";
import WarehouseDetailsForm from "../WarehouseDetailsForm/WarehouseDetailsForm";
import ContactDetailsForm from "../ContactDetailsForm/ContactDetailsForm";

function EditWarehouseBody() {
    const [formData, setFormData] = useState({
      id: "",
      warehouse_name: "",
      address: "",
      city: "",
      country: "",
      contact_name: "",
      contact_position: "",
      contact_phone: "",
      contact_email: "",
    });
  return (
    <section>
      <h1>Edit Warehouse</h1>
      <div>
        <form>
          <WarehouseDetailsForm />
          <ContactDetailsForm />
        </form>
      </div>
      <div>
        <div>
          <button>Cancel</button>
        </div>
        <div>
          <button>Save</button>
        </div>
      </div>
    </section>
  );
}

export default EditWarehouseBody;
