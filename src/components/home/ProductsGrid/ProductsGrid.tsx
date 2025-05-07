import React, { useState, useEffect } from 'react';
import LiquorCard from './LiquorCard';
import VerMasCard from './VerMasCard';
import { motion, useScroll, useTransform } from 'framer-motion';


const ProductsGrid: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0.08, 0.19], [0, 1]);
  const translateX = useTransform(scrollYProgress, [0.08, 0.19], [-150, 0]);

  //para la carga de licores
  interface Product {
    id: number;
    name: string;
    ml: number;
    precios: {
      mayorista: number;
      minorista: number;
    }
    mostrarEnLanding: boolean;
    image: string;
  }

  const [products, setProducts] = useState<Product[]>([]);


  useEffect(() => {
    fetch("/liquors.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [])

  const productosDestacados = products.filter(p => p.mostrarEnLanding);

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
        {productosDestacados.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
          >
            <LiquorCard
              name={product.name}
              price={product.precios.minorista}
              image={`/images/licores/${product.image}`}
            />
          </motion.div>
        ))}
        <motion.div
          key="ver-mas"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: productosDestacados.length * 0.2,
          }}
        >
          <VerMasCard />
        </motion.div>

      </div>


    </section>
  );
};


export default ProductsGrid;
