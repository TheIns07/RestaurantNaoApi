import { Request, Response } from 'express'
import Restaurant from '../models/Restaurant'
import { QueryRestaurant } from '../models/QueryRestaurant';


export const listRestaurants = async (req: Request, res: Response) => {
  try {
    const { cuisine, name, borough  } = req.query;
    let query: QueryRestaurant = {}

    if (cuisine) {
      query.cuisine = cuisine as string; 
    }

    if (borough) {
      query.borough = borough as string; 
    }

    if (name) {
      query.name = name as string; 
    }

    const restaurants = await Restaurant.find(query);
    
    return res.json(restaurants);
  } catch (error) {
    return res.status(500).json({ msg: "Error al obtener los restaurantes" });
  }
}

//Este metodo se usa para obtener un restaurante por medio de su ID
export const getRestaurantByID = async (req: Request, res: Response) => {
  try {
    const restaurants = await Restaurant.findById(req.params.id);
    return res.json(restaurants);
  } catch (error) {
    return res.status(500).json({ msg: "Error al obtener los restaurantes" });
  }
}

//Este metodo se usa para agregar un restaurant
export const addRestaurant = async (req: Request, res: Response): Promise<Response> => {
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

  const restaurant = await Restaurant.findOne({ name: req.body.id })
  console.log(restaurant)

  { restaurant ? res.status(400).json({ msg: "El restaurante ya existe" }) : true }

  const newRestaurant = new Restaurant(req.body);
  await newRestaurant.save();
  return res.status(201).json(newRestaurant);
}

//Este metodo se usa para editar un restaurant por ID
export const editRestaurant = async (req: Request, res: Response) => {
  const { name, address, borough, cuisine, grades } = req.body;

  if (
    !name ||
    !address ||
    !borough ||
    !cuisine ||
    !grades
  ) {
    return res.status(400).json({ msg: "Faltan agregar datos" });
  }

  try {
    var existingRestaurant = await Restaurant.findOne({ id: req.params.id });

    if (!existingRestaurant) {
      return res.status(404).json({ msg: `Restaurante con ID ${req.params.id} no encontrado` });
    }

    existingRestaurant = new Restaurant(req.body);

    await existingRestaurant.save();
    return res.json(existingRestaurant);
  } catch (error) {
    return res.status(500).json({ msg: "Error al actualizar el restaurante" });
  }
}

//Este metodo se usa para borrar un restaurant por su ID
export const deleteRestaurant = async (req: Request, res: Response) => {
  try {
    const deletedRestaurant = await Restaurant.findByIdAndDelete(req.params.id);

    if (!deletedRestaurant) {
      return res.status(404).json({ msg: "Restaurante no encontrado" });
    }

    return res.json(deletedRestaurant);

  } catch (error) {
    return res.status(500).json({ msg: "Error al eliminar el restaurante" });
  }
}

//Este metodo se usa para agregar una calificacion a un restaurant
export const addNoteRestaurant = async (req: Request, res: Response) => {
  const { comment, score, date } = req.body;

  if (!comment || !score || !date) {
    return res.status(400).json({ msg: "Faltan agregar datos del comentario" });
  }

  try {
    const restaurant = await Restaurant.findById(req.params.id);

    if (!restaurant) {
      return res.status(404).json({ msg: "Restaurante no encontrado" });
    }

    restaurant.grades.push({
      date: new Date(date),
      comment,
      score,
    });

    await restaurant.save();

    return res.status(201).json(restaurant);
  } catch (error) {
    return res.status(500).json({ msg: "Error al agregar el comentario" });
  }
};

//Este metodo se usa para obtener las notas de restaurantes 
export const getGradesRestaurant = async (req: Request, res: Response) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);

    if (!restaurant) {
      return res.status(404).json({ msg: "Restaurante no encontrado" });
    }

    const grades = restaurant.grades;

    return res.status(200).json(grades);
  } catch (error) {
    return res.status(500).json({ msg: "Error al obtener los grades del restaurante" });
  }
};
