import "../../styles/listsStyling/List.scss";
import InventoryItemMobile from "../InventoryItem/InventoryItemMobile";

function InventoryListMobile({ list, hideWarehouseDiv }) {
	return (
		<>
			{list && 
				list.map((list, index) => (
					<InventoryItemMobile
						key={index}
						id={list.id}
						item_name={list.item_name}
						status={list.status}
						category={list.category}
						quantity={list.quantity}
						warehouse_name={list.warehouse_name}
						hideWarehouseDiv={hideWarehouseDiv}
					/>
			))}
		</>
	);
}

export default InventoryListMobile;
