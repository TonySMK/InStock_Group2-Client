import React, { useState, useEffect } from "react";
import WarehouseDetailsForm from "../WarehouseDetailsForm/WarehouseDetailsForm";
import ValidateWarehouse from "../ValidateWarehouse/ValidateWarehouse";
import ContactDetailsForm from "../ContactDetailsForm/ContactDetailsForm";
import axios from "axios";
import "./EditWarehousesBody.scss";
import back from "../../Assets/Icons/arrow_back-24px.svg";
import { useParams, Link, useNavigate } from "react-router-dom";

function EditWarehouseBody() {
  const { id } = useParams();
  const navigate = useNavigate();
  const initialFormData = {
    id: "",
    warehouse_name: "",
    address: "",
    city: "",
    country: "",
    contact_name: "",
    contact_position: "",
    contact_phone: "",
    contact_email: "",
  };

  const [warehouseData, setWarehouseData] = useState(initialFormData);
  const [error, setError] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/warehouses/${id}}/details`)
      .then((response) => setWarehouseData(response.data[0]))
      .catch((error) => console.error("Error fetching warehouse data:", error));
  }, []);

  const handleSubmit = (e) => {
    setHasSubmitted(true);
    e.preventDefault();
    const validateError = ValidateWarehouse(warehouseData);
    if (Object.keys(validateError).length === 0) {
      axios
        .put(`http://localhost:8080/api/warehouses/${id}`, warehouseData)
        .then((response) => {
          console.log("Warehouse data updated successfully");
        })
        .catch((error) =>
          console.error("Error updating warehouse data:", error)
        );
    } else {
      console.log(validateError);
      setError(validateError);
    }
  };

  const handleCancel = () => {
    navigate("/warehouses");
  };

  const hasError = (fieldName) => {
    return warehouseData[fieldName] === "" && hasSubmitted;
  };
  return (
    <section className="warehouse">
      <div className="warehouse__wrapper">
        <div className="warehouse__wrapper__head">
          <div className="warehouse__wrapper__head__img">
            <Link to={"/warehouses"}>
              <img
                className="warehouse__wrapper__head__img__arrow"
                src={back}
                alt="back_arrow"
              />
            </Link>
          </div>
          <div className="warehouse__wrapper__head__title">
            <h1 className="warehouse__wrapper__head__title__name">
              Edit Warehouse
            </h1>
          </div>
        </div>
        <div className="warehouse__wrapper__division">
          <div className="warehouse__wrapper__division__line"></div>
        </div>
      </div>
      <form className="warehouse__form" onSubmit={handleSubmit}>
        <div className="warehouse__form__wrapper">
          <WarehouseDetailsForm
            warehouseData={warehouseData}
            setWarehouseData={setWarehouseData}
            hasError={hasError}
          />
          <ContactDetailsForm
            warehouseData={warehouseData}
            setWarehouseData={setWarehouseData}
            hasError={hasError}
          />
        </div>
        <div className="warehouse__buttons">
          <div className="warehouse__buttons__container">
            <button
              className="warehouse__buttons__container__cancel"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
          <div className="warehouse__buttons__container">
            <button
              className="warehouse__buttons__container__save"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default EditWarehouseBody;
