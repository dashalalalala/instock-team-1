import "./WarehousePage.scss";
import Search from "../../Components/Search/Search";
import SingleWarehouse from "../../Components/SingleWarehouse/SingleWarehouse";

function WarehousePage() {
	return (
		<div>
			<div className="warehouse-list">
				<Search />
				<SingleWarehouse />
			</div>
		</div>
	);
}

export default WarehousePage;
