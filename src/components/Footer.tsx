import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#141414] text-[#888] pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap text-center lg:text-left">
          {/* Left */}
          <div className="w-full lg:w-6/12 px-4 mb-8 lg:mb-0">
            <h4 className="text-3xl font-semibold text-white">¡Mantente en contacto!</h4>
            <p className="text-lg mt-4 mb-2 text-gray-400">
              Encuéntranos en nuestras redes sociales. ¡Solemos responder rápido!
            </p>
            {/* Social Icons */}
            <div className="mt-6 flex justify-center lg:justify-start space-x-4">
              <a
                href="https://www.facebook.com/destiladosdonsantos/"
                className="bg-white text-blue-600 shadow-lg rounded-full p-3 hover:scale-110 transition inline-flex items-center justify-center"
                target='_blank'
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://www.instagram.com/destiladosylicoresdonsantos/"
                className="bg-white text-pink-500 shadow-lg rounded-full p-3 hover:scale-110 transition inline-flex items-center justify-center"
                target='_blank'
              >
                <FaInstagram size={20} />
              </a>
            </div>
            {/* Teléfonos */}
            <div className="mt-6 text-gray-400 space-y-1 text-sm lg:text-base">
              <p>Tel: <a href="tel:+51999999999" className="hover:text-white transition">+51 985 064 528</a></p>
              <p>WhatsApp: <a href="https://wa.me/51999999999" className="hover:text-white transition">+51 985 064 528</a></p>
              <p>Jr. San Francisco S/n, a media cuadra de la plaza, Yuracyacu, Peru</p>
            </div>
          </div>

          {/* Right */}
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap justify-center lg:justify-end">
              <div className="w-full lg:w-4/12 px-4">
                <h5 className="text-lg font-semibold mb-2 text-white">Enlaces Útiles</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#nosotros" className="block pb-2 text-sm hover:text-white">
                      Sobre Nosotros
                    </a>
                  </li>
                  <li>
                    <a href="#productos" className="block pb-2 text-sm hover:text-white">
                      Catálogo
                    </a>
                  </li>
                  <li>
                    <a href="#contacto" className="block pb-2 text-sm hover:text-white">
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-700" />

        {/* Copyright */}
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="w-full md:w-6/12 px-4 mx-auto text-center">
            <p className="text-sm text-gray-500 font-semibold py-1">
              © {new Date().getFullYear()} Destilería Don Santos. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
