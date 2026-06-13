import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/app-layout/navbar";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Service from "./components/pages/services";
import Product from "./components/pages/products";
import Contact from "./components/pages/contact";
import Cardiology from "./components/pages/products/cardiology";
import Nephrology from "./components/pages/products/nephrology";
import Urology from "./components/pages/products/urology";
import Gastro from "./components/pages/products/gastro";

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
        <Route path="/products/nephrology" element={<Nephrology />} />
        <Route path="/products/urology" element={<Urology />} />
        <Route path="/products/gastro" element={<Gastro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
