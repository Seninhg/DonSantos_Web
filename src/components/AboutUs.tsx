import React from 'react';
import { motion, useScroll, useTransform } from "motion/react";

const AboutUs: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Scroll-out suave con escala y opacidad
  const opacity = useTransform(scrollYProgress, [0.65, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.65, 0.8], [1, 1.05]);

  return (
    <motion.section
      id="nosotros"
      className="h-screen flex items-center justify-center text-white px-6"
      style={{ opacity, scale }}
    >
      <div className="max-w-4xl text-center space-y-8">
        <motion.h2
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 70 }}
        >
          Sobre Nosotros
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 60 }}
        >
          En <strong>Destilería Don Santos</strong>, nos apasiona la creación de destilados artesanales que honran la tradición y la excelencia.
          Cada botella es el resultado de años de experiencia, dedicación y amor por el arte de la destilación.
          Creemos en ofrecer productos únicos para verdaderos conocedores, combinando métodos tradicionales con innovación constante.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default AboutUs;
