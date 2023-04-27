import "./WarehouseDetailsPage.scss";
import WarehouseHeader from "../../Components/WarehouseHeader/WarehouseHeader";
import WarehouseInfo from "../../Components/WarehouseInfo/WarehouseInfo";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiUrl } from "../../utils.js";
import axios from "axios";
import InventoryListMobile from "../../Components/InventoryList/InventoryListMobile";
import InventoryListTabletDesktop from "../../Components/InventoryList/InventoryListTabletDesktop";

function WarehouseDetailsPage() {
	const [warehouseData, setWarehouseData] = useState(null);
	const [inventoriesData, setInventoriesData] = useState([]);
	const { warehouseId } = useParams();

	useEffect(() => {
		axios
			.get(`${apiUrl}/${warehouseId}`)
			.then((response) => {
				setWarehouseData(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [warehouseId]);

	useEffect(() => {
		axios
			.get(`${apiUrl}/${warehouseId}/inventories`)
			.then((response) => {
				setInventoriesData(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [warehouseId]);

	if (warehouseData === null) {
		return <main>Loading warehouse data...</main>;
	}

	return (
		<div className="wh">
			<div className="wh__content">
				<WarehouseHeader currentWarehouse={warehouseData} />
				<WarehouseInfo currentWarehouse={warehouseData} />
				<InventoryListMobile list={inventoriesData} hideWarehouseDiv />
				<InventoryListTabletDesktop list={inventoriesData} hideWarehouseDiv />
			</div>
		</div>
	);
}

export default WarehouseDetailsPage;
