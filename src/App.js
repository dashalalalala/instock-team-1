import "./App.css";
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./styles/theme.js";
import WarehouseListPage from "./Pages/WarehouseListPage/WarehouseListPage";

function App() {
	return (
		<ChakraProvider theme={theme}>
			<div className="App">
				<Header />
				<BrowserRouter>
					<Routes>
						<Route path="/warehouses" element={<WarehouseListPage />} />
					</Routes>
				</BrowserRouter>
				<Footer />
			</div>
		</ChakraProvider>
	);
}

export default App;
