import WarehouseDetailsForm from "../WarehouseDetailsForm/WarehouseDetailsForm";
import ContactDetailsForm from "../ContactDetailsForm/ContactDetailsForm";

function EditWarehouseBody () {
    return (
      <section>
        <h1>Edit Warehouse</h1>
        <div>
          <form>
            <WarehouseDetailsForm />
            <ContactDetailsForm/>
          </form>
        </div>
        <div>
          <div>
            <button>Cancel</button>
          </div>
          <div>
            <button>Save</button>
          </div>
        </div>
      </section>
    );
}

export default EditWarehouseBody;