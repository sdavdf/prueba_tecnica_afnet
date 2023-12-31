import { useEffect, useState } from 'react';
import { getAllRegistros } from '../api/registro.api';
import { RegistroCard } from './RegistroCard';

/**
 * Componente que muestra una lista de registros.
 * Obtiene la lista de registros mediante una solicitud a la API al cargar.
 * Utiliza el componente RegistroCard para representar cada registro.
 * @component
 * @returns {JSX.Element} - Elemento JSX que representa la lista de registros.
 */
export function RegistroList() {
    const [registros, setRegistros] = useState([]);

    // Cargar registros al montar el componente
    useEffect(() => {
        async function loadRegistros() {
            try {
                const res = await getAllRegistros();
                setRegistros(res.data);
            } catch (error) {
                console.error('Error al cargar los registros:', error);
            }
        }

        loadRegistros();
    }, []);

    return (
        <div className='grid grid-cols-3 gap-3'>
            {/* Mapear y renderizar cada RegistroCard */}
            {registros.map((registro) => (
                <RegistroCard key={registro.id} registro={registro} />
            ))}
        </div>
    );
}
