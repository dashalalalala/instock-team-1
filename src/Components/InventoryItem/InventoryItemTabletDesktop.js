import "../../styles/listsStyling/List.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import { Link, useNavigate } from "react-router-dom";
import DeleteModal from "../DeleteModal/DeleteModal";

import {
	Tr,
	Td,
	HStack,
	IconButton,
	Image,
	useDisclosure
} from "@chakra-ui/react";


function InventoryItemTabletDesktop(props){
    const navigate = useNavigate();

    const {isOpen, onClose, onOpen} = useDisclosure();


    return (
        <Tr className="row" key={props.id}>
            <Td className="body__name">
                <HStack>
                    <Link
                        to={`/inventories/${props.id}`}
                        style={{ textDecoration: "none" }}
                    >
                        <p className="body">{props.item_name}</p>
                    </Link>
                    <img className="body__icon" src={chevronIcon} alt=""></img>
                </HStack>
            </Td>
            <Td className="body">{props.category}</Td>
            <Td>
                {" "}
                <p
                    className={`body ${
                        props.status === "In Stock" ? "in-stock" : "out-of-stock"
                    }`}
                >
                    {props.status}
                </p>
            </Td>
            <Td className="body">{props.quantity}</Td>
            {!props.hideWarehouseDiv && (
                <Td className="body">{props.warehouse_name}</Td>
            )}
            <Td>
                <HStack>
                    <IconButton
                        onClick={onOpen}
                        size="xs"
                        colorScheme="white"
                        className="chakra-button"
                        icon={
                            <Image className="icons__img" src={deleteIcon} alt="" />
                        }
                    ></IconButton>
                    <DeleteModal selectedElement={props.item_name} selectedElementId={props.id} isOpen={isOpen} onClose={onClose} isWarehouse={false}/>
                    <IconButton
                        onClick={() => {
                            navigate(`/inventories/${props.id}/edit`);
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
    )
}

export default InventoryItemTabletDesktop;