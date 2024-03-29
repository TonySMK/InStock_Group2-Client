import "./WarehouseList.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";

import victor from "../../Assets/Icons/chevron_right-24px.svg";
import edit from "../../Assets/Icons/edit-24px.svg";
import del from "../../Assets/Icons/delete_outline-24px.svg";
import sort from "../../Assets/Icons/sort-24px.svg";
import WarehouseDeleteModal from "../WarehouseDeleteModal/WarehouseDeleteModal";

const WarehouseList = ({ warehouses, onDeleteWarehouse }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedWarehouse, setSelectedWarehouse] = useState("");

  const openModal = (warehouseName) => {
    setSelectedWarehouse(warehouseName);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const deleteWarehouse = (deleteID) => {
    onDeleteWarehouse(deleteID);
    setModalOpen(false);
  };
  return (
    <div className="warehouses">
      <header className="warehouses_header">
        <div className="warehouses_header-label">
          <h4>WAREHOUSE</h4>
          <img src={sort} alt="sort" className="sort" />
        </div>
        <div className="warehouses_header-label address">
          <h4>ADDRESS</h4>
          <img src={sort} alt="sort" className="sort" />
        </div>
        <div className="warehouses_header-label">
          <h4>CONTACT NAME</h4>
          <img src={sort} alt="sort" className="sort" />
        </div>
        <div className="warehouses_header-label">
          <h4>CONTACT INFORMATION </h4>
          <img src={sort} alt="sort" className="sort" />
        </div>
        <div className="warehouses_header-label action">
          <h4>ACTIONS</h4>
          <img src={sort} alt="sort" className="sort" />
        </div>
      </header>
      <ul className="warehouses_list">
        {warehouses.map((warehouse) => (
          <li key={warehouse.id}>
            <div className="info name">
              <h4 className="title">WAREHOUSE</h4>
              <div className="name_info">
                <Link to={`/warehouses/${warehouse.id}/details`}>
                  <h3>{warehouse.warehouse_name}</h3>
                </Link>
                <img className="victor" src={victor} alt={victor} />
              </div>
            </div>
            <div className="info address">
              <h4 className="title">ADDRESS</h4>
              <p>
                {warehouse.address}, {warehouse.city}, {warehouse.country}
              </p>
            </div>
            <div className="info contact_name">
              <h4 className="title">CONTACT NAME</h4>
              <p>{warehouse.contact_name}</p>
            </div>
            <div className="info contact_information">
              <h4 className="title">CONTACT INFORMATION</h4>
              <p>{warehouse.contact_phone}</p>
              <p>{warehouse.contact_email}</p>
            </div>
            <div className="info-icons action">
              <div className="modal-function">
                <button
                  className="btn-open"
                  onClick={() => openModal(warehouse.warehouse_name)}
                >
                  <img src={del} alt="delete" />
                </button>
              </div>
              <Link to={`/warehouses/${warehouse.id}/edit`}>
                <button>
                  <img src={edit} alt="edit" />
                </button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
      {modalOpen &&
        createPortal(
          <WarehouseDeleteModal
            warehouse_name={selectedWarehouse}
            onDelete={deleteWarehouse}
            onClose={handleClose}
            warehouses={warehouses}
            modalOpen={modalOpen}
          />,
          document.body
        )}
    </div>
  );
};

export default WarehouseList;
