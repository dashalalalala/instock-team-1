import "./AddInventoryItemPage.scss";
import AddInventoryItemForm from "../../Components/AddInventoryItemForm/AddInventoryItemForm";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import { Link} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl, inventoriesUrl} from "../../utils";

function AddInventoryItemPage(){

  const [warehouseList, setWarehouseList] = useState();

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

  return (
    <>
      <div className="inventoryPage">
        <div className="inventoryPage__container">
          <Link to="/inventories">
            <img
              className="inventoryPage__back-icon"
              src={backArrow}
              alt="Back Arrow Icon"
            ></img>
          </Link>
          <h1 className="inventoryPage__title">Add New Inventory Item</h1>
        </div>
        <div className="inventoryPage__component-container">
          <AddInventoryItemForm list={warehouseList}/>
        </div>
      </div>
    </>
  );
}
export default AddInventoryItemPage;