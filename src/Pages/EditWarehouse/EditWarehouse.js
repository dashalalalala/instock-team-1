import "./EditWarehouse.scss";
import EditWarehouseForm from "../../Components/EditWarehouseForm/EditWarehouseForm";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../../utils";

function EditWarehouse() {
  const [details, setDetails] = useState();
  const warehouseId = useParams();

  useEffect(() => {
    axios
      .get(`${apiUrl}/${warehouseId.warehouseId}`)
      .then((result) => {
        console.log(result.data);
        setDetails(result.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!details) {
    return "Loading";
  } else {
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
            <EditWarehouseForm warehouseDetails={details} />
          </div>
        </div>
      </>
    );
  }
}
export default EditWarehouse;
