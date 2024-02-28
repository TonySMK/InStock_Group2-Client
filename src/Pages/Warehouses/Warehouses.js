import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Warehouses.scss";
import WarehouseList from "../../Components/WarehouseList/WarehouseList";

function Warehouses () {
    const [warehouses, setWarehouses] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/warehouses")
        .then(res => {
            setWarehouses(res.data);
        })
        .catch(error => {
            console.error(error);
        })
    }, []);
    return (
        <>
        <div>
            <h1>Warehouses</h1>
        </div>
        <WarehouseList warehouses={warehouses}/>
        </>
    );
}

export default Warehouses;