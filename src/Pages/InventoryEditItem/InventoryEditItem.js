import "./InventoryEditItem.scss";
// import "../../Components/EditInventoryItemBody";
import EditInventoryItemBody from "../../Components/EditInventoryItemBody/EditInventoryItemBody";

function InventoryEditItem () {
    return (
      <div className="edit-inventory">
        <EditInventoryItemBody/>
      </div>
    );
}

export default InventoryEditItem;