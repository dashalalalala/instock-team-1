import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import WarehouseDetailsPage from "./Pages/WarehouseDetailsPage/WarehouseDetailsPage";
import WarehouseListPage from "./Pages/WarehouseListPage/WarehouseListPage";
import InventoryDetailsPage from "./Pages/InventoryDetailsPage/InventoryDetailsPage";
import InventoryListPage from "./Pages/InventoryListPage/InventoryListPage";
import EditWarehousePage from "./Pages/EditWarehouse/EditWarehouse";
import EditInventoryItemPage from "./Pages/EditInventoryItemPage/EditInventoryItemPage";
import AddWarehouse from "./Pages/AddWarehouse/AddWarehouse";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./styles/theme.js";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WarehouseListPage />} />
            <Route path="/warehouses" element={<WarehouseListPage />} />
            <Route
              path="/warehouses/:warehouseId"
              element={<WarehouseDetailsPage />}
            />
            <Route path="/warehouses/add" element={<AddWarehouse />} />
            <Route
              path="/warehouses/:warehouseId/edit"
              element={<EditWarehousePage />}
            />
            <Route path="/inventories" element={<InventoryListPage />} />
            <Route
              path="/inventories/:inventoryId"
              element={<InventoryDetailsPage />}
            />
            <Route
							path="/inventories/:inventoryId"
							element={<InventoryDetailsPage />}
						/>
            <Route
              path="/inventories/:inventoryItemId/edit"
              element={<EditInventoryItemPage />}
            />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
