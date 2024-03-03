import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

import "./Warehouses.scss";
import SearchBar from "../../Components/SearchBar/SearchBar";
import WarehouseList from "../../Components/WarehouseList/WarehouseList";
// import Footer from "../../Components/Footer/Footer";


function Warehouses() {
  const [warehouses, setWarehouses] = useState([]);
  const navigate = useNavigate();

  const fetchWarehouses = () => {
    axios
      .get("http://localhost:8080/api/warehouses")
      .then((res) => {
        setWarehouses(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  const handleDeleteWarehouse = (deleteID) => {
    console.log("Deleting warehouse with ID:", deleteID)
    axios
      .delete(`http://localhost:8080/api/warehouses/${deleteID}`)
      .then((res) => {
        console.log("Warehouse deleted successfully", res.data);
        fetchWarehouses(); // Refresh the warehouse list after deletion
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchWarehouses();
  }, []);

  const handleAddWarehouseClick = () => {
    navigate("/warehouses/add");
  };

  return (
        <div className="warehouse">
      <div className="warehouse-header">
        <h1 className="warehouse-header_label">Warehouses</h1>
        <div className="warehouse-header_input">
          <SearchBar className="search-bar" />
          <button className="add-warehouse" onClick={handleAddWarehouseClick}>+ Add New Warehouse</button>
        </div>
      </div>
      <WarehouseList warehouses={warehouses}
      onDeleteWarehouse = {handleDeleteWarehouse}
       className="warehouse-list"/>
    </div>
  );
}

export default Warehouses;
