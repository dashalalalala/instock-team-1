import "./WarehouseListPage.scss";
import Search from "../../Components/Search/Search";
import WarehouseListItem from "../../Components/WarehouseListItem/WarehouseListItem";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../../utils.js";
import axios from "axios";

function WarehouseListPage() {
	const navigate = useNavigate();
	const [list, setList] = useState([]);

	useEffect(() => {
		axios.get(`${apiUrl}`).then((response) => {
			setList(response.data).catch((error) => {
				console.error(error);
			});
		});
	});

	return (
		<div>
			<div className="warehouse-list">
				<Search />
				<WarehouseListItem />
			</div>
		</div>
	);
}

export default WarehouseListPage;
