import InventoryListMobile from "../../Components/InventoryList/InventoryListMobile";
import InventoryListTabletDesktop from "../../Components/InventoryList/InventoryListTabletDesktop";
import Search from "../../Components/Search/Search";
import { inventoriesUrl } from "../../utils";
import { useEffect, useState } from "react";
import axios from "axios";
import "./InventoryListPage.scss";

function InventoryListPage() {
  const [list, setList] = useState([]);
  const searchTitle = "Inventory";
  const searchButton = "+ Add New Item";
  const path = "/inventories/add";

  useEffect(() => {
    axios
      .get(`${inventoriesUrl}`)
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setList]);

  return (
    <div className="list-card">
      <div className="inventory-list">
        <Search
          searchTitle={searchTitle}
          searchButton={searchButton}
          path={path}
        />
        <InventoryListMobile list={list} />
        <InventoryListTabletDesktop list={list} setList={setList} />
      </div>
    </div>
  );
}

export default InventoryListPage;
