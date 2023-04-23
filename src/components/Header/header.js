import "./header.scss";
import logo from "../../assets/logo/InStock-Logo_1x.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__logo-container">
          <img className="header__logo" src={logo} alt="Instock Logo"></img>
        </div>
        <nav className="header__nav">
          <a href="/warehouses" className="header__nav-button">
            Warehouses
          </a>
          <a href="/inventories" className="header__nav-button">
            Inventory
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
