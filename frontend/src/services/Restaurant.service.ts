import axios from 'axios';
import { Restaurant } from '../interfaces/Restaurant';
import { Request, Response } from 'express'

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

export const agregarRestaurant = async () => {
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

export const agregarCalificacion = async (req: Request, res: Response) => {
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

export const obtenerGradesRestaurante = async (restauranteId: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/obtenergradesrestaurante/${restauranteId}`);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log('Unexpected error', error);
      }
  }
};

