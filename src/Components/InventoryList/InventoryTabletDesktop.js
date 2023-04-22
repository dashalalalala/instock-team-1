import "../../styles/listsStyling/List.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import { Link, useNavigate } from "react-router-dom";

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

function InventoryTabletDesktop({ list, hideWarehouseDiv }) {
	const navigate = useNavigate();

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
								<p className="responsive__title">QTY</p>
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
					{list.map((list) => (
						<Tr className="row" key={list.id}>
							<Td className="body__name">
								<HStack>
									<Link
										to={`/inventories/${list.id}`}
										style={{ textDecoration: "none" }}
									>
										<p className="body">{list.item_name}</p>
									</Link>
									<img className="body__icon" src={chevronIcon} alt=""></img>
								</HStack>
							</Td>
							<Td className="body">{list.category}</Td>
							<Td>
								{" "}
								<p
									className={`body ${
										list.status === "In Stock" ? "in-stock" : "out-of-stock"
									}`}
								>
									{list.status}
								</p>
							</Td>
							<Td className="body">{list.quantity}</Td>
							{!hideWarehouseDiv && (
								<Td className="body">{list.warehouse_name}</Td>
							)}
							<Td>
								<HStack>
									<IconButton
										onClick={() => {
											navigate(`/inventories/${list.id}/delete`);
										}}
										size="xs"
										colorScheme="white"
										className="chakra-button"
										icon={
											<Image className="icons__img" src={deleteIcon} alt="" />
										}
									></IconButton>
									<IconButton
										onClick={() => {
											navigate(`/inventories/${list.id}/edit`);
										}}
										size="xs"
										colorScheme="white"
										className="chakra-button"
										icon={
											<Image className="icons__img" src={editIcon} alt="" />
										}
									></IconButton>
								</HStack>
							</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	);
}

export default InventoryTabletDesktop;
