import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // Importar useParams y Link
import LiquorCard from '../../components/home/ProductsGrid/LiquorCard';

interface Liquor {
  id: number;
  name: string;
  ml: number | null; // Added ml, can be null
  precios: { // Changed price to precios object
    mayorista: number;
    minorista: number;
  };
  tipo: string; // Changed type to tipo
  mostrarEnLanding: boolean; // Added mostrarEnLanding
  image: string;
}

const ITEMS_PER_PAGE = 8; // Definir cuántos licores mostrar por página

const CatalogPage: React.FC = () => {
  const [liquors, setLiquors] = useState<Liquor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { pageNumber } = useParams<{ pageNumber?: string }>(); // Obtener el número de página de la URL

  const currentPage = parseInt(pageNumber || "1", 10); // Convertir a número, default a 1

  useEffect(() => {
    const fetchLiquors = async () => {
      try {
        const response = await fetch('/liquors.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setLiquors(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchLiquors();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Cargando productos...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Error al cargar productos: {error}</div>;
  }

  // Lógica de paginación
  const totalPages = Math.ceil(liquors.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentLiquors = liquors.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto px-4 py-8 mt-10"> {/* Added mt-20 for header margin */}
      {/* Contenedor para el título y el botón, centrados y con margen inferior */}
      <div className="flex items-center mb-6">
        <Link
          to="/"
          className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
        >
          Volver al Inicio
        </Link>
        <h1 className="text-3xl font-bold text-gray-300 flex-grow text-center">Nuestro Catálogo</h1>
      </div>
      {currentLiquors.length === 0 && !loading ? (
        <p className="text-center text-gray-600">No hay productos disponibles en esta página o para esta búsqueda.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentLiquors.map((liquor) => (
            <LiquorCard
              key={liquor.id}
              name={liquor.name}
              price={liquor.precios.minorista} // Updated to use precios.minorista
              image={`/images/licores/${liquor.image}`}
            />
          ))}
        </div>
      )}

      {/* Controles de Paginación */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-4 mt-10">
          {currentPage > 1 && (
            <Link
              to={`/catalogo/page/${currentPage - 1}`}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Anterior
            </Link>
          )}
          <span className="text-gray-700">
            Página {currentPage} de {totalPages}
          </span>
          {currentPage < totalPages && (
            <Link
              to={`/catalogo/page/${currentPage + 1}`}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Siguiente
            </Link>
          )}
        </div>
      )}
      {/* Enlace para volver al inicio */}
      {/* Commented out or remove the old link position
       <div className="text-center mt-8">
        <Link to="/" className="text-blue-500 hover:text-blue-700 underline">
          Volver al Inicio
        </Link>
      </div>
      */}
    </div>
  );
};

export default CatalogPage;
