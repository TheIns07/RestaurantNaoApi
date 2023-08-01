import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001'; // Reemplaza esta URL con la base URL de tu REST API

export const listarRestaurantes = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/listarRestaurantes`);
        return response.data;
    } catch (error) {
        let message = 'Error de consulta de base de datos'
        if (error instanceof Error) message = error.message
        reportError({ message })
    }
};

export const agregarrestaurante = async () => {
    try {
        const response = await axios.post(`${API_BASE_URL}/agregarrestaurante`);
        return response.data;
    } catch (error) {
        let message = 'Error de consulta de base de datos'
        if (error instanceof Error) message = error.message
        reportError({ message })
    }
};

export const editarRestaurante = async () => {
    try {
        const response = await axios.put(`${API_BASE_URL}/editarRestaurante`);
        return response.data;
    } catch (error) {
        let message = 'Error de consulta de base de datos'
        if (error instanceof Error) message = error.message
        reportError({ message })
    }
};

export const eliminarRestaurante = async () => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/eliminarRestaurante`);
        return response.data;
    } catch (error) {
        let message = 'Error de consulta de base de datos'
        if (error instanceof Error) message = error.message
        reportError({ message })
    }
};