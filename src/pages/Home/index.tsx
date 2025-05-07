// src/App.tsx

import Hero from '../../components/home/Hero';
import ProductsGrid from '../../components/home/ProductsGrid/ProductsGrid';
import AboutUs from '../../components/home/AboutUs';
import ContactForm from '../../components/home/ContactForm';
import PointsOfSale from '../../components/home/PointsOfSale/PointsOfSale';

function App() {
  return (
    <>
      <Hero />
      <ProductsGrid/>
      <AboutUs />
      <PointsOfSale />
      <ContactForm />
    </>
  );
}

export default App;