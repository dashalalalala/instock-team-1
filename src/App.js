import "./App.css";
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";
import WarehouseDetailsPage from "./Pages/WarehouseDetailsPage/WarehouseDetailsPage";
import WarehouseListPage from "./Pages/WarehouseListPage/WarehouseListPage";
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
						<Route path="/warehouses/:warehouseId" element={<WarehouseDetailsPage />} />
					</Routes>
				</BrowserRouter>
				<Footer />
			</div>
		</ChakraProvider>
	);
}

export default App;
