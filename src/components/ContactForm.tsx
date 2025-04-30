import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section id="contacto" className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contáctanos</h2>

        <form className="space-y-5">
          {/* Nombre */}
          <div>
            <label htmlFor="name" className="block mb-2 text-left font-semibold">
              Nombre
            </label>
            <input
              id="name"
              type="text"
              placeholder="Tu nombre"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
          </div>

          {/* Correo */}
          <div>
            <label htmlFor="email" className="block mb-2 text-left font-semibold">
              Correo Electrónico
            </label>
            <input
              id="email"
              type="email"
              placeholder="tucorreo@ejemplo.com"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
          </div>

          {/* Mensaje */}
          <div>
            <label htmlFor="message" className="block mb-2 text-left font-semibold">
              Mensaje
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tu mensaje..."
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-xl transition duration-300"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
