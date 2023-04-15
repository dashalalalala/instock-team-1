import "./WarehouseInfo.scss";


function WarehouseInfo() {
	return (
		<div className="search">
			<div className="warehouse__address">
				<h4 className="title">WAREHOUSE ADDRESS:</h4>
				<p className="body">33 Pearl Street SW, Washington, USA</p>
			</div>
			<div className="warehouse__contact--name">
				<h4 className="title">CONTACT NAME:</h4>
				<p className="body">Graeme Lyon</p>
                <p className="body">Warehouse Manager</p>
			</div>
			<div className="warehouse__contact--info">
				<h4 className="title">CONTACT INFORMATION:</h4>
				<p className="body">+1 (647) 504-0911</p>
				<p className="body">glyon@instock.com</p>
			</div>
		</div>
	);
}

export default WarehouseInfo;