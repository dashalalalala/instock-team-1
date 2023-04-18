import "./WarehouseDetailsPage.scss";
import WarehouseHeader from "../../Components/WarehouseHeader/WarehouseHeader";
import WarehouseInfo from "../../Components/WarehouseInfo/WarehouseInfo";

function WarehouseDetailsPage() {
    return (
        <div className="warehouse">
			<div className="warehouse__content">
				<WarehouseHeader />
				<WarehouseInfo />
			</div>
        </div>
    );
}

export default WarehouseDetailsPage;