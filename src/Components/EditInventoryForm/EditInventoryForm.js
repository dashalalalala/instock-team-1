import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiUrl, inventoriesUrl } from "../../utils";
import "./EditInventoryForm.scss";

const EditInventoryForm = () => {
  const [itemName, setItemName] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  const [status, setStatus] = useState();
  const [quantity, setQuantity] = useState();
  const [warehouseId, setWarehouseId] = useState();

  const [warehouseList, setWarehouseList] = useState();

  const navigate = useNavigate();
  const inventoryItemId = useParams();

  useEffect(()=> {
    axios
        .get(`${apiUrl}`)
        .then((result) => {
          console.log("FROMUSE", result.data)
          setWarehouseList(result.data);
        })
        .catch((err) => {
          console.log(err)
        })
  }, []);

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

  return (
    <>
      <div className="details">
        <form onSubmit={handleSubmit}>
          <div className="details__form">
            <div className="details__form-warehouse">
              <h2 className="details__form-subheader">Item Details</h2>
              <label className="details__form-container">
                <h6 className="details__form-title">Item Name</h6>
                <input
                  className="details__form-input"
                  type="text"
                  name="Warehouse Name"
                  placeholder="Washington"
                  onChange={handleItemNameChange}
                />
              </label>

              <label className="details__form-container">
                <h6 className="details__form-title">Description</h6>
                <input
                  className="details__form-input"
                  type="text"
                  name="Street Address"
                  placeholder="33 Pearl Street SW"
                  onChange={handleDescriptionChange}
                />
              </label>

              <label className="details__form-container">
                <h6 className="details__form-title">Category</h6>
                <input
                  className="details__form-input"
                  type="text"
                  name="City"
                  placeholder="Washington"
                  onChange={handleCategoryChange}
                />
              </label>
            </div>
            <div className="details__form-contact">
              <h2 className="details__form-subheader">Item Availabilty</h2>

              <label className="details__form-container">
                <h6 className="details__form-title">Status</h6>
                <input
                  className="details__form-input"
                  type="text"
                  name="Contact Name"
                  placeholder="Graeme Lyon"
                  onChange={handleStatusChange}
                />
              </label>

              <label className="details__form-container">
                <h6 className="details__form-title">Quantity</h6>
                <input
                  className="details__form-input"
                  type="text"
                  name="Position"
                  placeholder="Warehouse Manager"
                  onChange={handleQuantityChange}
                />
              </label>

              <label className="details__form-container">
                <h6 className="details__form-title">Warehouse</h6>
                <input
                  list="warehouseList"
                  className="details__form-input"
                  onChange={handleWarehouseIdChange}
                />
                <datalist id="warehouseList">
                  {warehouseList.map((item, key) => <option key={key} value={item.warehouse_name}/>)}
                </datalist>
              </label>
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
