import "./WarehouseListPage.scss";
import Search from "../../Components/Search/Search";
import WarehouseListMobile from "../../Components/WarehouseList/WarehouseListMobile";
import WarehouseListTabletDesktop from "../../Components/WarehouseList/WarehouseListTabletDesktop";
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
	}, [list,setList]);

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
				<WarehouseListMobile list={list} />
				<WarehouseListTabletDesktop list={list} setList={setList}/>
			</div>
		</div>
	);
}

export default WarehouseListPage;
