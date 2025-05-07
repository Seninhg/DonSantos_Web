// src/App.tsx
import { Routes, Route } from "react-router-dom";
import CatalogPage from "./pages/Catalog"; 
import Home from "./pages/Home";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#111111] via-[#1e1e1e] to-[#333333] text-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<CatalogPage />} />
        {/* Puedes añadir una ruta específica para la paginación si lo deseas */}
        <Route path="/catalogo/page/:pageNumber" element={<CatalogPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;