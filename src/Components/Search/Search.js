import "./Search.scss";
import searchIcon from "../../assets/icons/search-24px.svg";

function Search() {
	return (
		<div className="search">
			<h1 className="search__header">Warehouses</h1>
			<form className="nav">
				<div className="form">
					<div>
						<img className="form__input--icon" src={searchIcon} alt=""></img>
					</div>
					<input className="form__input" placeholder="Search..." />
				</div>
				<button className="form__button">+ Add New Warehouse</button>
			</form>
		</div>
	);
}

export default Search;
