import "../../styles/listsStyling/List.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import { Link, useNavigate } from "react-router-dom";
import DeleteModal from "../DeleteModal/DeleteModal";
import { useDisclosure } from "@chakra-ui/react";

import {
	Tr,
	Td,
	HStack,
	IconButton,
	Image,
} from "@chakra-ui/react";




function WarehouseTabletDesktop(props){
    const navigate = useNavigate();

    const {isOpen, onClose, onOpen} = useDisclosure();

    return (
            <Tr className="row" key={props.id}>
                <Td className="body__warehouse-name">
                    <HStack>
                        <Link
                            to={`/warehouses/${props.id}`}
                            style={{ textDecoration: "none" }}
                        >
                            <p className="body">{props.warehouse_name}</p>
                        </Link>
                        <img className="body__icon" src={chevronIcon} alt=""></img>
                    </HStack>
                </Td>
                <Td className="body body__address">
                    {props.address}, {props.city}, {props.country}
                </Td>
                <Td className="body body__contact-name">{props.contact_name}</Td>
                <Td>
                    <div>
                        <p className="body">{props.contact_phone}</p>
                        <p className="body">{props.contact_email}</p>
                    </div>
                </Td>
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
                        <DeleteModal selectedElement={props.warehouse_name} selectedElementId={props.id} isOpen={isOpen} onClose={onClose} isWarehouse={true}/>
                        <IconButton
                            onClick={() => {
                                navigate(`/warehouses/${props.id}/edit`);
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

export default WarehouseTabletDesktop;