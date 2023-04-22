import "./InventoryHeader.scss";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import edit from "../../assets/icons/edit-24px.svg";
import { useNavigate } from "react-router-dom";

function InventoryHeader({ currentInventory }) {
  const navigate = useNavigate();

  return (
    <div className="inventory-general">
      <div className="inventory-general__left">
        <div className="inventory-general__back-container">
          <img
            onClick={() => {
              navigate("/inventories");
            }}
            className="inventory-general__back"
            src={arrowBack}
            alt="back arrow"
          ></img>
        </div>
        <h1 className="inventory-general__header">
          {currentInventory.item_name}
        </h1>
      </div>
      <button
        className="inventory-general__button"
        onClick={() => {
          navigate(`/inventories/${currentInventory.id}/edit`);
        }}
      >
        <img className="inventory-general__edit" src={edit} alt="edit"></img>
        <p className="inventory-general__edit-text">Edit</p>
      </button>
    </div>
  );
}

export default InventoryHeader;
