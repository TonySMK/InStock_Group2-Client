import "./WarehousesDetails.scss";
import axios from 'axios'
import backArrow from '../../Assets/Icons/arrow_back-24px.svg'
import editButton from '../../Assets/Icons/edit-24px.svg'
import {Link, useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import SelectedWarehouseInventory from "../../Components/SelectedWarehouseInventory/SelectedWarehouseInventory";
import WarehouseList from "../../Components/WarehouseList/WarehouseList";

function WarehousesDetails (warehouses) {

  const { id } = useParams();
  console.log(id);

  const [warehouse, setWarehouse] = useState([]);

  function deleteButtonHandler(id) {
    axios
      .delete(`http://localhost:8080/api/inventories/${id}`)
      .then((res) => {
        fetch();
      });
  }

  useEffect(() => {
    axios
    .get(`http://localhost:8080/api/warehouses/${id}`)
    .then((res) => {
      let warehouseDetails = res.data[0];
      console.log(warehouseDetails);
      setWarehouse(warehouseDetails);
    })
    .catch((err) => {
      console.error(err)
    });
    
},[id])

    return (
      <>
        <div className="warehouse-details">
  <div className="warehouse-details__top">
    <div className="warehouse-details__top-name">
      <Link to={`/warehouses`} className="warehouse-details__back">
        <img src={backArrow} alt="Back Arrow" />
      </Link>
      <h1>{warehouse?.warehouse_name}</h1>
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
        <p className = 'warehouse-details__data'>{warehouse.address},</p>
        <p className = 'warehouse-details__data'>&nbsp;{warehouse.city}, {warehouse.country}</p>
        </div>
      </div>
      <div className = 'warehouse-details__contact-container'>
      <div className = 'warehouse-details__contact-name-container'>
        <p className = 'warehouse-details__contact-header'>CONTACT NAME:</p>
        <p className = 'warehouse-details__data'>{warehouse.contact_name}</p>
        <p className = 'warehouse-details__data'>{warehouse.contact_position}</p>
      </div>
      <div className = 'warehouse-details__contact-info-container'>
        <p className = 'warehouse-details__contact-info-header'>CONTACT INFORMATION:</p>
        <p className = 'warehouse-details__data'>{warehouse.contact_phone}</p>
        <p className = 'warehouse-details__data'>{warehouse.contact_email}</p>
      </div>
      </div>
      </div>
  </section>
  <SelectedWarehouseInventory id = {id} deleteButtonHandler={deleteButtonHandler}/>
  </div>
  </>

)
}

export default WarehousesDetails;
