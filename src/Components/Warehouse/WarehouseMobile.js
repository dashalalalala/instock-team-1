import "../../styles/listsStyling/List.scss";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/hooks";

import DeleteModal from "../DeleteModal/DeleteModal";

function WarehouseMobile(props){
    const navigate = useNavigate();

    const {isOpen, onClose, onOpen} = useDisclosure();

    return (
            <div className="warehouse" key={props.id}>
                <div className="warehouse__name">
                    <h4 className="title">WAREHOUSE</h4>
                    <Link
                        to={`/warehouses/${props.id}`}
                        style={{ textDecoration: "none" }}
                    >
                        <p className="label" key={props.id}>
                            {props.warehouse_name}
                            <img className="body__icon" src={chevronIcon} alt=""></img>
                        </p>
                    </Link>
                </div>
                <div className="warehouse__contact--name">
                    <h4 className="title">CONTACT NAME</h4>
                    <p className="body">{props.contact_name}</p>
                </div>
                <div className="warehouse__address">
                    <h4 className="title">ADDRESS</h4>
                    <p className="body">
                        {props.address}, {props.city}, {props.country}
                    </p>
                </div>
                <div className="warehouse__contact--info">
                    <h4 className="title">CONTACT INFORMATION</h4>
                    <p className="body">{props.contact_phone}</p>
                    <p className="body">{props.contact_email}</p>
                </div>
                <div className="icons">
                    <div>
                        <img
                            onClick={onOpen}
                            className="icons__img"
                            src={deleteIcon}
                            alt=""
                        />
                    </div>
                    <DeleteModal selectedWarehouseName={props.warehouse_name} selectedWarehouseId={props.id} isOpen={isOpen} onClose={onClose}/>
                    <div>
                        <img
                            onClick={() => {
                                navigate(`/warehouses/${props.id}/edit`);
                            }}
                            className="icons__img"
                            src={editIcon}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        )
}

export default WarehouseMobile;