import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehouseDetailsPage from './Pages/WarehouseDetailsPage/WarehouseDetailsPage';
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/warehouses/:id" element={<WarehouseDetailsPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
