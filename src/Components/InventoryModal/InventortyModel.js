import "./InventoryModalStyles.scss";
import { createPortal } from "react-dom";
import closeIcon from "../../Assets/Icons/close-24px.svg";

function InventoryModel({
  isModelOpen,
  closeModalHandler,
  deleteButtonHandler,
  targetinformtion,
}) {
  let thebodyselector = document.getElementById("root");
  if (!isModelOpen) {
    thebodyselector.style.overflowY = "scoll";
    thebodyselector.style.height = "auto";
    return null;
  } else {
    thebodyselector.style.overflowY = "hidden";
    thebodyselector.style.height = "100vh";
  }

  function finaldeletehandler(theTargert) {
    deleteButtonHandler(theTargert);
    closeModalHandler();
  }

  return createPortal(
    <>
      <div className="overlay"></div>
      <div className="modalbody">
        <div className="modalbody__upperpanel">
          <button className="modalbody__upperpanel__closebuttonwrapper">
            <img
              className="closebuttonimagecloseicon"
              onClick={closeModalHandler}
              src={closeIcon}
              alt="Delete Icon Button"
            />
          </button>
          <h2 className="modalbody__upperpanel__questionprompt">{`Delete ${targetinformtion[1]} inventory item?`}</h2>
          <div className="modalbody__upperpanel__warningmessage">
            {`Please confirm that you’d like to delete ${targetinformtion[1]} from the inventory
        list. You won’t be able to undo this action.`}
          </div>
        </div>

        <section className="modalbody__actionbuttonswrapper">
          <button
            className="modalbody__actionbuttonswrapper__canel"
            onClick={() => {
              closeModalHandler();
            }}
          >
            Cancel
          </button>
          <button
            className="modalbody__actionbuttonswrapper__delete"
            onClick={() => {
              finaldeletehandler(targetinformtion[0]);
            }}
          >
            Delete
          </button>
        </section>
      </div>
    </>,
    document.getElementById("someinventorymodel")
  );
}

export default InventoryModel;
