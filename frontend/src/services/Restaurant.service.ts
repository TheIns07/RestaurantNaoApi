import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001'; // Reemplaza esta URL con la base URL de tu REST API

export const listarRestaurantes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/listarRestaurantes`);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log('Unexpected error', error);
      }
  }
};