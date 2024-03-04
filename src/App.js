import logo from "./logo.svg";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="backgroundwrapper">
        <BrowserRouter>
          <Header />
          <section className="parenteoffsetwarpper">
            <Routes>
              <Route path="/" element={<Inventory />}></Route>
              <Route path="/:id/details" element={<InventoryDetails />}></Route>
              <Route path="/:id/edit" element={<InventoryEditItem />}></Route>
              <Route path="/add" element={<InventoryAddItem />}></Route>
              <Route path="/warehouses" element={<Warehouses />}></Route>
              <Route
                path="/warehouses/:id/details"
                element={<WarehousesDetails />}
              ></Route>
              <Route
                path="/warehouses/:id/edit"
                element={<WarehousesEditItem />}
              ></Route>
              <Route
                path="/warehouses/add"
                element={<WarehousesAddItem />}
              ></Route>
            </Routes>
          </section>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;
