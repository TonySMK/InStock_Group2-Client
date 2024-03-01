function WarehouseDetailsForm() {
    return (
      <section>
        <div>
          <h2>Warehouse Details</h2>
        </div>
        <div>
          <label>Warehouse Name</label>
          <input
            className="warehouse-name"
            type="text"
            name="warehouse_name"
            placeholder="Warehouse Name"
          />
          <label>Street Address</label>
          <input
            className="address"
            type="text"
            name="address"
            placeholder="Street Address"
          />
          <label>City</label>
          <input className="city" type="text" name="city" placeholder="City" />
          <label>Country:</label>
          <input
            className="country"
            type="text"
            name="country"
            placeholder="Country"
          />
        </div>
      </section>
    );
}

export default WarehouseDetailsForm;