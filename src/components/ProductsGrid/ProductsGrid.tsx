import React from 'react';
import LiquorCard from './LiquorCard';
import liquidImg from '../../assets/liquidImg_test.png'; // 👈 Importamos la imagen local
import { motion, useScroll, useTransform } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Whisky Tullamore Dew',
    type: 'Whisky Irlandés',
    price: 120,
    image: liquidImg,
  },
  {
    id: 2,
    name: 'Ron Diplomático',
    type: 'Ron Venezolano',
    price: 90,
    image: liquidImg,
  },
  {
    id: 3,
    name: 'Tequila Don Julio',
    type: 'Tequila Mexicano',
    price: 150,
    image: liquidImg,
  },
  {
    id: 4,
    name: 'Anisado',
    type: 'Destilado',
    price: 150,
    image: liquidImg,
  },
];

const ProductsGrid: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0.08, 0.20], [0, 1]);
  const translateX = useTransform(scrollYProgress, [0.08, 0.20], [-150, 0]);

  return (
    <section id="productos" className="max-w-7xl mx-auto py-20 px-4">

      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        style={{
          opacity: opacity,
          x: translateX,
        }}
        transition={{
          type: 'spring',
          stiffness: 80,
          damping: 12,
        }}
      >
        Nuestros Productos
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: index * 0.2, // 👈 Delay progresivo por tarjeta
            }}
          >
            <LiquorCard
              name={product.name}
              price={product.price}
              image={product.image}
            />
          </motion.div>
        ))}
      </div>

    </section>
  );
};


export default ProductsGrid;
