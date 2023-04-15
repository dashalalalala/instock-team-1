import "./SingleWarehouse.scss";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";

function SingleWarehouse() {
	return (
		<>
			<div className="nav-responsive">
				<h4 className="nav-responsive__title">
					WAREHOUSE
					<img className="nav-responsive__icon" src={sortIcon} alt=""></img>
				</h4>
				<h4 className="nav-responsive__title">
					ADDRESS
					<img className="nav-responsive__icon" src={sortIcon} alt=""></img>
				</h4>
				<h4 className="nav-responsive__title">
					CONTACT NAME
					<img className="nav-responsive__icon" src={sortIcon} alt=""></img>
				</h4>
				<h4 className="nav-responsive__title">
					CONTACT INFORMATION
					<img className="nav-responsive__icon" src={sortIcon} alt=""></img>
				</h4>
				<h4 className="nav-responsive__title">ACTIONS</h4>
			</div>
			<div className="warehouse">
				<div className="warehouse__name">
					<h4 className="title">WAREHOUSE</h4>
					<p className="label">
						Manhattan
						<img className="body__icon" src={chevronIcon} alt=""></img>
					</p>
				</div>
				<div className="warehouse__contact--name">
					<h4 className="title">CONTACT NAME</h4>
					<p className="body">Parmin Aujla</p>
				</div>
				<div className="warehouse__address">
					<h4 className="title">ADDRESS</h4>
					<p className="body">503 Broadway, New York, USA</p>
				</div>
				<div className="warehouse__contact--info">
					<h4 className="title">CONTACT INFORMATION</h4>
					<p className="body">+1 (629) 555-0129</p>
					<p className="body">paujla@instock.com</p>
				</div>
				<div className="icons">
					<div>
						<img className="icons__img" src={deleteIcon} alt="" />
					</div>
					<div>
						<img className="icons__img" src={editIcon} alt="" />
					</div>
				</div>
			</div>
		</>
	);
}

export default SingleWarehouse;