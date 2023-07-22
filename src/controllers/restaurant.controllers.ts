import { Request, Response } from 'express'
import Restaurant from '../models/Restaurant'

export const listarRestaurantes = async (req: Request, res: Response) => {
    try {
        const restaurantes = await Restaurant.find();
        return res.json(restaurantes);
      } catch (error) {
        return res.status(500).json({ msg: "Error al obtener los restaurantes" });
      }
}

export const agregarRestaurante = async (req: Request, res: Response): Promise<Response> => {
    const { name, address, borough, cuisine } = req.body;

    if (
        !name ||
        !address.building ||
        !address.coord ||
        !address.street ||
        !address.zipcode ||
        !borough ||
        !cuisine
    ) {

        return res.status(400).json({ msg: "Faltan agregar datos" });
    }

    const restaurant = await Restaurant.findOne({ name: req.body.name })
    console.log(restaurant)

    { restaurant ? res.status(400).json({ msg: "El usuario ya existe" }) : true }

    const newRestaurant = new Restaurant(req.body);
    await newRestaurant.save();
    return res.status(201).json(newRestaurant);
}

export const editarRestaurante = async (req: Request, res: Response) => {
    const { name, address, borough, cuisine } = req.body;

    if (
        !name ||
        !address.building ||
        !address.coord ||
        !address.street ||
        !address.zipcode ||
        !borough ||
        !cuisine
    ) {
        return res.status(400).json({ msg: "Faltan agregar datos" });
    }

    try {
        const existingRestaurant = await Restaurant.findOne({ _id: req.params.id });

        if (!existingRestaurant) {
            return res.status(404).json({ msg: "Restaurante no encontrado" });
        }

        existingRestaurant.name = name;
        existingRestaurant.address = address;
        existingRestaurant.borough = borough;
        existingRestaurant.cuisine = cuisine;

        await existingRestaurant.save();
        return res.json(existingRestaurant);
    } catch (error) {
        return res.status(500).json({ msg: "Error al actualizar el restaurante" });
    }
}

export const eliminarRestaurante = async (req: Request, res: Response) => {
    try {
        const deletedRestaurant = await Restaurant.findByIdAndRemove(req.params.id);

        if (!deletedRestaurant) {
            return res.status(404).json({ msg: "Restaurante no encontrado" });
        }

        return res.json(deletedRestaurant);

    } catch (error) {
        return res.status(500).json({ msg: "Error al eliminar el restaurante" });
    }
}

export const agregarComentarioRestaurante = async (req: Request, res: Response) => {
    const { date, comment } = req.body;

    if (!date || !comment) {
        return res.status(400).json({ msg: "Faltan agregar datos del comentario" });
    }

    try {
        const restaurant = await Restaurant.findById(req.params.id);

        if (!restaurant) {
            return res.status(404).json({ msg: "Restaurante no encontrado" });
        }

        restaurant.comments.push({ date, comment });
        await restaurant.save();

        return res.status(201).json(restaurant);
    } catch (error) {
        return res.status(500).json({ msg: "Error al agregar el comentario" });
    }
}

export const agregarNotaRestaurante = async (req: Request, res: Response) => {
    const { date, score } = req.body;

    if (!date || !score) {
        return res.status(400).json({ msg: "Faltan agregar datos de la nota" });
    }

    try {
        const restaurant = await Restaurant.findById(req.params.id);

        if (!restaurant) {
            return res.status(404).json({ msg: "Restaurante no encontrado" });
        }

        restaurant.grades.push({ date, score });
        await restaurant.save();

        return res.status(201).json(restaurant);
    } catch (error) {
        return res.status(500).json({ msg: "Error al agregar la nota" });
    }
}