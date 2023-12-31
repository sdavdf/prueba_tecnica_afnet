// Módulo para interactuar con la API de registro usando axios
import axios from 'axios'

// Instancia de axios configurada con la URL base de la API
const registroApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/client/list/api/v1/registro/'
});

/**
 * Obtiene todos los registros desde la API.
 * @returns {Promise} - Promesa con la respuesta de la solicitud.
 */
export const getAllRegistros = () => registroApi.get('/');

/**
 * Obtiene un registro por su ID desde la API.
 * @param {number} id - ID del registro que se desea obtener.
 * @returns {Promise} - Promesa con la respuesta de la solicitud.
 */
export const getUsuario = (id) => registroApi.get(`/${id}/`);

/**
 * Crea un nuevo registro mediante una solicitud POST a la API.
 * @param {Object} registro - Objeto con la información del nuevo registro.
 * @returns {Promise} - Promesa con la respuesta de la solicitud.
 */
export const createRegistros = (registro) => registroApi.post('/', registro);

/**
 * Actualiza un registro mediante una solicitud PUT a la API.
 * @param {number} id - ID del registro que se desea actualizar.
 * @param {Object} registro - Objeto con la información actualizada del registro.
 * @returns {Promise} - Promesa con la respuesta de la solicitud.
 */
export const updateRegistro = (id, registro) => registroApi.put(`/${id}/`, registro);
