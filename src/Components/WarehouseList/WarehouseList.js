import React from "react";
import "./WarehouseList.scss";
import victor from "../../Assets/Icons/chevron_right-24px.svg";
import edit from "../../Assets/Icons/edit-24px.svg";
import del from "../../Assets/Icons/delete_outline-24px.svg";

const WarehouseList = ({ warehouses }) => {
  return (
    <div className="warehouse-list">
      <ul>
        {warehouses.map((warehouse) => (
          <li key={warehouse.id}>
            <div className="warehouse-list_info">
            <div className="warehouse-list_info-left">
              <div className="info">
                <h4>WAREHOUSE</h4>
                <div className="name">
                  <h3>{warehouse.warehouse_name}</h3>
                  <img src={victor} />
                </div>
              </div>
              <div className="info">
                <h4>ADDRESS</h4>
                <p>
                  {warehouse.address}, {warehouse.city}, {warehouse.country}
                </p>
              </div>
            </div>
            <div className="warehouse-list_info-right">
              <div className="info">
                <h4>CONTACT NAME</h4>
                <p>{warehouse.contact_name}</p>
              </div>
              <div className="info">
                <h4>CONTACT INFORMATION</h4>
                <p>{warehouse.contact_phone}</p>
                <p>{warehouse.contact_email}</p>
              </div>
            </div>
            </div>
        <div className="warehouse-list_update-icons">
          <img src={del} alt="delete-icon" />
          <img src={edit} alt="edit-icon" />
        </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WarehouseList;
