// import AddItemForm from "../AddItemForm/AddItemForm";
import NewItemsDetailsForm from "../NewItemDetailsForm/NewItemDetailsForm";
import NewItemAvailabilityForm from "../NewItemAvailabilityForm.js/NewItemAvailabilityForm";

function InventoryAddItemBody() {
  return (
    <div>
      <h1>Add New Inventory Item</h1>
      <form>
        {/* <AddItemForm /> */}
        <NewItemsDetailsForm />
        <NewItemAvailabilityForm/>
        <button>Cancel</button>
        <button>Add Item</button>
      </form>
    </div>
  );
}

export default InventoryAddItemBody;
