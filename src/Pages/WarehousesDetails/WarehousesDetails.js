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
  <section className = 'inventory-list'></section>
  <div className = 'inventory-list__container-top'>
      <div className = 'inventory-list__item-container'>
        <p className = 'inventory-list__item-header'>INVENTORY ITEM</p>
        <p className = 'inventory-list__item'>Television</p>
      </div>  
      <div className = 'inventory-list__status-container'>
        <p className = 'inventory-list__status-header'>STATUS</p>
        <p className = 'inventory-list__status'></p>
      </div>
  </div>
  <div className = 'inventory-list__container-middle'>
      <div className = 'inventory-list__category-container'>
        <p className = 'inventory-list__category-header'>CATEGORY</p>
        <p className = 'inventory-list__category'>Electronics</p>
      </div>
      <div className = 'inventory-list__quantity-container'>
        <p className = 'inventory-list__quantity-header'>QTY</p>
        <p className = 'inventory-list__quantity'>500</p>
      </div>
  </div>
  <div className = 'inventory-list__container-bottom'>
      <img className = 'inventory-list__delete' src = ''></img>
      <img className = 'inventory-list__edit' src = ''></img>

  </div>
  </div>
  </>

)
}

export default WarehousesDetails;
