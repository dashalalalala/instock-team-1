import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehousePage from './Pages/WarehousePage/WarehousePage';

function App() {
  return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/warehouses" element={<WarehousePage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
