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

function TabletDesktopItem({ list }) {
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
					{list.map((list) => (
						<Tr className="row" key={list.id}>
							<Td className="body__warehouse-name">
								<HStack>
									<Link
										to={`/warehouses/${list.id}`}
										style={{ textDecoration: "none" }}
									>
										<p className="body">{list.warehouse_name}</p>
									</Link>
									<img className="body__icon" src={chevronIcon} alt=""></img>
								</HStack>
							</Td>
							<Td className="body body__address">
								{list.address}, {list.city}, {list.country}
							</Td>
							<Td className="body body__contact-name">{list.contact_name}</Td>
							<Td>
								<div>
									<p className="body">{list.contact_phone}</p>
									<p className="body">{list.contact_email}</p>
								</div>
							</Td>
							<Td>
								<HStack>
									<IconButton
										onClick={() => {
											navigate(`/warehouses/${list.id}/delete`);
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
											navigate(`/warehouses/${list.id}/edit`);
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

export default TabletDesktopItem;
