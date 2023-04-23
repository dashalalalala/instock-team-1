import "../../styles/listsStyling/List.scss";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import { Link, useNavigate } from "react-router-dom";
import { VStack, useDisclosure } from "@chakra-ui/react";

import DeleteModal from "../DeleteModal/DeleteModal";



function InventoryMobile({ list, hideWarehouseDiv }) {
	const navigate = useNavigate();

	const {isOpen, onClose, onOpen} = useDisclosure();

	return (
		<>
			{list &&
				list.map((list) => (
					<div className="inventory" key={list.id}>
						<div className="inventory__name">
							<h4 className="title">INVENTORY ITEM</h4>
							<Link
								to={`/inventories/${list.id}`}
								style={{ textDecoration: "none" }}
							>
								<p className="label" key={list.id}>
									{list.item_name}
									<img className="body__icon" src={chevronIcon} alt=""></img>
								</p>
							</Link>
						</div>
						<div className="inventory__status">
							<h4 className="title">STATUS</h4>
							<p
								className={`body ${
									list.status === "In Stock" ? "in-stock" : "out-of-stock"
								}`}
							>
								{list.status}
							</p>
						</div>
						<div className="inventory__category">
							<h4 className="title">CATEGORY</h4>
							<p className="body">{list.category}</p>
						</div>
						<VStack className="vstack">
							<div className="inventory__qty">
								<h4 className="title">QTY</h4>
								<p className="body">{list.quantity}</p>
							</div>
							{!hideWarehouseDiv && (
								<div className="inventory__warehouse">
									<h4 className="title">WAREHOUSE</h4>
									<p className="body">{list.warehouse_name}</p>
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
							<DeleteModal selectedElement={list.item_name} selectedElementId={list.id} isOpen={isOpen} onClose={onClose} isWarehouse={false}/>
							<div>
								<img
									onClick={() => {
										navigate(`/inventories/${list.id}/edit`);
									}}
									className="icons__img"
									src={editIcon}
									alt=""
								/>
							</div>
						</div>
					</div>
				))}
		</>
	);
}

export default InventoryMobile;
