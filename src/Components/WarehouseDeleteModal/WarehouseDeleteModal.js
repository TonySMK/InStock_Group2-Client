import "./WarehouseDeleteModal.scss";
import close from "../../Assets/Icons/close-24px.svg";

const WarehouseDeleteModal = ({
  warehouses,
  onDelete,
  onClose,
  modalOpen,
  warehouse_name,
}) => {
  
    //not sure why it's not working for the scroll
 // Reference to the body element
 const bodyElement = document.body;

 // Handle scrolling when the modal is open
 if (modalOpen) {
   bodyElement.style.overflow = "hidden";
 } else {
   bodyElement.style.overflow = "auto";
 }
 
  const handleDelete = () => {
    const selectedWarehouse = warehouses.find(
      (warehouse) => warehouse.warehouse_name === warehouse_name
    );
    if (selectedWarehouse) {
      onDelete(selectedWarehouse.id);
    }
    onClose();
  };
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-header">
          <img src={close} alt="close" className="close" onClick={onClose} />
        </div>
        <div className="modal-content">
          <h1 className="modal-content_title">
            Delete {warehouse_name} warehouse?
          </h1>
          <p className="modal-content_description">
            Please confirm that you'd like to delete the {warehouse_name} from
            the list of warehouses. You won't be able to undo this action.
          </p>
        </div>
        <div className="modal-footer">
          <button className="btn-cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default WarehouseDeleteModal;
