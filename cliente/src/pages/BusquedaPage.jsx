import React, { useState, useEffect } from 'react';
import { RegistroCard } from '../components/RegistroCard';

/**
 * Página que permite buscar y filtrar registros por nombre o fecha de creación.
 * Muestra una lista de registros que coinciden con la búsqueda.
 * @component
 * @returns {JSX.Element} - Elemento JSX que representa la página de búsqueda.
 */
export function BusquedaPage() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");

    const URL = 'http://127.0.0.1:8000/client/list/api/v1/registro';

    // Función para obtener y mostrar los registros
    const showData = async () => {
        try {
            const response = await fetch(URL);
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error al obtener los registros:', error);
        }
    };

    // Función para actualizar el estado de búsqueda
    const searcher = (e) => {
        setSearch(e.target.value);
    };

    // Filtrar registros según la búsqueda
    let results = [];
    if (!search) {
        results = users;
    } else {
        results = users.filter((user) =>
            user.nombre_completo.toLowerCase().includes(search.toLowerCase()) ||
            user.fecha_creacion.toLowerCase().includes(search.toLowerCase())
        );
    }

    // Cargar registros al montar el componente
    useEffect(() => {
        showData();
    }, []);

    return (
        <div className="max-w-xl mx-auto">
            {/* Campo de búsqueda */}
            <input
                value={search}
                onChange={searcher}
                type="text"
                placeholder='Buscar'
                className="bg-zinc-700 p-3 rounded-lg block w-full mb-5"
            />

            {/* Nota informativa */}
            <div className="my-4 p-4 bg-yellow-200 border border-yellow-500 rounded">
                <p className="font-bold text-yellow-800">
                    Nota: Ten en cuenta que sólo puedes filtrar por nombre o fecha de creación.
                </p>
            </div>

            {/* Lista de registros filtrados */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {results.map((user) => (
                    <RegistroCard key={user.id} registro={user} />
                ))}
            </div>
        </div>
    );
}
