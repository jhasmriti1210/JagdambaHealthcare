import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/app-layout/navbar";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Service from "./components/pages/services";
import Product from "./components/pages/products";
import Contact from "./components/pages/contact";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
