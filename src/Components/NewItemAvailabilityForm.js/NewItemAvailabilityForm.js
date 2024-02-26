function NewItemAvailabilityForm () {
    return (
      <div>
        <h2>Item Availability</h2>
        <div>
          <h3>Status</h3>
        </div>
        <div>
          <input type="checkbox" name="status" value="in stock" />
          <label for="coding">In stock</label>
        </div>
        <div>
          <input type="checkbox" name="status" value="out of stock" />
          <label for="music">Out of stock</label>
        </div>
        <label>
          Quantity:
          <input
            type="text"
            placeholder="0"
          />
        </label>
        <label for="warehouse">
          Warehouse
          <select name="warehouse">
            <option value="">Please Select</option>
          </select>
        </label>
      </div>
    );
}

export default NewItemAvailabilityForm;