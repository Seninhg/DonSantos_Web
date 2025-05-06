import React, {useState, useEffect} from 'react';
import LiquorCard from './LiquorCard';
import { motion, useScroll, useTransform } from 'framer-motion';


const ProductsGrid: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0.08, 0.20], [0, 1]);
  const translateX = useTransform(scrollYProgress, [0.08, 0.20], [-150, 0]);

  //para la carga de licores
  interface Product {
    id: number;
    name: string;
    price: number;
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
              image={"/images/licores/" + product.image}
            />
          </motion.div>
        ))}
      </div>

    </section>
  );
};


export default ProductsGrid;
