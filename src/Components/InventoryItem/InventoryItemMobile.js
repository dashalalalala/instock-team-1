import "../../styles/listsStyling/List.scss";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import { Link, useNavigate } from "react-router-dom";
import { VStack, useDisclosure } from "@chakra-ui/react";

import DeleteModal from "../DeleteModal/DeleteModal";

function InventoryItemMobile(props){
    const navigate = useNavigate();

    const {isOpen, onClose, onOpen} = useDisclosure();

    return (
        <div className="inventory" key={props.id}>
						<div className="inventory__name">
							<h4 className="title">INVENTORY ITEM</h4>
							<Link
								to={`/inventories/${props.id}`}
								style={{ textDecoration: "none" }}
							>
								<p className="label" key={props.id}>
									{props.item_name}
									<img className="body__icon" src={chevronIcon} alt=""></img>
								</p>
							</Link>
						</div>
						<div className="inventory__status">
							<h4 className="title">STATUS</h4>
							<p
								className={`body ${
									props.status === "In Stock" ? "in-stock" : "out-of-stock"
								}`}
							>
								{props.status}
							</p>
						</div>
						<div className="inventory__category">
							<h4 className="title">CATEGORY</h4>
							<p className="body">{props.category}</p>
						</div>
						<VStack className="vstack">
							<div className="inventory__qty">
								<h4 className="title">QTY</h4>
								<p className="body">{props.quantity}</p>
							</div>
							{!props.hideWarehouseDiv && (
								<div className="inventory__warehouse">
									<h4 className="title">WAREHOUSE</h4>
									<p className="body">{props.warehouse_name}</p>
								</div>
							)}
						</VStack>
						<div className="icons">
							<div>
								<img
									onClick={onOpen}
									className="icons__img"
									src={deleteIcon}
									alt=""
								/>
							</div>
							<DeleteModal selectedElement={props.item_name} selectedElementId={props.id} isOpen={isOpen} onClose={onClose} isWarehouse={false}/>
							<div>
								<img
									onClick={() => {
										navigate(`/inventories/${props.id}/edit`);
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

export default InventoryItemMobile;