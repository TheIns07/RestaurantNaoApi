import { Schema, Types, model } from 'mongoose';

// Definir el esquema
const restaurantSchema = new Schema({
  _id: Types.ObjectId,
  address: {
    building: String,
    coord: [Number], 
    street: String,
    zipcode: String,
  },
  borough: String,
  cuisine: String,
  grades: [
    {
      date: Date,
      score: Number,
    },
  ],
  comments: [
    {
      date: Date,
      comment: String,
      _id: Types.ObjectId,
    },
  ],
  name: String,
  restaurant_id: String,
});

// Crear el modelo
const Restaurant = model('Restaurant', restaurantSchema);

// Exportar el modelo
export default Restaurant;