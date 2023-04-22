import "./WarehouseDetailsPage.scss";
import WarehouseHeader from "../../Components/WarehouseHeader/WarehouseHeader";
import WarehouseInfo from "../../Components/WarehouseInfo/WarehouseInfo";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiUrl, inventoriesUrl } from "../../utils.js";
import axios from "axios";
import InventoryMobile from "../../Components/InventoryList/InventoryMobile";
import InventoryTabletDesktop from "../../Components/InventoryList/InventoryTabletDesktop";

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
		// if (warehouseData) console.log(warehouseData);
		const warehouseName = warehouseData?.warehouse_name;
		axios
			.get(`${inventoriesUrl}`)
			.then((response) => {
				const filteredInventories = response.data.filter(
					(inventory) => inventory.warehouse_name === warehouseName
				);
				setInventoriesData(filteredInventories);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [warehouseData]);

	if (warehouseData === null) {
		return <main>Loading warehouse data...</main>;
	}

	return (
		<div className="wh">
			<div className="wh__content">
				<WarehouseHeader currentWarehouse={warehouseData} />
				<WarehouseInfo currentWarehouse={warehouseData} />
				<InventoryMobile list={inventoriesData} hideWarehouseDiv />
				<InventoryTabletDesktop list={inventoriesData} hideWarehouseDiv />
			</div>
		</div>
	);
}

export default WarehouseDetailsPage;
