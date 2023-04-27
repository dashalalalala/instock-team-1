import "./WarehouseInfo.scss";

function WarehouseInfo({ currentWarehouse }) {
	return (
		<div className="warehouse-info">
			<div className="warehouse-info__address">
				<h4 className="warehouse-info__title">WAREHOUSE ADDRESS:</h4>
				<p className="warehouse-info__body">{currentWarehouse.address},</p>{" "}
				<p className="warehouse-info__body">
					{currentWarehouse.city}, {currentWarehouse.country}
				</p>
			</div>
			<div className="warehouse-info__container">
				<div className="warehouse-info__contact--name">
					<h4 className="warehouse-info__title">CONTACT NAME:</h4>
					<div>
						<p className="warehouse-info__body">
							{currentWarehouse.contact_name}
						</p>
						<p className="warehouse-info__body">
							{currentWarehouse.contact_position}
						</p>
					</div>
				</div>
				<div className="warehouse-info__contact--info">
					<h4 className="warehouse-info__title">CONTACT INFORMATION:</h4>
					<div>
						<p className="warehouse-info__body">
							{currentWarehouse.contact_phone}
						</p>
						<p className="warehouse-info__body">
							{currentWarehouse.contact_email}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WarehouseInfo;
