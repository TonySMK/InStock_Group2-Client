import "./WarehouseDeleteModal.scss";
import close from "../../Assets/Icons/close-24px.svg";

const WarehouseDeleteModal = ({ warehouse_name }) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-header">
          <img src={close} alt="close" className="close" />
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
            <button className="btn-cancel">Cancel</button>
            <button className="btn-delete">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default WarehouseDeleteModal;
