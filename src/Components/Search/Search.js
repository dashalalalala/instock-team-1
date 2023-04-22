import "./Search.scss";
import searchIcon from "../../assets/icons/search-24px.svg";
import { useNavigate } from "react-router-dom";

function Search(props) {
	const navigate = useNavigate();

	return (
		<div className="search">
			<h1 className="search__header">{props.searchTitle}</h1>
			<form className="nav">
				<div className="form">
					<div>
						<img className="form__input--icon" src={searchIcon} alt=""></img>
					</div>
					<input className="form__input" placeholder="Search..." />
				</div>
				<button
					onClick={() => navigate(`${props.path}`)}
					className="form__button"
				>
					{props.searchButton}
				</button>
			</form>
		</div>
	);
}

export default Search;
