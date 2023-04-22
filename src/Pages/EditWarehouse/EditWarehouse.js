import "./EditWarehouse.scss";
import WarehouseDetails from "../../components/EditWarehouseForm/EditWarehouseForm";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";

function EditWarehouse() {
  return (
    <>
      <div className="page">
        <div className="page__container">
          <Link to="/warehouses">
            <img
              className="page__back-icon"
              src={backArrow}
              alt="Back Arrow Icon"
            ></img>
          </Link>
          <h1 className="page__title">Edit Warehouse</h1>
        </div>
        <div className="page__component-container">
          <WarehouseDetails />
        </div>
      </div>
    </>
  );
}
export default EditWarehouse;
