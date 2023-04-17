import "./MobileItem.scss";
import chevronIcon from "../../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../../assets/icons/edit-24px.svg";
import { Link } from "react-router-dom";

function MobileItem({ list }) {
	return (
		<>
			{list.map((list) => (
				<div className="warehouse" key={list.id}>
					<div className="warehouse__name">
						<h4 className="title">WAREHOUSE</h4>
						<Link
							to={`/warehouses/${list.id}`}
							style={{ textDecoration: "none" }}
						>
							<p className="label" key={list.id}>
								{list.warehouse_name}
								<img className="body__icon" src={chevronIcon} alt=""></img>
							</p>
						</Link>
					</div>
					<div className="warehouse__contact--name">
						<h4 className="title">CONTACT NAME</h4>
						<p className="body">{list.contact_name}</p>
					</div>
					<div className="warehouse__address">
						<h4 className="title">ADDRESS</h4>
						<p className="body">
							{list.address}, {list.city}, {list.country}
						</p>
					</div>
					<div className="warehouse__contact--info">
						<h4 className="title">CONTACT INFORMATION</h4>
						<p className="body">{list.contact_phone}</p>
						<p className="body">{list.contact_email}</p>
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
			))}
		</>
	);
}

export default MobileItem;
