import "./WarehouseListItem.scss";
import MobileItem from "./MobileItem/MobileItem";
import TabletDesktopItem from "./TabletDesktopItem/TabletDesktopItem";

function WarehouseListItem() {
	return (
		<>
			<MobileItem />
			<TabletDesktopItem />
		</>
	);
}

export default WarehouseListItem;
