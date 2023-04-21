import "./WarehouseListPage.scss";
import Search from "../../Components/Search/Search";
import TabletDesktopItem from "../../Components/WarehouseListResponsive/TabletDesktopItem/TabletDesktopItem";
import MobileItem from "../../Components/WarehouseListResponsive/MobileItem/MobileItem";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../../utils.js";
import axios from "axios";
import { useDisclosure } from "@chakra-ui/react";

function WarehouseListPage() {
	const navigate = useNavigate();
	const [list, setList] = useState([]);

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
		<div className="warehouse-list">
			<Search />
			<MobileItem list={list} />
			<TabletDesktopItem list={list} />
		</div>
	);
}

export default WarehouseListPage;
