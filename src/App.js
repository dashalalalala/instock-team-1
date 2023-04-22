import "./App.css";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditWarehouse from "./Pages/EditWarehouse/EditWarehouse";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<EditWarehouse />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
