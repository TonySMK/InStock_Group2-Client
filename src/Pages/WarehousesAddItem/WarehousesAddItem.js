import React from "react";
import { Link } from "react-router-dom";
import AddNewWarehouse from "../../Components/AddNewWarehouse/AddNewWarehouse";
import "./WarehousesAddItem.scss";
import back from "../../Assets/Icons/arrow_back-24px.svg";

function WarehousesAddItem () {
    return (
      <div className="warehouse-add">
        <div className="warehouse-add_header">
          <Link to={"/warehouses"}>
          <img src={back} alt="arrow-back"/>
          </Link>
        <h1>Add New Warehouse</h1>
        </div>
        <div>
          <AddNewWarehouse/>
        </div>
      </div>
    );
}

export default WarehousesAddItem;