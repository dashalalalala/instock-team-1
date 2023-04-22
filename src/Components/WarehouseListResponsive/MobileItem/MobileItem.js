import "./MobileItem.scss";

import MobileItemTableItem from "./MobileItemTableItem";


function MobileItem({ list }) {
	return (
		<>
			{list
				.map((list, index) => (
					<MobileItemTableItem 
						key={index}
						id={list.id}
						warehouse_name={list.warehouse_name}
						address={list.address}
						city={list.city}
						country={list.country}
						contact_name={list.contact_name}
						contact_phone={list.contact_phone}
						contact_email={list.contact_email}/>
			))}
		</>
	);
}

export default MobileItem;
