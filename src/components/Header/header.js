import "./header.scss";

import logo from "../assets/logo/InStock-Logo_1x.png";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__logo-container">
          <img className="header__logo" src={logo} alt="Instock Logo"></img>
        </div>
        <nav className="header__nav">
          <button className="header__nav-button">Warehouses</button>
          <button className="header__nav-button">Inventory</button>
        </nav>
      </div>
    </>
  );
};

export default Header;
