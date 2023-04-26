import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiUrl, inventoriesUrl } from "../../utils";
import "./EditInventoryForm.scss";

function EditInventoryForm(item){
  const navigate = useNavigate();
  const inventoryItemId = useParams();

  const [inStock ,setInStock] = useState(item.item.status);
  const [itemName, setItemName] = useState(item.item.item_name);
  const [description, setDescription] = useState(item.item.description)
  const [category, setCategory] = useState(item.item.category)
  const [quantity, setQuantity] = useState(item.item.quantity)
  const [warehouse, setWarehouse] = useState(item.item.warehouse_name)
  const [warehouseList, setWarehouseList] = useState(item.warehouseList);

  const categoriesList = ["Gear", "Accessories", "Electronics", "Health", "Apparel"]
  
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
        value={quantity}
        id="quantityInput"
        onChange={quantityChangeHandler}
      />
    </label>
    )}
  }

  function renderWarehouseListOptions(){
    if (warehouseList === undefined){
      return "Loading"
    } else {
    const warehouseListFiltered = warehouseList.map(warehouse => warehouse.warehouse_name)
    return (
    <select className="details__form-input" id="warehouseSelect">
        {warehouseListFiltered.map((element, key) => {
          if (element === warehouse){
              return <option key={key} value={element} selected>{element}</option>
          } else {
            return <option key={key} value={element}>{element}</option>
          }
        }
        )}
    </select>
    )
    }
  }

  function renderCategoryList(categoriesList){
    return(
    <select className="details__form-input" id="categoriesSelect">
        {categoriesList.map((element, key) => {
          if (element === category){
              return <option key={key} value={element} selected>{element}</option>
          } else {
            return <option key={key} value={element}>{element}</option>
          }
        }
        )}
    </select>
        )
  }

  const handleStatusChange = event =>{
    setInStock(event.target.value)
  }

  const itemNameHandler = event => {
    setItemName(event.target.value)
  }

  const descriptionChangeHandler = event => {
    setDescription(event.target.value)
  }

  const categoryChangeHandler = event => {
    setCategory(event.target.value)
  }

  const quantityChangeHandler = event => {
    setQuantity(event.target.value)
  }

  function findWarehouseId(warehouseName, warehouseList) {
    for (let i = 0; i < warehouseList.length; i++) {
      if (warehouseList[i].warehouse_name === warehouseName) {
        return warehouseList[i].id;
      }
    }
    return null;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const itemNameInput = event.target.itemNameInput.value
    const descriptionInput = event.target.descriptionInput.value
    const categoryInput = event.target.categoriesSelect.value
    const statusInput = inStock;
    var quantityInput = "0"

    if (inStock === "Out of Stock"){
        quantityInput = "0"
    } else {
        quantityInput = event.target.quantityInput.value
    }

    const warehouse = event.target.warehouseSelect.value

    const inventoryItemData = {
        item_name: itemNameInput,
        description: descriptionInput,
        category: categoryInput,
        status: statusInput,
        quantity: quantityInput, 
        warehouse_id: findWarehouseId(warehouse, warehouseList)
    }

    if (!itemNameInput || !descriptionInput || !categoryInput || !statusInput || !warehouse ){
      alert("You are missing a field in the form, make sure everything is filled out")
    } else {
      axios
        .put(`${inventoriesUrl}/${inventoryItemId.inventoryItemId}`, {inventoryItemData})
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
                  value={itemName}
                  onChange={itemNameHandler}
              />

              <label className="details__form-container">Description</label>
              <input
                  className="details__form-input"
                  type="text"
                  name="Street Address"
                  id="descriptionInput"
                  value={description}
                  onChange={descriptionChangeHandler}
              />

              <label className="details__form-container">Category</label>
              {renderCategoryList(categoriesList)}
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
              {renderWarehouseListOptions()}
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
