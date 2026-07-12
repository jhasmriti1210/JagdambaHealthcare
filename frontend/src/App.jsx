import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/applayout/navbar";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Service from "./components/pages/services";
import Product from "./components/pages/products";
import Contact from "./components/pages/contact";
import Cardiology from "./components/pages/products/cardiology";
import CardiacEquipment from "./components/pages/products/Cardiac Equipment";
import CardiacSurgery from "./components/pages/products/Cardiac Surgery";
import CriticalCare from "./components/pages/products/Critical Care";
import SurgicalDisposables from "./components/pages/products/Surgical Disposables";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/products" element={<Product />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/products/cardiology" element={<Cardiology />} />
        <Route
          path="/products/cardiac-equipment"
          element={<CardiacEquipment />}
        />
        <Route path="/products/cardiac-surgery" element={<CardiacSurgery />} />
        <Route
          path="/products/surgical-disposables"
          element={<SurgicalDisposables />}
        />
        <Route path="/products/critical-care" element={<CriticalCare />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
