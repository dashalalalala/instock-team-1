import "./WarehouseListItem.scss";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import MobileItem from "./MobileItem/MobileItem";

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
import TabletDesktopItem from "./TabletDesktopItem/TabletDesktopItem";

function WarehouseListItem() {
	return (
		<>
			<MobileItem />
			<TabletDesktopItem />
			{/* <div className="warehouse">
				<div className="warehouse__name">
					<h4 className="title">WAREHOUSE</h4>
					<p className="label">
						Manhattan
						<img className="body__icon" src={chevronIcon} alt=""></img>
					</p>
				</div>
				<div className="warehouse__contact--name">
					<h4 className="title">CONTACT NAME</h4>
					<p className="body">Parmin Aujla</p>
				</div>
				<div className="warehouse__address">
					<h4 className="title">ADDRESS</h4>
					<p className="body">503 Broadway, New York, USA</p>
				</div>
				<div className="warehouse__contact--info">
					<h4 className="title">CONTACT INFORMATION</h4>
					<p className="body">+1 (629) 555-0129</p>
					<p className="body">paujla@instock.com</p>
				</div>
				<div className="icons">
					<div>
						<img className="icons__img" src={deleteIcon} alt="" />
					</div>
					<div>
						<img className="icons__img" src={editIcon} alt="" />
					</div>
				</div>
			</div> */}
			{/* <TableContainer className="chakra-table">
				<Table variant="simple" overflowX="auto">
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
									<p className="responsive__title">CONTACT NAME</p>
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
									<p className="responsive__title">CONTACT INFORMATION</p>
									<img className="responsive__icon" src={sortIcon} alt=""></img>
								</HStack>
							</Th>
							<HStack>
								<Th className="responsive__title">ACTIONS</Th>
							</HStack>
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Td className="body">Manhattan</Td>
							<Td className="body">Parmin Aujla</Td>
							<Td className="body">503 Broadway, New York, USA</Td>
							<Td>
								<div>
									<p className="body">+1 (629) 555-0129</p>{" "}
									<p className="body">paujla@instock.com</p>
								</div>
							</Td>
							<Td>
								<HStack>
									<IconButton
										colorScheme="white"
										className="chakra-button"
										icon={
											<Image className="icons__img" src={editIcon} alt="" />
										}
									></IconButton>
									<IconButton
										colorScheme="white"
										className="chakra-button"
										icon={
											<Image className="icons__img" src={deleteIcon} alt="" />
										}
									></IconButton>
								</HStack>
							</Td>
						</Tr>
					</Tbody>
				</Table>
			</TableContainer> */}
		</>
	);
}

export default WarehouseListItem;
