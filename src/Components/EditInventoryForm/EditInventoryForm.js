import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiUrl, inventoriesUrl } from "../../utils";
import "./EditInventoryForm.scss";
import { nullLiteral } from "@babel/types";

function EditInventoryForm(){
  const [itemName, setItemName] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  const [status, setStatus] = useState();
  const [quantity, setQuantity] = useState();
  const [warehouseId, setWarehouseId] = useState();

  const [warehouseList, setWarehouseList] = useState();
  const [item, setItem] = useState();

  const navigate = useNavigate();
  const inventoryItemId = useParams();

  console.log(warehouseList)

  useEffect(() => {
    axios
        .get(`${apiUrl}`)
        .then((result) => {
          setWarehouseList(result.data)
        })
        .catch((err) => {
          console.log(err)
        })
  }, []);

  useEffect(() => {
    axios
        .get(`${inventoriesUrl}/${inventoryItemId.inventoryItemId}`)
        .then((result) => {
          setItem(result.data);
          setStatus(result.data.status);
        })
        .catch((err) => {
          console.log(err)
        })
  }, []);
  
  function renderQuantityForm(){
    return (
      <label className="details__form-container">
      <h6 className="details__form-title">Quantity</h6>
      <input
        className="details__form-input"
        type="text"
        onChange={handleQuantityChange}
        value={item.quantity}
      />
    </label>
    )
  }

  const isFormValid =
    itemName &&
    description &&
    category &&
    status &&
    quantity

  const handleItemNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleWarehouseIdChange = (event) => {
    setWarehouseId(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isFormValid) {
      axios
        .put(`${inventoriesUrl}/${inventoryItemId.inventoryItemId}`, {
          warehouse_id: warehouseId,
          item_name: itemName,
          description: description,
          category: category,
          status: status,
          quantity: quantity
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
    } else {
      alert("Failed to Update Inventory Item");
    }
  };

  if (!item){
    return "Loading"
  } else {
  //handleStatusChange(item.status)
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
                  value={item.item_name}
                  onChange={handleItemNameChange}
              />

              <label className="details__form-container">Description</label>
              <input
                  className="details__form-input"
                  type="text"
                  name="Street Address"
                  value={item.description}
                  onChange={handleDescriptionChange}
              />

              <label className="details__form-container">Category</label>
              <input
                  className="details__form-input"
                  type="text"
                  name="City"
                  value={item.category}
                  onChange={handleCategoryChange}
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
                checked={item.status === "In Stock"}
                onChange={handleStatusChange}
              />
              <label htmlFor="OutOfStock">Out of Stock</label>
              <input
                //className="details__form-input"
                type="radio"
                name="Stock"
                id="OutOfStock"
                value="Out of Stock"
                checked={item.status === "Out of Stock"}
                onChange={handleStatusChange}
              />
              {status === "In Stock" && renderQuantityForm()}
              <h6 className="details__form-title">Warehouse</h6>
              <input
                list="warehouseList"
                className="details__form-input"
                onChange={handleWarehouseIdChange}
                value={item.warehouse_name}
              />
              <datalist id="warehouseList">
                {warehouseList.map((item, key) => 
                  <option key={key} value={item.warehouse_name}/>)}
              </datalist>
            </div>
          </div>
          <div className="details__button-container">
            <button className="details__cancel">Cancel</button>
            <button className="details__save">Save</button>
          </div>
        </form>
      </div>
    </>
  )};
};

export default EditInventoryForm;
