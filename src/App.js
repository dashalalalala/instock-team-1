import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehouseDetailsPage from './Pages/WarehouseDetailsPage/WarehouseDetailsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/warehouses/:id" element={<WarehouseDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
