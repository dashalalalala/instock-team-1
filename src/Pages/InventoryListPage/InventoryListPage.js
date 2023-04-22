import InventoryMobile from "../../Components/InventoryList/InventoryMobile/InventoryMobile";
import Search from "../../Components/Search/Search";
import { inventoriesUrl } from "../../utils";
import { useEffect, useState } from "react";
import axios from "axios";
import "./InventoryListPage.scss";
import InventoryTabletDesktop from "../../Components/InventoryList/InventoryTabletDesktop/InventoryTabletDesktop";

function InventoryListPage() {
	const [list, setList] = useState([]);
	const searchTitle = "Inventory";
	const searchButton = "+ Add New Item";
	const path = `${inventoriesUrl}/add`;

	useEffect(() => {
		axios
			.get(`${inventoriesUrl}`)
			.then((response) => {
				setList(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	return (
		<div className="inventory-list">
			<Search
				searchTitle={searchTitle}
				searchButton={searchButton}
				path={path}
			/>
			<InventoryMobile list={list} />
			<InventoryTabletDesktop list={list} />
		</div>
	);
}

export default InventoryListPage;
