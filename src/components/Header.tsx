import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detecta scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`backdrop-blur-sm fixed top-0 left-0 w-full z-50 text-white transition-colors duration-300 ${
        isHovered || isScrolled ? 'bg-black/80' : 'bg-transparent'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          <a href="#home">Destilería Don Santos</a>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-lg">
          <a href="#productos" className="hover:text-amber-500 transition">Productos</a>
          <a href="#nosotros" className="hover:text-amber-500 transition">Nosotros</a>
          <a href="#contacto" className="hover:text-amber-500 transition">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

