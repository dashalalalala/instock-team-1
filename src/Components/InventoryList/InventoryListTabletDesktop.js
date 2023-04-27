import "../../styles/listsStyling/List.scss";
import sortIcon from "../../assets/icons/sort-24px.svg";
import { useNavigate } from "react-router-dom";
import InventoryItemTabletDesktop from "../InventoryItem/InventoryItemTabletDesktop";

import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	TableContainer,
	HStack,
	useDisclosure
} from "@chakra-ui/react";

function InventoryListTabletDesktop({ list, hideWarehouseDiv }) {
	const navigate = useNavigate();

	const {isOpen, onClose, onOpen} = useDisclosure();

	return (
		<TableContainer className="chakra-table">
			<Table variant="simple" overflowX="auto" size="md">
				<Thead className="responsive">
					<Tr>
						<Th>
							<HStack>
								<p className="responsive__title">INVENTORY ITEM</p>
								<img className="responsive__icon" src={sortIcon} alt=""></img>
							</HStack>
						</Th>
						<Th>
							<HStack>
								<p className="responsive__title">CATEGORY</p>
								<img className="responsive__icon" src={sortIcon} alt=""></img>
							</HStack>
						</Th>
						<Th>
							<HStack>
								<p className="responsive__title">STATUS</p>
								<img className="responsive__icon" src={sortIcon} alt=""></img>
							</HStack>
						</Th>
						<Th>
							<HStack>
								<p className="responsive__title">QUANTITY</p>
								<img className="responsive__icon" src={sortIcon} alt=""></img>
							</HStack>
						</Th>
						{!hideWarehouseDiv && (
							<Th>
								<HStack>
									<p className="responsive__title">WAREHOUSE</p>
									<img className="responsive__icon" src={sortIcon} alt=""></img>
								</HStack>
							</Th>
						)}
						<Th className="responsive__title">ACTIONS</Th>
					</Tr>
				</Thead>
				<Tbody>
					{list.map((list, index) => (
						<InventoryItemTabletDesktop
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
				</Tbody>
			</Table>
		</TableContainer>
	);
}

export default InventoryListTabletDesktop;
