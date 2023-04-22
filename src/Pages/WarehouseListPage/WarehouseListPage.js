import "./WarehouseListPage.scss";
import Search from "../../Components/Search/Search";
import TabletDesktopItem from "../../Components/WarehouseList/WarehouseTabletDesktop";
import MobileItem from "../../Components/WarehouseList/WarehouseMobile";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../../utils.js";
import axios from "axios";

function WarehouseListPage() {
	const navigate = useNavigate();
	const [list, setList] = useState([]);
	const searchTitle = "Warehouses";
	const searchButton = "+ Add New Warehouse";
	const path = "/warehouses/add";

	useEffect(() => {
		axios
			.get(`${apiUrl}`)
			.then((response) => {
				setList(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	useEffect(() => {
		if (list.length > 0) {
			navigate(`/warehouses`);
		}
	}, [list, navigate]);

	return (
		<div className="warehouse-card">
			<div className="warehouse-list">
				<Search
					searchTitle={searchTitle}
					searchButton={searchButton}
					path={path}
				/>
				<MobileItem list={list} />
				<TabletDesktopItem list={list} />
			</div>
		</div>
	);
}

export default WarehouseListPage;
