import "./WarehouseInfo.scss";


function WarehouseInfo() {
	return (
		<div className="warehouse-info">
			<div className="warehouse-info__address">
				<h4 className="warehouse-info__title">WAREHOUSE ADDRESS:</h4>
				<p className="warehouse-info__body">33 Pearl Street SW, Washington, USA</p>
			</div>
			<div className="warehouse-info__container">
                <div className="warehouse-info__contact--name">
                    <h4 className="warehouse-info__title">CONTACT NAME:</h4>
                    <div>
                        <p className="warehouse-info__body">Graeme Lyon</p>
                        <p className="warehouse-info__body">Warehouse Manager</p>
                    </div>
                </div>
                <div className="warehouse-info__contact--info">
                    <h4 className="warehouse-info__title">CONTACT INFORMATION:</h4>
                    <div>
                        <p className="warehouse-info__body">+1 (647) 504-0911</p>
                        <p className="warehouse-info__body">glyon@instock.com</p>
                    </div>
                </div>
            </div>
		</div>
	);
}

export default WarehouseInfo;