import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001'; 

export const listarRestaurantes = async (searchQuery: any) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/restaurants?searchQuery=${searchQuery}`);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log('Unexpected error', error);
      }
  }
};

export const agregarRestaurant = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/addRestaurant`);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log('Unexpected error', error);
      }
  }
};

export const agregarCalificacion = async (restauranteId: string) => {
  try {

    const response = await axios.get(`${API_BASE_URL}/restaurants/notes/${restauranteId}`);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log('Unexpected error', error);
      }
  }
};

export const obtenerGradesRestaurante = async (restauranteId: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/restaurants/grades/${restauranteId}`);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log('Unexpected error', error);
      }
  }
};



