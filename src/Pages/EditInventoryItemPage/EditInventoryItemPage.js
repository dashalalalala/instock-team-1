import "./EditInventoryItemPage.scss";
import EditInventoryForm from "../../Components/EditInventoryForm/EditInventoryForm";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";

function EditInventoryItemPage() {
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
          <EditInventoryForm />
        </div>
      </div>
    </>
  );
}
export default EditInventoryItemPage;