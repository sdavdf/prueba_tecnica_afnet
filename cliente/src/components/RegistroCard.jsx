import { useNavigate } from "react-router-dom";

/**
 * Componente que representa una tarjeta de registro con información detallada.
 * Al hacer clic en la tarjeta, navega a la página de detalles del registro.
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.registro - Objeto que contiene la información del registro.
 * @returns {JSX.Element} - Elemento JSX que representa la tarjeta de registro.
 */
export function RegistroCard({ registro }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
      onClick={() => {
        navigate(`/client/list/${registro.id}`);
      }}
    >
      {/* Sección de Nombre Completo */}
      <div>
        <h1 className="text-white font-bold uppercase rounded-lg">Nombre Completo:</h1>
        <p className="text-slate-400">{registro.nombre_completo}</p>
      </div>

      {/* Sección de Email */}
      <div>
        <h1 className="text-white font-bold uppercase rounded-lg">Email:</h1>
        <p className="text-slate-400">{registro.email}</p>
      </div>

      {/* Sección de Fecha de Nacimiento */}
      <div>
        <h1 className="text-white font-bold uppercase rounded-lg">Fecha de Nacimiento:</h1>
        <p className="text-slate-400">{registro.fecha_nacimiento}</p>
      </div>

      {/* Sección de Fecha de Creación */}
      <div>
        <h1 className="text-white font-bold uppercase rounded-lg">Fecha de Creación:</h1>
        <p className="text-slate-400">{registro.fecha_creacion}</p>
      </div>

      {/* Línea divisoria */}
      <hr />
    </div>
  );
}
