import InventoryMobile from "../../Components/InventoryList/InventoryMobile";
import InventoryTabletDesktop from "../../Components/InventoryList/InventoryTabletDesktop";
import Search from "../../Components/Search/Search";
import { inventoriesUrl } from "../../utils";
import { useEffect, useState } from "react";
import axios from "axios";
import "./InventoryListPage.scss";

function InventoryListPage() {
	const [list, setList] = useState([]);
	const searchTitle = "Inventory";
	const searchButton = "+ Add New Item";
	const path = "/inventories/add";

	useEffect(() => {
		axios
			.get(`${inventoriesUrl}`)
			.then((response) => {
				setList(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [list]);

	return (
		<div className="list-card">
			<div className="inventory-list">
				<Search
					searchTitle={searchTitle}
					searchButton={searchButton}
					path={path}
				/>
				<InventoryMobile list={list} />
				<InventoryTabletDesktop list={list} />
			</div>
		</div>
	);
}

export default InventoryListPage;
