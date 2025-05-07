import { NavLink } from 'react-router-dom'; 

const VerMasCard = () => {
  return (
    <NavLink
      to="/catalogo"
      className="bg-[#1f1f1f] text-white rounded-xl flex flex-col justify-center items-center h-full p-6 hover:scale-105 transition cursor-pointer shadow-md"
    >
      <img
        src="/images/utils/see more.png"
        alt="Ver catálogo"
        className="w-full h-56 object-cover mb-4 opacity-70"
      />
      <h3 className="text-lg font-semibold">Ver catálogo completo</h3>
      <p className="text-sm text-gray-400 mt-1">(Total de productos disponibles)</p>
    </NavLink>
  );
};

export default VerMasCard;
