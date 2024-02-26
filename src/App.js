import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inventory from "./Pages/Inventory/Inventory";
import InventoryAddItem from "./Pages/InventoryAddItem/InventoryAddItem";
import InventoryDetails from "./Pages/InventoryDetails/InventoryDetails";
import InventoryEditItem from "./Pages/InventoryEditItem/InventoryEditItem";
import Warehouses from "./Pages/Warehouses/Warehouses";
import WarehousesAddItem from "./Pages/WarehousesAddItem/WarehousesAddItem";
import WarehousesDetails from "./Pages/WarehousesDetails/WarehousesDetails";
import WarehousesEditItem from "./Pages/WarehousesEditItem/WarehousesEditItem";
import Header from "../src/Components/Header/Header";
import InvListComp from "./Components/InventoryListComp/InventoryListComp";

function App() {
  return (
    <div className="App">
      {/* <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inventory />}></Route>
          <Route path="/:id/details" element={< InventoryDetails/>}></Route>
          <Route path="/:id/edit" element={<InventoryEditItem/>}></Route>
          <Route path="/add" element={<InventoryAddItem/>}></Route>
          <Route path="/warehouses" element={<Warehouses />}></Route>
          <Route path="/warehouses/:id/details" element={<WarehousesDetails/>}></Route>
          <Route path="/warehouses/:id/edit" element={<WarehousesEditItem/>}></Route>
          <Route path="/warehouses/add" element={<WarehousesAddItem/>}></Route>
        </Routes>
      </BrowserRouter> */}
      <InvListComp />
    </div>
  );
}

export default App;
