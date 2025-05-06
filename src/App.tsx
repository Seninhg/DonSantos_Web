// src/App.tsx

import Hero from './components/Hero';
import Header from './components/Header';
import ProductsGrid from './components/ProductsGrid/ProductsGrid';
import AboutUs from './components/AboutUs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import PointsOfSale from './components/PointsOfSale/PointsOfSale'; // Importar el nuevo componente

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#111111] via-[#1e1e1e] to-[#333333] text-white">
      <Header />
      <Hero />
      <ProductsGrid/>
      <AboutUs />
      <PointsOfSale /> {/* Añadir la nueva sección aquí */}
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;