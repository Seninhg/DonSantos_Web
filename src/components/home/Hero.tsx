import React from 'react';
import heroImage from '../../assets/banner_test2.jpg';
import { motion, useScroll, useTransform } from "motion/react";

const Hero: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Movimiento parallax del fondo
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 500]);

  // Animaciones de opacidad y desplazamiento en scroll para el texto
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  return (
    <section className="relative h-screen overflow-hidden pt-24">


      {/* Fondo animado */}
      <motion.div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
          y: backgroundY,
          filter: "blur(1px)", // Desenfoque del fondo
          backgroundSize: "80%",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div> {/* Capa oscura */}
      </motion.div>

      {/* Contenedor de texto animado */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center h-full text-white px-4"
        initial="hidden"
        animate="visible"
        style={{
          opacity,
          y: translateY,
        }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3, // espacio entre la aparición de hijos
            },
          },
        }}
      >
        {/* Título */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
        >
          Descubre los Sabores de la Tradición
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          className="text-lg md:text-xl mb-8"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
        >
          Licores artesanales seleccionados para verdaderos conocedores.
        </motion.p>

        {/* Botón dentro de motion.p */}
        <motion.p
          className="text-lg md:text-xl mb-8"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "linear" }, // Movimiento lineal para el botón
            },
          }}
        >
          <a
            href="#productos"
            className="inline-block bg-amber-600 hover:bg-amber-700 transform hover:scale-105 transition-transform duration-300 px-5 py-2 rounded-lg text-base font-semibold"
          >
            Ver catálogo
          </a>
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
