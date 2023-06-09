import "./TabletDesktopItem.scss";
import sortIcon from "../../../assets/icons/sort-24px.svg";

import TabletDesktopItemTableItem from "./TabletDesktopItemTableItem";

import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	TableContainer,
	HStack,
} from "@chakra-ui/react";

function TabletDesktopItem({ list }) {
	return (
		<TableContainer className="chakra-table">
			<Table variant="simple" overflowX="auto" size="md">
				<Thead className="responsive">
					<Tr>
						<Th>
							<HStack>
								<p className="responsive__title">WAREHOUSE</p>
								<img className="responsive__icon" src={sortIcon} alt=""></img>
							</HStack>
						</Th>
						<Th>
							<HStack>
								<p className="responsive__title">ADDRESS</p>
								<img className="responsive__icon" src={sortIcon} alt=""></img>
							</HStack>
						</Th>
						<Th>
							<HStack>
								<p className="responsive__title">CONTACT NAME</p>
								<img className="responsive__icon" src={sortIcon} alt=""></img>
							</HStack>
						</Th>
						<Th>
							<HStack>
								<p className="responsive__title">CONTACT INFORMATION</p>
								<img className="responsive__icon" src={sortIcon} alt=""></img>
							</HStack>
						</Th>
						<Th className="responsive__title">ACTIONS</Th>
					</Tr>
				</Thead>
				<Tbody>
					{list
						.map((list, index) => (
							<TabletDesktopItemTableItem 
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
				</Tbody>
			</Table>
		</TableContainer>
	);
}

export default TabletDesktopItem;
