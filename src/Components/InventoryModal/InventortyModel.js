import "./InventoryModalStyles.scss";
import { createPortal } from "react-dom";
import closeIcon from "../../Assets/Icons/close-24px.svg";

function InventoryModel({
  isModelOpen,
  closeModalHandler,
  deleteButtonHandler,
  targetinformtion,
}) {
  if (!isModelOpen) {
    return null;
  }

  return createPortal(
    <>
      <div className="overlay"></div>
      <div className="modalbody">
        <button className="modalbody__closebuttonwrapper">
          <img
            className="modalbody__closebuttonwrapper--imagecloseicon"
            onClick={closeModalHandler}
            src={closeIcon}
            alt="Delete Icon Button"
          />
        </button>

        <div className="modalbody__questionprompt">{`Delete ${targetinformtion[1]} inventory item?`}</div>
        <div className="modalbody__warningmessage">
          Please confirm that you’d like to delete Television from the inventory
          list. You won’t be able to undo this action.
        </div>

        <section className="modalbody__actionbuttonswrapper">
          <button className="modalbody__actionbuttonswrapper--canel">
            Cancel
          </button>
          <button className="modalbody__actionbuttonswrapper--delete">
            Delete
          </button>
        </section>
      </div>
    </>,
    document.getElementById("someinventorymodel")
  );
}

export default InventoryModel;
