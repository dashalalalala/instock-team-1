import "../../styles/listsStyling/List.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import { Link, useNavigate } from "react-router-dom";
import WarehouseTabletDesktop from "../Warehouse/WarehouseTabletDesktop";

import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableContainer,
	HStack,
	IconButton,
	Image,
} from "@chakra-ui/react";

function WarehouseListTabletDesktop({ list }) {
	const navigate = useNavigate();

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
							<WarehouseTabletDesktop 
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

export default WarehouseListTabletDesktop;
