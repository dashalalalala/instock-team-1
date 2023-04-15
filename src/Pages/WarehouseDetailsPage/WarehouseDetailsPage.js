import "./WarehouseDetailsPage.scss";
import WarehouseHeader from "../../Components/WarehouseHeader/WarehouseHeader";
import WarehouseInfo from "../../Components/WarehouseInfo/WarehouseInfo";

function WarehouseDetailsPage() {
    return (
        <div>
            <div className="warehouse">
				{/* <div className="warehouse__name">
					<h4 className="title">WAREHOUSE</h4>
					<p className="label">
						Manhattan
						<img className="body__icon" src={chevronIcon} alt=""></img>
					</p>
				</div> */}
				<WarehouseHeader />
				<WarehouseInfo />
			</div>
        </div>
    );
}

export default WarehouseDetailsPage;