import "../../styles/listsStyling/List.scss";
import sortIcon from "../../assets/icons/sort-24px.svg";
import { useNavigate, useParams } from "react-router-dom";
import InventoryItemTabletDesktop from "../InventoryItem/InventoryItemTabletDesktop";
import axios from "axios";
import { apiUrl, inventoriesUrl } from "../../utils";
import { useState } from "react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  HStack,
  useDisclosure,
} from "@chakra-ui/react";

function InventoryListTabletDesktop({
  list,
  setList,
  hideWarehouseDiv,
  warehouse,
}) {
  const navigate = useNavigate();

  const { isOpen, onClose, onOpen } = useDisclosure();

  const [itemNameOrder, setItemNameOrder] = useState("asc");
  const [categoryOrder, setCategoryOrder] = useState("N/A");
  const [statusOrder, setStatusOrder] = useState("N/A");
  const [quantityOrder, setQuantityOrder] = useState("N/A");
  const [warehouseOrder, setWarehouseOrder] = useState("N/A");

  const toggleColumns = (sB, oB) => {
    oB === "asc" ? (oB = "desc") : (oB = "asc");
    if (sB === "item_name") {
      setItemNameOrder(oB);
    } else if (sB === "category") {
      setCategoryOrder(oB);
    } else if (sB === "status") {
      setStatusOrder(oB);
    } else if (sB === "quantity") {
      setQuantityOrder(oB);
    } else if (sB === "warehouse_name") {
      setWarehouseOrder(oB);
    }

    if (!hideWarehouseDiv) {
      axios
        .get(`${inventoriesUrl}?sort_by=${sB}&order_by=${oB}`)
        .then((response) => {
          setList(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      axios
        .get(`${apiUrl}/${warehouse}/inventories?sort_by=${sB}&order_by=${oB}`)
        .then((response) => {
          setList(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <TableContainer className="chakra-table">
      <Table variant="simple" overflowX="auto" size="md">
        <Thead className="responsive">
          <Tr>
            <Th>
              <HStack>
                <p className="responsive__title">INVENTORY ITEM</p>
                <img
                  className="responsive__icon"
                  src={sortIcon}
                  alt=""
                  onClick={() => {
                    toggleColumns("item_name", itemNameOrder);
                  }}
                ></img>
              </HStack>
            </Th>
            <Th>
              <HStack>
                <p className="responsive__title">CATEGORY</p>
                <img
                  className="responsive__icon"
                  src={sortIcon}
                  alt=""
                  onClick={() => {
                    toggleColumns("category", categoryOrder);
                  }}
                ></img>
              </HStack>
            </Th>
            <Th>
              <HStack>
                <p className="responsive__title">STATUS</p>
                <img
                  className="responsive__icon"
                  src={sortIcon}
                  alt=""
                  onClick={() => {
                    toggleColumns("status", statusOrder);
                  }}
                ></img>
              </HStack>
            </Th>
            <Th>
              <HStack>
                <p className="responsive__title">QUANTITY</p>
                <img
                  className="responsive__icon"
                  src={sortIcon}
                  alt=""
                  onClick={() => {
                    toggleColumns("quantity", quantityOrder);
                  }}
                ></img>
              </HStack>
            </Th>
            {!hideWarehouseDiv && (
              <Th>
                <HStack>
                  <p className="responsive__title">WAREHOUSE</p>
                  <img
                    className="responsive__icon"
                    src={sortIcon}
                    alt=""
                    onClick={() => {
                      toggleColumns("warehouse_name", warehouseOrder);
                    }}
                  ></img>
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
