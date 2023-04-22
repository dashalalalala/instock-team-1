import "./InventoryDetailsPage.scss";
import InventoryHeader from "../../Components/InventoryHeader/InventoryHeader";
import InventoryInfo from "../../Components/InventoryInfo/InventoryInfo";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { inventoriesUrl } from "../../utils.js";
import axios from "axios";

function InventoryDetailsPage() {
  const [inventoryData, setInventoryData] = useState(null);
  const { inventoryId } = useParams();

  useEffect(() => {
    axios
      .get(`${inventoriesUrl}/${inventoryId}`)
      .then((response) => {
        //console.log(response.data);
        setInventoryData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [inventoryId]);

  if (inventoryData === null) {
    return <main>Loading inventory data...</main>;
  }

  return (
    <div className="invDetails">
      <div className="invDetails__content">
        <InventoryHeader currentInventory={inventoryData} />
        <InventoryInfo currentInventory={inventoryData} />
      </div>
    </div>
  );
}

export default InventoryDetailsPage;
