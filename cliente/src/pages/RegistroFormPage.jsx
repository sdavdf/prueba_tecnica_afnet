import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createRegistros, updateRegistro, getUsuario, getAllRegistros } from '../api/registro.api'; 
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function RegistroFormPage() {
    const { register, handleSubmit, setValue, getValues } = useForm();
    const navigate = useNavigate();
    const params = useParams();

    // Función que se ejecuta al enviar el formulario
    const onSubmit = handleSubmit(async data => {
        try {
            // Obtener todos los registros
            const response = await getAllRegistros();
            
            // Verificar si hay registros y si algún número de cédula coincide
            if (Array.isArray(response.data) && response.data.some(registro => registro.numero_documento === data.numero_documento)) {
                toast.error('Ya existe un usuario con este número de cédula.');
                return;
            }

            if (params.id) {
                // Actualizar registro existente si hay un ID en los parámetros
                await updateRegistro(params.id, data);
                toast.success('Usuario actualizado');
                console.log("actualizando");
            } else {
                // Crear un nuevo registro si no hay un ID en los parámetros
                const res = await createRegistros(data);
                toast.success('Usuario creado');
                console.log(res.data);  // Muestra la respuesta del servidor
            }

            // Navegar a la lista de registros después de enviar el formulario
            navigate("/client/list");

        } catch (error) {
            console.error("Error al obtener datos del servidor:", error);
        }
    });

    // Cargar datos del registro si se está editando
    useEffect(() => {
        async function loadRegistro() {
            if (params.id) {
                console.log('obteniendo datos');
                const res = await getUsuario(params.id);
                // Establecer los valores en el formulario usando react-hook-form
                setValue('nombre_completo', res.data.nombre_completo);
                setValue('numero_documento', res.data.numero_documento);
                setValue('email', res.data.email);
                setValue('fecha_nacimiento', res.data.fecha_nacimiento);
            }
        }
        loadRegistro();
    }, [params.id, setValue]);

    return (
        <div className="max-w-xl mx-auto">
            <form onSubmit={onSubmit}>
                {/* Campos del formulario */}
                <div className="mb-3">
                    <label className="text-white font-bold uppercase" htmlFor="nombre_completo">Nombre Completo:</label>
                    <input
                        type="text"
                        {...register("nombre_completo", { required: true })}
                        className="bg-zinc-700 p-3 rounded-lg block w-full"
                    />
                </div>

                <div className="mb-3">
                    <label className="text-white font-bold uppercase" htmlFor="numero_documento">Número de documento:</label>
                    <input
                        type="text"
                        {...register("numero_documento", { required: true })}
                        className="bg-zinc-700 p-3 rounded-lg block w-full"
                    />
                </div>

                <div className="mb-3">
                    <label className="text-white font-bold uppercase" htmlFor="email">Email:</label>
                    <input
                        type="text"
                        {...register("email", { required: true })}
                        className="bg-zinc-700 p-3 rounded-lg block w-full"
                    />
                </div>

                <div className="mb-3">
                    <label className="text-white font-bold uppercase" htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
                    <input
                        type="date"
                        id="fechaNacimiento"
                        name="fechaNacimiento"
                        {...register("fecha_nacimiento", { required: true })}
                        className="bg-zinc-700 p-3 rounded-lg block w-full"
                    />
                </div>

                {/* Botón de guardar */}
                <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">Guardar</button>
            </form>
        </div>
    );
}
