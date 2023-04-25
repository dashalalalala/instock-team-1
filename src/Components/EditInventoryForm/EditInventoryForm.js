import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiUrl, inventoriesUrl } from "../../utils";
import "./EditInventoryForm.scss";

function EditInventoryForm(item){
  const navigate = useNavigate();
  const inventoryItemId = useParams();

  const [inStock ,setInStock] = useState(item.item.status);
  
  function renderQuantityForm(inStock){
    if (inStock === "Out of Stock"){
      return null
    } else {
    return (
      <label className="details__form-container">
      <h6 className="details__form-title">Quantity</h6>
      <input
        className="details__form-input"
        type="text"
        value={item.item.quantity}
      />
    </label>
    )}
  }

  function renderWarehouseListOptions(warehouseList){
    console.log(warehouseList)
    return (
    <select className="details__form-input" id="warehouseList">
        {warehouseList.map((item, key) => 
          <option key={key} value={item.warehouse_name}>{item.warehouse_name}</option>)}
    </select>
    )
  }

  const handleStatusChange = event =>{
    setInStock(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const itemNameInput = event.target.itemNameInput
    const descriptionInput = event.target.descriptionInput
    const categoryInput = event.target.categoryInput
    const statusInput = event.target.statusInput
    const warehouse = event.target.warehouseInput

    if (!itemNameInput || !descriptionInput || !categoryInput || !statusInput || !warehouse ){
      alert("You are missing a field in the form, make sure everything is filled out")
    } else {
      axios
        .put(`${inventoriesUrl}/${inventoryItemId.inventoryItemId}`, {

        })
        .then((result) => {
          if (result.status === 200) {
            navigate("/inventories");
          }
          event.target.reset();
        })
        .catch((error) => {
          console.error(error);
        });
      alert("Inventory Item Updated");
    }
  };

  return (
    <>
      <div className="details">
        <form onSubmit={handleSubmit}>
          <div className="details__form">
            <div className="details__form-warehouse">
              <h2 className="details__form-subheader">Item Details</h2>

              <label className="details__form-container">Item Name</label>
              <input
                  className="details__form-input"
                  type="text"
                  name="Warehouse Name"
                  id="itemNameInput"
                  value={item.item.item_name}
              />

              <label className="details__form-container">Description</label>
              <input
                  className="details__form-input"
                  type="text"
                  name="Street Address"
                  id="descriptionInput"
                  value={item.item.description}
              />

              <label className="details__form-container">Category</label>
              <input
                  className="details__form-input"
                  type="text"
                  name="City"
                  id="categoryInput"
                  value={item.item.category}
              />
            </div>
            <div className="details__form-contact">
              <h2 className="details__form-subheader">Item Availabilty</h2>
              <h6 className="details__form-title">Status</h6>
              <label htmlFor="InStock">In Stock</label>
              <input
                //className="details__form-input"
                type="radio"
                name="Stock"
                id="InStock"
                value="In Stock"
                checked={inStock === "In Stock"}
                onChange={handleStatusChange}
              />
              <label htmlFor="OutOfStock">Out of Stock</label>
              <input
                //className="details__form-input"
                type="radio"
                name="Stock"
                id="OutOfStock"
                value="Out of Stock"
                checked={inStock === "Out of Stock"}
                onChange={handleStatusChange}
              />
              {renderQuantityForm(inStock)}
              <h6 className="details__form-title">Warehouse</h6>
              {renderWarehouseListOptions(item.warehouseList)}
            </div>
          </div>
          <div className="details__button-container">
            <button className="details__cancel">Cancel</button>
            <button className="details__save">Save</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditInventoryForm;
