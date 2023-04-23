import "./AddWarehouse.scss";
import AddWarehousesForm from "../../Components/AddWarehousesForm/AddWarehousesForm";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";

function AddWarehouse() {
  return (
    <>
      <div className="add-warehouse">
        <div className="add-warehouse__container">
          <Link to="/warehouses">
            <img
              className="add-warehouse__back-icon"
              src={backArrow}
              alt="Back Arrow Icon"
            ></img>
          </Link>
          <h1 className="add-warehouse__title">Add New Warehouse</h1>
        </div>
        <div className="add-warehouse__component-container">
          <AddWarehousesForm />
        </div>
      </div>
    </>
  );
}
export default AddWarehouse;
