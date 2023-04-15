import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./styles/theme.js";

import WarehouseListPage from "./Pages/WarehouseListPage/WarehouseListPage";

function App() {
	return (
		<ChakraProvider theme={theme}>
			<div className="App">
				<BrowserRouter>
					<Routes>
						<Route path="/warehouses" element={<WarehouseListPage />} />
					</Routes>
				</BrowserRouter>
			</div>
		</ChakraProvider>
	);
}

export default App;
