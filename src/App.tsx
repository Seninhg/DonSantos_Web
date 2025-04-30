// src/App.tsx

//import LiquorCard from './components/LiquorCard';
import Hero from './components/Hero';
import Header from './components/Header';
import ProductsGrid from './components/ProductsGrid/ProductsGrid';
import AboutUs from './components/AboutUs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#1b1b1b] to-[#292929] text-white">
      <Header />
      <Hero />
      <ProductsGrid/>
      <AboutUs />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;