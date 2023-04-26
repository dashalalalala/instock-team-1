import "./AddInventoryItemPage.scss";
import AddInventoryItemForm from "../../Components/EditInventoryForm/EditInventoryForm";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import { Link, useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl, inventoriesUrl } from "../../utils";

function AddInventoryItemPage(){

  const inventoryItemId = useParams();

  const [warehouseList, setWarehouseList] = useState();
  const [item, setItem] = useState();

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
      <div className="page">
        <div className="page__container">
          <Link to="/inventories">
            <img
              className="page__back-icon"
              src={backArrow}
              alt="Back Arrow Icon"
            ></img>
          </Link>
          <h1 className="page__title">Edit Inventory Item</h1>
        </div>
        <div className="page__component-container">
          <AddInventoryItemForm item={item} warehouseList={warehouseList}/>
        </div>
      </div>
    </>
  );
}
export default AddInventoryItemPage;