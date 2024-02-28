import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Warehouses.scss";
import SearchBar from "../../Components/SearchBar/SearchBar";
import WarehouseList from "../../Components/WarehouseList/WarehouseList";

function Warehouses() {
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/warehouses")
      .then((res) => {
        setWarehouses(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="warehouse">
      <div className="warehouse-header">
        <h1 className="warehouse-header_label">Warehouses</h1>
        <div className="warehouse-header_input">
          <SearchBar className="search-bar" />
          <button className="add-warehouse">+ Add New Warehouse</button>
        </div>
      </div>
      <WarehouseList warehouses={warehouses} className="warehouse-list"/>
    </div>
  );
}

export default Warehouses;
