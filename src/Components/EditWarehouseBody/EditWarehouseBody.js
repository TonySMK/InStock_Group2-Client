import React, { useState, useEffect } from "react";
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

    useEffect(() => {
      axios
        .get("http://localhost:8080/warehouses/:id/edit")
        .then((response) => setFormData(response.data))
        .catch((error) =>
          console.error("Error fetching warehouse data:", error)
        );
    }, []);
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
