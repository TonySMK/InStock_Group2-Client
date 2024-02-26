function NewItemsDetailsForm() {
  return (
    <div>
      <h2>Item Details</h2>
      <label>
        Item Name:
        <input type="text" placeholder=" Item Name" />
      </label>
      <label>
        Description:
        <input
          type="text"
          placeholder="Please enter a brief item description"
        />
      </label>
      <label for="category">
        Category
        <select name="category">
          <option value="">Please Select</option>
        </select>
      </label>
    </div>
  );
}

export default NewItemsDetailsForm;
