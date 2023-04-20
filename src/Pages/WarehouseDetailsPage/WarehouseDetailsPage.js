import "./WarehouseDetailsPage.scss";
import WarehouseHeader from "../../Components/WarehouseHeader/WarehouseHeader";
import WarehouseInfo from "../../Components/WarehouseInfo/WarehouseInfo";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiUrl } from "../../utils.js";
import axios from "axios";

function WarehouseDetailsPage() {
    const [warehouseData, setWarehouseData] = useState(null);
    const { warehouseId } = useParams();

    useEffect(() => {
        axios
            .get(`${apiUrl}/${warehouseId}`)
            .then((response) => {
                setWarehouseData(response.data);
            }
            ).catch((error) => {
                console.error(error);
            }
        );
    }, [warehouseId]);

    if (warehouseData === null) {
        return <main>Loading warehouse data...</main>;
    }

    return (
        <div className="wh">
			<div className="wh__content">
                <WarehouseHeader currentWarehouse={warehouseData} />
                <WarehouseInfo currentWarehouse={warehouseData}/>
			</div>
        </div>
    );
}

export default WarehouseDetailsPage;