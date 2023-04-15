import "./WarehouseHeader.scss";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import edit from "../../assets/icons/edit-24px.svg";
import { useNavigate } from "react-router-dom";

function WarehouseHeader() {
	const navigate = useNavigate();
    
    return (
		<div className="search">
			<div>
            {/* <img onClick={() => {
                console.log("Clicked on arrow");
                redirect("/warehouses");
                }} className="" src={arrowBack} alt="back arrow"></img>
            </div> */}
            <img onClick={() => {
                console.log("Clicked on arrow");
                navigate("/warehouses");
                }} className="" src={arrowBack} alt="back arrow"></img>
            </div>
            

            <h1 className="search__header">[Washington]</h1>
			{/* <form className="nav">
				<div className="form">
					<div>
						<img className="form__input--icon" src={searchIcon} alt=""></img>
					</div>
					<input className="form__input" placeholder="Search..." />
				</div>
				<button className="form__button">+ Add New Warehouse</button>
			</form> */}
		</div>
	);
}

export default WarehouseHeader;