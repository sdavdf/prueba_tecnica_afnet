import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';

/**
 * Componente de navegación que muestra enlaces a diferentes secciones de la aplicación.
 * Utiliza react-router-dom para la navegación entre páginas.
 * @component
 * @returns {JSX.Element} - Elemento JSX que representa el componente de navegación.
 */
export function Navegacion() {
  return (
    <div className="flex justify-between py-3 items-center">
      {/* Enlace a la página de lista de registros */}
      <Link to='/client/list'>
        <h1 className="font-bold text-3xl mb-4">
          Registros <i className="fas fa-file-alt"></i>
        </h1>
      </Link>

      {/* Enlace a la página de filtrado */}
      <Link to='/filtrar'>
        <h1 className="font-bold text-3xl mb-4">
          Filtrar <i className="fas fa-search"></i>
        </h1>
      </Link>

      {/* Botón para crear un nuevo registro con enlace a la página de creación */}
      <button className="bg-indigo-500 p-3 rounded-lg">
        <Link to='/client/create'> Crear Registro </Link>
      </button>
    </div>
  );
}
