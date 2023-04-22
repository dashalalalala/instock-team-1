import "./WarehouseHeader.scss";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import edit from "../../assets/icons/edit-24px.svg";
import { useNavigate } from "react-router-dom";

function WarehouseHeader({ currentWarehouse }) {
  const navigate = useNavigate();

  return (
    <div className="warehouse-general">
      <div className="warehouse-general__left">
        <div className="warehouse-general__back-container">
          <img
            onClick={() => {
              navigate("/warehouses");
            }}
            className="warehouse-general__back"
            src={arrowBack}
            alt="back arrow"
          ></img>
        </div>
        <h1 className="warehouse-general__header">
          {currentWarehouse.warehouse_name}
        </h1>
      </div>
      <button
        className="warehouse-general__button"
        onClick={() => {
          navigate(`/warehouses/${currentWarehouse.id}/edit`);
        }}
      >
        <img className="warehouse-general__edit" src={edit} alt="edit"></img>
        <p className="warehouse-general__edit-text">Edit</p>
      </button>
    </div>
  );
}

export default WarehouseHeader;
