import "./header.scss";
import logo from "../../assets/logo/InStock-Logo_1x.png";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
	const location = useLocation();
	const [isActive, setActive] = useState("Warehouses");

	useEffect(() => {
		if (location.pathname === "/warehouses") {
			setActive("Warehouses");
		} else if (location.pathname === "/inventories") {
			setActive("Inventories");
		}
	}, [location]);

	return (
		<>
			<div className="header">
				<div className="header__logo-container">
					<img className="header__logo" src={logo} alt="Instock Logo"></img>
				</div>
				<nav className="header__nav">
					<Link
						to="/warehouses"
						className={
							isActive === "Warehouses"
								? "header__nav-button active"
								: "header__nav-button"
						}
						onClick={() => setActive("Warehouses")}
					>
						Warehouses
					</Link>
					<Link
						to="/inventories"
						className={
							isActive === "Inventories"
								? "header__nav-button active"
								: "header__nav-button"
						}
						onClick={() => setActive("Inventories")}
					>
						Inventory
					</Link>
				</nav>
			</div>
		</>
	);
};

export default Header;
