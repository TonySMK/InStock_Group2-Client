import "./WarehousesDetails.scss";
import backArrow from '../../Assets/Icons/arrow_back-24px.svg'
import editButton from '../../Assets/Icons/edit-24px.svg'
import {Link, useParams} from 'react-router-dom'

function WarehousesDetails (warehouseDetails) {

  const params = useParams();

  const warehouseId = params.warehouseId

    return (
      <>
        <div className="warehouse-details">
  <div className="warehouse-details__top">
    <div className="warehouse-details__top-name">
      <Link to={`/`} className="warehouse-details__back">
        <img src={backArrow} alt="Back Arrow" />
      </Link>
      <h1>Washington</h1>
    </div>
    <Link
      // to={`/warehouse/edit/{}`}
      className="warehouse-details__edit-link"
    >
      <div className="warehouse-details__edit-circle">
        <img
          src={editButton}
          className="warehouse-details__edit-img"
          alt="Edit"
        />
        <p className="warehouse-details__edit-text">Edit</p>
      </div>
    </Link>
  </div>
  <section className = 'warehouse-details__info'>
      <div className = 'warehouse-details__info-container'>
      <div className = 'warehouse-details__address-container'>
      <p className = 'warehouse-details__address-header'>WAREHOUSE ADDRESS:</p>
      <div className = 'warehouse-details__address'>
        <p className = 'warehouse-details__address-street'>33 Pearl Street SW,</p>
        <p className = 'warehouse-details__address-city'>Washington, USA</p>
        </div>
      </div>
      <div className = 'warehouse-details__contact-container'>
      <div className = 'warehouse-details__contact-name-container'>
        <p className = 'warehouse-details__contact-header'>CONTACT NAME:</p>
        <p className = 'warehouse-details__contact-name'>Graeme Lyon</p>
        <p className = 'warehouse-details__contact-position'>Warehouse Manager</p>
      </div>
      <div className = 'warehouse-details__contact-info-container'>
        <p className = 'warehouse-details__contact-info-header'>CONTACT INFORMATION:</p>
        <p className = 'warehouse-details__contact-number'>+1 (647) 504-0911</p>
        <p className = 'warehouse-details__contact-email'>glyon@instock.com</p>
      </div>
      </div>
      </div>
  </section>
  {/* <SelectedWarehouseInventory/> */}
  </div>
  </>

)
}

export default WarehousesDetails;
