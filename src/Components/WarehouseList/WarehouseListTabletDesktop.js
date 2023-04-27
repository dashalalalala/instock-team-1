import "../../styles/listsStyling/List.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import { Link, useNavigate } from "react-router-dom";
import WarehouseTabletDesktop from "../Warehouse/WarehouseTabletDesktop";
//***
import axios from "axios";
import { apiUrl } from "../../utils";
import { useState } from "react";

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

function WarehouseListTabletDesktop({ list, setList }) {
  const navigate = useNavigate();
  //***
  const [warehouseNameOrder, setWarehouseNameOrder] = useState("asc");
  const [addressOrder, setAddressOrder] = useState("N/A");
  const [contactNameOrder, setContactNameOrder] = useState("N/A");
  const [contactEmailOrder, setContactEmailOrder] = useState("N/A");

  const toggleColumns = (sB, oB) => {
    oB === "asc" ? (oB = "desc") : (oB = "asc");
    if (sB === "warehouse_name") {
      setWarehouseNameOrder(oB);
    } else if (sB === "address") {
      setAddressOrder(oB);
    } else if (sB === "contact_name") {
      setContactNameOrder(oB);
    } else if (sB === "contact_email") {
      setContactEmailOrder(oB);
    }

    axios
      .get(`${apiUrl}?sort_by=${sB}&order_by=${oB}`)
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <TableContainer className="chakra-table">
      <Table variant="simple" overflowX="auto" size="md">
        <Thead className="responsive">
          <Tr>
            <Th>
              <HStack>
                <p className="responsive__title">WAREHOUSE</p>
                <img
                  className="responsive__icon"
                  src={sortIcon}
                  alt=""
                  onClick={() => {
                    toggleColumns("warehouse_name", warehouseNameOrder);
                  }}
                ></img>
              </HStack>
            </Th>
            <Th>
              <HStack>
                <p className="responsive__title">ADDRESS</p>
                <img
                  className="responsive__icon"
                  src={sortIcon}
                  alt=""
                  onClick={() => {
                    toggleColumns("address", addressOrder);
                  }}
                ></img>
              </HStack>
            </Th>
            <Th>
              <HStack>
                <p className="responsive__title">CONTACT NAME</p>
                <img
                  className="responsive__icon"
                  src={sortIcon}
                  alt=""
                  onClick={() => {
                    toggleColumns("contact_name", contactNameOrder);
                  }}
                ></img>
              </HStack>
            </Th>
            <Th>
              <HStack>
                <p className="responsive__title">CONTACT INFORMATION</p>
                <img
                  className="responsive__icon"
                  src={sortIcon}
                  alt=""
                  onClick={() => {
                    toggleColumns("contact_email", contactEmailOrder);
                  }}
                ></img>
              </HStack>
            </Th>
            <Th className="responsive__title">ACTIONS</Th>
          </Tr>
        </Thead>
        <Tbody>
          {list.map((list, index) => (
            <WarehouseTabletDesktop
              key={index}
              id={list.id}
              warehouse_name={list.warehouse_name}
              address={list.address}
              city={list.city}
              country={list.country}
              contact_name={list.contact_name}
              contact_phone={list.contact_phone}
              contact_email={list.contact_email}
            />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default WarehouseListTabletDesktop;
