import "./EditInventoryItemPage.scss";
import EditInventoryForm from "../../Components/EditInventoryForm/EditInventoryForm";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import { Link, useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl, inventoriesUrl } from "../../utils";

function EditInventoryItemPage(){

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

  useEffect(() => {
    axios
        .get(`${inventoriesUrl}/${inventoryItemId.inventoryItemId}`)
        .then((result) => {
          setItem(result.data);
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
          <EditInventoryForm item={item} setItem={setItem} warehouseList={warehouseList} setWarehouseList={setWarehouseList}/>
        </div>
      </div>
    </>
  );
}
export default EditInventoryItemPage;